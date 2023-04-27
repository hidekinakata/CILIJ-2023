import React from "react";
import { BiCopyright } from "react-icons/bi";

type FooterType = {};

const Footer: React.FC<FooterType> = (props) => {
  return (
    <footer
      className={
        "mt-auto flex h-60 w-full items-center bg-aubergine-900 font-medium text-white"
      }
    >
      <div className={"w-full whitespace-pre-wrap"}>
        <p className={"flex w-full items-center justify-center gap-1"}>
          Copyright
          <span className={"whitespace-nowrap"}>
            <BiCopyright />
          </span>
          2023
        </p>
        <p className={" w-full text-center"}>PROLELI</p>
      </div>
    </footer>
  );
};

export default Footer;
