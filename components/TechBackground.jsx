"use client"

import Particles from "@tsparticles/react"
import { loadFull } from "tsparticles"

const TechBackground = () => {
  const particlesInit = async (engine) => {
    // loadFull adds all the plugins & features
    await loadFull(engine)
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: {
            value: 80,
            density: { enable: true, area: 800 }
          },
          color: { value: "#00ffcc" },
          links: {
            enable: true,
            color: "#00ffcc",
            distance: 120,
            opacity: 0.4
          },
          move: { enable: true, speed: 1, outModes: { default: "out" } },
          size: { value: 2 }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            }
          }
        },
        detectRetina: true
      }}
    />
  )
}

export default TechBackground
