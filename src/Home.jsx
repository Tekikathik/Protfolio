import React from 'react'
import Header from './Header'
import image from './assets/Karthik.gif'
import Skills from './Skills'
import Projects from './Projects'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function Home() {
  const videoRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      videoRef.current,
      { x: -1200, scale: 0.5, opacity: 0.1 },
      {
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 2.5,
        ease: "power2.out",
      }
    )

    // Profiles animation
    .from(
      ".profiles a",
      {
        y: -20,
        opacity: 0,
        stagger: 0.5,
        duration: 1.6,
      },
      "-=1.5"
    )
    .from(
      ".Names div",
      {
        y: -20,
        opacity: 0.05,
        stagger: 0.5,
        duration: 0.8,
      },
      "-=1.5"
    );

  }, []);
  useEffect(() => {

  const cursor = document.createElement("div");
  cursor.className = "cursor-image";
  cursor.style.backgroundImage = `url(${image})`;

  document.body.appendChild(cursor);

  let trails = [];

  const createTrail = (x, y) => {
    const trail = document.createElement("div");
    trail.className = "cursor-trail";

    trail.style.left = x + "px";
    trail.style.top = y + "px";

    document.body.appendChild(trail);
    trails.push(trail);

    if (trails.length > 15) {
      const old = trails.shift();
      old.remove();
    }

    setTimeout(() => {
      trail.remove();
    }, 500);
  };

  const moveCursor = (e) => {

    const x = e.clientX;
    const y = e.clientY;

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

    createTrail(x, y);
  };

  document.addEventListener("mousemove", moveCursor);

  return () => {
    document.removeEventListener("mousemove", moveCursor);
    cursor.remove();
  };

}, []);
  return (
    <>
    <div className='Home'>
      <div className="profiles">
        <a className="github" href='https://github.com/Tekikathik' target='_blank'><i class="devicon-github-original colored"></i>  Github
        </a>
        <a className="linkedin" href='https://www.linkedin.com/in/teki-karthik-7b810b208/' target='_blank'>
          <i class="devicon-linkedin-plain"></i>  linkedin
        </a>
        <a className="twitter" href='https://x.com/KarthikTek77377' target='_blank'>
            <i class="devicon-twitter-original colored"></i>  twitter
        </a>
      </div>
      <div className="Names">
          <div className="first">
            <h1>Hello 👋🏻, <b>I'm</b></h1>
          </div>
          <div className="second">
            <h1>Teki Karthik</h1>
          </div>
          <div className="third">
            <h1>A Passionate</h1>
          </div>
          <div className="fourth">
            <h1><b>Full Stack</b> Developer</h1>
          </div>
      </div>
      <div className="video" ref={videoRef}>
        <img src={image} alt="" />
      </div>
    </div>
    <Skills/>


    </>
  )
}
