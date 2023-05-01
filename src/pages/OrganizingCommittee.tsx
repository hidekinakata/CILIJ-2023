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

      <section
        className={
          "flex flex-col lg:flex-row [&_h1]:mb-8 [&_h1]:text-center [&_h1]:text-2xl"
        }
      >
        <div className={"w-full lg:w-1/2"}>
          <h1>Comissão organizadora</h1>
          <ul>
            {org.split("\n").map((organizer) => (
              <li>{organizer}</li>
            ))}
          </ul>
        </div>

        <div className={"mt-12 w-full lg:mt-0 lg:w-1/2"}>
          <h1>Comissão cientifica</h1>
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
Ana Paula Carneiro 
Andreina de Melo Louveira Arteman 
Antonio Cezar Nascimento de Brito 
Beatriz Alves de Moura 
Berta Lúcia Tagliari Feba 
Clara Cassiolato Junqueira 
Claudia Leite Brandão 
Cleide de Araujo Campos 
Andréia de Oliveira Alencar Iguma 
Cyntia Graziella Guizelim Simões Girotto 
Dagoberto Buim Arena 
Daniela Maria Segabinazi 
Elianeth Dias Kanthack Hernandes 
Emanuela Carla Medeiros de Queiros 
Estela Aparecida de Souza dos Santos 
Eva Dacome 
Gabrielly Doná 
Gislene Aparecida da Silva Barbosa 
Isabela Delli Colli Zocolaro 
Jamile Rossetti de Souza 
Joana d'Arc Batista Herkenhoff 
Joice Ribeiro Machado da Silva 
Josete Marinho de Lucena 
Juliane Francischeti Martins 
Kenia Adriana de Aquino 
Kilma Cristeane Ferreira Guedes 
Laís Fernanda Espósito Barbosa 
Leonardo Montes Lopes 
Leoneide Maria Brito Martins 
Luana Manoel Borges Garcia 
Márcia Tavares Silva 
Maria de Lourdes Zizi Trevizan Perez 
Maria Gilliane de Oliveira Cavalcante 
María Paula Obando Rodríguez 
Mariana Cortez 
Mariana Revoredo 
Marivaldo Omena Batista 
Marta Aparecida Broietti Henrique 
Naelza de Araújo Wanderley 
Paulo Roberto Prado Constantino 
Raquel Sousa da Silva 
Renata Junqueira de Souza 
Rildo Jose Cosson Mota 
Robson Guimaraes de Faria 
Rosangela Valachinski Gandin 
Sarah Gracielle Teixeira Silva 
Silvana Ferreira de Souza Balsan 
Sílvia de Fátima Pilegi Rodrigues 
Valquíria Maria Felizardo 
Vania Kelen Belão Vagula
Vânia Maria Castelo Barbosa
`;

const sci = `Adriana Lins Precioso (UEMT)
Alcione Maria dos Santos (UFMS)
Amanda Viliego (UFSJ)
Antônio Cézar Nascimento de Brito (Faculdade Projeção - Brasília)
Cassia Bittens (Literatura de Berço)
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
Rosemary Lapa de Oliveira (UEB)
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
Rovilson José da Silva (UEL)
Sandra Franco (UEL)
Silvana Augusta Barbosa Carrijo (UFJataí), 
Silvana Ferreira de Souza (Faculdades de Dracena)
Marta Passos Pinheiro (CEFET-MG)
Sílvia de Fátima Pilegi Rodrigues (UFR).
Thiago Alves Valente (UENP) 
`;

export default OrganizingCommittee;
