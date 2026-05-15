import React, { useEffect } from "react";
import "./index.css";

import { Routes, Route } from "react-router-dom";

/* LAYOUT */
import Layout from "./Layout";

/* HOME COMPONENTS */
import Hero from "./components/Hero";
import Hero1 from "./components/Hero1";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Hero4 from "./components/Hero4";
import Hero5 from "./components/Hero5";
import Hero6 from "./components/Hero6";
import Hero7 from "./components/Hero7";
import Hero9 from "./components/Hero9";
import Hero10 from "./components/Hero10";

/* MAIN PAGES */
import DanceStudio from "./components/DanceStudio";
import Poledance from "./components/Poledance";
import HipHop from "./components/HipHop";
import Moderndance from "./components/Moderndance";
import Ballet from "./components/Ballet";
import Latin from "./components/Latin";
import KidsBallet from "./components/KidsBallet";

/* ABOUT */
import About from "./components/About";
import About1 from "./components/About1";

/* ABOUT / TEAM */
import Team from "./components/Team";

import Instructors1 from "./components/Instructors1";
import Instructors2 from "./components/Instructors2";

import WhatWeDo from "./components/WhatWeDo";

import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Error from "./components/Error";
import Event from "./components/Event";
import Timetable1 from "./components/Timetable1";
import Swanlake1 from "./components/Swanlake1";
import ClassicLayout from "./components/ClassicLayout";

/* SIGNUP */
import SignUp from "./components/SignUp";
import SignUp1 from "./components/SignUp1";

/* ABOUT US */
import AboutUs from "./components/AboutUs";
import AboutUs1 from "./components/AboutUs1";

/* BREAKDANCE */
import BreakDance from "./components/BreakDance";
import BreakDance1 from "./components/BreakDance1";

/* NEW DANCERS */
import NewDancers from "./components/NewDancers";
import NewDancers1 from "./components/NewDancers1";

/* THE DANCE */
import TheDance from "./components/TheDance";
import TheDance1 from "./components/TheDance1";

/* GRAFFITI */
import Graffiti from "./components/Graffiti";
import Graffiti1 from "./components/Graffiti1";

/* EVENTS CALENDAR */
import Events from "./components/Events";
import Events1 from "./components/Events1";

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

/* BLOG */
import BlogStandard from "./components/BlogStandard";
import BlogStandard1 from "./components/BlogStandard1";
import BlogStandard2 from "./components/BlogStandard2";
import BlogStandard3 from "./components/BlogStandard3";
import BlogStandard4 from "./components/BlogStandard4";

/* SHOP */
import Shop from "./components/Shop";
import Shop1 from "./components/Shop1";

/* ACCORDIONS */
import Accordions from "./components/Accordions";
import Accordions1 from "./components/Accordions1";
import Accordions2 from "./components/Accordions2";

/* EXTRA */
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

/* PERFECT */
import Perfect from "./components/Perfect";
import Perfect1 from "./components/Perfect1";
import Perfect2 from "./components/Perfect2";

/* OTHER */
import Heart from "./components/Heart";
import Classic from "./components/Classic";

/* GLOBAL */
import FloatingBuy from "./components/FloatingBuy";
import ScrollToTop from "./components/ScrollToTop";

/* HOME PAGE */

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
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll(".reveal");

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="grain bg-dark min-h-screen overflow-hidden">
      <Hero />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero5 />
      <Hero6 />
      <Hero7 />
      <Hero9 />
      <Hero10 />
    </div>
  );
}

/* APP */

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* MAIN */}
          <Route path="/dance-studio" element={<DanceStudio />} />
          <Route path="/pole-dance" element={<Poledance />} />
          <Route path="/hip-hop" element={<HipHop />} />
          <Route path="/modern-dance" element={<Moderndance />} />
          <Route path="/ballet" element={<Ballet />} />
          <Route path="/latin" element={<Latin />} />
          <Route path="/kids-ballet" element={<KidsBallet />} />

          {/* ABOUT */}
          <Route
            path="/about"
            element={
              <>
                <About />
                <About1 />
              </>
            }
          />

          <Route path="/crew" element={<Team />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/error" element={<Error />} />

          {/* EVENTS */}
          <Route
            path="/events-calendar"
            element={
              <>
                <Events />
                <Events1 />
              </>
            }
          />

          <Route path="/timetable" element={<Timetable1 />} />
          <Route path="/swan-lake" element={<Swanlake1 />} />

          {/* PORTFOLIO */}
          <Route
            path="/portfolio/three-columns"
            element={<ClassicLayout />}
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
                <GroupDance />
                <GroupDance1 />
              </>
            }
          />

          <Route
            path="/portfolio/dance-act"
            element={
              <>
                <DanceAct />
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

          {/* SIGNUP */}
          <Route
            path="/signup"
            element={
              <>
                <SignUp />
                <SignUp1 />
              </>
            }
          />

          {/* ABOUT US */}
          <Route
            path="/aboutus"
            element={
              <>
                <AboutUs />
                <AboutUs1 />
              </>
            }
          />

          {/* BREAKDANCE */}
          <Route
            path="/breakdance"
            element={
              <>
                <BreakDance />
                <BreakDance1 />
              </>
            }
          />

          {/* NEW DANCERS */}
          <Route
            path="/newdancers"
            element={
              <>
                <NewDancers />
                <NewDancers1 />
              </>
            }
          />

          {/* THE DANCE */}
          <Route
            path="/thedance"
            element={
              <>
                <TheDance />
                <TheDance1 />
              </>
            }
          />

          {/* GRAFFITI */}
          <Route
            path="/graffiti"
            element={
              <>
                <Graffiti />
                <Graffiti1 />
              </>
            }
          />

          {/* BLOG */}
          <Route
            path="/blog/no-sidebar"
            element={
              <>
                <BlogStandard />
                <BlogStandard2 />
                <BlogStandard3 />
                <BlogStandard4 />
                <BlogStandard1 />
              </>
            }
          />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog1" element={<Blog1 />} />
          <Route path="/blog2" element={<Blog2 />} />

          {/* SHOP */}
          <Route
            path="/shop/right-sidebar"
            element={
              <>
                <Shop />
                <Shop1 />
              </>
            }
          />

          {/* ACCORDIONS */}
          <Route
            path="/elements/accordions"
            element={
              <>
                <Accordions />
                <Accordions1 />
                <Accordions2 />
              </>
            }
          />

          {/* EXTRA */}
          <Route path="/exhibition" element={<Exhibition />} />
          <Route path="/organized" element={<Organized />} />
          <Route path="/attitude" element={<Attitude />} />
          <Route path="/neon" element={<Neon />} />
          <Route path="/music" element={<Music />} />

          {/* OTHER */}
          <Route path="/march" element={<March />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/may" element={<May />} />
          <Route path="/king" element={<King />} />
          <Route path="/walk" element={<Walk />} />
          <Route path="/game" element={<Game />} />
          <Route path="/september" element={<September />} />

          {/* PERFECT */}
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

          {/* INSTRUCTORS */}
          <Route
            path="/instructors"
            element={
              <>
                <Instructors1 />
                <Instructors2 />
              </>
            }
          />

          {/* FINAL */}
          <Route path="/heart" element={<Heart />} />
          <Route path="/classic" element={<Classic />} />
        </Route>
      </Routes>

      {/* FLOATING BUTTON */}
      <FloatingBuy />
    </>
  );
}