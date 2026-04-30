import React, { useEffect } from "react";
import "./index.css";

import { Routes, Route } from "react-router-dom";

// 🔥 COMPONENTS

import Layout from "./Layout";
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
import DanceStudio from "./components/DanceStudio";
import DanceStudio1 from "./components/DanceStudio1";
import DanceStudio2 from "./components/DanceStudio2";
import DanceStudio3 from "./components/DanceStudio3";
import DanceStudio4 from "./components/DanceStudio4";
import DanceStudio5 from "./components/DanceStudio5";
import DanceStudio6 from "./components/DanceStudio6";
import DanceStudio7 from "./components/DanceStudio7";
import DanceStudio8 from "./components/DanceStudio8";

// SingUP PAGES
import SignUp from "./components/SignUp";
import SignUp1 from "./components/SignUp1";
// AboutUs PAGES
import AboutUs from "./components/AboutUs";
import AboutUs1 from "./components/AboutUs1";
// Event PAGES
import Event from "./components/Event";
import Event1 from "./components/Event1";
// Breakdance PAGES
import BreakDance from "./components/BreakDance";
import BreakDance1 from "./components/BreakDance1";

import NewDancers from "./components/NewDancers";
import NewDancers1 from "./components/NewDancers1";

import TheDance from "./components/TheDance";
import TheDance1 from "./components/TheDance1";

import Graffiti from "./components/Graffiti";
import Graffiti1 from "./components/Graffiti1";
import About from "./components/About";
import About1 from "./components/About1";
import About2 from "./components/About2";
import About3 from "./components/About3";
import Events from "./components/Events";
import Events1 from "./components/Events1";
import Tc1 from "./components/Tc1";
import Tc2 from "./components/Tc2";

import InspirationalMove from "./components/InspirationalMove";
import InspirationalMove1 from "./components/InspirationalMove1";
import GroupDance from "./components/GroupDance";
import GroupDance1 from "./components/GroupDance1";
import DanceAct from "./components/DanceAct";
import DanceAct1 from "./components/DanceAct1";
import BalletsFinest from "./components/BalletsFinest";
import BalletsFinest1 from "./components/BalletsFinest1";
import GroupMove from "./components/GroupMove";
import Wanderlust from "./components/Wanderlust";
import MoonDance from "./components/MoonDance";
import ModernBallet from "./components/ModernBallet";
import Flamenco from "./components/Flamenco";

import BlogStandard from "./components/BlogStandard";
import BlogStandard2 from "./components/BlogStandard2";
import BlogStandard3 from "./components/BlogStandard3";
import BlogStandard4 from "./components/BlogStandard4";
import BlogStandard1 from "./components/BlogStandard1";

import Shop from "./components/Shop";
import Shop1 from "./components/Shop1";

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

import September from "./components/September";
import Perfect from "./components/Perfect";
import Perfect1 from "./components/Perfect1";
import Perfect2 from "./components/Perfect2";
import Heart from "./components/Heart";
import Classic from "./components/Classic";

import FloatingBuy from "./components/FloatingBuy";


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


export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* SignUp PAGES */}
        
                  <Route
            path="/signup"
            element={
              <>
                <SignUp />
                <SignUp1 />
                 
                
              </>
            }
          />
           {/* AboutUs PAGES */}
         <Route
            path="/aboutus"
            element={
              <>
                <AboutUs />
                <AboutUs1 />
                 
                
              </>
            }
          />
           {/* Event PAGES */}
        <Route
            path="/event"
            element={
              <>
                <Event />
                <Event1 />
                 
                
              </>
            }
          />
        {/* BreakDANCE PAGES */}
      <Route
            path="/breakdance"
            element={
              <>
                <BreakDance />
                <BreakDance1 />
                 
                
              </>
            }
          />

        {/*NEWDANCE PAGES */}
         <Route
            path="/newdancers"
            element={
              <>
                <NewDancers />
                <NewDancers1 />
                 
                
              </>
            }
          />
        
        {/*THEDANCE PAGES */}
         <Route
            path="/thedance"
            element={
              <>
                <TheDance />
                <TheDance1 />
                 
                
              </>
            }
          />
        
        <Route
            path="/graffiti"
            element={
              <>
                <Graffiti />
                <Graffiti1 />
                 
                
              </>
            }
          />

          <Route
            path="/about"
            element={
              <>
                <About />
                <About1 />
                <About2 />
                <About3 />
                 
                
              </>
            }
          />

          <Route
            path="/events-calendar"
            element={
              <>
                <Events />
                <Events1 />
               
                
              </>
            }
          />

          <Route
            path="/portfolio/three-columns"
            element={
              <>
                <Tc1 />
                <Tc2 />
               
                
              </>
            }
          />
          <Route
            path="/portfolio/inspirational-move"
            element={
              <>
                <InspirationalMove />
                <InspirationalMove1 />
               
                
              </>
            }
          />
          <Route
            path="/portfolio/group-dance"
            element={
              <>
                <GroupDance  />
                <GroupDance1 />
               
                
              </>
            }
          />
           <Route
            path="/portfolio/dance-act"
            element={
              <>
                <DanceAct  />
                <DanceAct1 />
               
                
              </>
            }
          />
          <Route
            path="/portfolio/ballets-finest"
            element={
              <>
                <BalletsFinest />
                <BalletsFinest1 />
               
                
              </>
            }
          />

        
        <Route path="/portfolio/group-move" element={<GroupMove />} />
        <Route path="/portfolio/wanderlust" element={<Wanderlust />} />
        <Route path="/portfolio/moon-dance" element={<MoonDance />} />
        <Route path="/portfolio/modern-ballet" element={<ModernBallet />} />
        <Route path="/portfolio/flamenco" element={<Flamenco />} />

        <Route
            path="/blog/no-sidebar"
            element={
              <>
                <BlogStandard />
                <BlogStandard2/>
                <BlogStandard3/>
                <BlogStandard4/>
                <BlogStandard1 />
               
                
              </>
            }
          />
           <Route
            path="/shop/right-sidebar"
            element={
              <>
                <Shop />
                <Shop1/>
                
               
                
              </>
            }
          />
        


        {/* EXTRA SECTIONS */}
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
        <Route path="/september" element={<September />} />

       
       <Route
            path="/dance-studio"
            element={
              <>
                <DanceStudio />
                <DanceStudio1 />
                <DanceStudio2 />
                <DanceStudio3 />
                <DanceStudio4 />
                <DanceStudio5 />
                <DanceStudio6 />
                <DanceStudio7 />
                <DanceStudio8 />
                
              </>
            }
          />

                  <Route
            path="/perfect"
            element={
              <>
                <Perfect />
                <Perfect1 />
                 <Perfect2 />
                
              </>
            }
          />
        <Route path="/heart" element={<Heart />} />
        <Route path="/classic" element={<Classic />} />
  </Route>
      </Routes>

      {/* 🔥 FLOATING BUTTON (GLOBAL) */}
      <FloatingBuy />

    </>
  );
}