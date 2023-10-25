import React from "react";

type SubscribeBtnType = {
  className?: string;
};

const InterSubscribeBtn: React.FC<SubscribeBtnType> = (props) => {
  return (
    <>
      <a
        className={
          "block w-fit cursor-pointer rounded bg-bermuda-400 p-2 px-5 text-center text-lg text-white shadow transition hover:bg-bermuda-400 hover:shadow-[0_0_10px_1px] hover:shadow-bermuda-300"
        }
        href={
          "https://docs.google.com/forms/d/e/1FAIpQLScB0OnneqPoQiDPVReALOJOlhVN_c0uMzbPnjwgCGyf6mOKVg/viewform?usp=sf_link"
        }
        target={"_blank"}
      >
        International registration
      </a>
    </>
  );
};

export default InterSubscribeBtn;
