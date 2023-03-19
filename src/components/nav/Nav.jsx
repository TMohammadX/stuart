import React, { useState } from "react";
import "./nav.css";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { Link as Link2 } from "react-router-dom";
import logo from "../../assets/logo.svg";

export default function Nav() {
  const [isActive, setIsActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [nav, setNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 20) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeNav);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <motion.div className={nav ? "nav nav-af" : "nav"}>
      <Link2
        to="/"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "tween", stiffness: 400, damping: 5 }}
        className={nav ? "logo logo-af" : "logo"}
      >
        STUART
      </Link2>
      <motion.a href="/" className={nav ? "logo-i logoi" : "logo-i"}>
        <img src={logo} alt="" className="logo-icon" />
      </motion.a>

      <div className="right">
        <Link2 to="/contact" className="getin">
          Get In Touch
        </Link2>
        <HiMenu className="open" role="button" onClick={handleToggle} />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "100vh" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="menuNav"
          >
            <div className="nav">
              <motion.a
                href="/"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "tween", stiffness: 200, damping: 5 }}
                className="logo1"
              >
                STUART
              </motion.a>
              <MdClose className="close" role="button" onClick={handleClose} />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="links"
            >
              <NavLink to="/" onClick={() => handleClose()} className="link">
                <motion.span id="span">H</motion.span>
                <motion.span id="span">O</motion.span>
                <motion.span id="span">M</motion.span>
                <motion.span id="span">E</motion.span>
              </NavLink>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={() => handleClose()}
                className="link"
              >
                ABOUT
              </Link>
              <Link
                to="featured"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={() => handleClose()}
                className="link"
              >
                FEATURED
              </Link>
              <Link2
                to="contact"
                spy={true}
                smooth={true}
                duration={1500}
                onClick={() => handleClose()}
                className="link"
              >
                CONTACT
              </Link2>
            </motion.div>
            <div className="media">
              <a href="#" className="media-link">
                <AiFillInstagram />
              </a>

              <a href="#" className="media-link">
                <FaTiktok />
              </a>
            </div>
            <motion.div className="git">
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "anticipate" }}
                className="git-header"
              >
                Get In Touch
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "anticipate", delay: 0.3 }}
                className="git-p"
              >
                5060 Sources Blvd, Pierrefonds, Quebec H8Y 3E4
              </motion.h2>
              <motion.a
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "anticipate", delay: 0.6 }}
                href="mailto:info@stuart.ca"
                className="git-infos"
              >
                stuart@gmail.com
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "anticipate", delay: 0.7 }}
                href="tel:514239847"
                className="git-infos"
              >
                +1 514 876 5476
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
