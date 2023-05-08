import React, { useRef, useEffect } from "react";
import "./transition.css";
import { gsap, Power4 } from "gsap";
import { motion } from "framer-motion";

function Transition({ timeline }) {
  return (
    <motion.div
      initial={{ y: "50%" }}
      animate={{ y: "-150vh" }}
      transition={{ duration: 1 }}
      className="transition-effect1"
    ></motion.div>
  );
}

export default Transition;
