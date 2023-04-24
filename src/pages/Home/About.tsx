import React from "react";

type AboutType = {};

const About: React.FC<AboutType> = (props) => {
  return (
    <section
      id="sobre"
      className={
        "[&>p:not(:)] min-h-screen px-4 pb-10 pt-28 text-justify sm:px-32 [&>p]:mb-4 [&>p]:indent-8"
      }
    >
      <h1 className={"mb-10 text-center text-5xl"}> Sobre o evento </h1>

      <p
      // className={
      //   "!indent-0 first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold  first-letter:text-black"
      // }
      >
        O VII Congresso Internacional de Literatura Infantil e Juvenil -
        <strong> Educação literária: mudanças em movimento</strong> - (re)nasce
        em solo mineiro a partir das muitas histórias já contadas, uma vez que
        desde o ano de 2000 integrou às atividades coordenadas pelo Centro de
        Estudos em Leitura e Literatura Infantil e Juvenil (CELLIJ), com sede na
        UNESP/Presidente Prudente e pode contribuir com à educação literária de
        milhares de graduandos(as), professores(as), estudiosos(as) da área,
        bibliotecários(as), entre outros. De lá, para cá, dezenas de
        autores(as), ilustradores(as) e pesquisadores(as) ocuparam os espaços
        inaugurados pelo evento a fim de entoarem suas vozes e junto ao público
        criarem possibilidade de reflexões que fossem capazes de contribuir com
        o ensino da literatura e a manifestação do texto literário enquanto
        arte.
      </p>

      <p>
        Diante disso, o tema do Congresso que acontecerá entre os dias{" "}
        <span className={"underline"}>6 a 8 de dezembro de 2023</span>, no
        Centro de Convenções da Universidade Federal de Ouro Preto, Ouro Preto,
        MG - se dá a partir de mudanças significativas. Primeiro que CELLIJ
        deixa de ser o órgão organizador do Congresso, que passa a ser uma
        atividade coordenada pelo grupo de pesquisa “Formação de professores e
        as práticas educativas em leitura, literatura e avaliação do texto
        literário" (PROLELI). O{" "}
        <strong className={"font-black underline"}>PROLELI</strong> atualmente
        congrega pesquisadores de 10 estados brasileiros e o Distrito Federal em
        17 municípios distintos, desta forma, o Congresso deixa de ter um
        endereço fixo e se torna itinerante e, com isso, espera-se que inúmeras
        pessoas que nunca puderam participar das atividades promovidas pelo
        evento possam ser contempladas, afinal, várias regiões do Brasil serão
        sede em alguma versão, haja vista que o grupo de pesquisa é formado por
        pesquisadores(as) dos quatro cantos do país o que possibilita sua
        pluralidade. Ademais, acredita-se que é tempo de semear em outros
        terrenos férteis e por meio da força da palavra e da imagem à literatura
        infantil e juvenil (re)inaugurem maneiras de narrar o mundo; e, ainda,
        as mudanças da própria literatura que vem acontecendo através do tempo,
        sejam elas a partir dos espaços que foram ressignificados, como, por
        exemplo, com a proporção alcançada por meio do virtual, sejam o
        surgimento de novos gêneros, o perfil dos(as) leitores(as), às temáticas
        e materialidades. Indubitavelmente, é tempo de mudanças e MUDAR exige
        MOVIMENTO.
      </p>
      <p>
        Assim, anseia-se que a força das histórias já contadas por meio de tudo
        que o Congresso Internacional de Literatura Infantil e Juvenil já fez
        (são 20 anos de evento) possa receber um novo impulso neste novo tempo
        que começa agora, afinal,
      </p>

      <cite className={"w-full text-center font-caveat text-2xl md:text-4xl"}>
        <p className={"pt-5 !indent-0"}>
          “O homem, como um ser histórico, inserido num permanente movimento de
          procura, faz e refaz o seu saber.”
        </p>
      </cite>
      <span className={"float-right text-sm"}>- Paulo Freire</span>
    </section>
  );
};

export default About;
