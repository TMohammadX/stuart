import "./hover.css";
import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const Hover = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const cursorX = useTransform(x, (value) => value - 25);
  const cursorY = useTransform(y, (value) => value - 25);
  const springConfig = { damping: 25, stiffness: 100 };

  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  function handleMouseMove(event) {
    x.set(event.clientX);
    y.set(event.clientY);
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="cursor"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="hover"></div>
      <div className="hover1"></div>
      <div className="hover2"></div>
    </motion.div>
  );
};

export default Hover;
