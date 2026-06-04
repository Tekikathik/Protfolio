import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from "gsap"
import { useGSAP } from '@gsap/react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeSidebar = () => setIsOpen(false);

  useGSAP(() => {
    gsap.from(navRef.current.querySelectorAll("a"), {
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
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
          href="/resume.pdf"
          download="Teki-Karthik-Resume.pdf"
          className="resume-button"
        >
          <i className="fa-solid fa-download"></i> Resume
        </a>
      </nav>
      <div className='head'>
        <span onClick={toggleMenu}>{isOpen ? "×" : "☰"}</span>
        <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
          <Link to="/" onClick={closeSidebar}>Home</Link>
          <Link to="/skills" onClick={closeSidebar}>Skills</Link>
          <Link to="/projects" onClick={closeSidebar}>Projects</Link>
          <Link to="/about" onClick={closeSidebar}>About</Link>
          <a
            href="/resume.pdf"
            download="Teki-Karthik-Resume.pdf"
            className="resume-button"
            onClick={closeSidebar}
          >
            <i className="fa-solid fa-download"></i> Resume
          </a>
        </div>
      </div>
    </>
  )
}
