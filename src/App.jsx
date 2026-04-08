import React, { useEffect } from "react";
import "./index.css";

import { Routes, Route } from "react-router-dom";

// 🔥 COMPONENTS
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero1 from "./components/Hero1";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Hero4 from "./components/Hero4";
import Hero5 from "./components/Hero5";
import Hero6 from "./components/Hero6";
import Hero7 from "./components/Hero7";
import Hero8 from "./components/Hero8";
import Hero9 from "./components/Hero9";
import Hero10 from "./components/Hero10";

// 🔥 PAGES
import SignUp from "./components/SignUp";
import AboutUs from "./components/AboutUs";
import Event from "./components/Event";
import BreakDance from "./components/BreakDance";
import NewDancers from "./components/NewDancers";
import TheDance from "./components/TheDance";
import Graffiti from "./components/Graffiti";
import Exhibition from "./components/Exhibition";
import Organized from "./components/Organized";
import Attitude from "./components/Attitude";
import Neon from "./components/Neon";
import Music from "./components/Music";
import Blog from "./components/Blog";
import Blog1 from "./components/Blog1";
import Blog2 from "./components/Blog2";
import March from "./components/March";
import Admin from "./components/Admin";
import May from "./components/May";
import King from "./components/King";
import Walk from "./components/Walk";
import Game from "./components/Game";

// 🔥 HOME PAGE
function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="grain bg-dark min-h-screen">
      <Navbar />
      <Hero />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero5 />
      <Hero6 />
      <Hero7 />
      <Hero8 />
      <Hero9 />
      <Hero10 />
    </div>
  );
}


// 🔥 MAIN APP
export default function App() {
  return (
    <Routes>

      {/* HOME */}
      <Route path="/" element={<Home />} />

      {/* BASIC PAGES */}
      <Route path="/signup" element={<SignUp />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/event" element={<Event />} />

      {/* DANCE PAGES */}
      <Route path="/breakdance" element={<BreakDance />} />
      <Route path="/newdancers" element={<NewDancers />} />
      <Route path="/thedance" element={<TheDance />} />

      {/* EXTRA SECTIONS */}
      <Route path="/graffiti" element={<Graffiti />} />
      <Route path="/exhibition" element={<Exhibition />} />
      <Route path="/organized" element={<Organized />} />
      <Route path="/attitude" element={<Attitude />} />
      <Route path="/neon" element={<Neon />} />
      <Route path="/music" element={<Music />} />

      <Route path="/blog" element={<Blog />} />
      <Route path="/blog1" element={<Blog1 />} />
      <Route path="/blog2" element={<Blog2 />} />
      <Route path="/march" element={<March />} />
      <Route path="/admin" element={<Admin />} />
       <Route path="/may" element={<May />} />
<Route path="/king" element={<King />} />
<Route path="/walk" element={<Walk />} />
<Route path="/game" element={<Game />} />



    </Routes>
  );
}