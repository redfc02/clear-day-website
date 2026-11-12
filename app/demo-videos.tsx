"use client";

import { useRef, useState, type KeyboardEvent } from "react";

const demos = [
  {
    id: "user",
    tab: "The user experience",
    duration: "40 seconds",
    title: "On the Clear Day device",
    description: "Daily plans, medication reminders, family messages and voice support, together on one screen.",
    video: "/media/clear-day-user-experience-v2.mp4",
    poster: "/media/clear-day-user-experience.webp",
    captions: "/media/clear-day-user-experience-v2.en.vtt",
  },
  {
    id: "family",
    tab: "The family experience",
    duration: "55 seconds",
    title: "For family and friends",
    description: "Send messages, add plans and share helpful information with their assistant, from your phone.",
    video: "/media/clear-day-family-experience.mp4",
    poster: "/media/clear-day-family-experience.webp",
    captions: "/media/clear-day-family-experience.en.vtt",
  },
] as const;

export function DemoVideos({ labelledBy = "home-demo-heading" }: { labelledBy?: string }) {
  const [selected, setSelected] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);

  function navigateTabs(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    switch (event.key) {
      case "ArrowRight": next = (index + 1) % demos.length; break;
      case "ArrowLeft": next = (index + demos.length - 1) % demos.length; break;
      case "Home": next = 0; break;
      case "End": next = demos.length - 1; break;
      default: return;
    }
    event.preventDefault();
    setSelected(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="home-demo" id="see-clear-day" aria-labelledby={labelledBy}>
      <div className="demo-tabs" role="tablist" aria-label="Choose a Clear Day demo">
        {demos.map((item, index) => (
          <button
            key={item.id}
            ref={element => { tabs.current[index] = element; }}
            type="button"
            role="tab"
            id={`demo-tab-${item.id}`}
            aria-selected={selected === index}
            aria-controls={`demo-panel-${item.id}`}
            tabIndex={selected === index ? 0 : -1}
            onClick={() => setSelected(index)}
            onKeyDown={event => navigateTabs(event, index)}
          >
            <span>{item.tab}</span><small>{item.duration}</small>
          </button>
        ))}
      </div>

      {demos.map((demo, index) => <div
        key={demo.id}
        id={`demo-panel-${demo.id}`}
        role="tabpanel"
        aria-labelledby={`demo-tab-${demo.id}`}
        className="demo-panel"
        tabIndex={selected === index ? 0 : -1}
        hidden={selected !== index}
      >
        {selected === index && <div className="demo-video-frame">
          <video controls playsInline preload="none" poster={demo.poster}
            aria-label={`${demo.tab}, narrated demo`}
            aria-describedby={`demo-description-${demo.id}`}>
            <source src={demo.video} type="video/mp4" />
            <track kind="captions" src={demo.captions} srcLang="en" label="English" />
            Your browser does not support this video. <a href={demo.video}>Watch the demo.</a>
          </video>
        </div>}
        <div className="demo-caption">
          <h3>{demo.title}</h3>
          <p id={`demo-description-${demo.id}`}>{demo.description}</p>
        </div>
      </div>)}
    </div>
  );
}
