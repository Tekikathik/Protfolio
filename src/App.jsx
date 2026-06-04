import './App.css'
import Header from './Header'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Skills from './Skills'
import Projects from './Projects'
import End from './End'
import { useEffect } from 'react'
import image from './assets/karthik.gif'

function App() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "cursor-image";
    cursor.style.backgroundImage = `url(${image})`;
    document.body.appendChild(cursor);

    const trails = [];

    const createTrail = (x, y) => {
      const trail = document.createElement("div");
      trail.className = "cursor-trail";
      trail.style.left = x + "px";
      trail.style.top = y + "px";
      document.body.appendChild(trail);
      trails.push(trail);
      if (trails.length > 15) trails.shift().remove();
      setTimeout(() => trail.remove(), 500);
    };

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      createTrail(e.clientX, e.clientY);
    };

    document.addEventListener("mousemove", moveCursor);
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      cursor.remove();
    };
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<End />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
