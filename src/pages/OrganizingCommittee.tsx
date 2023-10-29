import React from "react";

type OrganizingCommitteeType = {};

type COORDENACAO_GERAL = {
  nome: string;
  cargo: string;
  bio: string;
  foto: string;
  autor_foto: string;
};

const coordenacao1: COORDENACAO_GERAL = {
  nome: "Renata Junqueira de Souza",
  cargo: "Coordenador geral (PPGE/UFOP professor visitante + PPGE/UNESP)",
  bio: `Atualmente é professora visitante no Programa de Pós-graduação em
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
  formação de professores, leitura literária.`,
  foto: "renata_junqueira.jpg",
  autor_foto: "Ricardo Torquato",
};

const coordenacao2: COORDENACAO_GERAL = {
  nome: "Andréia de Oliveira Alencar Iguma",
  cargo:
    "Coordenação pelo Grupo de Pesquisa Formação de Professores e as práticas educativas em Leitura, Literatura e Avaliação do texto literário - PROLELI.",
  bio: `Pós-doutoranda em Educação pela UNESP/Presidente Prudente com bolsa
  CNPq. Doutora em Estudos Literários pela Universidade Federal de
  Uberlândia - UFU; Mestre em Letras (Literatura e Práticas Culturais)
  pela Universidade Federal da Grande Dourados - UFGD (2012); Graduada
  em Letras também pela UFGD (2007). Vice líder do grupo de pesquisa
  Formação de professores e as relações entre as práticas educativas
  em leitura, literatura e avaliação do texto; membro do Grupo de
  Pesquisas em Espacialidades Artísticas - GPEA. Atua principalmente
  nos seguintes temas: literatura e ensino, literatura infantil e
  juvenil, políticas públicas de leitura e vertentes do insólito.`,
  foto: "andreia.jpeg",
  autor_foto: "acervo pessoal",
};

const coordenacao3: COORDENACAO_GERAL = {
  nome: "Rita Cristina Lima Lages",
  cargo: "Coordenação pelo PPG em Educação UFOP",
  bio: `Professora Adjunta do Departamento de Letras da Universidade Federal
  de Ouro Preto. Doutora em Educação (UFMG, 2013). Doutorado sanduíche
  pela Faculdade de Ciências Sociais da Universidade de Buenos Aires
  (UBA, 2011). Mestre em Educação (UFMG, 2007). Graduação em Letras e
  Pedagogia. Tem experiência nas áreas: Letras, Educação, Ensino de
  Língua Portuguesa e suas Literaturas, Ensino de de Línguas
  Estrangeiras Modernas, Formação Docente, Orientação de Estágio
  Curricular, Didáticas e Práticas de Ensino. Como pesquisadora, atua
  nos seguintes temas: História do Ensino da Língua Portuguesa e das
  Línguas Estrangeiras no Brasil; História da Leitura e da Escrita;
  História das Práticas de Ensino; História do Currículo e das
  Disciplinas Escolares.`,
  foto: "rita.jpeg",
  autor_foto: "acervo pessoal",
};

const coordenacao4: COORDENACAO_GERAL = {
  nome: "Guilherme da Silva Lima",
  cargo: "Coordenador Cultural",
  bio: `Licenciado em Física pela UNESP (2007), Mestre em Educação pela
  UNESP (2010), Doutor em Educação pela USP (2016) e Pós-doutor em
  Educação na UFMG (2020). É membro da Associação Brasileira de
  Pesquisa em Educação em Ciências. Tem experiência na docência em
  ensino superior e ensino médio e pesquisa nas áreas de Divulgação
  Científica, Educação e comunicação e Educação Científica, atuando
  principalmente nos seguintes temas: divulgação científica, cinema e
  ensino de ciências, interações discursivas, ensino de ciências;
  trabalha com referenciais teóricos que compõe o materialismo
  histórico e dialético, a perspectiva histórico-cultural e a
  pedagogia histórico-crítica. Contato: glima@ufop.edu.br`,
  foto: "guilerme.jpeg",
  autor_foto: "acervo pessoal",
};

const coordenacao = [coordenacao1, coordenacao3, coordenacao4, coordenacao2];

const OrganizingCommittee: React.FC<OrganizingCommitteeType> = (props) => {
  return (
    <main
      className={
        "flex min-h-screen flex-col items-center justify-center px-4 pb-10 pt-32 text-justify leading-relaxed sm:px-32 lg:pt-40 [&>p]:mb-4 [&>p]:indent-8"
      }
    >
      <h1 className={"mb-10 text-center text-4xl lg:text-5xl"}>Comissões</h1>

      <section className={"mb-16 flex flex-col gap-16 px-24"}>
        <h1 className={"mb-8 text-center text-2xl font-semibold"}>
          Organização geral
        </h1>

        {coordenacao.map((coordenador) => (
          <div className={"h-fit"}>
            <figure
              className={
                "flex flex-col items-center justify-center md:float-left"
              }
            >
              <img
                src={coordenador.foto}
                className={"mx-auto mt-2 h-72 md:mx-5"}
              />
              <span className={"mb-3"}>Foto: {coordenador.autor_foto}</span>
            </figure>
            <p className={"my-auto indent-8"}>
              <h1
                className={
                  "mb-2 justify-center text-center text-xl font-semibold"
                }
              >
                {coordenador.nome}
              </h1>
              <h2
                className={
                  "mb-8 justify-center text-center text-sm font-medium"
                }
              >
                {coordenador.cargo}
              </h2>
              {coordenador.bio}
            </p>
          </div>
        ))}
      </section>

      <section className={"flex flex-col lg:flex-row "}>
        <div className={"w-full lg:w-1/2"}>
          <h1 className={"mb-8 text-center text-2xl font-semibold"}>
            Comissão organizadora
          </h1>
          <ul>
            {org.split("\n").map((organizer, i) => {
              if (!organizer.startsWith("_"))
                return <li key={i}>{organizer}</li>;
              return (
                <li key={i}>
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
            {sci.split("\n").map((sciOrganizer, i) => (
              <li key={i}>{sciOrganizer}</li>
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
