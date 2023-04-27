import React from "react";

type SubscribeBtnType = {
  className?: string;
};

const SubscribeBtn: React.FC<SubscribeBtnType> = (props) => {
  return (
    <>
      <a
        className={
          props.className +
          " w-fit cursor-pointer rounded bg-bermuda-400 p-2 px-5 text-center text-2xl text-white hover:bg-bermuda-400"
        }
      >
        Faça sua inscrição
      </a>
    </>
  );
};

export default SubscribeBtn;
