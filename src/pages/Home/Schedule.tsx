import React from "react";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { WiDaySunny, WiHorizonAlt, WiNightClear } from "react-icons/wi";
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
        <TabsBody>
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

const data = [
  {
    day: "06/12",
    dayw: "Quarta-feira",
    value: "day1",
    desc: [
      {
        title: "Manhã ",
        schedule: [
          "Credenciamento",
          "Abertura",
          {
            title: "Conferência de Abertura",
            content: "João Anzanello Carrascoza (escritor)",
          },
        ],
      },
      {
        title: "Tarde",
        schedule: [
          {
            title: "Mesa redonda 1: Os pequenos",
            content:
              "Teresa Mendes (pesquisadora Portugal), Aline Abreu (escritora), Daniela Padilha (editora) ",
          },
          {
            title: "Mesa redonda 2: Os maiores",
            content:
              "Andreia Oliveira (pesquisadora), José Roberto Torrero (escritor), Irene Vasco (escritora Colômbia)",
          },
        ],
      },
      {
        title: "Noite",
        schedule: ["Sarau Literário"],
      },
    ],
  },
  {
    day: "07/12",
    dayw: "Quinta-feira",
    value: "day2",
    desc: [
      {
        title: "Manhã",
        schedule: ["Apresentações de trabalhos", "Apresentações de pôster"],
      },
      {
        title: "Tarde",
        schedule: [
          "Apresentações de trabalhos",
          "Apresentações de pôster",
          {
            title: "Mesa Especial: Minas Gerais e a literatura",
            content:
              "Marta Passos (pesquisadora), Nelson Cruz (ilustrador), Ângela Leite, (escritora)",
          },
        ],
      },

      {
        title: "Noite",
        schedule: ["Lançamento de livros"],
      },
    ],
  },
  {
    day: "08/12",
    dayw: "Sexta-feira",
    value: "day3",
    desc: [
      {
        title: "Manhã",
        schedule: [
          {
            title: "Mesa redonda 3: Tradição Popular ",
            content:
              "Alexandre Gomes (escritor), Marco Haurelio (escritor), Fernando Teixeira Luis (pesquisador)",
          },
          {
            title: "Mesa redonda 4: Ilustração",
            content:
              "Hércules Tolêdo Corrêa (pesquisador), Odilon Moraes (ilustrador), Renato Moriconi (ilustrador)",
          },
        ],
      },
      {
        title: "Tarde",
        schedule: [
          {
            title: "Conferência de Encerramento",
            content: "María Teresa Andruetto (Argentina)",
          },

          "Show cultural de encerramento",
        ],
      },
      {
        title: "Noite",
        schedule: [],
      },
    ],
  },
];

export default Schedule;
