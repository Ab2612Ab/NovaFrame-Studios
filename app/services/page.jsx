"use client";

import { useState } from "react";

const services = [
  ["01", "2D Animation", "Expressive illustration, character animation and story-led visuals.", "Shape, frame-by-frame and digital illustration"],
  ["02", "3D Animation", "Cinematic worlds, product visuals and polished interactive experiences.", "Modeling, lighting, materials and realtime scenes"],
  ["03", "Motion Graphics", "Dynamic typography, brand systems and campaign-ready motion.", "Identity motion, title design and kinetic systems"],
  ["04", "Character Design", "Distinctive characters built for memorable stories and brands.", "Design, rigging, expression and performance"],
  ["05", "Explainer Films", "Clear narratives with movement, texture and personality.", "Script direction, storyboards and animated storytelling"],
  ["06", "Brand Animation", "A moving visual language designed to make identities feel alive.", "Logo motion, social systems and launch assets"],
];

export default function ServicesPage() {
  const [open, setOpen] = useState(1);
  return (
    <main className="site standalone-page services-page">
      <div className="noise" aria-hidden="true" />
      <header className="nav standalone-nav"><a href="/" className="logo"><span>✦</span> NOVAFRAME</a><nav className="navlinks" aria-label="Main navigation"><a href="/work">Work</a><a className="active-nav" href="/services">Services</a><a href="/process">Process</a><a href="/contact">Contact</a></nav><a className="navcta" href="/contact">Start a project <span>↗</span></a><a className="menu" href="/">☰</a></header>
      <section className="standalone-hero services-hero"><div><p className="eyebrow">Capabilities · One studio</p><h1>Our creative<br/><em>toolkit.</em></h1><p>Choose a discipline, then open it to see how NovaFrame turns an idea into an animated experience.</p></div><div className="service-signal"><span>06</span><small>DISCIPLINES<br/>CONNECTED</small></div></section>
      <section className="service-browser section"><div className="service-list standalone-services">{services.map((s, i) => <article className={open === i ? "service expanded" : "service"} key={s[0]}><button type="button" className="service-toggle" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}><span>{s[0]}</span><h2>{s[1]}</h2><b>{open === i ? "−" : "+"}</b></button><div className="service-detail"><p>{s[2]}</p><div><span>DELIVERABLES</span><strong>{s[3]}</strong></div><a href="/contact">Discuss this service ↗</a></div></article>)}</div></section>
      <footer className="standalone-footer"><span>NovaFrame Studios</span><a href="/contact">Tell us what you&apos;re building ↗</a></footer>
    </main>
  );
}
