import React, { useRef, useEffect } from "react";
import "./transition.css";
import { gsap, Power4 } from "gsap";

function Transition({ timeline }) {
  const trans1 = useRef(null);
  const trans2 = useRef(null);
  const trans3 = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.to(trans1.current, {
      duration: 2.5,
      y: 0,
      ease: Power4.easeInOut,
    });

    timeline.to(trans1.current, {
      duration: 2.0,
      y: -2000,
      ease: Power4.easeInOut,
    });
  });

  return (
    <React.Fragment>
      <div ref={trans1} className="transition-effect1"></div>
    </React.Fragment>
  );
}

export default Transition;
