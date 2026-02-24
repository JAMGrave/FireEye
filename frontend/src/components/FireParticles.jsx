import { useCallback, useMemo } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const FireParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: false,
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      particles: {
        color: {
          value: ["#FF4500", "#FF6B00", "#FF8C00", "#FFD700"],
        },
        move: {
          direction: "top",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: { min: 0.5, max: 2 },
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 40,
        },
        opacity: {
          value: { min: 0.1, max: 0.5 },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.1,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 4 },
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 0.5,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <Particles
      id="fire-particles"
      init={particlesInit}
      options={options}
      className="absolute inset-0 z-0"
    />
  );
};
