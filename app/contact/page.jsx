"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [budget, setBudget] = useState("Select a range");
  function submit(event) { event.preventDefault(); setSent(true); }
  return (
    <main className="site standalone-page contact-page">
      <div className="noise" aria-hidden="true" />
      <header className="nav standalone-nav"><a href="/" className="logo"><span>✦</span> NOVAFRAME</a><nav className="navlinks" aria-label="Main navigation"><a href="/work">Work</a><a href="/services">Services</a><a href="/process">Process</a><a className="active-nav" href="/contact">Contact</a></nav><a className="navcta" href="mailto:hello@novaframe.studio">Email us <span>↗</span></a><a className="menu" href="/">☰</a></header>
      <section className="contact-layout section"><div className="contact-intro"><p className="eyebrow">Have a story?</p><h1>Let&apos;s make<br/><em>something move.</em></h1><p>Tell us what you&apos;re imagining. A real person from NovaFrame will review the brief and get back to you.</p><a className="direct-email" href="mailto:hello@novaframe.studio">hello@novaframe.studio ↗</a><div className="contact-orb" aria-hidden="true"/></div>
        <form className="contact-form" onSubmit={submit}>
          <label>Name<input required name="name" placeholder="Your name" /></label>
          <label>Email<input required type="email" name="email" placeholder="you@company.com" /></label>
          <label>What are we making?<textarea required name="brief" rows="5" placeholder="Tell us about the idea, audience and timeline..." /></label>
          <label>Approximate budget<select value={budget} onChange={(e) => setBudget(e.target.value)}><option>Select a range</option><option>$1k – $3k</option><option>$3k – $7k</option><option>$7k – $15k</option><option>$15k+</option></select></label>
          <button className="button primary submit-button" type="submit">{sent ? "Brief ready ✓" : "Send project brief ↗"}</button>
          <p className="form-note" aria-live="polite">{sent ? "Thanks — your demo brief is ready. Connect by email to send the details." : "This demo form does not send data anywhere."}</p>
        </form>
      </section>
      <footer className="standalone-footer"><span>NovaFrame Studios · 2026</span><span>Transforming Ideas Into Living Stories.</span></footer>
    </main>
  );
}
