"use client";

import { useEffect, useState } from "react";

const services = [
  ["01", "2D Animation", "Expressive illustrations, character animation and story-led visuals."],
  ["02", "3D Animation", "Cinematic worlds, product visuals and polished 3D experiences."],
  ["03", "Motion Graphics", "Dynamic typography, brand systems and campaign-ready motion."],
  ["04", "Character Design", "Distinctive characters built for memorable stories and brands."],
  ["05", "Explainer Films", "Clear, engaging narratives that make complex ideas easy to understand."],
  ["06", "Brand Animation", "A moving visual language designed to make your identity feel alive."],
];

const projects = [
  ["ORBITAL", "3D / FILM", "A cinematic journey beyond the familiar."],
  ["MOTION / 01", "BRAND / MOTION", "A visual identity designed to move."],
  ["LUMEN", "PRODUCT / 3D", "Light, form and product storytelling."],
  ["WONDERLAND", "CHARACTER / 2D", "A playful universe of bold characters."],
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={loaded ? "site loaded" : "site"}>
      <div className="noise" />
      <header className="nav">
        <a href="#top" className="logo"><span>✦</span> NOVAFRAME</a>
        <nav className={menu ? "navlinks open" : "navlinks"}>
          <a href="#work" onClick={() => setMenu(false)}>Work</a>
          <a href="#services" onClick={() => setMenu(false)}>Services</a>
          <a href="#process" onClick={() => setMenu(false)}>Process</a>
          <a href="#contact" onClick={() => setMenu(false)}>Contact</a>
        </nav>
        <a className="navcta" href="#contact">Start a project <span>↗</span></a>
        <button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">☰</button>
      </header>

      <section id="top" className="hero">
        <div className="orb orb-one" /><div className="orb orb-two" />
        <div className="hero-grid" />
        <div className="hero-copy">
          <p className="eyebrow">Independent animation studio · 2026</p>
          <h1>Ideas<br /><em>in motion.</em></h1>
          <p className="hero-text">We create cinematic animation, motion design and digital stories that make brands impossible to ignore.</p>
          <div className="hero-actions"><a href="#work" className="button primary">Explore our work <span>↓</span></a><a href="#contact" className="text-link">Tell us your idea <span>↗</span></a></div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="ring ring-a" /><div className="ring ring-b" /><div className="cube"><i /><i /><i /><i /><i /><i /></div>
          <div className="floating-label">FRAME<br /><strong>01</strong></div>
        </div>
        <div className="scroll">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section className="intro section">
        <p className="eyebrow">What we do</p>
        <h2>We turn <span>still ideas</span><br />into living stories.</h2>
        <div className="intro-bottom"><p>From the first sketch to the final frame, NovaFrame combines design, animation and storytelling to create work with a pulse.</p><div className="stat"><strong>40+</strong><span>stories brought<br />to life</span></div><div className="stat"><strong>12</strong><span>creative<br />disciplines</span></div></div>
      </section>

      <section id="work" className="work section">
        <div className="section-head"><div><p className="eyebrow">Selected work</p><h2>Made to <em>move.</em></h2></div><a href="#contact" className="text-link">View all projects ↗</a></div>
        <div className="project-grid">{projects.map((p, i) => <article className={`project project-${i + 1}`} key={p[0]}><div className="project-visual"><div className="project-shape" /><span className="project-number">0{i + 1}</span><span className="project-type">{p[1]}</span></div><div className="project-info"><h3>{p[0]}</h3><p>{p[2]}</p><span>View case study ↗</span></div></article>)}</div>
      </section>

      <section id="services" className="services section"><div className="section-head"><div><p className="eyebrow">Capabilities</p><h2>Our creative<br /><em>toolkit.</em></h2></div><p className="section-note">One studio. Every frame.<br />Endless possibilities.</p></div><div className="service-list">{services.map(s => <article className="service" key={s[0]}><span>{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p><b>↗</b></article>)}</div></section>

      <section id="process" className="process section"><p className="eyebrow">How we work</p><h2>From <em>spark</em><br />to screen.</h2><div className="process-line">{[["01","Discover","We listen, research and find the story worth telling."],["02","Design","We shape the visual world, characters and movement."],["03","Animate","We bring every frame to life with precision and personality."],["04","Deliver","We polish, package and prepare your story for launch."]].map(x => <div className="step" key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div></section>

      <section id="contact" className="contact section"><div className="contact-glow" /><p className="eyebrow">Have a story?</p><h2>Let&apos;s make<br /><em>something move.</em></h2><a href="mailto:hello@novaframe.studio" className="contact-email">hello@novaframe.studio <span>↗</span></a><div className="contact-footer"><span>NovaFrame Studios</span><span>Transforming Ideas Into Living Stories.</span><span>© 2026</span></div></section>
    </main>
  );
}
