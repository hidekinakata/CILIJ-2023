import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { BsArrowReturnRight } from "react-icons/all";

type ScheduleType = {};

const Schedule: React.FC<ScheduleType> = (props) => {
  const data = [
    {
      day: "06/12",
      dayw: "Quarta-feira",
      value: "day1",
      desc: [
        {
          title: "Manhã",
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
            "Lançamento de livros ",
          ],
        },

        {
          title: "Noite",
          schedule: ["Sarau Literário"],
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
            "Conferência de Encerramento",
            "María Teresa Andruetto (Argentina)",
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

  return (
    <section
      id="sobre"
      className={
        "[&>p:not(:)] min-h-screen px-3 pb-10 pt-28 text-justify text-sm sm:px-32 sm:text-base"
      }
    >
      <h1 className={"mb-10 text-center text-5xl"}> Programação </h1>

      <Tabs value="day1" className={"relative z-[1]"}>
        <TabsHeader>
          {data.map(({ day, dayw, value }) => (
            <Tab key={value} value={value} className={"flex flex-col p-2"}>
              <h1>{day}</h1>
              <h2 className={"text-sm"}>{dayw}</h2>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc.map(({ title, schedule }) => (
                <div key={title}>
                  <h1 className={"mb-5 border-b text-center text-xl"}>
                    {title}
                  </h1>
                  <ul
                    className={
                      "mb-10 text-left text-sm [&>li:not(:last-child)]:mb-5"
                    }
                  >
                    {schedule.map((item, index) => {
                      if (!Object.keys(item).includes("title"))
                        return (
                          <li
                            key={item as string}
                            className={"flex items-center gap-3"}
                          >
                            <div>
                              <BsArrowReturnRight className={"w-6 stroke-2"} />
                            </div>
                            <div className={""}>
                              <h1>{item as string}</h1>
                              <span></span>
                            </div>
                          </li>
                        );
                      else {
                        let content = item as {
                          title: string;
                          content: string;
                        };
                        return (
                          <li
                            key={content.title}
                            className={"flex items-center gap-3"}
                          >
                            <div>
                              <BsArrowReturnRight className={"w-6 stroke-2"} />
                            </div>
                            <div className={""}>
                              <h1 className={"font-black"}>{content.title}</h1>
                              <span>{content.content}</span>
                            </div>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </div>
              ))}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </section>
  );
};

export default Schedule;
