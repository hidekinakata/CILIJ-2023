import React from "react";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import schedule_data from "../../data/schedule_data";
import ResumedEventDayContainer from "../../components/Schedule/ResumedEventDayContainer";

type ScheduleType = {};

const Schedule: React.FC<ScheduleType> = (props) => {
  return (
    <section
      id="programacao"
      className={
        "[&>p:not(:)] h-fit px-3 pb-10 pt-28 text-justify text-sm sm:px-24 sm:text-base"
      }
    >
      <h1 className={"mb-10 text-center text-5xl"}> Programação </h1>
      <h2 className={"mb-10 text-center text-2xl"}>
        Local: Centro de convenções da UFOP - Ouro Preto - MG
      </h2>

      <Tabs value={schedule_data[0].key} className={"relative z-[1]"}>
        <TabsHeader
          className={"bg-truegray-500/10"}
          indicatorProps={{
            className: "bg-fuel-yellow-400/80 shadow-none text-blue-500",
          }}
        >
          {schedule_data.map((day) => (
            <Tab key={day.key} value={day.key} className={"flex flex-col p-2"}>
              <h1>{day.short_day}</h1>
              <h2 className={"text-sm"}>{day.day_week}</h2>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className={"h-fit"}>
          {schedule_data.map((day) => (
            <TabPanel key={day.key} value={day.key} className={"p-0"}>
              <ResumedEventDayContainer eventDay={day} key={day.key} />
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>

      <div className={"mx-4 my-6 flex items-center justify-center"}>
        <Link
          to={"/programacao"}
          className={
            "rounded bg-fuel-yellow-400 p-4 px-5 text-center text-xl text-white"
          }
        >
          Veja a programação completa aqui
        </Link>
      </div>
    </section>
  );
};

export default Schedule;
