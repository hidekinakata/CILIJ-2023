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
          " w-fit cursor-pointer bg-bermuda-500 p-2 px-4 text-center text-white hover:bg-bermuda-400"
        }
      >
        Faça sua inscrição
      </a>
    </>
  );
};

export default SubscribeBtn;
