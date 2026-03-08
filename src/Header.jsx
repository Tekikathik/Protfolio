import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState ,useRef} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(()=>{
    const div = document.querySelector(".sidebar");
    if (isOpen){
      div.style.display = "flex";
    }
    else{
      div.style.display = "none";
    }
  },[isOpen])
  const navRef = useRef(null);

  useGSAP(() => {
    gsap.from(navRef.current.querySelectorAll("a"), {
      opacity: 0,
      y: 30,
      duration: 1.5,
      stagger: 0.6,
      ease: "power2.out",
    });
  }, []);

  return (
    <>
    <nav ref={navRef}>
      <Link to="/">Home</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/about">About</Link>
      <a
        href="path/to/your-resume.pdf"
        download="Your-Name-Resume.pdf"
        className="resume-button"
      >
        <i className="fa-solid fa-download"></i> Resume
      </a>
    </nav>
    <div className='head'>
      <span onClick={menu}>{isOpen ? "×" : "☰"}</span>
      <div className="sidebar" > 
        <Link to="/">Home</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <a
          href="path/to/your-resume.pdf"
          download="Your-Name-Resume.pdf"
          className="resume-button"
        >
          <i className="fa-solid fa-download"></i> Resume
        </a>
      </div>
    </div>
    </>
  )
}
