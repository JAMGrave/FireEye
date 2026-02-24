from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import asyncio
import resend

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend configuration
resend.api_key = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
RECIPIENT_EMAIL = os.environ.get('RECIPIENT_EMAIL', 'fireeye.cmc@gmail.com')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    entity: Optional[str] = None
    message: str
    contact_type: Optional[str] = "general"

class ContactResponse(BaseModel):
    id: str
    status: str
    message: str

class ContactRecord(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    entity: Optional[str] = None
    message: str
    contact_type: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    email_sent: bool = False

# Routes
@api_router.get("/")
async def root():
    return {"message": "FireEye API - Deteção Precoce de Incêndios"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks

@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact(form: ContactForm):
    """Submit a contact form and send email notification"""
    try:
        # Create contact record
        contact_record = ContactRecord(
            name=form.name,
            email=form.email,
            entity=form.entity,
            message=form.message,
            contact_type=form.contact_type or "general"
        )
        
        # Store in database
        doc = contact_record.model_dump()
        doc['created_at'] = doc['created_at'].isoformat()
        await db.contacts.insert_one(doc)
        
        # Determine contact type label
        type_labels = {
            "demo": "Pedido de Demonstração",
            "partner": "Pedido de Parceria",
            "pilot": "Apoio ao Piloto",
            "general": "Contacto Geral"
        }
        type_label = type_labels.get(form.contact_type, "Contacto Geral")
        
        # Build email HTML
        email_html = f"""
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0A0A0A; color: #ffffff;">
            <div style="text-align: center; margin-bottom: 30px;">
                <img src="https://customer-assets.emergentagent.com/job_forest-guard-1/artifacts/0d8csrbh_logotipo%20FireEye.png" alt="FireEye" style="height: 60px;" />
            </div>
            <h2 style="color: #FF4500; border-bottom: 2px solid #FF4500; padding-bottom: 10px;">{type_label}</h2>
            <div style="background-color: #121212; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong style="color: #FF6B00;">Nome:</strong> {form.name}</p>
                <p><strong style="color: #FF6B00;">Email:</strong> {form.email}</p>
                <p><strong style="color: #FF6B00;">Entidade:</strong> {form.entity or 'Não especificada'}</p>
                <p><strong style="color: #FF6B00;">Tipo:</strong> {type_label}</p>
            </div>
            <div style="background-color: #121212; padding: 20px; border-radius: 8px;">
                <h3 style="color: #00A3FF; margin-top: 0;">Mensagem:</h3>
                <p style="line-height: 1.6;">{form.message}</p>
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #333; text-align: center; color: #666;">
                <p>FireEye - Deteção Precoce de Incêndios</p>
                <p>Maristas de Carcavelos</p>
            </div>
        </div>
        """
        
        # Send email if API key is configured
        email_sent = False
        if resend.api_key:
            try:
                params = {
                    "from": SENDER_EMAIL,
                    "to": [RECIPIENT_EMAIL],
                    "subject": f"FireEye - {type_label} de {form.name}",
                    "html": email_html
                }
                email_response = await asyncio.to_thread(resend.Emails.send, params)
                email_sent = True
                logger.info(f"Email sent successfully: {email_response}")
            except Exception as e:
                logger.error(f"Failed to send email: {str(e)}")
        else:
            logger.warning("Resend API key not configured, email not sent")
        
        # Update record with email status
        await db.contacts.update_one(
            {"id": contact_record.id},
            {"$set": {"email_sent": email_sent}}
        )
        
        return ContactResponse(
            id=contact_record.id,
            status="success",
            message="Mensagem enviada com sucesso! Entraremos em contacto brevemente."
        )
        
    except Exception as e:
        logger.error(f"Contact submission error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Erro ao enviar mensagem: {str(e)}")

@api_router.get("/contacts", response_model=List[dict])
async def get_contacts():
    """Get all contact submissions (admin endpoint)"""
    contacts = await db.contacts.find({}, {"_id": 0}).to_list(1000)
    return contacts

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
