import React from "react";

const ParticleOrb = ({ className = "" }) => {

  const particles = Array.from({ length: 100 }, (_, i) => {
    const rotateZ = Math.random() * 360;
    const rotateY = Math.random() * 360;

    return {
      id: i,
      rotateZ,
      rotateY,
      delay: i * 0.02
    };
  });

  return (
    <>
      <style>{`
        .particle-orb-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .particle-orb-wrap {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          transform-style: preserve-3d;
          perspective: 1000px;
          animation: orb-rotate 14s infinite linear;
        }

        .particle-3d {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          opacity: 0;
          background: hsl(206, 35%, 72%);
          box-shadow: 
            0 0 6px hsl(206, 35%, 72%),
            0 0 12px hsl(206, 35%, 72%);
          animation: particle-orbit-3d 14s infinite ease-in-out;
        }

        .particle-3d:nth-child(2n) {
          background: hsl(239, 25%, 56%);
          box-shadow: 
            0 0 6px hsl(239, 25%, 56%),
            0 0 12px hsl(239, 25%, 56%);
        }

        .particle-3d:nth-child(3n) {
          background: hsl(274, 30%, 34%);
          box-shadow: 
            0 0 6px hsl(274, 30%, 34%),
            0 0 12px hsl(274, 30%, 34%);
        }

        .particle-3d:nth-child(4n) {
          background: hsl(290, 35%, 28%);
          box-shadow: 
            0 0 6px hsl(290, 35%, 28%),
            0 0 12px hsl(290, 35%, 28%);
        }

        @keyframes orb-rotate {
          0% {
            transform: rotateY(0deg) rotateX(0deg);
          }
          100% {
            transform: rotateY(360deg) rotateX(360deg);
          }
        }

        @keyframes particle-orbit-3d {
          0% {
            opacity: 0;
            transform:
              rotateZ(calc(var(--rotate-z) * -1))
              rotateY(var(--rotate-y))
              translateX(0px)
              rotateZ(var(--rotate-z));
          }

          20% {
            opacity: 1;
            transform:
              rotateZ(calc(var(--rotate-z) * -1))
              rotateY(var(--rotate-y))
              translateX(140px)
              rotateZ(var(--rotate-z));
          }

          30% {
            opacity: 1;
            transform:
              rotateZ(calc(var(--rotate-z) * -1))
              rotateY(var(--rotate-y))
              translateX(180px)
              rotateZ(var(--rotate-z));
          }

          80% {
            opacity: 1;
            transform:
              rotateZ(calc(var(--rotate-z) * -1))
              rotateY(var(--rotate-y))
              translateX(180px)
              rotateZ(var(--rotate-z));
          }

          100% {
            opacity: 0;
            transform:
              rotateZ(calc(var(--rotate-z) * -1))
              rotateY(var(--rotate-y))
              translateX(540px)
              rotateZ(var(--rotate-z));
          }
        }
      `}</style>

      <div className={`particle-orb-container ${className}`}>
        <div className="particle-orb-wrap">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="particle-3d"
              style={{
                "--rotate-z": `${particle.rotateZ}deg`,
                "--rotate-y": `${particle.rotateY}deg`,
                animationDelay: `${particle.delay}s`
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ParticleOrb;