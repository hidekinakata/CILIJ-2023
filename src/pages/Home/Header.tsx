import React from "react";
import poster from "../../assets/poster.png";
import SubscribeBtn from "../../components/SubscribeBtn";

type HomeType = {};

const Header: React.FC<HomeType> = (props) => {
  return (
    <section
      className={
        "relative flex min-h-screen w-full items-center justify-center px-12 pt-20 lg:px-32"
      }
      // style={{
      //   background: `linear-gradient(90deg, rgba(255,255,255,1) 44%, rgba(255,255,255,0) 100%), url(${poster})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "auto 180vh",
      //   backgroundPosition: "right",
      // }}
    >
      <div
        className={
          "flex h-fit flex-col-reverse items-center justify-center md:flex-row md:justify-start md:gap-20"
        }
      >
        <div
          className={
            "mt-6 flex h-full flex-col justify-center text-center md:mt-0 md:justify-start md:text-left"
          }
        >
          <h3 className={"text-lg"}>
            <span className={"text-red-800"}>VII</span> Congresso Internacional
            de
            <br />
            <span className={"text-red-800"}>
              Literatura Infantil e Juvenil
            </span>
          </h3>
          <h1 className={"text-3xl font-black md:max-w-screen-sm md:text-6xl "}>
            Educação literária:
            <span className={"font-['Caveat'] text-red-700"}>
              <br />
              Mudanças em movimento
            </span>
          </h1>
          <div className={"mt-10 w-fit self-center md:self-start"}>
            <SubscribeBtn />
          </div>
        </div>

        <div className={"max-h-[40vh] max-w-full md:max-h-[55vh]"}>
          <img
            className={"max-h-[40vh] max-w-full md:max-h-[55vh]"}
            src={poster}
            alt={"Event Poster"}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
