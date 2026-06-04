import React, { useEffect, useRef } from 'react'
import image from './assets/Office.png'
import university from './assets/University.png'
import video from './assets/new-unscreen.gif'
import minivideo from './assets/new1.gif'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react'
import Projects from './Projects'

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const circleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.fromTo(
      circleRef.current,
      { x: 0 },
      { x: 640, duration: 4.5, ease: "none" }
    )
    .fromTo(
      ".there",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.6 },
      0
    );

    return () => tl.kill();
  }, []);

  useGSAP(() => {
    gsap.from(".brain", {
      scrollTrigger: {
        trigger: ".Tech_skills",
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 60,
      duration: 0.9,
      ease: "power2.out",
    });

    gsap.from(".college", {
      scrollTrigger: {
        trigger: ".skills",
        start: "top 75%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      x: -80,
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.from(".company", {
      scrollTrigger: {
        trigger: ".skills",
        start: "top 75%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      x: 80,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.2,
    });
  }, []);

  return (
    <>
      <div className='Tech_skills'>
        <h1 className='brain'><span>Thin</span>gs I Bui<b>ld With 😉</b></h1>
        <div className="skills">
          <div className="college">
            <img src={university} alt="University" />
            <h1>College</h1>
          </div>
          <div className="min_skils">
            <div className="there"><i className="devicon-html5-plain colored"></i></div>
            <div className="there"><i className="devicon-tailwindcss-original colored"></i></div>
            <div className="there"><i className="devicon-react-original colored"></i></div>
            <div className="there"><i className="devicon-figma-plain colored"></i></div>
            <div className="there"><i className="devicon-nodejs-plain-wordmark colored"></i></div>
            <div className="there"><i className="devicon-express-original-wordmark colored"></i></div>
            <div className="there"><i className="devicon-mongodb-plain-wordmark colored"></i></div>
            <div className="there"><i className="devicon-mysql-plain-wordmark colored"></i></div>
            <div className="walking" ref={circleRef}>
              <img src={video} alt="" />
            </div>
          </div>
          <div className="company">
            <img src={image} alt="Company" />
            <h1>Company</h1>
          </div>
        </div>
        <div className="min_video">
          <img src={minivideo} alt="" />
        </div>
      </div>
      <Projects />
    </>
  )
}
