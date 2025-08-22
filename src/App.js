import { Routes, Route } from "react-router-dom";

import React from "react";
import { HashRouter, Route, Routes } from 'react-router-dom';

// Import your components
import Navbar from "./pages/Navbar";
import ScrollProgress from "./pages/ScrollButtons"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BlogPost from "./pages/BlogPost"; 
function App() {
  return (
    <div className="relative">
      <Navbar />
      <ScrollProgress />
      <HashRouter>
      <Routes>
        {/* ✅ Blog detail route */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* ✅ Main sections */}
        <Route
          path="/"
          element={
            <>
              <section id="home" className="min-h-screen">
                <Home />
              </section>
              <section id="about" className="min-h-screen">
                <About />
              </section>
              <section id="service" className="min-h-screen">
                <Service />
              </section>
              <section id="portfolio" className="min-h-screen">
                <Portfolio />
              </section>
              <section id="resume" className="min-h-screen">
                <Resume />
              </section>
              <section id="blog" className="min-h-screen">
                <Blog />
              </section>
              <section id="contact" className="min-h-screen">
                <Contact />
              </section>
            </>
          }
        />
      </Routes>
           </HashRouter>
    </div>
  );
};
export default App;
