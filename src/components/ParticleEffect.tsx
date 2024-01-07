import { Particle } from "jparticles";
import { useEffect, useState } from "react";

function ParticleEffect() {
  useEffect(() => {
    new Particle("#particle", {
      color: "white",
      proximity: 1000,
      parallax: true,
      range: innerWidth < 1024 ? 50 : 100,
      num: innerWidth / 10,
      maxSpeed: 0,
      lineShape: "cube",
    });
  }, []);

  return <div id="particle" className="fixed w-screen h-screen"></div>;
}

export default ParticleEffect;
