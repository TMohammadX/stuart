import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./home.css";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Link } from "react-scroll";
import vid from "../../assets/bg1.mp4";
import { FaArrowDown } from "react-icons/fa";
import Hover from "../hover/Hover";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [ref, inView] = useInView();
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
        <AnimatePresence>
          <motion.div className="title">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="slo"
            >
              conversion
            </motion.span>
            <motion.h1
              className="slo"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              through &nbsp;
              <Link
                to="featured"
                spy={true}
                smooth={true}
                duration={1000}
                className="btn"
              >
                Featured
              </Link>
            </motion.h1>
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="slo"
            >
              &nbsp;&nbsp;immersion
            </motion.span>
          </motion.div>
        </AnimatePresence>
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
      <section className="about">
        <div className="about-inner" ref={ref}>
          <div className="ab-box">
            <div className="m-img"></div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="ab-title"
            >
              High Quality
            </motion.h1>
            <motion.p className="ab-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet.
            </motion.p>
          </div>
          <div className="ab-box">
            <div className="m-img2"></div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="ab-title"
            >
              Simple Design
            </motion.h1>
            <motion.p className="ab-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet.
            </motion.p>
          </div>
          <div className="ab-box">
            <div className="m-img"></div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="ab-title"
            >
              Vegan Lether
            </motion.h1>
            <motion.p className="ab-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet.
            </motion.p>
          </div>
        </div>
      </section>
      <section className="featured prox">
        <h1 className="section-title">Featured</h1>
        <div className="featured-content"></div>
      </section>
    </div>
  );
}
