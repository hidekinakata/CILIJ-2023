import React from "react";
import { EventDayType, Schedule } from "../../data/schedule_data";
import { HashLink } from "react-router-hash-link";

type ResumedEventDayContainerType = {
  eventDay: EventDayType;
} & React.ComponentProps<"section">;

const ResumedEventDayContainer: React.FC<ResumedEventDayContainerType> = ({
  eventDay: { key, day, day_week, morning, afternoon, night },
  className,
  ...props
}) => {
  return (
    <section className={"relative mb-20 h-fit w-full p-4"} {...props}>
      <span id={day.replaceAll(" ", "_")} className={"absolute -top-36"} />
      <div
        className={
          "grid auto-rows-auto gap-5 lg:auto-cols-fr lg:grid-flow-col lg:grid-rows-none"
        }
      >
        <PeriodContainer
          key={key + "morning"}
          id={key}
          title={"Manhã"}
          schedules={morning}
        />
        <PeriodContainer
          key={key + "afternoon"}
          id={key}
          title={"Tarde"}
          schedules={afternoon}
        />
        <PeriodContainer
          key={key + "night"}
          id={key}
          title={"Noite"}
          schedules={night}
        />
      </div>
    </section>
  );
};

const PeriodContainer: React.FC<{
  id: string;
  title: string;
  schedules: Schedule[];
}> = ({ id, title, schedules }) => {
  if (schedules.length === 0) return null;
  return (
    <div className={"relative my-2"}>
      <span
        className={"absolute -left-3 top-3 h-2 w-2 rounded-full bg-white"}
      ></span>
      <h1
        className={
          "mb-2  border-b border-b-black/20 pb-2 text-center text-2xl md:text-3xl"
        }
      >
        {title}
      </h1>
      <div className={"flex flex-col gap-5 border-l"}>
        {schedules.map((schedule, i) => (
          <div
            key={schedule.type_title + i}
            className={"relative bg-white/10 p-3"}
          >
            <div
              className={
                "absolute -left-1 top-5 h-2 w-2 rounded-full bg-truegray-400 "
              }
            ></div>

            <span className={""}>{schedule.time} </span>
            <h1 className={""}>
              <HashLink
                to={`/programacao/#${`${id}_${title}_${schedule.type_title}`.replaceAll(
                  " ",
                  "_"
                )}`}
              >
                {schedule.type_title}
              </HashLink>
            </h1>
            {schedule.title ? (
              <h2 className={" text-base font-black"}>{schedule.title}</h2>
            ) : null}
            {schedule.presenters ? (
              <div className={"text-left"}>
                <span className={"text-xs"}>Palestrante(s): </span>
                {schedule.presenters
                  .map(
                    (presenter) => presenter.name + " " + presenter.occupation
                  )
                  .join(", ")}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumedEventDayContainer;
