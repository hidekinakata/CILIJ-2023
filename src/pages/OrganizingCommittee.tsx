import React from "react";

type OrganizingCommitteeType = {};

const OrganizingCommittee: React.FC<OrganizingCommitteeType> = (props) => {
  return (
    <main
      className={
        "flex min-h-screen flex-col items-center justify-center px-4 pb-10 pt-32 text-justify leading-relaxed sm:px-32 lg:pt-40 [&>p]:mb-4 [&>p]:indent-8"
      }
    >
      <h1 className={"mb-10 text-center text-4xl lg:text-5xl"}>Comissões</h1>

      <section className={"mb-16"}>
        <h1 className={"mb-8 text-center text-2xl font-semibold"}>
          Organização geral
        </h1>

        <div className={"min-h-[30rem]"}>
          <h1 className={"mb-8 justify-center text-center text-xl"}>
            Renata Junqueira de Souza
          </h1>
          <figure
            className={
              "flex flex-col items-center justify-center md:float-left"
            }
          >
            <img
              src={"renata_junqueira.jpg"}
              className={"mx-auto mt-2 h-72 md:mx-5"}
            />
            <caption className={"mb-3"}>Foto: Ricardo Torquato</caption>
          </figure>
          <p className={"my-auto indent-8"}>
            Atualmente é professora visitante no Programa de Pós-graduação em
            Educação da Universidade Federal de Ouro Preto (UFOP/MG). Possui
            graduação em Letras pela Universidade Estadual Paulista Júlio de
            Mesquita Filho, mestrado em Linguística e Letras pela Pontifícia
            Universidade Católica do Rio Grande do Sul (PUC/RS), doutorado em
            Letras pela Universidade Estadual Paulista Júlio de Mesquita Filho e
            é livre-docente no conjunto das disciplinas Conteúdos, Metodologia e
            Prática de Ensino de Língua Portuguesa I e II e Leitura, Literatura
            e Interpretação de Textos no Processo de Formação de Professores.
            Foi professora visitante na Universidade do Minho, desenvolveu
            pesquisas de pós doutorado na British Columbia University (Canadá),
            Ohio State University (EUA) e Universidade de Évora (Portugal).
            Professora sênior da UNESP/Presidente Prudente, onde fundou e
            coordenou o CELLIJ - Centro de Estudos em Leitura e Literatura
            Infantil e Juvenil "Maria Betty Coelho Silva" (1992 - 2023).
            Aposentou-se em 2022 e continua atuando no PPGE - Educação da
            UNESP/Presidente Prudente. É professora colaboradora no Programa de
            Pós-graduação em Letras da Universidade Federal da Paraíba. Tem
            experiência em Educação, Ensino-aprendizagem com ênfase em: leitura,
            literatura infantil, estratégias de leitura, poesia e ensino,
            formação de professores, leitura literária.
          </p>
        </div>
      </section>

      <section className={"flex flex-col lg:flex-row "}>
        <div className={"w-full lg:w-1/2"}>
          <h1 className={"mb-8 text-center text-2xl font-semibold"}>
            Comissão organizadora
          </h1>
          <ul>
            {org.split("\n").map((organizer) => {
              if (!organizer.startsWith("_")) return <li>{organizer}</li>;
              return (
                <li>
                  <strong>{organizer.slice(1)}</strong>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={"mt-12 w-full lg:mt-0 lg:w-1/2"}>
          <h1 className={"mb-8 text-center text-2xl font-semibold"}>
            Comissão cientifica
          </h1>
          <ul>
            {sci.split("\n").map((sciOrganizer) => (
              <li>{sciOrganizer}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

const org = `Adriana Jesuíno Francisco 
Ana Carolina Reginaldo Bitencourt 
_Ana Paula Carneiro
_Andréia de Oliveira Alencar Iguma 
Andreina de Melo Louveira Arteman 
Antonio Cezar Nascimento de Brito 
Beatriz Alves de Moura 
Berta Lúcia Tagliari Feba 
Clara Cassiolato Junqueira 
Claudia Leite Brandão 
_Cleide de Araujo Campos 
Emanuela Carla Medeiros de Queiros 
Estela Aparecida de Souza dos Santos 
Gabrielly Doná 
Guilherme da Silva Lima
Isabela Delli Colli Zocolaro 
_Ivanete Bernardino Soares
_Jamile Rossetti de Souza 
Joana d'Arc Batista Herkenhoff 
_Jorge de Castro
_Juliane Francischeti Martins 
Júnia Carvalho Gaião de Queiroz
Kenia Adriana de Aquino 
Kilma Cristeane Ferreira Guedes 
Leonardo Montes Lopes 
Leoneide Maria Brito Martins 
Luís Henrique Lustosa Reipert
Márcia Tavares Silva 
Maria Cecília Soares Barbosa Cota
Maria Gilliane de Oliveira Cavalcante 
_María Paula Obando Rodríguez 
Mariana Revoredo 
Marivaldo Omena Batista 
_Marlice Nogueira
Naelza de Araújo Wanderley 
_Rita Cristina Lima Lages
Robson Guimaraes de Faria 
_Rodrigo Corrêa Martins Machado 
Rosangela Valachinski Gandin 
Sarah Gracielle Teixeira Silva 
Silvana Ferreira de Souza Balsan 
Sílvia de Fátima Pilegi Rodrigues 
Vania Kelen Belão Vagula
Vânia Maria Castelo Barbosa
`;

const sci = `Adriana Lins Precioso (UEMT)
Alcione Maria dos Santos (UFMS)
Amanda Valiengo (UFSJ)
Antônio Cézar Nascimento de Brito (Faculdade Projeção - Brasília)
Cassia Bittens (Literatura de Berço)
Cinthia Magda Fernandes Ariosi
Cyntia Graziella Guizelim Simões Girotto (UNESP)
Danglei de Castro Pereira (UNB).
Diana Maria Lopes Saldanha (UERN)
Diana Navas (PUC-SP)
Diogenes Buenos Aires de Carvalho (UEPI), 
Edgar Roberto Kirchof (ULBRA)
Eliane Santana Dias Debus (UFSC),
Elisa Maria Dalla-Bona (UFPR).
Elizabeth da Penha Cardoso (PUC-SP)
Emanuela Medeiros (UERN)
Fabiane Verardi Burlamaque (UPF), 
Fabiano Tadeu Grazioli (Univ.Regional Integrada do Alto Uruguai e das Missões)
Ilsa do Carmo Vieira Goulart (Universidade Federal de Lavras)
Ivanete Bernardino Soares (UFOP)
José Hélder Pinheiro Alves (UFCG) 
Juliana Pádua (UNIFESSPA)
Leonardo Montes Lopes (UniRV)
Leoneide Martins (UFMA)
Luís Girão (USP)
Márcia Tavares (UFCG)
Maria Laura Pozzobon Spengler (Instituto Federal Catarinense)
Mariana Cortez (UNILA)
Mônica Correia Baptista (UFMG) 
Patricia Beraldo Romano (UNIFESSPA)
Pedro Afonso Barth (UFU)
Regina Michelli (UERJ)
Rita Lopes (UFOP)
Rodrigo Corrêa Martins Silva Machado (UFOP)
Rogério Barbosa da Silva (CEFET-MG)
Rosa Maria Hessel Silveira (UFRGS)
Rosana Rodrigues (UEMT)
Rosemary Lapa de Oliveira (UEB)
Rovilson José da Silva (UEL)
Sandra Franco (UEL)
Silvana Augusta Barbosa Carrijo (UFCAT), 
Silvana Ferreira de Souza (Faculdades de Dracena)
Marta Passos Pinheiro (CEFET-MG)
Sílvia de Fátima Pilegi Rodrigues (UFR).
Thiago Alves Valente (UENP) 
`;

export default OrganizingCommittee;
