"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  ["01", "2D Animation", "Expressive illustration, character animation and story-led visuals."],
  ["02", "3D Animation", "Cinematic worlds, product visuals and polished interactive experiences."],
  ["03", "Motion Graphics", "Dynamic typography, brand systems and campaign-ready motion."],
  ["04", "Character Design", "Distinctive characters built for memorable stories and brands."],
  ["05", "Explainer Films", "Clear narratives with movement, texture and personality."],
  ["06", "Brand Animation", "A moving visual language designed to make identities feel alive."],
];

const projects = [
  ["ORBITAL", "3D / INTERACTIVE", "A cinematic journey through a responsive digital universe."],
  ["MOTION / 01", "2D / MOTION", "A living graphic system built from rhythm, shape and typography."],
  ["LUMEN", "PRODUCT / 3D", "Light, material and depth turned into a tactile product story."],
  ["WONDERLAND", "CHARACTER / 2D", "A playful animated world where characters react to movement."],
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 450);
    const hero = heroRef.current;
    if (!hero) return () => clearTimeout(timer);
    const move = (event) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      hero.style.setProperty("--mx", `${x * 18}px`);
      hero.style.setProperty("--my", `${y * 18}px`);
    };
    const reset = () => { hero.style.setProperty("--mx", "0px"); hero.style.setProperty("--my", "0px"); };
    hero.addEventListener("pointermove", move); hero.addEventListener("pointerleave", reset);
    return () => { clearTimeout(timer); hero.removeEventListener("pointermove", move); hero.removeEventListener("pointerleave", reset); };
  }, []);

  const closeMenu = () => setMenu(false);

  return (
    <main id="top" className={loaded ? "site loaded" : "site"}>
      <div className="noise" aria-hidden="true" />
      <header className="nav">
        <a href="#top" className="logo" onClick={closeMenu} aria-label="NovaFrame Studios home"><span>✦</span> NOVAFRAME</a>
        <nav id="site-navigation" className={menu ? "navlinks open" : "navlinks"} aria-label="Main navigation">
          <a href="/work" onClick={closeMenu}>Work</a><a href="/services" onClick={closeMenu}>Services</a><a href="/process" onClick={closeMenu}>Process</a><a href="/contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="navcta" href="/contact">Start a project <span>↗</span></a>
        <button className="menu" type="button" onClick={() => setMenu(!menu)} aria-label={menu ? "Close navigation" : "Open navigation"} aria-expanded={menu} aria-controls="site-navigation">☰</button>
      </header>

      <section ref={heroRef} className="hero" aria-labelledby="hero-title">
        <div className="hero-video-background" aria-hidden="true">
          <iframe src="https://player.vimeo.com/video/733560561?background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0" title="NovaFrame cinematic animation background" loading="eager" allow="autoplay; fullscreen; picture-in-picture" />
        </div>
        <div className="hero-video-overlay" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" /><div className="hero-copy"><p className="eyebrow">Independent animation studio · 2026</p><h1 id="hero-title">Ideas<br /><em>in motion.</em></h1><p className="hero-text">We create cinematic animation, motion design and digital stories that make brands impossible to ignore.</p><div className="hero-actions"><a href="/work" className="button primary">Explore our work <span>↗</span></a><a href="/contact" className="text-link">Tell us your idea <span>↗</span></a></div></div>
        <div className="hero-3d" aria-label="Interactive 3D NovaFrame scene"><spline-viewer url="https://prod.spline.design/9951u9cumiw2EhJ8/scene.splinecode" loading-anim-type="spinner-small-dark" events-target="global" /><div className="hero-3d-shade" aria-hidden="true" /><div className="floating-label">INTERACTIVE 3D<br /><strong>DRAG / MOVE</strong></div></div><div className="hero-cursor-note" aria-hidden="true">MOVE YOUR CURSOR · EXPLORE THE FRAME</div><div className="scroll" aria-hidden="true">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section className="intro section" aria-labelledby="intro-title"><p className="eyebrow">What we do</p><h2 id="intro-title">We turn <span>still ideas</span><br />into living stories.</h2><div className="intro-bottom"><p>From the first sketch to the final frame, NovaFrame combines design, animation, 3D, interaction and storytelling to create work with a pulse.</p><div className="stat"><strong>40+</strong><span>stories brought<br />to life</span></div><div className="stat"><strong>12</strong><span>creative<br />disciplines</span></div></div></section>

      <section id="work" className="work section" aria-labelledby="work-title"><div className="section-head"><div><p className="eyebrow">Selected work</p><h2 id="work-title">Made to <em>move.</em></h2></div><a href="/work" className="text-link">View all work ↗</a></div><div className="project-grid"><article className="project project-1"><div className="project-media project-video"><iframe src="https://player.vimeo.com/video/733560561?background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0" title="Abstract 3D animation preview" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" /></div><div className="project-info"><h3>{projects[0][0]}</h3><p>{projects[0][2]}</p><span>{projects[0][1]} · Interactive scene ↗</span></div></article><article className="project project-2"><div className="project-media project-2d" aria-label="Animated 2D motion graphic preview"><div className="shape-orbit"><i /><i /><i /><b>2D</b></div><div className="kinetic-word">MOVE</div><span className="project-number">02</span><span className="project-type">2D / MOTION</span></div><div className="project-info"><h3>{projects[1][0]}</h3><p>{projects[1][2]}</p><span>Interactive 2D system ↗</span></div></article><article className="project project-3"><div className="project-media project-spline-mini lumen-media"><iframe src="https://player.vimeo.com/video/1131407948?background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0" title="LUMEN product animation" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" /><div className="lumen-overlay"><span>LUMEN</span><small>PRODUCT · LIGHT / MATERIAL / DEPTH</small></div><span className="project-number">03</span><span className="project-type">3D / PRODUCT</span></div><div className="project-info"><h3>{projects[2][0]}</h3><p>{projects[2][2]}</p><span>Material study · 3D ↗</span></div></article><article className="project project-4"><div className="project-media project-2d character-stage"><div className="character"><div className="eye eye-a" /><div className="eye eye-b" /><div className="smile" /></div><div className="character-orb" /><span className="project-number">04</span><span className="project-type">CHARACTER / 2D</span></div><div className="project-info"><h3>{projects[3][0]}</h3><p>{projects[3][2]}</p><span>Character animation study ↗</span></div></article></div></section>

      <section className="showreel section" aria-labelledby="showreel-title"><div className="showreel-copy"><p className="eyebrow">Motion reference</p><h2 id="showreel-title">Real movement.<br /><em>Real texture.</em></h2><p>Explore animation in motion instead of static mockups. The site uses immersive 3D, animated 2D compositions and hosted motion references to make the studio feel like a working creative space.</p></div><div className="showreel-frame"><iframe src="https://player.vimeo.com/video/1131407948?background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0" title="2D animation showreel reference" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" /></div></section>

      <section id="services" className="services section" aria-labelledby="services-title"><div className="section-head"><div><p className="eyebrow">Capabilities</p><h2 id="services-title">Our creative<br /><em>toolkit.</em></h2></div><a href="/services" className="text-link">Explore services ↗</a></div><div className="service-list">{services.map(s => <a className="service service-link" href={`/services#service-${s[0]}`} key={s[0]}><span>{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p><b aria-hidden="true">↗</b></a>)}</div></section>

      <section id="process" className="process section" aria-labelledby="process-title"><div className="section-head"><div><p className="eyebrow">How we work</p><h2 id="process-title">From <em>spark</em><br />to screen.</h2></div><a href="/process" className="text-link">See our process ↗</a></div><div className="process-line">{[["01","Discover","We listen, research and find the story worth telling."],["02","Design","We shape the visual world, characters and movement."],["03","Animate","We bring every frame to life with precision and personality."],["04","Deliver","We polish, package and prepare your story for launch."]].map(x => <div className="step" key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div></section>

      <section id="contact" className="contact section" aria-labelledby="contact-title"><div className="contact-glow" aria-hidden="true" /><p className="eyebrow">Have a story?</p><h2 id="contact-title">Let&apos;s make<br /><em>something move.</em></h2><a href="/contact" className="contact-email">Start a project <span>↗</span></a><div className="contact-footer"><span>NovaFrame Studios</span><span>Transforming Ideas Into Living Stories.</span><span>© 2026</span></div></section>
    </main>
  );
}
