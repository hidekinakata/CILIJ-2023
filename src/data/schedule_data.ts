export type Schedule = {
  type_title: string;
  title?: string;
  time: string;
  presenters?: {
    name: string;
    occupation: string;
    resume: string;
    pictureSrc: string;
    pictureAuthor: string;
    presentation?: {
      title: string;
      resume: string;
    };
  }[];
};

export type EventDayType = {
  key: string;
  day: string;
  short_day: string;
  day_week: string;
  morning: Schedule[];
  afternoon: Schedule[];
  night: Schedule[];
};

const EventDay: EventDayType[] = [
  {
    key: "day6",
    day: "6 de Dezembro",
    short_day: "6/12",
    day_week: "Quarta-Feira",
    morning: [
      {
        type_title: "Credenciamento",
        time: "8h - 9h",
      },
      {
        type_title: "Abertura",
        time: "9h30 - 10h",
      },
      {
        type_title: "Conferência de Abertura",
        title: "Literatura juvenil: só para menores de cem anos",
        time: "10h",

        presenters: [
          {
            name: "João Anzanello Carrascoza",
            occupation: "(escritor)",
            resume:
              "João Anzanello Carrascoza é autor dos romances que compõem a Trilogia do adeus, além de livros de contos como Aquela água toda e Tramas de meninos. Suas histórias foram traduzidas para o bengali, croata, espanhol, francês, inglês, italiano, sueco e tâmil. Recebeu três vezes o prêmio Jabuti, quatro vezes o prêmio da Fundação Nacional do Livro Infantil e Juvenil, tornando-se hors-concours, três vezes o prêmio da Fundação Biblioteca Nacional, o prêmio da APCA, da Cátedra Unesco e o Candango, além dos internacionais Radio France e White Ravens.",
            pictureSrc: "/speakers/joao_anzanello_carrascoza.png",
            pictureAuthor: "Marcos Vilas Boas",
          },
        ],
      },
    ],
    afternoon: [
      {
        type_title: "Mesa redonda 1",
        title: "Literatura com e para leitores pequenos",
        time: "13h30 - 15h30",
        presenters: [
          {
            name: "Teresa Mendes",
            occupation: "(pesquisadora/Portugal)",
            resume:
              "Teresa Mendes é Doutora em Estudos Literários pela Universidade de Lisboa e Professora Adjunta na Escola Superior de Educação e Ciências Sociais do Instituto Politécnico de Portalegre desde 1996, possuindo experiência de lecionação e formação nas áreas de Língua e Literatura Portuguesas, Literatura Infantil e Juvenil, Didática do Português e Supervisão Pedagógica, na formação inicial e na formação complementar de educadores de infância e professores do Ensino Básico. Tem desenvolvido trabalho de investigação a nível nacional e internacional nas áreas da Literatura Comparada, da Literatura Infantil e Juvenil, da Educação Literária e da Formação Docente, sendo autora de diversos artigos, livros e capítulos de livros nesses domínios. Tem organizado e participado em diversos congressos e seminários, nacionais e internacionais e tem realizado diversas formações direcionadas para educadores e professores de vários níveis de ensino, sobretudo no âmbito da Literatura Infantil, da Formação de Leitores, da Educação Literária e das Metodologias ativas no ensino do Português.",
            pictureSrc: "/speakers/teresa_mendes.png",
            pictureAuthor: "acervo pessoal",
            presentation: {
              title:
                "Literatura Infantil e Educação Literária: entre o voo e o labirinto",
              resume:
                "Assumindo uma inegável dimensão artística, o universo dos livros contemporâneos de potencial receção infantil institui-se como um lugar onde o poder encantatório das palavras e das imagens, estabelecendo entre si uma relação dialogal e intersemiótica de profunda congruência semântica e intermodal, seduz e provoca deslumbramento, lançando a criança no voo do imaginário, da fruição e da emoção estética. Por conseguinte, o adulto-mediador deve promover o contacto precoce e sistemático com o livro de qualidade estética e literária, de forma a suscitar na criança (pré)leitora o prazer da leitura, estimular a sua sensibilidade artística e fomentar a sua capacidade imaginativa. Mas deve igualmente, por via do questionamento e da educação artística e literária, auxiliar a criança a encetar uma aventura labiríntica de intensa cooperação interpretativa que lhe permitirá trilhar os caminhos do legível, do visível e do inefável.  Assim, nesta comunicação, preconiza-se a urgência de uma Educação Literária que deverá ter início o mais cedo possível na vida da criança porque é a partir do contacto privilegiado e sistemático com o livro de qualidade estética e literária que se estabelecerão os alicerces de uma eficaz formação do leitor competente e crítico. Para tal, o quadro teorético e conceptual que enforma o nosso estudo constitui o suporte das abordagens pedagógico-didáticas em torno de diversos livros de potencial receção  infantil concretizadas em contexto pré-escolar.  Pretende-se assim exemplificar algumas estratégias de promoção da Educação Literária incidindo em abordagens educativas e didáticas assentes na exploração de aspetos estruturais, discursivo-estilísticos e narratológicos que permitirão à criança desenvolver a sua capacidade inferencial e o seu pensamento crítico desde a primeira infância.",
            },
          },
          {
            name: "Aline Abreu",
            occupation: "(escritora)",
            resume:
              "Aline Abreu, escritora e ilustradora, é autora de 11 livros para bebês, crianças e pessoas de qualquer idade. É formada em Artes Visuais pela FAAP/SP com mestrado em Literatura e Crítica Literária pela PUC/SP. A partir da dissertação O Texto Potencial no sistema ecológico do livro ilustrado infantil: palavra-imagem-design, defendida em 2013, seus interesses como pesquisadora têm se concentrado, mais especificamente, nas relações ecológicas de palavra-imagem-design em livros ilustrados, e em estudos de Psicologia da Percepção. Ministra cursos teóricos e workshops sobre a leitura de textos híbridos como os livros ilustrados contemporâneos. Em 2016 recebeu o Prêmio João-de- Barro na categoria livro ilustrado com Quase Ninguém viu, publicado em 2019 pela Jujuba Editora e honrado, no mesmo ano, com o selo Distinção Cátedra Unesco de Leitura. Em 2020, Aline recebeu o troféu Monteiro Lobato conferido pela Revista Crescer e em 2021 participou da representação brasileira na Bienal de Ilustração de Bratislava (Eslováquia). Em 2022 foi finalista do Prêmio Barco a Vapor (Fundação SM) com o juvenil Sementes de Mamona.",
            pictureSrc: "/speakers/aline_abreu.png",
            pictureAuthor: "palavra.imagem",
            presentation: {
              title:
                "Reflexões sobre o texto potencial na criação de livros para bebês, crianças e jovens.",
              resume:
                "Partiremos de uma reflexão teórica sobre as relações entre palavra, imagem e design nos livros ilustrados, contemplando a proposta de que lemos - para além das marcas materiais de cada código que constitui o livro como estrutura - um Texto Potencial, resultante das relações entre os elementos formais dos livros. Buscaremos, então, costurar a teoria e procedimentos de criação que partem da seguinte premissa: como pensar/criar livros com Texto Potencial para leitores de todas as idades?",
            },
          },
          {
            name: "Daniela Padilha",
            occupation: "(editora e pesquisadora)",
            resume:
              "Daniela Padilha é formada em Letras pela Universidade de São Paulo e especialista em Escutas Antropológicas das Infâncias. Depois de atuar em diversas editoras, fundou a Jujuba em 2010, casa editorial especializada em literatura para as infâncias. Em 2019 iniciou a coleção “Literatura de Colo”, com livros destinados à primeiríssima infância, considerando o bebê leitor e protagonista do seu processo de leitura. ",
            pictureSrc: "/speakers/daniela_padilha.png",
            pictureAuthor: "acervo pessoal",
            presentation: {
              title:
                "Literatura de colo: concepções e trajetórias na edição de livros para bebês",
              resume:
                "Muitos são os estudos nas áreas de literatura, antropologia e saúde dos benefícios da leitura na Primeiríssima infância. No entanto, pouco se tem a respeito da edição do livro nacional para bebês. Existe alguma especificidade do livro para bebês que o diferencia dos demais? Bebê entende as narrativas visuais e verbais do livro? Qual o lugar do bebê e do mediador na leitura do livro? Discutiremos esses pontos a partir dos caminhos da concepção da coleção Literatura de Colo, criada em 2019, pela editora Jujuba, em que coloca o bebê como protagonista do seu ato leitor.",
            },
          },
        ],
      },
      {
        type_title: "Intervalo/Café",
        time: "15h30 - 16h",
      },
      {
        type_title: "Mesa redonda 2",
        title:
          "Literatura juvenil, leitores e juventudes: um olhar para os maiores",
        time: "16h - 18h",
        presenters: [
          {
            name: "Andréia de Oliveira Alencar Iguma",
            occupation: "(pesquisadora)",
            resume:
              "Andréia de Oliveira é pós-doutoranda em Educação pela UNESP/Presidente Prudente com bolsa CNPq, Doutora em Estudos Literários pela Universidade Federal de Uberlândia – UFU, Mestre em Letras (Literatura e Práticas Culturais) pela Universidade Federal da Grande Dourados - UFGD (2012) e Graduada em Letras também pela UFGD (2007). Vice-líder do grupo de pesquisa Formação de professores e as relações entre as práticas educativas em leitura, literatura e avaliação do texto, além de ser membro do Grupo de Pesquisas em Espacialidades Artísticas - GPEA. Atua principalmente nos seguintes temas: literatura e ensino, literatura infantil e juvenil, políticas públicas de leitura e vertentes do insólito.",
            pictureSrc: "/speakers/andreia_oliveira.png",
            pictureAuthor: "nichii imagem",
            presentation: {
              title:
                "É preciso olhar para as nossas juventudes: uma conversa a partir da LJB produzida na última década",
              resume:
                "Esta fala nasce a partir de uma angústia que me atravessa há anos: a invisibilidade das múltiplas juventudes nos debates dentro do cenário educacional. Tantas vezes, esse grupo social é rotulado de forma pejorativa e não é enxergado e/ou escutado. A sociedade banaliza seus desejos, medos, sonhos… E, infelizmente, a escola, nem sempre, consegue construir um espaço acolhedor e que possibilite a escuta e a visibilidade. Diante disso, minha proposta é apresentar um panorama acerca de diferentes personagens que compõem as obras de LJB (2012 - 2022), em especial, as narrativas, a fim de olhar como a arte tem construindo por meio da ficção adolescentes e jovens e estabelecer um diálogo com o campo prosaico. Defendo que a literatura seja um espaço capaz de contribuir com o processo de autodescoberta, seja por meio das diferenças ou similitudes que encontramos ao lermos um livro. Ademais, penso que por meio da presença da literatura dentro das escolas e a partir de boas mediações de leitura seja possível ressignificarmos à nossa existência e alteramos rotas.",
            },
          },
          {
            name: "José Roberto Torero",
            occupation: "(escritor)",
            resume:
              "José Roberto Torero é formado em Letras (português e espanhol) e Jornalismo pela USP. Pela mesma universidade cursou Cinema e mestrado em Cinema, incompletos. É autor de 60 livros (32 infantojuvenis e 28 para adultos), entre eles O Chalaça  (Prêmio Jabuti em 1995 – categoria romance ), Pequenos Amores (2º. Lugar Prêmio Jabuti – contos), Uma história de futebol, O evangelho de Barrabás (3º. Lugar Prêmio Jabuti – romance), Chapeuzinhos Coloridos e Papis et Circenses (Prêmio Paraná de Literatura). Foi colunista da Folha de S.Paulo de 1998 a 2012. E do Jornal da Tarde entre 1995 e 1998. Como roteirista, escreveu o programa Retrato Falado (2000-2008), dez roteiros de longas-metragens e dez roteiros de curtas-metragens, entre eles Uma história de futebol, que concorreu ao Oscar em 2002.  Dirigiu o longa-metragem Como fazer um filme de amor e o programa Super Libris para o SescTV, sobre literatura e escritores (100 episódios de 26 minutos).  É autor das peças “Omelete”, finalista do prêmio Shell, dirigida por Hamilton Vaz Pereira, de “Sic Transit Gloria Dei”, Romeu e Julieta, Segunda Parte (1992), Menção honrosa no Concurso Nascente (USP + Ed. Abril) e Sic Transit Gloria Dei, Prêmio Oswald de Andrade da Secretaria Estadual de Cultura para autores inéditos",
            pictureSrc: "/speakers/jose_roberto_torero.png",
            pictureAuthor: "Cristovao Tezza",
            presentation: {
              title:
                'O que li quando era jovem (que era escrito por "velhos") e o que escrevo para jovens (agora que sou velho).',
              resume:
                "Trata-se de um balanço de como vejo a evolução da literatura juvenil nestes meus 50 anos como leitor e, também, um pensar sobre o que escrevo hoje para este público.",
            },
          },
          {
            name: "Elizabeth Cardoso",
            occupation: "(pesquisadora e escritora)",
            resume:
              "Sobre Elizabeth Cardoso (@elizabethcardoso357) vive em São Paulo capital e é doutora em Teoria Literária pela USP (com estágios doutorais na Universidade de Nova York e Universidade Complutense de Madrid). Bolsista Produtividade CNPq. É professora do Programa de Pós-graduação em Literatura e Crítica Literária na PUC-SP, e do Programa de Educação: Psicólogia da Educação ambos na PUC-SP realizando pesquisas, oferecendo disciplinas e orientando mestrados e doutorados. É fundadora e Líder do Grupo de Pesquisa Literatura de Ancestralidade Negra da PUC-SP. É fundadora e vice-líder do Grupo de Pesquisa Voz Escrita Infantil e Juvenil: práticas discursivas, CNPq-PUCSP. É pesquisadora da literatura de ancestralidade negra, do romance contemporâneo, da literatura infantil e da formação de leitores de literatura, com vários artigos e capítulos de livros publicados. É também Assessora da Secretaria de Educação do Município de São Paulo. Professora da Univesp - Universidade Virtual do Estado de São Paulo. Curadora do Clube Quindim para literatura negra. Colunista revista Claudia. Entre seus livros recentes destacam-se: Feminilidade e Transgressão – uma leitura da obra de Lúcio Cardoso (ensaio crítico, FAPESP e Humanitas, de 2013); Todo mundo é misturado (novela infanto-juvenil, de Brinquebook – Escarlate, 2016) com mais de 100 mil exemplares vendidos; Tarcirurga, Bartolomeu e Pluminha no mar sem fim (conto infantil ilustrado, Bambozinho, de 2017); Literatura e Ensino – territórios em diálogo (organizado em conjunto com Diana Navas e Vera Bastazin, de EDUC, 2018). Depois de tudo tem uma vírgula (romance. Patuá, 2021) ganhador do prêmio Machado de Assis  da Biblioteca Nacional, terceiro lugar de melhor romance de 2021",
            pictureSrc: "/speakers/elizabeth_cardoso.jpeg",
            pictureAuthor: "acervo pessoal",
            presentation: {
              title: 'A força da poética da literatura negra na formação de leitores jovens',
              resume: `É frenquente o relato de educadores e famílias sobre o desinteresse crescente dos jovens pela leitura. Mesmo os que liam na infância se distanciam  dos livros. 
              Por outro lado, a literatura e as ações de formação de leitores antirracistas estão em grande parte destinadas às crianças pequenas.
              De modo, que a poesia, o conto, o teatro e o romance de ancestralidade negra não figuram na curadoria de leituras para jovens, salvo exceções e datas comemorativas. Outro equívoco frequente é colocar essa literatura apenas no âmbito temático, deixando à margem, ou mesmo na invisibilidade, a arquitetura poética dessas obras.
              Qual a relação entre esses fenômenos? E como a literatura negra pode reaproximar os jovens do literário? São algumas das questões que vou abordar nessa palestra.`
            }
          },
        ],
      },
    ],
    night: [{ type_title: "Sarau Literário", time: "20h" }],
  },
  {
    key: "day7",
    day: "7 de Dezembro",
    short_day: "7/12",
    day_week: "Quinta-Feira",
    morning: [
      {
        type_title:
          "Primeira sessão: Apresentações de trabalhos e Apresentações de pôster",
        time: "8h - 10h",
      },
      {
        type_title: "Intervalo/Café",
        time: "10h - 10h20",
      },
      {
        type_title:
          "Segunda sessão: Apresentações de trabalhos e Apresentações de pôster",
        time: "10h20 - 12h10",
      },
    ],
    afternoon: [
      {
        type_title:
          "Terceira sessão: Apresentações de trabalhos e Apresentações de pôster",
        time: "13h30 - 15h30",
      },
      {
        type_title: "Intervalo/Café",
        time: "15h30 - 15h50",
      },
      {
        type_title:
          "Quarta sessão: Apresentações de trabalhos e Apresentações de pôster",
        time: "15h50 - 17h50",
      },
      {
        type_title: "Mesa Especial",
        title: "Minas Gerais e a literatura",
        time: "18h - 20h",
        presenters: [
          {
            name: "Marta Passos",
            occupation: "(pesquisadora)",
            resume:
              "Marta Passos possui graduação em Letras - Português e Literatura pela Universidade do Estado do Rio de Janeiro (1996), mestrado em Literatura Brasileira pela Universidade do Estado do Rio de Janeiro (2000), estágio de doutorado em Educação pela Universidade do Minho, Braga, Portugal (2004), doutorado e pós-doutorado em Educação pela Universidade Federal de Minas Gerais (2006). É professora do Departamento de Linguagem e Tecnologia do Centro Federal de Educação Tecnológica de Belo Horizonte (Cefet-MG), atuando como professora, no Ensino Médio, na Graduação em Letras, no Mestrado e no Doutorado em Estudos de Linguagens. È coordenadora do grupo de pesquisa LLEME (Leitura Literária, Edição e Ensino) e integrante do grupo de pesquisa Materiais e Recursos Didáticos, do CEFET-MG, e do GPELL (Grupo de Pesquisa do Letramento Literário), da Faculdade de Educação da UFMG. Tem experiência nas áreas de Letras e Educação, com ênfase em Literatura Brasileira, atuando principalmente nos seguintes temas: formação de leitor de literatura, design de livros para crianças e jovens, crônica, livro didático, letramento literário, literatura infantil e juvenil.",
            pictureSrc: "/speakers/marta_passos.jpeg",
            pictureAuthor: "acervo pessoal",
          },
          {
            name: "Nelson Cruz",
            occupation: "(ilustrador)",
            resume:
              "Autodidata em desenho, tendo estudado pintura por dois anos, em Belo Horizonte, onde nasceu no ano de 1957. Desde os anos 70 é pintor e ilustrador. Começou seu trabalho no mercado editorial em 1988. Em 1999, recebeu o Prêmio Octogonal oferecido pelo Centre International d’ÉtudesenLittérature de Jeunesse, em Paris, com o livro de imagens Leonardo. Leonardo ganhou também o Prêmio de melhor livro de imagens pela FNLIJ, Seção brasileira do IBBY. Em 2001, o livro Chica e João recebeu o Prêmio Jabuti pelo texto e, da FNLIJ, o Prêmio de Melhor Livro para Criança e de melhor ilustração. O mesmo livro recebeu também o Octogonal em 2001. Em 2002, foi indicado pela FNLIJ ao Prêmio Hans Christian Andersen de ilustração e em 2004 para a Lista de Honra, ambos promovidos pela IBBY, International Board on Books for Young People, da Suíça.",
            pictureSrc: "/speakers/nelson_cruz.png",
            pictureAuthor: "divulgação ufmg",
          },
          {
            name: "Ângela Leite",
            occupation: "(escritora)",
            resume:
              'Ângela Leite nasceu e mora em Belo Horizonte. Viveu, porém, grande parte de sua vida no Rio de Janeiro, onde se formou em Jornalismo pela PUC. De 1969 a 1975 exerceu regularmente a profissão, trabalhando em alguns dos principais jornais e revistas da imprensa brasileira, como VEJA, O GLOBO, JORNAL DO BRASIL (matéria "Um coice no Caleidoscópio" publicada em 29/setembro/2001), entre outros. Faz crítica literária, especialmente de literatura infanto-juvenil, área em que se especializou em 1992, na PUC/MG.\n ' +
              'Seu livro de poemas "Amoras com açúcar" foi premiado e publicado pela Imprensa Oficial de Minas Gerais. Os quinze anos de literatura foram comemorados com um outro prêmio - desta vez internacional - "Estas muitas Minas", no qual a autora canta sua terra, foi o Prêmio Casa de Las Américas de Literatura Brasileira, de Cuba, em 1997, conquistando unanimemente o júri, entre mais de 200 concorrentes de diversos gêneros literários.\n ' +
              'Ângela é também ilustradora e com "Os elefantes" e "Medo de Escola" participou da Bienal de Ilustração de Bratislava em 1997 e 1999. \n',
            pictureSrc: "/speakers/angela_leite.jpeg",
            pictureAuthor: "Marcus Castilho",
          },
          {
            name: "Leo Cunha",
            occupation: "(escritor)",
            resume:
              "Leo Cunha completa em 2023 seus 30 anos de literatura. \n" +
              "É escritor, tradutor, jornalista e professor universitário. \n" +
              "Nascido em Bocaiúva (MG), em 1966, é Doutor em Artes pela UFMG (2011), Mestre em Ciência da Informação, pela UFMG (1999) e Graduado em Jornalismo, na PUC-MG (1991)\n" +
              "Publicou de mais de 70 livros, entre crônicas, poesia, literatura infantil, literatura juvenil e teatro infantil.\n" +
              "Venceu diversos prêmios literários, como Nestlé, Biblioteca Nacional, Jabuti, João-de-Barro, Adolfo Aizen, FNLIJ.\n" +
              "Teve mais de 20 livros selecionados para programas governamentais como PNBE, PNAIC, PNLD Literário, dentre outros. \n" +
              "Traduziu de cerca de 30 livros de literatura infantil e juvenil, de autores como Gabriela Mistral, António Skarmeta, Charles Dickens, Gabriela Mistral, Jonathan Swift, Julio Cortázar, Robert Stevenson, entre outros.\n" +
              "É professor universitário desde 1997, em cursos de graduação e pós-graduação.",
            pictureAuthor: "acervo pessoal",
            pictureSrc: "/speakers/leo_cunha.png",
          },
          {
            name: "Marilda Castanha",
            occupation: "(escritora/ilustradora)",
            resume:
              "Marilda Castanha nasceu em Belo Horizonte onde formou em Artes Visuais na UFMG. No final dos anos 80 começou a ilustrar livros de literatura para a infância. Recebeu por duas vezes o prêmio Jabuti de Ilustração (respectivamente com os livros “Pindorama terra das Palmeiras” e “Mil e uma estrelas”). Com este último também foi selecionada para a Lista White Ravens. Em 2017 recebeu o Purple Island no Nami Concours (Coreia do Sul) com o livro Sem Fim. Hoje Marilda vive e trabalha em Santa Luzia, MG.",
            pictureAuthor: "acervo pessoal",
            pictureSrc: "/speakers/marilda_castanha.jpeg",
          },
        ],
      },
    ],
    night: [{ type_title: "Lançamento de livros", time: "20h" }],
  },
  {
    key: "day8",
    day: "8 de Dezembro",
    short_day: "8/12",
    day_week: "Sexta-Feira",
    morning: [
      {
        type_title: "Mesa redonda 3",
        title:
          "Tradição popular e sala de aula: a potência da cultura brasileira",
        time: "8h - 10h",
        presenters: [
          {
            name: "Alexandre de Castro Gomes",
            occupation: "(escritor)",
            resume:
              "Alexandre de Castro Gomes é carioca, doutorando e mestre em Teoria da Literatura e Literatura Comparada (UERJ), especialista em Literatura Infantil e Juvenil (UCAM), membro do GP CNPq-UERJ EnLIJ - Encontros com a Literatura Infantil/Juvenil: ficção, teorias e práticas e do projeto de extensão NELIJ-UERJ, professor de história da literatura infantil e juvenil brasileira, ex-presidente da Associação de Escritores e Ilustradores de Literatura Infantil e Juvenil (AEILIJ) e autor de dezenas de livros publicados no Brasil e no exterior. Entre as distinções que suas obras já receberam, estão os selos Cátedra 10, pela Cátedra de Leitura UNESCO da PUC-Rio, o selo Altamente Recomendável pela FNLIJ, o selo da Lagarta do Prêmio AEILIJ para textos de literatura infantil e o Prêmio Cidade de Manaus de Teatro Infantil, além de outras premiações e citações em listas de excelência como as do Prêmio Internacional da Fundación Cuatrogatos e dos Prêmios Literários da Biblioteca Nacional. Alexandre organizou antologias para editoras comerciais, editou livros e anuários para plataformas digitais e foi convidado para as mais importantes feiras literárias do país. Quando atuou como presidente da AEILIJ, idealizou e organizou as duas primeiras edições dos Prêmios AEILIJ e, ao longo dos últimos anos, organizou e produziu, através da Associação e fora dela, diversos eventos literários.",
            pictureSrc: "/speakers/alexandre_gomes.png",
            pictureAuthor: "Cris Alhadeff",
            presentation: {
              title:
                "Criaturas na literatura infantil e juvenil brasileira pré-lobatiana",
              resume:
                "Antes de Monteiro Lobato lançar O Saci, em 1921, já havia alguns poucos textos literários publicados para crianças que apresentavam não só o moleque de uma só perna, como também outras criaturas dos contos populares brasileiros, hoje identificadas como criaturas do folclore nacional. Eram poucos, mas já estavam lá. Tínhamos Uyaras sem cauda, lobisomens substituindo ogros de contos clássicos, Mula sem cabeça, Corupira feminina, Sacis diferentes dos que conhecemos, entre eles o Sacy-Saperêrê e o Saci-Sirerê, e outras criaturas maravilhosas. Alexandre de Castro Gomes nos convida para um passeio por essas histórias pouco conhecidas nos dias de hoje, mas que fizeram um tremendo sucesso em seu próprio tempo. Conheceremos também a opinião de Olavo Bilac e a resposta de Gondin da Fonseca acerca desses contos maravilhosos.",
            },
          },
          {
            name: "Marco Haurelio",
            occupation: "(escritor)",
            resume:
              "Marco Haurelio Nasceu em Ponta da Serra, localidade rural do município de Riacho de Santana, sertão da Bahia. Lá, pôde conviver desde cedo com as histórias tradicionais, contadas pela avó Luzia Josefina, com a poesia de autores como Castro Alves, Cecília Meireles, Vinícius de Moraes e Leandro Gomes de Barros.Dedica-se a recolher e a catalogar a poesia popular e as histórias, patrimônios imateriais do nosso povo. Em 2017 foi finalista do prêmio Jabuti com o infantojuvenil Cordéis de Arrepiar: Europa (IMEPH) e, nos anos de 2016 e 2018, foi curador do Espaço do Cordel e do Repente, na Bienal Internacional do Livro de São Paulo. Em 2018, a convite do Institute for Heritage, de Sharjah, Emirados Árabes Unidos, participou do InternationalForumNarrator. No mesmo ano, foi curador do Encontro com o Cordel, promovido pelo SESC 24 de Maio (São Paulo), evento que reuniu grandes nomes do universo do cordel e da cultura popular, como Antonio Nóbrega, Socorro Lira, Jô Oliveira e J. Borges. Em 2021, por sua atuação no universo do cordel e da cultura popular, recebeu, da Câmara Municipal de São Paulo, a comenda Guilherme de Almeida.",
            pictureSrc: "/speakers/marco_haurelio.png",
            pictureAuthor: "Thiago de Lima",
            presentation: {
              title:
                "Conto popular: tradição, difusão, permanência e reinvenção na literatura infantojuvenil",
              resume:
                'Um dos mais antigos gêneros literários, ainda que originalmente não estivesse confinado ao mundo da literatura, o conto popular, em versões e variantes, englobando milhares de motivos, corre na literatura oral de todos os povos, de todas as épocas. Suas origens nem sempre podem ser rastreadas, mas as áreas de difusão, sim, graças aos registros em obras literárias que englobam da antiga literatura às coletâneas mais fiéis às versões tradicionais, inspiradas na aventura romântica dos Irmãos Grimm. Ainda vivo na oralidade, embora constantemente ameaçado, o conto popular, reinventado, chega às salas de aula e eventos literários, tentando conciliar tradição e inovação, sem perder as marcas essenciais do que Câmara Cascudo definiu como "maravilhosa ancianidade". ',
            },
          },
          {
            name: "Fernando Teixeira Luis",
            occupation: "(pesquisador)",
            resume:
              'Fernando Teixeira Luis possui Pós-doutorado em Literatura Comparada e Identidades Culturais pelo Departamento de Letras Modernas, Faculdade de Ciências e Letras/ Assis. Doutor em Letras (Leitura, Crítica e História Literária) e Mestre em Educação (Práticas Educativas em Leitura e Literatura) pela Universidade Estadual Paulista Júlio de Mesquita Filho, possui graduação em Pedagogia pela mesma universidade e Letras pela UNINTER. Professor de Literatura Infanto-juvenil, Didática, Semiótica e Metodologia de Ensino de Língua e Literatura, orienta e desenvolve pesquisas envolvendo as produções estéticas de Monteiro Lobato, Bruno Bozzetto e Pedro Bandeira, como também histórias em quadrinhos e animações contemporâneas destinadas a leitores em formação. Participação na publicação "Monteiro Lobato: livro a livro" (Lajolo e Ceccantini), que recebeu o prêmio Jabuti de 2009. Cartunista, com diversos desenhos publicados',
            pictureSrc: "/speakers/fernando_teixeira_luis.png",
            pictureAuthor: "acervo pessoal",
            presentation: {
              title: "De Monteiro Lobato a Ziraldo: as estripulias do saci.",
              resume:
                "A saga da figura lendária do Saci em quatro grandes momentos: na literatura infantil de Monteiro Lobato, no acervo de Câmara Cascudo, nos quadrinhos de Ziraldo e na série brasileira Cidade Invisível.",
            },
          },
        ],
      },
      {
        type_title: "Intervalo/Café",
        time: "10h - 10h30",
      },
      {
        type_title: "Mesa redonda 4",
        title: "Imagens, infâncias e literatura: vida em movimento",
        time: "10h30 - 12h30",
        presenters: [
          {
            name: "Hércules Tolêdo Corrêa",
            occupation: "(pesquisador)",
            resume:
              "Hércules Tolêdo Corrêa é professor da Universidade Federal de Ouro Preto e pesquisa formação de leitores, ensino de literatura e letramento literário. Fundador e líder do Grupo de Pesquisa MULTDICS Multiletramentos e usos de TDIC na Educação.  É doutor em Educação, mestre e graduado em Letras pela Universidade Federal de Minas Gerais. Realizou estágios de pós-doutorado na Universidade do Minho, em Portugal, e na York University, no Canadá. Tem livros e artigos publicados em periódicos nacionais e internacionais. ",
            pictureSrc: "/speakers/hercules_toledo_correa.png",
            pictureAuthor: "acervo pessoal",
            presentation: {
              title:
                "Da caixa de costura para as páginas dos livros ilustrados: imagens construídas com aviamentos em livros para crianças",
              resume:
                "Livros ilustrados se apresentam, contemporaneamente, com os mais diferentes materiais e técnicas utilizados em seus projetos gráficos. Desenhos e pinturas, massinhas, bordados, dobraduras em papel, computação gráfica e até materiais menos convencionais como cabelos humanos, calda de açúcar e pétalas de flores são usados para produzir imagens para essas obras multimodais/mutissemióticas, muitas vezes inusitadas e cada vez mais criativas. Nesta mesa, procurarei demonstrar de que maneira a escritora e ilustradora mineira Ângela Leite de Souza desenvolve suas produções nesse campo, associando trabalhos manuais com diferentes tipos de tecidos e aviamentos para ampliar os sentidos de seus textos e de outros autores nas obras que ilustra/produz. ",
            },
          },
          {
            name: "Odilon Moraes",
            occupation: "(ilustrador)",
            resume:
              'Odilon Moraes é formado em arquitetura na USP e tem mestrado em artes visuais, pela Unicamp.Ilustrador e autor de livros ilustrados, já recebeu 5 jabutis e teve livros como " A princesinha medrosa" , "Pedro e Lua " e "Rosa" premiados como " O melhor livro do ano para crianças" pela Fundação Nacional do Livro para a Infância e Juventude ( FNLIJ).Estudioso do livro ilustrado, deu aulas na Fundação Lasar Segall, no Instituto Tomie Ohtake, foi professor convidado do Instituto de Estudos da Linguagem (IEL). Atualmente dá aulas no Instituto Vera Cruz e na Casa Tombada.',
            pictureSrc: "/speakers/odilon_moraes.png",
            pictureAuthor: "acervo pessoal",
            presentation: {
              title: "A imagem e o tempo no livro ilustrado.",
              resume:
                "Embora já seja um consenso dentro do mundo acadêmico que o livro ilustrado é um modo de narrar com palavras e imagens, é preciso, antes, entender que, para que isso acontecesse, a imagem teve que fragmentar-se. Só então ela pôde participar do tempo da narrativa e estabelecer uma relação horizontal com a palavra . Tratarei em minha fala dessa propriedade assumida pela imagem dentro dos livros ilustrados contemporâneos.",
            },
          },
          {
            name: "Renato Moriconi",
            occupation: "(ilustrador)",
            resume:
              "Renato Moriconi é artista plástico e tem se dedicado a criar livros há mais de 20 anos. Tem obras publicadas no Brasil, Argentina, México, França, Itália, Coréia do Sul, EUA e China. Recebeu os prêmios “melhor livro-imagem” em 2011 e em 2014, e “melhor livro para a criança” em 2012 pela Fundação Nacional do Livro Infantil e Juvenil. Recebeu também o troféu Monteiro Lobato e o Jabuti de “ilustração infantil” em 2014. Em 2016 foi contemplado com o Premio Fundación Cuatrogatos (EUA) e finalista do prêmio “Melhor livro de arte” da revista italiana Andersen, ambos pelo livro Bárbaro. Em 2018 esse livro figurou na lista do The Boston Globe dos melhores livros infantis publicados nos EUA e figurou também em “The Most Astonishingly Unconventional Children’s Books” feita pela School Library Journal dos EUA. \n" +
              "Ministrou cursos, oficinas e palestras no Brasil e em outros países, como no Museu de Arte Contemporânea de Lima (Peru) e Scuola Internazionale d’Illustrazione (Sarmede/Itália). É professor convidado do curso de pós-graduação “Livros, Crianças e Jovens: Teoria, Mediação e Crítica” do Instituto Vera Cruz, em São Paulo\n",
            pictureSrc: "/speakers/renato_moriconi.png",
            pictureAuthor: "Wagner Willian",
            presentation: {
              title: "Picturebook: o fim da ilustração",
              resume:
                "Na literatura infantil contemporânea, a imagem assume um protagonismo ímpar, criando um tipo de obra que desloca o livro do mundo da literatura para a fronteira com o mundo das artes visuais, a ponto da palavra ilustração perder seu sentido quando usada como sinônimo de imagem. Em minha fala apresentarei alguns exemplos de livros de fronteira e como a consciência do protagonismo da imagem altera a forma como se cria e se lê os livros.",
            },
          },
        ],
      },
    ],
    afternoon: [
      {
        type_title:
          "Quinta sessão: Apresentações de trabalhos e Apresentações de pôster",
        time: "13h30 - 15h30",
      },
      {
        type_title: "Intervalo/Café",
        time: "15h30 - 15h50",
      },
      {
        type_title:
          "Sexta sessão: Apresentações de trabalhos e Apresentações de pôster",
        time: "15h50 - 17h50",
      },
    ],
    night: [
      {
        type_title:
          "Entrega do prêmio  CILIJ e PROLELI para o melhor da literatura (voto das crianças)",
        time: "19h",
      },
      {
        type_title: "Conferência de Encerramento",
        title: '"El arte de narrar"',
        time: "19h30",
        presenters: [
          {
            name: "María Teresa Andruetto",
            occupation: "(Argentina)",
            resume:
              "María Teresa Andruetto (Aº Cabral, Argentina, 1954). Publicó novelas, ensayos, libros de cuentos, poemarios y libros para niños; traducida a varias lenguas, sus libros son materia de numerosas tesis de grado y doctorado. Desde hace más de treinta años interviene de diversos modos en la construcción de una sociedad lectora. Obtuvo entre otros los premios Fondo Nacional de las Artes, Iberoamericano a la Trayectoria en Literatura Infantil SM, Premio Cultura Universidad Nacional de Córdoba, Premio Hans Christian Andersen, Konex de Platino y Premio Trayectoria en Letras del Fondo Nacional de las Artes 2020. Co dirige una colección de revalorización de narradoras argentinas en la Editorial Universitaria EDUVIM y cada semana comparte una breve historia desde la radio de la Universidad Nacional de Cordoba.",
            pictureSrc: "/speakers/maria_teresa_andruetto.png",
            pictureAuthor: "acervo pessoal",
            presentation: {
              title: '"El arte de narrar"',
              resume:
                "Un recorrido sobre la necesidad humana de contar historias y por el arte de narrarlas. Desde losgriegos o los michoacanos, hasta el relato de nuestras vidas que nos tienen por personajes principales y convierten modestos episodios en escenas cruciales, para mantener la unidad de nuestro yo. Porque narradores somos todos. Buscadores incansables de una ficción que nos haga ver.",
            },
          },
        ],
      },
      {
        type_title: "Encerramento e Show cultural",
        time: "20h30",
      },
    ],
  },
];

export default EventDay;
