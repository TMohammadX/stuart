import React from "react";
import "./contact.css";
import Hover from "../hover/Hover";
import Transition from "../transition/Transition.jsx";
import { gsap } from "gsap";

export default function Contact() {
  const contact = gsap.timeline();
  return (
    <div>
      <Transition timeline={contact} />
      <Hover />
      <section className="contact">
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
      </section>
    </div>
  );
}
