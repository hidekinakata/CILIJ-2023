import React from "react";
import {
  LuBadgeInfo,
  LuBedDouble,
  LuGroup,
  LuHotel,
  LuMail,
  LuPhone,
  LuUserSquare,
  LuUsers,
  LuWarehouse,
} from "react-icons/lu";
import { PiArrowElbowDownRightBold, PiWhatsappLogo } from "react-icons/pi";
import { useMediaQuery } from "usehooks-ts";
type OuroPretoType = {};

const HOSPEDAGENS_DESCONTO: string[] = [
  "Pousada Caminhos da Liberdade",
  "Hotel Solar da Ópera",
  "Brumas Albergue Hostel",
  "Casa Raiz Hostel",
  "Ouro Preto Premium Hostel",
];

const HOSTELS: {
  nome: string;
  telefone: string;
}[] = [
  {
    nome: "Brumas Albergue Hostel",
    telefone: "(31) 3551-2944",
  },
  {
    nome: "Ouro Preto Premium Hostel",
    telefone: "(31) 98503-7197",
  },
  {
    nome: "É Hostel",
    telefone: "(31) 99762-4683",
  },
  {
    nome: "La Musica Hostel Ouro Preto",
    telefone: "(31) 98736-1072",
  },
  {
    nome: "Casa Raiz Hostel",
    telefone: "(31) 99805-2042",
  },
  {
    nome: "Casa Pitanga",
    telefone: "(31) 99659-9990",
  },
];

const HOSPEDAGENS: {
  nome: string;
  telefone: string;
  obs?: string;
  quartos?: {
    tipo: string;
    preco:
      | string
      | {
          tipo: string;
          preco: string;
        }[];
  }[];
}[] = [
  {
    nome: "Hotel Nossa Senhora Aparecida",
    telefone: "(31) 3551-1091",
    quartos: [
      {
        tipo: "Individual",
        preco: "R$149",
      },
      {
        tipo: "Quarto duplo (2 camas de solteiro)",
        preco: "R$250",
      },
      {
        tipo: "Quarto duplo (3 camas de solteiro)",
        preco: "R$360",
      },
    ],
  },
  {
    nome: "Pouso do Chico Rey",
    telefone: "(31) 3551-1274",
    quartos: [
      {
        tipo: "Individual",
        preco: "R$321,00",
      },
      {
        tipo: "Duplo",
        preco: "R$361,00",
      },
      {
        tipo: "Triplo",
        preco: "R$401,00",
      },
    ],
  },
  {
    nome: "Grande Hotel de Ouro Preto",
    telefone: "(31) 3551-1488",
    quartos: [
      {
        tipo: "Individual",
        preco: "R$303",
      },
      {
        tipo: "Quarto duplo (2 camas de solteiro ou 1 de casal)",
        preco: "R$419",
      },
      {
        tipo: "Suíte com Varanda",
        preco: [
          {
            tipo: "Individual",
            preco: "R$495",
          },
          {
            tipo: "Duplo",
            preco: "R$634",
          },
          {
            tipo: "Triplo",
            preco: "R$688",
          },
          {
            tipo: "Quádruplo",
            preco: "R$752",
          },
          {
            tipo: "Quíntuplo",
            preco: "R$817",
          },
        ],
      },
    ],
  },
  {
    nome: "Hotel Pousada Clássica",
    telefone: "(31) 3551-3663",
    quartos: [
      {
        tipo: "Quarto duplo (2 camas de solteiro)",
        preco: "R$480,00",
      },
      {
        tipo: "Quarto triplo (3 camas de solteiro)",
        preco: "R$600,00",
      },
    ],
  },
  {
    nome: "Hotel Solar do Rosário",
    telefone: "(31) 3551-5200",
    quartos: [
      {
        tipo: "Quarto duplo",
        preco: "R$677,00",
      },
      {
        tipo: "Quarto triplo",
        preco: "R$982,00",
      },
    ],
  },
  {
    nome: "Hotel Solar da Ópera",
    telefone: "(31) 3551-6844",
    obs: "Café da manhã, estacionamento e internet Wifi.",
    quartos: [
      {
        tipo: "Standard",
        preco: [
          {
            tipo: "Individual",
            preco: "R$540,00",
          },
          {
            tipo: "Duplo",
            preco: "R$629,00",
          },
        ],
      },
      {
        tipo: "Luxo",
        preco: [
          {
            tipo: "Individual",
            preco: "R$580,00",
          },
          {
            tipo: "Duplo",
            preco: "R$677,00",
          },
          {
            tipo: "Triplo",
            preco: "R$825,00",
          },
        ],
      },
      {
        tipo: "Superior",
        preco: [
          {
            tipo: "Individual",
            preco: "R$665,00",
          },
          {
            tipo: "Duplo",
            preco: "R$753,00",
          },
          {
            tipo: "Triplo",
            preco: "R$938,00",
          },
        ],
      },
    ],
  },
  {
    nome: "Teatro Hotel Boutique",
    telefone: "(31) 3350-3920",
    quartos: [
      {
        tipo: "Quarto duplo (cama de casal)",
        preco: "R$377",
      },
    ],
  },
  {
    nome: "Pousada Vila Catarina",
    telefone: "(31) 97512-4364",
    quartos: [
      {
        tipo: "Quarto duplo (2 camas de solteiro)",
        preco: "R$390",
      },
      {
        tipo: "Quarto duplo (cama de casal)",
        preco: "R$490",
      },
    ],
  },
  {
    nome: "Pousada Laços de Minas",
    telefone: "(31) 3552-2597",
    quartos: [
      {
        tipo: "Quarto duplo (2 camas de solteiro)",
        preco: "R$491",
      },
    ],
  },
  {
    nome: "Pousada Caminhos da Liberdade",
    telefone: "(31) 3552-2825",
    obs: "Valores serão enviados",
  },
];

const REPUBLICAS = {
  Diárias: "R$50,00",
};

interface RepublicaData {
  REPUBLICA: string;
  RESPONSAVEL: string;
  WHATSAPP: string;
  TELEFONE: string;
  E_MAIL: string;
  VAGAS: number;
}

const republicaData: RepublicaData[] = [
  {
    REPUBLICA: "Pasárgada",
    RESPONSAVEL: "Ryan",
    WHATSAPP: "31975850463",
    TELEFONE: "3135515193",
    E_MAIL: "pasargada@republicapasargada.com.br",
    VAGAS: 10,
  },
  {
    REPUBLICA: "Casanova",
    RESPONSAVEL: "Cleyson",
    WHATSAPP: "31 84130758",
    TELEFONE: "3135515798",
    E_MAIL: "repcasanova1973@gmail.com",
    VAGAS: 10,
  },
  {
    REPUBLICA: "Jardim de Alah",
    RESPONSAVEL: "Bernardo",
    WHATSAPP: "38 98894004",
    TELEFONE: "31 35513290",
    E_MAIL: "repjardimdeala@gmail.com",
    VAGAS: 10,
  },
  {
    REPUBLICA: "Maracangalha",
    RESPONSAVEL: "Aymoré",
    WHATSAPP: "31985170974",
    TELEFONE: "",
    E_MAIL: "republicamaracangalha@gmail.com",
    VAGAS: 12,
  },
  {
    REPUBLICA: "Castelo dos Nobres",
    RESPONSAVEL: "Touken",
    WHATSAPP: "31995777115",
    TELEFONE: "3131051315",
    E_MAIL: "republicacastelodosnobres1919@gmail.com",
    VAGAS: 8,
  },
  {
    REPUBLICA: "Penitenciária",
    RESPONSAVEL: "Vinicius",
    WHATSAPP: "31971114942",
    TELEFONE: "35512231",
    E_MAIL: "penitenciaria@gmail.com",
    VAGAS: 15,
  },
  {
    REPUBLICA: "Arcádia",
    RESPONSAVEL: "Matheus Henrique",
    WHATSAPP: "12992028334",
    TELEFONE: "31995416106",
    E_MAIL: "republicaarcadia1977@gmail.com",
    VAGAS: 8,
  },
  {
    REPUBLICA: "Virada Pra Lua",
    RESPONSAVEL: "Chuck",
    WHATSAPP: "31993958754",
    TELEFONE: "313551040",
    E_MAIL: "repviradapralua@gmail.com",
    VAGAS: 6,
  },
  {
    REPUBLICA: "Pureza",
    RESPONSAVEL: "Gabriel",
    WHATSAPP: "2799674544",
    TELEFONE: "",
    E_MAIL: "gabriel.perim@aluno.ufop.edu.br",
    VAGAS: 10,
  },
  {
    REPUBLICA: "Cassino",
    RESPONSAVEL: "Paulo",
    WHATSAPP: "31991891972",
    TELEFONE: "35512153",
    E_MAIL: "paulo.coutinho002@gmail.com",
    VAGAS: 12,
  },
  {
    REPUBLICA: "Xeque Mate",
    RESPONSAVEL: "Alifer",
    WHATSAPP: "31987820363",
    TELEFONE: "31983595261",
    E_MAIL: "repxequemate@gmail.com",
    VAGAS: 10,
  },
  {
    REPUBLICA: "Aquarius",
    RESPONSAVEL: "Kaganú",
    WHATSAPP: "31971285686",
    TELEFONE: "",
    E_MAIL: "syllasbruno@gmail.com",
    VAGAS: 35,
  },
  {
    REPUBLICA: "Tanto Faz",
    RESPONSAVEL: "Pietra Bretas",
    WHATSAPP: "31988508918",
    TELEFONE: "",
    E_MAIL: "republicatantofaz@gmail.com",
    VAGAS: 11,
  },
  {
    REPUBLICA: "Pulgatório",
    RESPONSAVEL: "Obelix",
    WHATSAPP: "31986996484",
    TELEFONE: "35523140",
    E_MAIL: "gabrielvscoelho@gmail.com",
    VAGAS: 20,
  },
  {
    REPUBLICA: "Bangalô",
    RESPONSAVEL: "Jenga",
    WHATSAPP: "1977502405",
    TELEFONE: "35511326",
    E_MAIL: "bangalorepublica@gmail.com",
    VAGAS: 6,
  },
  {
    REPUBLICA: "dos Deuses",
    RESPONSAVEL: "Victor",
    WHATSAPP: "34999447863",
    TELEFONE: "37931963",
    E_MAIL: "osdeuses11@gmail.com",
    VAGAS: 12,
  },
  {
    REPUBLICA: "Formigueiro",
    RESPONSAVEL: "Lucas",
    WHATSAPP: "31985188161",
    TELEFONE: "",
    E_MAIL: "republicaformigueiro@yahoo.com.br",
    VAGAS: 9,
  },
  {
    REPUBLICA: "Adega",
    RESPONSAVEL: "Joseir",
    WHATSAPP: "31994438435",
    TELEFONE: "",
    E_MAIL: "Joseir.junior@aluno.ufop.edu.br",
    VAGAS: 6,
  },
  {
    REPUBLICA: "Verdes Mares",
    RESPONSAVEL: "Hiago",
    WHATSAPP: "31995915010",
    TELEFONE: "3135511264",
    E_MAIL: "hiagovidigal@gmail.com",
    VAGAS: 15,
  },
  {
    REPUBLICA: "Maria Bonita",
    RESPONSAVEL: "Mariana",
    WHATSAPP: "12997572001",
    TELEFONE: "3120120570",
    E_MAIL: "marianavalbinha@outlook.com",
    VAGAS: 9,
  },
  {
    REPUBLICA: "Chega Mais",
    RESPONSAVEL: "Esther",
    WHATSAPP: "31991040702",
    TELEFONE: "35523800",
    E_MAIL: "esther.castro@aluno.ufop.edu.br",
    VAGAS: 11,
  },
  {
    REPUBLICA: "Butantan",
    RESPONSAVEL: "Raphael",
    WHATSAPP: "31992417898",
    TELEFONE: "",
    E_MAIL: "butantanrepublica@gmail.com",
    VAGAS: 5,
  },
  {
    REPUBLICA: "Covil",
    RESPONSAVEL: "Pedro Henrique",
    WHATSAPP: "31995397762",
    TELEFONE: "3135512459",
    E_MAIL: "repcovildosgenios@gmail.com",
    VAGAS: 4,
  },
  {
    REPUBLICA: "Cirandinha",
    RESPONSAVEL: "Maria",
    WHATSAPP: "31985842219",
    TELEFONE: "",
    E_MAIL: "maria.fas@aluno.ufop.edu.br",
    VAGAS: 5,
  },
  {
    REPUBLICA: "Patotinha",
    RESPONSAVEL: "Gabriella",
    WHATSAPP: "37988310933",
    TELEFONE: "3135526464",
    E_MAIL: "gabriella.penaforte@aluno.ufop.edu.br",
    VAGAS: 6,
  },
  {
    REPUBLICA: "Pronto Socorro",
    RESPONSAVEL: "Luiz",
    WHATSAPP: "38998182199",
    TELEFONE: "35515166",
    E_MAIL: "republicaprontosocorro@gmail.com",
    VAGAS: 12,
  },
  {
    REPUBLICA: "Espigão",
    RESPONSAVEL: "Juan Pablo",
    WHATSAPP: "31985250788",
    TELEFONE: "",
    E_MAIL: "juan.neimerck@aluno.ufop.edu.br",
    VAGAS: 8,
  },
  {
    REPUBLICA: "Reino",
    RESPONSAVEL: "Bruno",
    WHATSAPP: "3196171546",
    TELEFONE: "",
    E_MAIL: "brunogomes_03@yahoo.com.br",
    VAGAS: 30,
  },
  {
    REPUBLICA: "Convento",
    RESPONSAVEL: "Bárbara",
    WHATSAPP: "61993768137",
    TELEFONE: "33506509",
    E_MAIL: "republicaconvento21@gmail.com",
    VAGAS: 9,
  },
  {
    REPUBLICA: "Unidos por Acaso",
    RESPONSAVEL: "Tomas",
    WHATSAPP: "31994924823",
    TELEFONE: "",
    E_MAIL: "tomasnsh@gmail.com",
    VAGAS: 8,
  },
  {
    REPUBLICA: "Baviera",
    RESPONSAVEL: "Sávio",
    WHATSAPP: "31988251289",
    TELEFONE: "3135511269",
    E_MAIL: "republicabaviera1958@gmail.com",
    VAGAS: 15,
  },
  {
    REPUBLICA: "Lumiar",
    RESPONSAVEL: "",
    WHATSAPP: "31997650294",
    TELEFONE: "3552323",
    E_MAIL: "rep.lumiar@gmail.com",
    VAGAS: 6,
  },
  {
    REPUBLICA: "Marragolo",
    RESPONSAVEL: "Caio",
    WHATSAPP: "16991044945",
    TELEFONE: "",
    E_MAIL: "caio.mortati@aluno.ufop.edu.br",
    VAGAS: 4,
  },
  {
    REPUBLICA: "Nau Sem Rumo",
    RESPONSAVEL: "Rafael",
    WHATSAPP: "35999178780",
    TELEFONE: "35511379",
    E_MAIL: "nausemrumo@gmail.com",
    VAGAS: 16,
  },
  {
    REPUBLICA: "Mixuruka",
    RESPONSAVEL: "Gustavo",
    WHATSAPP: "31972523172",
    TELEFONE: "35513989",
    E_MAIL: "gustavo.matias@aluno.ufop.edu.br",
    VAGAS: 6,
  },
  {
    REPUBLICA: "Pif-Paf",
    RESPONSAVEL: "",
    WHATSAPP: "31992368049",
    TELEFONE: "35513290",
    E_MAIL: "republicapifpaf@gmail.com",
    VAGAS: 16,
  },
];

const OuroPreto: React.FC<OuroPretoType> = (props) => {
  const matches = useMediaQuery("(min-width: 1024px)");

  return (
    <main
      className={
        "relative flex min-h-screen flex-col items-center gap-10 px-4 pb-10 pt-32 sm:px-32 md:pt-44"
      }
    >
      <h1
        className={
          "my-8 text-center text-2xl font-semibold md:mb-12 md:text-5xl"
        }
      >
        Hospedagens em Ouro Preto
      </h1>

      <div className={" flex h-fit w-full flex-col items-center"}>
        <div className="mt-4 w-10/12">
          <h1 className="my-6 text-center text-3xl font-bold">
            Lista de Hotéis
          </h1>
          <ul className="flex h-auto w-full flex-wrap justify-center gap-4">
            {HOSPEDAGENS.map((hosp) => (
              <li className=" flex  w-full flex-col gap-1 rounded-lg p-4 shadow-md shadow-neutral-800/30 lg:w-[47%] [&>span]:flex [&>span]:items-center [&>span]:gap-2">
                <span className="font-bold">
                  <LuHotel />
                  {hosp.nome}
                </span>
                <span>
                  <LuPhone />
                  {hosp.telefone}
                </span>
                {hosp.obs && (
                  <span>
                    <LuBadgeInfo />
                    {hosp.obs}
                  </span>
                )}
                {hosp.quartos && (
                  <div>
                    <span className="flex items-center gap-2">
                      <LuBedDouble />
                      Quartos
                    </span>

                    <ul className="ml-2 flex flex-col ">
                      {hosp.quartos.map((quarto) => (
                        <>
                          {typeof quarto.preco === "string" ? (
                            <li className="items ml-6 flex gap-1">
                              <PiArrowElbowDownRightBold />
                              {quarto.tipo}: <strong>{quarto.preco}</strong>
                            </li>
                          ) : (
                            <ul>
                              <span className="items ml-6 flex gap-1">
                                <PiArrowElbowDownRightBold /> {quarto.tipo}
                              </span>
                              <li>
                                {quarto.preco.map((p) => (
                                  <span className="items ml-12 flex gap-1">
                                    <PiArrowElbowDownRightBold className="mt-1 text-xs" />
                                    {p.tipo}: <strong>{p.preco}</strong>
                                  </span>
                                ))}
                              </li>
                            </ul>
                          )}
                        </>
                      ))}
                    </ul>
                  </div>
                )}

                {HOSPEDAGENS_DESCONTO.includes(hosp.nome) && (
                  <span className="mt-4 text-sm text-emerald-500">
                    * Com desconto para os congressistas
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 w-10/12">
          <h1 className="my-6 text-center text-3xl font-bold">Hostels</h1>
          <ul className="flex h-auto w-full  flex-wrap gap-4">
            {HOSTELS.map((host) => (
              <li className=" flex  w-full flex-col gap-1 rounded-lg p-4 shadow-md shadow-neutral-800/30 lg:w-[49%] [&>span]:flex [&>span]:items-center [&>span]:gap-2">
                <span className="font-bold">
                  <LuHotel />
                  {host.nome}
                </span>
                <span>
                  <LuPhone />
                  {host.telefone}
                </span>

                {HOSPEDAGENS_DESCONTO.includes(host.nome) && (
                  <span className="mt-4 text-sm text-emerald-500">
                    * Com desconto para os congressistas
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mt-10 flex w-full flex-col items-center">
          <h1 className="mt-6 text-center text-3xl font-bold">Repúblicas</h1>
          <h2 className="mb-6 mt-3 font-semibold text-neutral-700 ">
            Diárias: R$ 50
          </h2>
          {matches && (
            <table className="w-[300px] table-auto rounded-lg">
              <thead className="rounded-lg">
                <tr className="rounded-lg">
                  <th className="rounded-l-lg bg-red-600 px-4 py-2 text-white">
                    REPUBLICA
                  </th>
                  <th className="bg-gray-400 px-4 py-2 text-white">
                    RESPONSAVEL
                  </th>
                  <th className="bg-gray-400 px-4 py-2 text-center text-white">
                    WHATSAPP
                  </th>
                  <th className="bg-gray-400 px-4 py-2 text-center text-white">
                    TELEFONE
                  </th>
                  <th className="bg-gray-400 px-4 py-2 text-center text-white">
                    E-MAIL
                  </th>
                  <th className="rounded-r-lg bg-gray-400 px-4 py-2 text-center text-white">
                    VAGAS
                  </th>
                </tr>
              </thead>
              <tbody>
                {republicaData.map((republic) => (
                  <tr key={republic.REPUBLICA}>
                    <td className="border-b border-gray-200 px-4 py-2">
                      {republic.REPUBLICA}
                    </td>
                    <td className="border-b border-gray-200 px-4 py-2 text-center">
                      {republic.RESPONSAVEL}
                    </td>
                    <td className=" border-b border-gray-200 px-4 py-2 text-center">
                      {republic.WHATSAPP}
                    </td>
                    <td className=" border-b border-gray-200 px-4 py-2 text-center">
                      {republic.TELEFONE}
                    </td>
                    <td className="border-b border-gray-200 px-4 py-2">
                      {republic.E_MAIL}
                    </td>
                    <td className="border-b border-gray-200 px-4 py-2 text-center">
                      {republic.VAGAS}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {!matches && (
            <ul className="flex h-auto w-full  flex-wrap gap-4">
              {republicaData.map((rep) => (
                <li className=" flex  w-full flex-col gap-1 rounded-lg p-4 shadow-md shadow-neutral-800/30 lg:w-[49%] [&>span]:flex [&>span]:items-center [&>span]:gap-2">
                  <span className="font-bold">
                    <LuWarehouse />
                    {rep.REPUBLICA}
                  </span>
                  <span>
                    <LuUserSquare />
                    {rep.RESPONSAVEL}
                  </span>
                  <span>
                    <LuPhone />
                    {rep.TELEFONE}
                  </span>
                  <span>
                    <PiWhatsappLogo />
                    {rep.WHATSAPP}
                  </span>
                  <span>
                    <LuMail />
                    {rep.E_MAIL}
                  </span>
                  <span>
                    <LuUsers />
                    Vagas: {rep.VAGAS}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
};

export default OuroPreto;
