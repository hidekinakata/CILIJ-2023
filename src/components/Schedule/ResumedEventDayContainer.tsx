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
          <HashLink
            to={`/programacao/#${`${id}_${title}_${schedule.type_title}`.replaceAll(
              " ",
              "_"
            )}`}
          >
            <div
              key={schedule.type_title + i}
              className={
                "bg-red/10 relative rounded-xl p-3 transition hover:translate-x-1 hover:font-normal hover:shadow-[3px_3px_10px] hover:shadow-fuel-yellow-400/90"
              }
            >
              <div
                className={
                  "absolute -left-1 top-5 h-2 w-2 rounded-full bg-truegray-400 "
                }
              ></div>

              <span
                className={
                  "mb-2 block font-semibold text-fuel-yellow-400 drop-shadow-md"
                }
              >
                {schedule.time}{" "}
              </span>
              <div className={""}>
                <h1 className={""}>{schedule.type_title}</h1>
                {schedule.title ? (
                  <h2 className={" text-base font-semibold"}>
                    {schedule.title}
                  </h2>
                ) : null}
                {schedule.presenters ? (
                  <div className={"text-left"}>
                    <span className={"text-xs"}>Palestrante(s): </span>
                    {schedule.presenters
                      .map(
                        (presenter) =>
                          presenter.name + " " + presenter.occupation
                      )
                      .join(", ")}
                  </div>
                ) : null}
              </div>
            </div>
          </HashLink>
        ))}
      </div>
    </div>
  );
};

export default ResumedEventDayContainer;
