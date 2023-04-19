import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  MotionConfig,
  Variant,
  Variants,
} from "framer-motion";
import useScrollBehavior from "../hooks/useScrollBehavior";

type NavbarType = {};

const Navbar: React.FC<NavbarType> = (props) => {
  return (
    <AnimatePresence>
      <header>
        <motion.nav
          variants={NavVariants}
          initial={"initial"}
          animate={"onTop"}
          className={`z-1 fixed top-0 h-20 w-full border border-b-black bg-white/30 backdrop-blur`}
        >
          {/* Logo */}
          <a className="" href="#">
            VII Congresso Internacional <br /> de Literatura Infantil e Juvenil
          </a>
          {/* Toggle button */}
          <MotionConfig></MotionConfig>
          {/*  Main menu */}
          <div></div>
        </motion.nav>
      </header>
    </AnimatePresence>
  );
};

const NavVariants: Variants = {
  onTop: {
    opacity: 1,
    y: "0rem",
  },
  initial: {
    opacity: 0,
    y: "-5rem",
    transition: {
      duration: 0.5,
      display: {
        delay: 0.5,
      },
    },
  },
};

export default Navbar;
