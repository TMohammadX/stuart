import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./home.css";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Link } from "react-scroll";
import vid from "../../assets/bg1.mp4";
import { FaArrowDown } from "react-icons/fa";
import Hover from "../hover/Hover";

export default function Home() {
  return (
    <div className="home">
      <Hover />
      <section className="header prox">
        <Tilt
          trackOnWindow={true}
          tiltReverse
          transitionEasing="linear"
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
        >
          <div className="bg">
            <video src={vid} className="bg-vid" autoPlay loop muted></video>
          </div>
        </Tilt>
        <motion.div className="title">
          <motion.span
            initial={{ x: 10 }}
            animate={{ x: 10 }}
            transition={{ duration: 0.5 }}
            className="slo"
          >
            conversion
          </motion.span>
          <h1 className="slo">
            through &nbsp;
            <Link
              to="featured"
              spy={true}
              smooth={true}
              duration={500}
              className="btn"
            >
              FEATURED
            </Link>
          </h1>
          <motion.span
            initial={{ x: 20 }}
            animate={{ x: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="slo"
          >
            &nbsp;&nbsp;immersion
          </motion.span>
        </motion.div>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="godown"
        >
          <FaArrowDown />
        </Link>
      </section>
      <section className="about prox">
        <div className="about-inner">
          <div className="ab-box">
            <div className="m-img"></div>
            <h1 className="ab-title">High Quality</h1>
            <p className="ab-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet.
            </p>
          </div>
          <div className="ab-box">
            <div className="m-img2"></div>
            <h1 className="ab-title">Simple Design</h1>
            <p className="ab-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet.
            </p>
          </div>
          <div className="ab-box">
            <div className="m-img"></div>
            <h1 className="ab-title">Vegan Lether</h1>
            <p className="ab-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </section>
      <section className="featured prox">
        <h1 className="section-title">Featured</h1>
        <div className="featured-content"></div>
      </section>
      <section className="contact prox">
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
        </form>
        <input className="btn" value="Send" type="submit" />
      </section>
    </div>
  );
}
