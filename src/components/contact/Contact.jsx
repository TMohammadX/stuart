import React, { useRef, useLayoutEffect } from "react";
import "./contact.css";
import Hover from "../hover/Hover";
import Transition from "../transition/Transition.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "../../utils/ScrollSmoother";
import Footer from "../footer/Footer";

export default function Contact() {
  const contact = gsap.timeline();

  const el = useRef();
  const q = gsap.utils.selector(el);
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  useLayoutEffect(() => {
    let smoother = ScrollSmoother.create({
      smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // looks for data-speed and data-lag attributes on elements
    });
    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <div ref={el}>
      <Transition timeline={contact} />
      <Hover />
      <section className="contact" id="smooth-content">
        <div className="con-con">
          <h1 className="contact-title">
            Get In <b>Touch</b> <br />
            With Us
          </h1>
          <form className="contact-inputs">
            <input
              type="text"
              className="input"
              placeholder="Name"
              name="user_name"
            />
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="user_email"
            />
            <input
              type="text"
              className="input"
              placeholder="Message"
              name="message"
            />
            <button className="btn-contact" type="submit">
              Send
            </button>
          </form>
        </div>
        <Footer />
      </section>
    </div>
  );
}
