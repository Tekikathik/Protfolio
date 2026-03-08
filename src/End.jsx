import React from "react";
import ParticleOrb from "./ParticleOrb";
// import "./End.css";

export default function End() {
  return (
    <div className="footer">

      {/* Particle Background */}
      <ParticleOrb className="particles"/>

      <div className="footer-content">
        <h1 className="footer-title">
          That's All <span>about me!</span>
        </h1>
      </div>

    </div>
  );
}