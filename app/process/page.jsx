"use client";

import { useState } from "react";

const steps = [
  ["01", "Discover", "We listen, research and find the story worth telling.", "Brief · Research · Direction"],
  ["02", "Design", "We shape the visual world, characters and movement language.", "Concepts · Storyboards · Styleframes"],
  ["03", "Animate", "We bring every frame to life with precision, timing and personality.", "Animation · Sound · Compositing"],
  ["04", "Deliver", "We polish, package and prepare your story for every launch surface.", "Master files · Social cuts · Handoff"],
];

export default function ProcessPage() {
  const [active, setActive] = useState(0);
  return (
    <main className="site standalone-page process-page">
      <div className="noise" aria-hidden="true" />
      <header className="nav standalone-nav"><a href="/" className="logo"><span>✦</span> NOVAFRAME</a><nav className="navlinks" aria-label="Main navigation"><a href="/work">Work</a><a href="/services">Services</a><a className="active-nav" href="/process">Process</a><a href="/contact">Contact</a></nav><a className="navcta" href="/contact">Start a project <span>↗</span></a><a className="menu" href="/">☰</a></header>
      <section className="standalone-hero process-hero"><div><p className="eyebrow">How we work · Four stages</p><h1>From <em>spark</em><br/>to screen.</h1><p>A clear creative path with room for experimentation. Click each stage to explore what happens behind the frame.</p></div><div className="process-wheel" aria-hidden="true"><div className="wheel-core">{String(active + 1).padStart(2, "0")}</div><i/><i/><i/><i/></div></section>
      <section className="process-browser section"><div className="process-tabs" role="tablist" aria-label="Process stages">{steps.map((s, i) => <button type="button" role="tab" aria-selected={active === i} className={active === i ? "process-tab active" : "process-tab"} onClick={() => setActive(i)} key={s[0]}><span>{s[0]}</span>{s[1]}</button>)}</div><article className="process-focus"><div className="focus-number">{steps[active][0]}</div><div><p className="eyebrow">Stage {steps[active][0]}</p><h2>{steps[active][1]}</h2><p>{steps[active][2]}</p><div className="focus-delivery"><span>FOCUS</span><strong>{steps[active][3]}</strong></div></div><a href="/contact">Start a conversation ↗</a></article></section>
      <footer className="standalone-footer"><span>NovaFrame Studios</span><a href="/services">Explore capabilities ↗</a></footer>
    </main>
  );
}
