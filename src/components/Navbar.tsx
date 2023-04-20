import React, { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BsChevronCompactLeft,
  BsFillCaretLeftFill,
  IoIosSquare,
} from "react-icons/all";

type NavbarType = {};

const Navbar: React.FC<NavbarType> = (props) => {
  const paths = [
    { name: "Home", path: "/" },
    { name: "Informações", path: "/sobre" },
    { name: "Palestras", path: "#" },
    { name: "Mesas Redondas", path: "#" },
    { name: "Coodenadores", path: "#" },
    { name: "Orientações", path: "#" },
    { name: "Contato", path: "#" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatePresence>
      <header className={"fixed top-0 z-10 h-20 w-full"}>
        <motion.nav
          variants={NavVariants}
          initial={"initial"}
          animate={"onTop"}
          className={`h-full w-full bg-white/30`}
        >
          <div
            id={"NavContainer"}
            className={
              "flex h-full w-full items-center justify-between px-7 backdrop-blur md:px-24"
            }
          >
            {/* Logo */}
            <a className="font-black" href="#">
              <span className={"text-red-800"}>VII</span> Congresso
              Internacional de
              <br />
              <span className={"text-red-800"}>
                Literatura Infantil e Juvenil
              </span>
            </a>
            {/* Toggle button */}
            <div className={"flex items-center gap-10"}>
              <a
                className={
                  " hidden cursor-pointer rounded-full bg-bermuda-500 p-2 text-white hover:bg-bermuda-400 md:block"
                }
              >
                Acompanhe sua inscrição
              </a>
              <motion.button
                className={
                  "box-content flex h-7 w-fit flex-col items-center justify-between rounded border border-black/30 p-3"
                }
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <motion.div
                  initial={"open"}
                  animate={isOpen ? "close" : "open"}
                  className={"relative m-1 h-full w-full"}
                >
                  <motion.div
                    variants={{
                      open: { translateY: "0", rotate: 0 },
                      close: {
                        rotate: 35,
                        top: "50%",
                        translateY: "-50%",
                      },
                    }}
                    className={"absolute h-0.5 w-full bg-black"}
                  />
                  <motion.div
                    variants={{
                      open: { translateY: "-50%", rotate: 0, top: "100%" },
                      close: {
                        rotate: -35,
                        top: "50%",
                        translateY: "-50%",
                      },
                    }}
                    className={"absolute h-0.5 w-full bg-black"}
                  />
                </motion.div>
                <motion.span className={"w-full text-[10px] leading-none"}>
                  menu
                </motion.span>
              </motion.button>
            </div>
          </div>
          {/* Menu */}
          <motion.div
            variants={MenuVariant}
            initial={"hidden"}
            animate={isOpen ? "visible" : "hidden"}
            className={
              "z-0 justify-between bg-white/30 p-7 shadow backdrop-blur md:ml-auto md:mr-24 md:mt-3 md:w-fit md:rounded-xl "
            }
          >
            <ul
              className={
                "flex w-full flex-col items-end justify-between gap-1 py-4 text-lg md:w-64 [&>li:hover]:text-bermuda-700 "
              }
            >
              {paths.map((path, i) => (
                <li
                  key={i}
                  className={
                    "flex w-full items-center justify-end gap-3 border-b border-b-black/[0.01] text-right transition hover:border-b-black/20"
                  }
                >
                  <Link to={path.path}>{path.name}</Link>
                  <IoIosSquare className={"text-sm"} />
                </li>
              ))}
            </ul>
            <a
              className={
                "mx-auto block w-fit cursor-pointer rounded-full bg-bermuda-500 px-4 py-2 text-white hover:bg-bermuda-400 md:hidden"
              }
            >
              Acompanhe sua inscrição
            </a>
          </motion.div>
        </motion.nav>
      </header>
    </AnimatePresence>
  );
};

const MenuVariant: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
    display: "none",
    transition: {
      display: {
        delay: 0.3,
      },
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    display: "block",
  },
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
