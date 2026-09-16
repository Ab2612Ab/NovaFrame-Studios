"use client";

import { useState } from "react";

const projects = [
  { name: "ORBITAL", type: "3D / INTERACTIVE", text: "A cinematic digital universe with responsive depth, motion and tactile exploration.", media: "spline" },
  { name: "MOTION / 01", type: "2D / MOTION", text: "A kinetic identity system where typography, shape and rhythm react as one.", media: "2d" },
  { name: "LUMEN", type: "PRODUCT / 3D", text: "A product story built around light, material, shadow and interactive presentation.", media: "spline" },
  { name: "WONDERLAND", type: "CHARACTER / 2D", text: "A playful character world designed to feel alive across campaigns and digital spaces.", media: "character" },
];

export default function WorkPage() {
  const [active, setActive] = useState("ALL");
  const filters = ["ALL", "3D", "2D"];
  const visible = projects.filter((p) => active === "ALL" || p.type.startsWith(active));

  return (
    <main className="site standalone-page work-page">
      <div className="noise" aria-hidden="true" />
      <header className="nav standalone-nav">
        <a href="/" className="logo"><span>✦</span> NOVAFRAME</a>
        <nav className="navlinks" aria-label="Main navigation">
          <a className="active-nav" href="/work">Work</a><a href="/services">Services</a><a href="/process">Process</a><a href="/contact">Contact</a>
        </nav>
        <a className="navcta" href="/contact">Start a project <span>↗</span></a>
        <a className="menu" href="/">☰</a>
      </header>

      <section className="standalone-hero work-hero">
        <div>
          <p className="eyebrow">Selected work · Interactive archive</p>
          <h1>Made to <em>move.</em></h1>
          <p>Explore a living collection of 2D animation, 3D worlds, motion systems and character studies. Every frame is designed to respond, breathe and invite exploration.</p>
        </div>
        <div className="hero-orbit-mark" aria-hidden="true"><span /><i /><b>NF</b></div>
      </section>

      <section className="work-browser section">
        <div className="filter-bar" role="group" aria-label="Filter projects">
          {filters.map((filter) => <button type="button" key={filter} className={active === filter ? "filter active" : "filter"} onClick={() => setActive(filter)}>{filter}</button>)}
          <span>{visible.length.toString().padStart(2, "0")} projects</span>
        </div>
        <div className="standalone-project-grid">
          {visible.map((project, index) => (
            <article className="standalone-project" key={project.name}>
              <div className={`standalone-media ${project.media}`}>
                {project.media === "spline" && <spline-viewer url="https://prod.spline.design/9951u9cumiw2EhJ8/scene.splinecode" />}
                {project.media === "2d" && <><div className="big-orbit" /><div className="moving-word">MOTION</div><div className="tiny-particles" /></>}
                {project.media === "character" && <><div className="big-character"><i/><i/><b/></div><div className="character-ring" /></>}
                <span className="media-index">0{index + 1}</span><span className="media-type">{project.type}</span>
              </div>
              <div className="standalone-project-info"><div><h2>{project.name}</h2><p>{project.text}</p></div><span className="project-arrow">↗</span></div>
            </article>
          ))}
        </div>
      </section>
      <footer className="standalone-footer"><span>NovaFrame Studios</span><a href="/contact">Have a project? Let&apos;s talk ↗</a></footer>
    </main>
  );
}
