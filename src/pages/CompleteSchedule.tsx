import React from "react";

import schedule_data from "../data/schedule_data";
import EventDayContainer from "../components/Schedule/EventDayContainer";
import { HashLink } from "react-router-hash-link";

type CompleteScheduleType = {};

const CompleteSchedule: React.FC<CompleteScheduleType> = (props) => {
  return (
    <main
      className={
        "relative flex min-h-screen flex-col items-center  px-4 pb-10 pt-32 sm:px-32 md:pt-44"
      }
    >
      <h1
        className={"my-8 text-center text-2xl font-black md:mb-12 md:text-5xl"}
      >
        Programação completa do evento
      </h1>
      <div
        className={
          "w-full [&>*:nth-child(1)]:bg-aubergine-900 [&>*:nth-child(2)]:bg-fuel-yellow-600 [&>*:nth-child(3)]:bg-pine-glade-700"
        }
      >
        {schedule_data.map((day) => (
          <EventDayContainer key={day.key} eventDay={day} />
        ))}
      </div>
      <div
        className={
          "sticky bottom-8  h-fit w-fit rounded-full bg-aubergine-700/80 px-2 text-white shadow-md backdrop-blur"
        }
      >
        <nav>
          <ul
            className={
              "grid w-full grid-cols-3  [&>*:nth-child(even)]:border-x-2 [&>*]:px-2 [&>*]:py-4"
            }
          >
            {schedule_data.map((day) => (
              <HashLink
                key={day.key}
                className={"border-white/20 text-center"}
                to={"/programacao#" + day.day.replaceAll(" ", "_")}
              >
                {day.day}
              </HashLink>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
};

export default CompleteSchedule;
