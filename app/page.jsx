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

  const closeMenu = () => setMenu(false);

  return (
    <main id="top" className={loaded ? "site loaded" : "site"}>
      <div className="noise" aria-hidden="true" />
      <header className="nav">
        <a href="#top" className="logo" onClick={closeMenu} aria-label="NovaFrame Studios home"><span>✦</span> NOVAFRAME</a>
        <nav id="site-navigation" className={menu ? "navlinks open" : "navlinks"} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#process" onClick={closeMenu}>Process</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="navcta" href="#contact">Start a project <span>↗</span></a>
        <button className="menu" onClick={() => setMenu(!menu)} aria-label={menu ? "Close navigation" : "Open navigation"} aria-expanded={menu} aria-controls="site-navigation">☰</button>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="orb orb-one" aria-hidden="true" /><div className="orb orb-two" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">Independent animation studio · 2026</p>
          <h1 id="hero-title">Ideas<br /><em>in motion.</em></h1>
          <p className="hero-text">We create cinematic animation, motion design and digital stories that make brands impossible to ignore.</p>
          <div className="hero-actions"><a href="#work" className="button primary">Explore our work <span>↓</span></a><a href="#contact" className="text-link">Tell us your idea <span>↗</span></a></div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="ring ring-a" /><div className="ring ring-b" /><div className="cube"><i /><i /><i /><i /><i /><i /></div>
          <div className="floating-label">FRAME<br /><strong>01</strong></div>
        </div>
        <div className="scroll" aria-hidden="true">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section className="intro section" aria-labelledby="intro-title">
        <p className="eyebrow">What we do</p>
        <h2 id="intro-title">We turn <span>still ideas</span><br />into living stories.</h2>
        <div className="intro-bottom"><p>From the first sketch to the final frame, NovaFrame combines design, animation and storytelling to create work with a pulse.</p><div className="stat"><strong>40+</strong><span>stories brought<br />to life</span></div><div className="stat"><strong>12</strong><span>creative<br />disciplines</span></div></div>
      </section>

      <section id="work" className="work section" aria-labelledby="work-title">
        <div className="section-head"><div><p className="eyebrow">Selected work</p><h2 id="work-title">Made to <em>move.</em></h2></div><a href="#contact" className="text-link">View all projects ↗</a></div>
        <div className="project-grid">{projects.map((p, i) => <article className={`project project-${i + 1}`} key={p[0]}><div className="project-visual" aria-hidden="true"><div className="project-shape" /><span className="project-number">0{i + 1}</span><span className="project-type">{p[1]}</span></div><div className="project-info"><h3>{p[0]}</h3><p>{p[2]}</p><span>View case study ↗</span></div></article>)}</div>
      </section>

      <section id="services" className="services section" aria-labelledby="services-title"><div className="section-head"><div><p className="eyebrow">Capabilities</p><h2 id="services-title">Our creative<br /><em>toolkit.</em></h2></div><p className="section-note">One studio. Every frame.<br />Endless possibilities.</p></div><div className="service-list">{services.map(s => <article className="service" key={s[0]}><span>{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p><b aria-hidden="true">↗</b></article>)}</div></section>

      <section id="process" className="process section" aria-labelledby="process-title"><p className="eyebrow">How we work</p><h2 id="process-title">From <em>spark</em><br />to screen.</h2><div className="process-line">{[["01","Discover","We listen, research and find the story worth telling."],["02","Design","We shape the visual world, characters and movement."],["03","Animate","We bring every frame to life with precision and personality."],["04","Deliver","We polish, package and prepare your story for launch."]].map(x => <div className="step" key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div></section>

      <section id="contact" className="contact section" aria-labelledby="contact-title"><div className="contact-glow" aria-hidden="true" /><p className="eyebrow">Have a story?</p><h2 id="contact-title">Let&apos;s make<br /><em>something move.</em></h2><a href="mailto:hello@novaframe.studio" className="contact-email">hello@novaframe.studio <span>↗</span></a><div className="contact-footer"><span>NovaFrame Studios</span><span>Transforming Ideas Into Living Stories.</span><span>© 2026</span></div></section>
    </main>
  );
}
