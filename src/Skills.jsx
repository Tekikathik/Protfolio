import React from 'react'
import image from './assets/Office.png';
import university from './assets/University.png'
// import html from './assets/html.png'
import video from './assets/new-unscreen.gif'
import minivideo from './assets/new1.gif'
import Header from './Header';
import Home from './Home';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import Projects from './Projects';
// import ParticleOrb from './ParticleOrb';


export default function Skills() {
  const circleRef = useRef(null);

useEffect(() => {
  const tl = gsap.timeline({ repeat: -1 });

  tl.fromTo(
    circleRef.current,
    { x: 0 },
    {
      x: 640,
      duration: 4.5,
      ease: "none"
    }
  )
  .fromTo(
    ".there",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.6
      },
      0 // 👈 starts at SAME TIME as circle
  );

  return () => tl.kill();
}, []);



  return (
    <>
    <div className='Tech_skills'>
      <h1 className='brain'><span>Thin</span>gs I Bui<b>ld With 😉</b></h1>
      <div className="skills" >
        <div className="college">
          <img src={university} alt="" />
          <h1>College</h1>
        </div>
        <div className="min_skils">
          <div className="there">
            
            <i class="devicon-html5-plain colored"></i>
          
          </div>
          <div className="there">
            
            <i class="devicon-tailwindcss-original colored"></i>
          
            
          </div>
          <div className="there">
            
            <i class="devicon-react-original colored"></i>
          </div>
          <div className="there">
            
            <i class="devicon-figma-plain colored"></i>
          
          </div>
          <div className="there">
            
            <i class="devicon-nodejs-plain-wordmark colored"></i>
          
            
          </div>
          <div className="there">
            
            <i class="devicon-express-original-wordmark colored"></i>
          
            
          </div>
          <div className="there">
            
            <i class="devicon-mongodb-plain-wordmark colored"></i>
          
            
          </div>
          <div className="there">
            
            
            <i class="devicon-mysql-plain-wordmark colored"></i>
            
          </div>
          <div className="walking" ref={circleRef}>
            <img src={video} alt="" />
          </div>
        </div>
        <div className="company">
          <img src={image} alt="" />
          <h1>Company</h1>
        </div>
      </div>
      <div className="min_video">
          <img src={minivideo} alt="" />
        </div>
    </div>
    <Projects/>
    </>
  )
}
