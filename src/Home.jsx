import React, { useRef } from 'react'
import image from './assets/karthik.gif'
import Skills from './Skills'
import { gsap } from "gsap"
import { useGSAP } from '@gsap/react'

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
        onComplete: () => {
          gsap.to(videoRef.current, {
            y: -15,
            duration: 2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          });
        },
      }
    )
    .from(
      ".profiles a",
      { y: -20, opacity: 0, stagger: 0.5, duration: 1.6 },
      "-=1.5"
    )
    .from(
      ".Names div",
      { y: -20, opacity: 0.05, stagger: 0.5, duration: 0.8 },
      "-=1.5"
    );
  }, []);

  return (
    <>
      <div className='Home'>
        <div className="profiles">
          <a className="github" href='https://github.com/Tekikathik' target='_blank' rel="noopener noreferrer">
            <i className="devicon-github-original colored"></i> Github
          </a>
          <a className="linkedin" href='https://www.linkedin.com/in/teki-karthik-7b810b208/' target='_blank' rel="noopener noreferrer">
            <i className="devicon-linkedin-plain"></i> linkedin
          </a>
          <a className="twitter" href='https://x.com/KarthikTek77377' target='_blank' rel="noopener noreferrer">
            <i className="devicon-twitter-original colored"></i> twitter
          </a>
        </div>
        <div className="Names">
          <div className="first"><h1>Hello 👋🏻, <b>I'm</b></h1></div>
          <div className="second"><h1>Teki Karthik</h1></div>
          <div className="third"><h1>A Passionate</h1></div>
          <div className="fourth"><h1><b>Full Stack</b> Developer</h1></div>
        </div>
        <div className="video" ref={videoRef}>
          <img src={image} alt="Teki Karthik" />
        </div>
      </div>
      <Skills />
    </>
  )
}
