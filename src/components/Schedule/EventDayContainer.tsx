import React from "react";
import { EventDayType, Schedule } from "../../data/schedule_data";

type EventDayContainerType = {
  eventDay: EventDayType;
} & React.ComponentProps<"section">;

const EventDayContainer: React.FC<EventDayContainerType> = ({
  eventDay: { key, day, day_week, morning, afternoon, night },
  className,
  ...props
}) => {
  return (
    <section
      className={"relative mb-20 h-fit w-full  p-4 text-white"}
      {...props}
    >
      <span id={day.replaceAll(" ", "_")} className={"absolute -top-36"} />
      <h1 className={"text-3xl"}>{day}</h1>
      <h2 className={"mb-10 text-lg opacity-60"}>{day_week}</h2>
      <div
        className={
          "flex h-full flex-col justify-start gap-10 border-l px-2 py-3"
        }
      >
        <PeriodContainer title={"Manhã"} schedules={morning} />
        <PeriodContainer title={"Tarde"} schedules={afternoon} />
        <PeriodContainer title={"Noite"} schedules={night} />
      </div>
    </section>
  );
};

const PeriodContainer: React.FC<{ title: string; schedules: Schedule[] }> = ({
  title,
  schedules,
}) => {
  return (
    <div className={"relative my-2"}>
      <span
        className={"absolute -left-3 top-3 h-2 w-2 rounded-full bg-white"}
      ></span>
      <h1
        className={
          "mb-2  border-b border-b-black/20 pb-2 text-left text-2xl md:text-3xl"
        }
      >
        {title}
      </h1>
      <div className={"flex flex-col gap-5"}>
        {schedules.map((schedule) => (
          <div className={"bg-white/10 p-3"}>
            <h1
              className={
                schedule.title ? "text-center text-xl md:text-2xl" : ""
              }
            >
              {schedule.type_title}
            </h1>
            {schedule.title ? (
              <h2 className={"text-center text-lg opacity-50 md:text-xl"}>
                {schedule.title}
              </h2>
            ) : null}
            {schedule.presenters
              ? schedule.presenters.map((presenter) => (
                  <div
                    className={
                      "mb-3 flex flex-col items-center border-t border-t-white/50 py-8 md:block"
                    }
                  >
                    <figure
                      className={
                        "float-left mb-3 flex w-48 flex-col justify-center md:mr-5 md:place-self-start"
                      }
                    >
                      <div className={"h-60 w-48 "}>
                        <img
                          src={presenter.pictureSrc}
                          className={"h-60 w-48 object-cover"}
                        />
                      </div>
                      <figcaption className={"text-center"}>
                        {presenter.name}
                      </figcaption>
                    </figure>

                    {presenter.presentation ? (
                      <>
                        <h1
                          className={
                            "my-6 text-center text-base font-black md:my-0 md:mb-6 md:text-xl"
                          }
                        >
                          {presenter.presentation.title}
                        </h1>
                        <p
                          className={
                            "pb-3 text-justify indent-8 text-sm text-white/80  md:text-base "
                          }
                        >
                          {presenter.presentation.resume}
                        </p>
                      </>
                    ) : null}

                    <div
                      className={`text-sm text-white/80 md:text-base ${
                        presenter.presentation ? "md:col-span-2" : ""
                      }`}
                    >
                      <h1
                        className={"mb-2 mt-6 text-center text-base md:text-lg"}
                      >
                        Sobre {presenter.name}
                      </h1>
                      <p className={"text-justify indent-8 "}>
                        {presenter.resume}
                      </p>
                    </div>
                  </div>
                ))
              : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventDayContainer;
