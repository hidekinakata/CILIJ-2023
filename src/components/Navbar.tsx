import { motion, Variants } from "framer-motion";
import React, { useEffect, useState } from "react";
import { CgClose, CgMenuRightAlt } from "react-icons/cg";
import { Link } from "react-router-dom";
import useScrollBehavior from "../hooks/useScrollBehavior";
import { useMediaQuery } from "usehooks-ts";
import { HashLink } from "react-router-hash-link";

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
    { name: "Investimento", path: "/#investimento" },
    { name: "Programação", path: "/#programacao" },
    { name: "Eixos temáticos", path: "/eixos" },
    { name: "Orientações", path: "/orientacoes" },
    { name: "Templates", path: "/templates" },
    { name: "Comissões", path: "/comissoes" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const scrollBehavior = useScrollBehavior();
  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (matches) setIsOpen(false);
  }, [matches]);

  // useEffect(() => {
  //   function handleMove(e: MouseEvent) {
  //     if (e.clientY < 40) return setIsOpen(true);
  //   }
  //   window.addEventListener("mousemove", handleMove);
  //
  //   return () => window.removeEventListener("mousemove", handleMove);
  // }, []);

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
      animate={scrollBehavior === "scrollDown" && !isOpen ? "hidden" : "show"}
      transition={{
        duration: 0.2,
        delay: 0.2,
      }}
      className={"fixed z-50 h-fit w-full bg-aubergine-700"}
    >
      <div className={"relative flex h-24 w-full items-center justify-center"}>
        <Link
          to={"/"}
          className={
            "w-[calc(100%-9rem)] text-center font-semibold uppercase text-white md:text-2xl"
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
        className={"h-10 text-black md:!block md:!opacity-100"}
      >
        <ul
          className={
            "flex h-[calc(100vh-6rem)] w-full flex-col items-center justify-center gap-5 border-b border-b-black/20 bg-white  px-7 pb-10 text-2xl md:!flex md:h-fit md:flex-row md:py-2 md:text-sm md:!opacity-100 [&>li:hover]:text-bermuda-700"
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
                <HashLink
                  smooth={true}
                  to={path.path}
                  onClick={() => setIsOpen(false)}
                >
                  {path.name}
                </HashLink>
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
