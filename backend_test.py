#!/usr/bin/env python3
"""
FireEye Backend API Testing Suite
Tests all backend endpoints using the public URL
"""
import requests
import sys
import json
from datetime import datetime

class FireEyeAPITester:
    def __init__(self, base_url="https://forest-guard-1.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []
        self.passed_tests = []

    def log_result(self, test_name, success, response_data=None, error=None):
        """Log test result"""
        self.tests_run += 1
        if success:
            self.tests_passed += 1
            self.passed_tests.append(test_name)
            print(f"✅ {test_name} - PASSED")
            if response_data:
                print(f"   Response: {json.dumps(response_data, indent=2)[:200]}...")
        else:
            self.failed_tests.append({
                "test": test_name,
                "error": str(error) if error else "Unknown error"
            })
            print(f"❌ {test_name} - FAILED")
            if error:
                print(f"   Error: {error}")

    def test_api_root(self):
        """Test API root endpoint"""
        try:
            response = requests.get(f"{self.api_url}/", timeout=10)
            success = response.status_code == 200
            data = response.json() if success else None
            self.log_result("API Root Endpoint", success, data)
            return success, data
        except Exception as e:
            self.log_result("API Root Endpoint", False, error=e)
            return False, {}

    def test_status_endpoint_get(self):
        """Test GET status endpoint"""
        try:
            response = requests.get(f"{self.api_url}/status", timeout=10)
            success = response.status_code == 200
            data = response.json() if success else None
            self.log_result("GET Status Endpoint", success, data)
            return success, data
        except Exception as e:
            self.log_result("GET Status Endpoint", False, error=e)
            return False, {}

    def test_status_endpoint_post(self):
        """Test POST status endpoint"""
        try:
            test_data = {
                "client_name": f"test_client_{datetime.now().strftime('%H%M%S')}"
            }
            response = requests.post(
                f"{self.api_url}/status", 
                json=test_data,
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            success = response.status_code == 200
            data = response.json() if success else None
            self.log_result("POST Status Endpoint", success, data)
            return success, data
        except Exception as e:
            self.log_result("POST Status Endpoint", False, error=e)
            return False, {}

    def test_contact_endpoint_post(self):
        """Test contact form submission"""
        try:
            test_data = {
                "name": "Test User",
                "email": "test@example.com",
                "entity": "Test Organization",
                "message": "This is a test message from the automated test suite.",
                "contact_type": "demo"
            }
            response = requests.post(
                f"{self.api_url}/contact",
                json=test_data,
                headers={'Content-Type': 'application/json'},
                timeout=15
            )
            success = response.status_code == 200
            data = response.json() if success else None
            
            if success and data:
                # Verify response structure
                expected_fields = ["id", "status", "message"]
                has_required_fields = all(field in data for field in expected_fields)
                if not has_required_fields:
                    success = False
                    error = f"Missing required fields in response: {expected_fields}"
                    self.log_result("Contact Form Submission", False, error=error)
                    return False, {}
                elif data.get("status") != "success":
                    success = False
                    error = f"Contact submission failed with status: {data.get('status')}"
                    self.log_result("Contact Form Submission", False, error=error)
                    return False, {}
            
            self.log_result("Contact Form Submission", success, data)
            return success, data
        except Exception as e:
            self.log_result("Contact Form Submission", False, error=e)
            return False, {}

    def test_contact_endpoint_validation(self):
        """Test contact form validation"""
        try:
            # Test with invalid email
            invalid_data = {
                "name": "Test User",
                "email": "invalid-email",
                "message": "Test message"
            }
            response = requests.post(
                f"{self.api_url}/contact",
                json=invalid_data,
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            # Should return 422 for validation error
            success = response.status_code == 422
            self.log_result("Contact Form Validation (Invalid Email)", success)
            return success
        except Exception as e:
            self.log_result("Contact Form Validation (Invalid Email)", False, error=e)
            return False

    def test_contact_endpoint_missing_fields(self):
        """Test contact form with missing required fields"""
        try:
            # Test with missing name
            incomplete_data = {
                "email": "test@example.com",
                "message": "Test message"
            }
            response = requests.post(
                f"{self.api_url}/contact",
                json=incomplete_data,
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            # Should return 422 for missing required field
            success = response.status_code == 422
            self.log_result("Contact Form Missing Required Fields", success)
            return success
        except Exception as e:
            self.log_result("Contact Form Missing Required Fields", False, error=e)
            return False

    def test_get_contacts_endpoint(self):
        """Test get contacts endpoint (admin)"""
        try:
            response = requests.get(f"{self.api_url}/contacts", timeout=10)
            success = response.status_code == 200
            data = response.json() if success else None
            self.log_result("GET Contacts Endpoint", success, data)
            return success, data
        except Exception as e:
            self.log_result("GET Contacts Endpoint", False, error=e)
            return False, {}

    def run_all_tests(self):
        """Run all backend tests"""
        print("🔥 Starting FireEye Backend API Tests")
        print(f"📡 Testing against: {self.api_url}")
        print("=" * 60)

        # Test API availability
        api_available, _ = self.test_api_root()
        
        if not api_available:
            print("❌ API is not available, stopping tests")
            return False

        # Run all tests
        self.test_status_endpoint_get()
        self.test_status_endpoint_post()
        self.test_contact_endpoint_post()
        self.test_contact_endpoint_validation()
        self.test_contact_endpoint_missing_fields()
        self.test_get_contacts_endpoint()

        # Print summary
        print("\n" + "=" * 60)
        print(f"📊 TEST SUMMARY")
        print(f"   Total Tests: {self.tests_run}")
        print(f"   Passed: {self.tests_passed}")
        print(f"   Failed: {len(self.failed_tests)}")
        print(f"   Success Rate: {(self.tests_passed/self.tests_run*100):.1f}%")
        
        if self.failed_tests:
            print("\n❌ FAILED TESTS:")
            for failure in self.failed_tests:
                print(f"   • {failure['test']}: {failure['error']}")
        
        if self.passed_tests:
            print("\n✅ PASSED TESTS:")
            for test in self.passed_tests:
                print(f"   • {test}")

        return self.tests_passed == self.tests_run

def main():
    tester = FireEyeAPITester()
    success = tester.run_all_tests()
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())