"use client";

import { useEffect, useState } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Clear Day home"><img src="/clear-day-logo.svg" alt="Clear Day" /></a>
      <button className="menu-button" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
        <a href="/discover" onClick={() => setMenuOpen(false)}>Discover</a>
        <a href="/founder-story" onClick={() => setMenuOpen(false)}>Founder story</a>
        <a href="/pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
        <a className="nav-contact" href="mailto:red@weareclearday.com">Contact us <ArrowUpRightIcon aria-hidden="true" /></a>
      </nav>
    </header>
  );
}

export function ContactSection() {
  return <section className="contact-section"><p className="kicker light-text">We’re here to help</p><h2>Have a question<br/>about <em>Clear Day?</em></h2><a className="contact-button" href="mailto:red@weareclearday.com">Get in touch <ArrowUpRightIcon aria-hidden="true" /></a></section>;
}

export function Footer() {
  return <footer><a className="footer-brand" href="/"><img src="/clear-day-logo.svg" alt="Clear Day" /></a><p>Confidence for them.<br/>Reassurance for you.</p><div><a href="/discover">Discover</a><a href="/founder-story">Founder story</a><a href="/pricing">Pricing</a></div><small>© 2026 Clear Day. All rights reserved.</small></footer>;
}

export function PageHero({ number, label, title, accent, description }: { number: string; label: string; title: string; accent: string; description: string }) {
  void number; void label; void title; void accent; void description;
  return null;
}

export function ClearDaySite() {
  return <main><Header/><section className="hero" id="home"><div className="hero-copy reveal"><h1>Confidence for them.<br/><em>Reassurance</em> for you.</h1><p className="hero-lede">Simple daily support for staying organised, connected and independent, with peace of mind for everyone who cares.</p><div className="hero-actions"><a className="button primary" href="/discover">Discover Clear Day <span>→</span></a><a className="text-link" href="/pricing">View pricing <span>→</span></a></div></div><div className="hero-visual"><div className="hero-image-wrap"><img src="/clear-day-hero.png" alt="Clear Day daily planner displayed in a warm family kitchen" /></div><div className="floating-card"><span className="pulse" /><div><strong>Today is clear</strong><small>Everything in one place</small></div></div></div></section><section className="home-intro section"><p className="kicker">Designed from real life</p><div className="intro-grid"><h2>A clearer day,<br/><em>every day.</em></h2><div className="intro-copy"><p>Clear Day brings reminders, messages, plans and connection together in one calm, easy-to-use place.</p><p>Made to support independence, without making anyone feel watched or overwhelmed.</p><a className="text-link" href="/discover">See how Clear Day works <span>→</span></a></div></div></section><section className="testimonial section"><span className="big-quote">“</span><blockquote>Clear Day has been a huge boon to me. I find it useful to know what is coming up over the next few days, and I appreciate having a familiar voice greeting me every morning.</blockquote><p>Mary <span>·</span> Clear Day user</p></section><ContactSection/><Footer/></main>;
}

const features = [["01","Greets the user in the morning with a clear, simple list of what is happening that day."],["02","Shows photos and messages from family and friends, right where they will be seen."],["03","A simplified calendar makes adding reminders and countdowns to important dates super simple."],["04","An AI assistant with access to the user’s calendar and notes shared by family and friends."]];
const familyFeatures = ["An activity feed for people with permission, including when the user was last visible to the Clear Day screen.","A shared calendar, so you can view and add events on the user’s behalf.","The ability to add useful notes for their AI assistant."];

export function DiscoverPage() {
  return <main><Header/><PageHero number="01" label="Discover" title="A clearer day," accent="every day." description="More confidence for them. More reassurance for you."/><section className="intro section page-intro"><div className="intro-grid"><h2>What is<br/><em>Clear Day?</em></h2><div className="intro-copy"><p>Clear Day is an intuitive, daily support device that helps users keep their independence, with the clarity to stay organised, remember important things and be connected with family, friends or carers.</p><p>Those who are connected can send messages and reminders, while having reassurance that their loved one is independently well — without being intrusive.</p></div></div></section><section className="features section muted-section"><div className="feature-heading"><p className="kicker">For the user</p><h2>What can Clear Day do?</h2></div><div className="feature-list">{features.map(([number,text])=><article className="feature-row" key={number}><span>{number}</span><p>{text}</p></article>)}</div></section><section className="family section"><div className="family-visual"><div className="family-bubble"><img src="/clear-day-hero.png" alt="Clear Day in the home" /></div><div className="quote-mark">“</div></div><div className="family-copy"><p className="kicker">For family & friends</p><h2>Close by,<br/><em>wherever you are.</em></h2><ul>{familyFeatures.map(item=><li key={item}><span>✓</span>{item}</li>)}</ul></div></section><section className="support section"><div className="support-card"><div><p className="kicker">Support without intrusion</p><h2>Independence,<br/><em>kept intact.</em></h2></div><div><p>Clear Day is here to support independence without making anyone feel overly monitored. It simply makes everyday life feel clearer, more organised and less questioned.</p><p>For the person using it, Clear Day offers helpful reminders and a clear routine. For the people around them, it offers peace of mind that they can check in from wherever they are.</p><strong>More confidence for them. More reassurance for you.</strong></div></div></section><ContactSection/><Footer/></main>;
}

export function FounderStoryPage() {
  return <main><Header/><PageHero number="02" label="Founder story" title="It started with" accent="my mum." description="Support should help someone feel more independent, not more managed."/><section className="story section standalone-story"><div className="story-grid"><div><h2>A personal<br/><em>beginning.</em></h2></div><div className="story-copy"><p className="lead">Clear Day started with my mum.</p><p>When she began experiencing memory difficulties, I wanted to find a way to support her without taking away her independence. I wanted her to feel confident in her day, and I wanted to know she was okay without constantly needing to call or check in.</p><p>A lot of the technology we found felt too complicated, and nothing really fitted what we needed. We wanted something simple, reassuring and easy to use.</p><p className="story-pull">So I created Clear Day.</p><p>It was made for my mum, and shaped by the same worries and thoughts so many families and carers face. It is designed to help people remember important things, stay connected and feel more confident day to day, without feeling overwhelmed or watched. All while giving reassurance to those who care.</p><p>Every part of Clear Day has been shaped by real experiences, real conversations and the belief that this device should make life feel easier, never harder.</p></div></div></section><ContactSection/><Footer/></main>;
}

export function PricingPage() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [plan, setPlan] = useState<"monthly" | "annual">("monthly");
  useEffect(() => {
    document.body.style.overflow = checkoutOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [checkoutOpen]);
  const choose = () => setCheckoutOpen(true);
  const isAnnual = plan === "annual";
  const total = isAnnual ? "£280" : "£145";
  const cadence = isAnnual ? "then £150 yearly" : "then £15 monthly";
  const checkoutHref = isAnnual
    ? (process.env.NEXT_PUBLIC_STRIPE_ANNUAL_URL || "mailto:red@weareclearday.com?subject=Clear%20Day%20annual%20plan%20order")
    : (process.env.NEXT_PUBLIC_STRIPE_MONTHLY_URL || "mailto:red@weareclearday.com?subject=Clear%20Day%20monthly%20plan%20order");

  return <main><Header/><PageHero number="03" label="Pricing" title="Choose what" accent="works for you." description="A one-off device cost, followed by the monthly or annual plan that best suits your family."/><section className="pricing section pricing-page"><div className="pricing-heading"><p>One-off device cost, then a monthly or annual plan.</p></div><div className="pricing-toggle" role="group" aria-label="Billing frequency"><button type="button" className={!isAnnual?"active":""} aria-pressed={!isAnnual} onClick={()=>setPlan("monthly")}>Monthly</button><button type="button" className={isAnnual?"active":""} aria-pressed={isAnnual} onClick={()=>setPlan("annual")}>Yearly <span>Save £30</span></button></div><div className="price-grid price-grid-single"><article className={`price-card ${isAnnual?"featured":""}`}><p className="plan-name">{isAnnual?"Yearly plan":"Monthly plan"}</p><div className="price"><span>£</span>{isAnnual?"150":"15"}<small>{isAnnual?"/year":"/month"}</small></div><p className="device-cost">+ £130</p><ul><li>{isAnnual?"Save £30 compared with monthly":"Cancel anytime"}</li><li>All Clear Day features</li><li>Family & friends access</li><li>Ongoing support</li></ul><button className={`button ${isAnnual?"primary":"secondary"}`} type="button" onClick={choose}>Choose {isAnnual?"yearly":"monthly"} <span>→</span></button></article></div><div className="buyback"><span>↺</span><div><strong>Device buyback</strong><p>We know circumstances can change. That is why we offer a device buyback option if Clear Day is no longer needed. <em>*Conditions apply.</em></p></div></div></section><ContactSection/><Footer/>{checkoutOpen&&<div className="checkout-backdrop" role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)setCheckoutOpen(false)}}><section className="checkout" role="dialog" aria-modal="true" aria-labelledby="checkout-title"><button className="checkout-close" type="button" aria-label="Close checkout" onClick={()=>setCheckoutOpen(false)}>×</button><p className="kicker">Your Clear Day</p><h2 id="checkout-title">Complete your order</h2><div className="checkout-device"><img src="/clear-day-hero.png" alt="Clear Day device"/><div><strong>Clear Day device</strong><span>One-off payment</span></div><b>£130</b></div><fieldset><legend>Choose your plan</legend><label className={plan==="monthly"?"selected":""}><input type="radio" name="plan" checked={plan==="monthly"} onChange={()=>setPlan("monthly")}/><span><strong>Monthly</strong><small>Cancel anytime</small></span><b>£15/mo</b></label><label className={plan==="annual"?"selected":""}><input type="radio" name="plan" checked={plan==="annual"} onChange={()=>setPlan("annual")}/><span><strong>Annual</strong><small>Save £30</small></span><b>£150/yr</b></label></fieldset><div className="checkout-total"><span>Due today</span><strong>{total}</strong><small>{cadence}</small></div><a className="button primary checkout-button" href={checkoutHref}>Continue to secure checkout <span>→</span></a><p className="checkout-help">Secure checkout opens in the next step. Need help? <a href="mailto:red@weareclearday.com">Email us</a>.</p></section></div>}</main>;
}
