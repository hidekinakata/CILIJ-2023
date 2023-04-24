import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { useEffect, useState } from "react";
import { CgClose, CgMenuRight, CgMenuRightAlt } from "react-icons/cg";
import { Link } from "react-router-dom";
import useScrollBehavior from "../hooks/useScrollBehavior";
import { GiLog } from "react-icons/all";

type NavbarType = {};

const NavVariants: Variants = {
  hidden: {
    display: "none",
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      display: {
        delay: 0.3,
      },
    },
  },
  visible: {
    display: "flex",
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Navbar: React.FC<NavbarType> = (props) => {
  const paths = [
    { name: "Home", path: "/#" },
    { name: "Sobre o evento", path: "/#sobre" },
    { name: "Palestras", path: "#" },
    { name: "Mesas Redondas", path: "#" },
    { name: "Coodenadores", path: "#" },
    { name: "Orientações", path: "#" },
    { name: "Contato", path: "#" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const scrollBehavior = useScrollBehavior();

  useEffect(() => console.log(scrollBehavior), [scrollBehavior]);

  return (
    <motion.header
      variants={{
        show: {
          y: 0,
          opacity: 1,
        },
        hidden: { y: -200, opacity: 0 },
      }}
      initial={"show"}
      animate={scrollBehavior === "scrollDown" ? "hidden" : "show"}
      transition={{
        duration: 0.5,
        delay: 0.5,
      }}
      className={"fixed z-10 h-fit w-full bg-aubergine-900"}
    >
      <div className={"relative flex h-24 w-full items-center justify-center"}>
        <Link
          to={"/"}
          className={
            "w-[calc(100%-9rem)] text-center font-black uppercase text-white md:text-2xl"
          }
        >
          VII Congresso Internacional de Literatura Infantil e Juvenil
        </Link>
        <button
          className={
            "absolute right-5 top-1/2 -translate-y-1/2 uppercase text-white md:hidden"
          }
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          {isOpen ? (
            <CgClose className={"text-3xl"} />
          ) : (
            <CgMenuRightAlt className={"text-3xl"} />
          )}
        </button>
      </div>

      <motion.nav
        variants={NavVariants}
        initial={"hidden"}
        animate={isOpen ? "visible" : "hidden"}
        className={"h-10 md:!block md:!opacity-100"}
      >
        <ul
          className={
            "flex h-[calc(100vh-6rem)] w-full flex-col items-end justify-center gap-5 border-b border-b-black/20 bg-white  px-7 pb-10 text-2xl md:!flex md:h-fit md:flex-row md:py-2 md:text-sm md:!opacity-100 [&>li:hover]:text-bermuda-700"
          }
        >
          {paths.map((path, i) => (
            <motion.li
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: { type: "linear", duration: 0.5 },
                },
              }}
              key={i}
              className={
                "flex w-full items-center justify-center border-b border-b-black/[0.01] text-center transition hover:border-b-black/20 md:w-fit md:!transform-none md:!opacity-100"
              }
            >
              {path.path.startsWith("#") ||
              path.path.startsWith(location.pathname + "#") ? (
                <a href={path.path} onClick={() => setIsOpen(false)}>
                  {path.name}
                </a>
              ) : (
                <Link to={path.path} onClick={() => setIsOpen(false)}>
                  {path.name}
                </Link>
              )}
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </motion.header>
  );
};

export default Navbar;
