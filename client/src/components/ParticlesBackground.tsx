import { useEffect, useState } from "react";
import Particles from "react-tsparticles";

interface ParticlesBackgroundProps {
  variant?: "intro" | "ending" | "default";
}

export default function ParticlesBackground({
  variant = "default",
}: ParticlesBackgroundProps) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    setInit(true);
  }, []);

  const getParticlesConfig = () => {
    const baseConfig: any = {
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      particles: {
        color: {
          value: ["#FFE6F2", "#CDEBFF", "#FFF8F0"],
        },
        links: {
          enable: false,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: 0.5,
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
          value: 0.3,
          animation: {
            enable: true,
            minimumValue: 0.1,
            speed: 1,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    };

    if (variant === "ending") {
      return {
        ...baseConfig,
        particles: {
          ...baseConfig.particles,
          number: {
            density: {
              enable: true,
              area: 600,
            },
            value: 60,
          },
          size: {
            value: { min: 2, max: 5 },
          },
          opacity: {
            value: 0.4,
            animation: {
              enable: true,
              minimumValue: 0.2,
              speed: 1.5,
              sync: false,
            },
          },
        },
      };
    }

    return baseConfig;
  };

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={getParticlesConfig()}
      className="absolute inset-0 w-full h-full"
    />
  );
}
