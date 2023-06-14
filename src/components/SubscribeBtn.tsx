import React from "react";

type SubscribeBtnType = {
  className?: string;
};

const SubscribeBtn: React.FC<SubscribeBtnType> = (props) => {
  return (
    <>
      <a
        href={"https://forms.gle/xKRyEwJBzdpxNnpy8"}
        target={"_blank"}
        className={
          props.className +
          "block w-fit cursor-pointer rounded bg-bermuda-400 p-2 px-5 text-center text-2xl text-white shadow transition hover:bg-bermuda-400 hover:shadow-[0_0_10px_1px] hover:shadow-bermuda-300"
        }
      >
        Faça sua inscrição
      </a>
    </>
  );
};

export default SubscribeBtn;
