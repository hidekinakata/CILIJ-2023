import React from "react";

type CompleteScheduleType = {};

const CompleteSchedule: React.FC<CompleteScheduleType> = (props) => {
  return (
    <main
      className={
        "flex min-h-screen flex-col px-4  pb-10 pt-32 sm:px-32 md:pt-44"
      }
    >
      <h1 className={"text-center text-4xl md:text-5xl"}>Programação</h1>
    </main>
  );
};

export default CompleteSchedule;
