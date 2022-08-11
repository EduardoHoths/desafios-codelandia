import { createServer, Model, Server } from "miragejs";


export default createServer({
  models: {
    series: Model,
    games: Model,
    movies: Model,
    animes: Model,
  },
  seeds(server) {
    server.db.loadData({
      series: [
        {
          id: 1,
          title: "The Witcher Revela Péssima Notícia Para A 3ª Temporada",
          subTitle: "3ª temporada de The Witcher deve demorar",
          category: "Série",
          date: new Date("2022/04/12"),
          frontCover:
            "https://streamingsbrasil.com/wp-content/uploads/2022/05/the-witcher-3-temporada.jpg.webp",
          content: [
            {
              type: "paragraph",
              content:
                "Depois de exatos dois anos, a Netflix retornou com The Witcher para mais uma temporada incrível. A popular série estreou após um grande hiato, causado principalmente, pelos atrasos nas gravações. Entre os motivos, a pandemia e um acidente sofrido por Henry Cavill, foram os principais. ",
            },
            {
              type: "paragraph",
              content:
                "De qualquer maneira, The Witcher retornou com uma temporada grandiosa. A trama se desenvolveu e conhecemos um pouco mais de cada um dos protagonistas, além é claro, de novos personagens. Ao longo dos episódios, vimos que Geralt, convencido que Yennefer estava morta, levou a Princesa Cirilla para o local mais seguro que ele conhecia: Kaer Morhen.",
            },
            {
              type: "paragraph",
              content:
                "No entanto, o maior inimigo que a jovem enfrentou, foi justamente seu poder. O segundo ano da série, conseguiu afirmar a série como uma das maiores do serviço de streaming. A expectativa foi tão alta em cima da série que, antes mesmo da estreia, a Netflix renovou para mais uma temporada.",
            },
            {
              type: "paragraph",
              content:
                "Porém, os fãs ficarão decepcionados ao descobrir que a 3ª temporada de The Witcher revelou uma péssima notícia. Entenda: ",
            },
            {
              type: "h2",
              content: "The Witcher tem má notícia sobre a 3ª temporada",
            },
            {
              type: "paragraph",
              content:
                "Lauren Schmidt Hissrich, showrunner foi a encarregada pela 3ª temporada de The Witcher. Ao Collider, ela afirmou que os novos episódios não devem estrear tão cedo. Com isso, é possível que os episódios retornem somente no segundo semestre de 2023. ",
            },
            {
              type: "paragraph",
              content:
                "De acordo com a roteirista, apesar dos roteiros já estarem todos prontos, o processo de gravação e pós-produção da série é extremamente demorado. Isso justifica o atraso no lançamento dos novos episódios. Hissrich disse que, desde o lançamento da segunda temporada, a sala dos roteiristas permaneceu ativa. ",
            },
            {
              type: "paragraph",
              content:
                "Por isso, a escrita dos roteiros para a temporada está adiantada. Explicando o processo criativo, Hissrich afirmou que está realmente emocionada com a forma como a temporada está se formando porque é baseada no meu livro favorito da saga, que é “The Time of Contempt”.",
            },
            {
              type: "h2",
              content: "Por que a 3ª temporada vai demorar?",
            },
            {
              type: "paragraph",
              content:
                "Embora Hissrich tenha se mostrado satisfeita quanto aos roteiros já prontos, a showrunner afirmou que os fãs precisarão ser pacientes. Segundo ela, a 3ª temporada de The Witcher ainda terá um longo caminho a percorrer antes de chegar oficialmente à Netflix. A roteirista afirmou:",
            },
            {
              type: "paragraph",
              content:
                "Portanto, essa demora começa a fazer todo sentido. Até então, vimos que as temporadas da série tem sido um destaque da Netflix no final do ano. Dessa maneira, a previsão é que a série retorne somente no final de 2023. ",
            },
            {
              type: "h2",
              content: "Os roteiros da 3ª temporada de The Witcher",
            },
            {
              type: "paragraph",
              content:
                "“The Time of Contempt” é o segundo livro da história principal de cinco livros de Sapkawki. Ele inclui vários contos e um romance indepentende. Por sua vez, The Witcher está usando um livro principal para cada uma das temporadas da série. Entretanto, Hissrich recentemente afirmou que eles mantêm as coisas flexíveis na sala dos rosteiristas, para que a história possa se encaixar melhor no formato televisivo.",
            },
            {
              type: "link",
              content:
                "https://streamingsbrasil.com/the-witcher-revela-pessima-noticia-para-a-3a-temporada/",
            },
          ],
        },
        {
          id: 2,
          title: "6ª temporada de Peaky Blinders é despedida com gosto de 'quero mais'",
          subTitle: "Final da série já está disponível na Netflix",
          date: new Date("2022/06/10"),
          category: "Série",
          frontCover:
            "https://cdn.ome.lt/gHY3SuAjK_R1kzV7YhHxUyP_Oso=/987x0/smart/uploads/conteudo/fotos/0094_PB6_20FEB21RV_1.jpg",
          content: [
            {
              type: "paragraph",
              content:
                "Ao fim da quinta temporada de Peaky Blinders, um Tommy Shelby (Cillian Murphy) desolado se perguntava: “Será que encontrei o único homem que não posso derrotar?”. O homem era o fascista Oswald Mosley (Sam Claflin), e a questão vinha após um grave revés nos planos do protagonista em assassinar o adversário. Era a maior derrota para Tommy e para a gangue Peaky Blinders desde o começo da série – e o seu peso, adequadamente, ainda é palpável na sexta e última temporada, que encerra a porção seriada da saga da família Shelby com um gosto de “quero mais”.",
            },
            {
              type: "paragraph",
              content:
                "Os novos episódios começam de onde parou a temporada anterior e não demoram em estabelecer o destino de Polly, em face da morte de sua intérprete, Helen McCrory, em abril de 2021. A personagem, uma das mais queridas da série, segue uma presença forte até o capítulo final, permeando a rivalidade pré-existente entre Tommy e Michael (Finn Cole), o filho da matriarca.",
            },
            {
              type: "paragraph",
              content:
                "A ação logo salta para 1933 – mas, aqui, o tempo não fez muito pelos traumas dos Shelbys. Tommy parou de beber para manter a mente mais lúcida, mas ainda é assombrado pelo passado; já Arthur (Paul Anderson), entregue ao vício, é uma sombra do homem que já foi. Ada (Sophie Rundle), por sua vez, enfrenta dificuldades ao tentar manter a família nos trilhos. ",
            },
            {
              type: "paragraph",
              content:
                "Neste contexto, Tommy ganha um rival a mais personificado em Jack Nelson (James Frecheville), tio de Gina (Anya Taylor-Joy) e gângster americano que não só controla boa parte de Boston como ainda ascendeu a uma posição de proximidade ao presidente Franklin Roosevelt. Seguindo nos passos da temporada anterior, o crime organizado e a política se misturam ainda com mais intensidade nessa reta final da série, com Nelson imiscuído com figuras como o próprio Mosley e sua amante, Lady Diana Mitford (Amber Anderson), também uma figura real usada para escancarar, sem quaisquer pudores, a mentalidade da elite simpática a Hitler e ao nazismo.",
            },
            {
              type: "paragraph",
              content:
                "O texto do criador Steven Knight continua brilhante, mas nunca foi particularmente sutil, o que acaba por servir especialmente bem à série ao ilustrar as intensas maquinações dos grupos políticos que tentaram ampliar a frente fascista na Europa, e também o total desprezo desses mesmos grupos por aqueles que consideravam inferiores.",
            },
            {
              type: "paragraph",
              content:
                "O real centro da temporada, no entanto, está na jornada de Tommy. O líder dos Peaky Blinders passou por grandes tribulações desde que começou a mudar a cara dos negócios da família, e não só começa a questionar qual será seu legado, como também busca com mais intensidade a sua redenção, uma forma de expiar os pecados já cometidos por ele – isso, claro, sem abrir mão de seus planos ambiciosos e de sua liderança. A combinação é, mais uma vez, retratada com louvor por Cillian Murphy, que entrega nesta temporada alguns de seus melhores momentos na série.",
            },
            {
              type: "paragraph",
              content:
                "Como um todo, a produção, que reinventou os dramas de gângsteres na TV, segue em alto nível: cenários, figurinos, trilha sonora e elenco continuam afiadíssimos, com destaque, neste último, para Natasha O'Keeffe, que entrega momentos comoventes e dolorosos como Lizzie, a esposa de Tommy. Os fãs de longa data ainda são recompensados com sequências de ação espetaculares, dirigidas com segurança pelo diretor Anthony Birde.",
            },
            {
              type: "paragraph",
              content:
                "A despedida da série, porém, deixa algumas pontas soltas, muito provavelmente para serem resolvidas no vindouro filme da produção, que começa a ser gravado em 2023. Uma trama em particular é desenhada muito rapidamente no último episódio, deixando a sensação de que poderia render muito mais. Nada disso chega a desabonar a série, uma joia que demorou a ganhar o reconhecimento merecido em meio ao amplo catálogo dos streamings. A sexta temporada é mais um “até logo” do que um “adeus” -- mas não deixa de ser um alento saber que em breve reencontraremos os Shelbys.",
            },
            {
              type: "link",
              content:
                "https://www.omelete.com.br/series-tv/criticas/6a-temporada-de-peaky-blinders-e-despedida-com-gosto-de-quero-mais",
            },
          ],
        },
        {
          id: 3,
          title: "Stranger Things já mostrou o monstro da 5ª temporada e você não percebeu",
          subTitle: "Criatura foi indicada na primeira temporada na Netflix",
          date: new Date("2022/08/06"),
          category: "Série",
          frontCover:
            "https://observatoriodocinema.uol.com.br/wp-content/uploads/2022/07/Stranger-Things-observatorio-do-cinema-1200-900.jpg",
          content: [
            {
              type: "paragraph",
              content:
                "A quinta temporada de Stranger Things não teve detalhes revelados até agora. Mas o primeiro ano da série já pode ter mostrado qual será o grande monstro desse desfecho da série da Netflix.",
            },
            {
              type: "paragraph",
              content:
                "Um detalhe do final da primeira temporada de Stranger Things, combinado com parte da visão de Nancy na quarta temporada, oferece uma pista para explicar o monstro que provavelmente aparecerá na quinta temporada: Thessalhydra.",
            },
            {
              type: "paragraph",
              content:
                "Apesar de terem vencido Vecna, um vasto portão entre Hawkins e o Mundo Invertido é aberto, colocando o destino da cidade e seus amados personagens em uma situação precária na quinta temporada de Stranger Things.",
            },
            {
              type: "paragraph",
              content:
                "Isso é agravado ainda mais por uma visão do futuro que Nancy Wheeler experimenta quando é capturada por Vecna.",
            },
            {
              type: "paragraph",
              content:
                "Depois de ser liberada, ela diz a Eddie, Dustin, Robin, Steve, Lucas, Max e Erica que viu sua mãe, Karen, seu irmão, Mike e sua irmã, Holly, todos sofrendo um destino aparentemente horrível.",
            },
            {
              type: "paragraph",
              content:
                "Mais do que isso, Vecna ​​mostra a Nancy o destino de Hawkins e do mundo, tornando os perigos que serão desencadeados na quinta temporada de Stranger Things ainda mais assustadores.",
            },
            {
              type: "paragraph",
              content:
                "Ao contar o que Vecna ​​mostrou a ela, Nancy menciona especificamente uma “criatura gigante com uma boca aberta”. Essa criatura pode estar ligada à campanha de Dungeons & Dragons que Will, Mike, Dustin e Lucas jogam no porão dos Wheelers no final da primeira temporada de Stranger Things.",
            },
            {
              type: "img",
              content:
                "https://observatoriodocinema.uol.com.br/wp-content/uploads/2022/08/monstro-de-Stranger-Things-1200x630.jpg",
            },
            {
              type: "h2",
              content: "O monstro da 5ª temporada de Stranger Things",
            },
            {
              type: "paragraph",
              content:
                "Em Dungeons & Dragons, Thessalhydra é enorme e chega a 20 pés de altura e tem entre 30 e 36 pés de comprimento. Mais pertinentemente, sua característica definidora é uma enorme boca aberta cercada por oito cabeças.",
            },
            {
              type: "paragraph",
              content:
                "Dessa forma, isso se encaixa na descrição de Nancy da criatura que ela vê em sua visão na quarta temporada de Stranger Things .",
            },
            {
              type: "paragraph",
              content:
                "Apesar dessa semelhança superficial, os vínculos psicológicos que Vecna ​​tem com Nancy e Will oferecem uma dica maior de que o monstro da quinta temporada de Stranger Things será a Thessalhydra.",
            },
            {
              type: "paragraph",
              content:
                "A conexão de Will com o Mindflayer e, por extensão, com Vecna ​​está em primeiro plano em grande parte das primeiras quatro temporadas de Stranger Things. Desta forma, a pintura de Will de Mike e o resto de seu grupo lutando contra uma criatura com várias cabeças pode ser vista como tendo um significado ainda maior.",
            },
            {
              type: "paragraph",
              content:
                "O que é certo é que, se a criatura na visão de Nancy na quarta temporada de Stranger Things for a Thessalhydra, ela será uma adversária formidável.",
            },
            {
              type: "paragraph",
              content:
                "Stranger Things 4, volume dois, já está disponível na Netflix. A quinta já foi confirmada, mas não há data de estreia definida ainda.",
            },
            {
              type: "link",
              content:
                "https://observatoriodocinema.uol.com.br/series-e-tv/stranger-things-ja-mostrou-o-monstro-da-5a-temporada-e-voce-nao-percebeu",
            },
          ],
        },
        {
          id: 4,
          title: "'Euphoria' encerra a segunda temporada com a obrigação de se reinventar",
          subTitle:
            "HBO confirma mais episódios da série, que corre o risco de perder fôlego se não buscar novas tramas além do ciclo vicioso vivido por Rue, personagem de Zendaya",
          date: new Date("2022/02/27"),
          category: "Série",
          frontCover:
            "https://imagens.brasil.elpais.com/resizer/CZgMt3hJ8wt-UJm3fq1HUA0Y_xo=/414x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/NOA6YXBL23QBCFBVMTMYNOXBSY.jpg",
          content: [
            {
              type: "paragraph",
              content:
                "Quase dois anos e meio depois de encerrar a primeira temporada, em agosto de 2019, “Euphoria” voltou às telas da HBO com episódios semanais exibidos desde 9 de janeiro, disponibilizados também pela plataforma HBO Max. Na noite deste domingo (27/2), a série sensação do canal norte-americano chega ao oitavo e último capítulo de uma segunda temporada marcada pelo clima sombrio, que flertou com o horror psicológico, e por atuações de destaque.",
            },
            {
              type: "paragraph",
              content:
                "A trama criada por Sam Levinson, baseada na minissérie israelense de mesmo nome exibida em 2012, acompanha um grupo de jovens americanos do ensino médio em meio ao contato com drogas, sexo e violência.",
            },
            {
              type: "h2",
              content: "A ESTRELA DO EMMY",
            },
            {
              type: "paragraph",
              content:
                "Os oito episódios da primeira temporada transformaram “Euphoria” em fenômeno da cultura pop e renderam a Zendaya o título de mais jovem estrela a conquistar o Emmy de melhor atriz por conta de sua performance como a protagonista Rue Bennett.",
            },
            {
              type: "paragraph",
              content:
                "Entre a primeira e a segunda temporadas, os fãs da série tiveram um vislumbre do que seriam os novos capítulos da história por meio de dois episódios especiais, lançados em dezembro de 2020 e janeiro de 2021. Um deles tinha Rue como foco principal, enquanto o foco do outro era Jules, interpretada pela atriz Hunter Schafer.",
            },
            {
              type: "paragraph",
              content:
                "Apesar disso, a série teve uma virada abrupta logo no primeiro episódio da segunda temporada. Nele, os adolescentes comemoram a chegada do ano novo e, entre cenas em que eles se divertem ou se drogam, é revelado um pouco mais sobre Fez (Angus Cloud), o traficante que introduz Rue ao vício e desenvolve relação fraternal com a garota.",
            },
            {
              type: "img",
              content:
                "https://i.em.com.br/yTM0bL5mwlAxIH19wbstnKbfoo0=/675x0/smart/imgsapp.em.com.br/app/noticia_127983242361/2022/02/27/1348312/as-atrizes-sydney-sweeney-e-maude-apatow-estao-sentadas-e-olham-para-cima-em-cena-da-serie-euphoria_2_34967.jpg",
            },
            {
              type: "paragraph",
              content:
                "O episódio também dá destaque para outras duas personagens com um papel secundário na temporada anterior: as irmãs Cassie (Sydney Sweeney) e Lexi (Maude Apatow).",
            },
            {
              type: "paragraph",
              content:
                "A primeira acaba se envolvendo com Nate (Jacob Elordi), ex-namorado de sua melhor amiga, Maddy (Alexa Demie), enquanto a outra começa a se sentir atraída pelo traficante Fez.",
            },
            {
              type: "paragraph",
              content:
                "Muito embora grande parte da série se concentre na relação entre Rue e Jules, que agora vivem uma espécie de triângulo amoroso com a chegada de Elliot (Dominic Fike), o segundo ano de “Euphoria” tem como trunfo as histórias de personagens coadjuvantes, como é o caso de Cal (Eric Dane), pai de Nate, destaque do terceiro episódio.",
            },
            {
              type: "paragraph",
              content:
                "De certa forma, a segunda temporada de “Euphoria” provou que há futuro para a série caso a personagem de Zendaya saia de cena. Na rodada anterior, ela servia como narradora onisciente que observava a vida de seus colegas de escola, comentando os principais desvios de caráter de cada um deles.",
            },
            {
              type: "img",
              content:
                "https://i.em.com.br/qZ-f5cqLfShBv8HWHjZ22LGcphw=/675x0/smart/imgsapp.em.com.br/app/noticia_127983242361/2022/02/27/1348312/o-ator-eric-dane-olha-para-a-camera-e-tem-atras-de-si-uma-luz-amarelada-durante-cena-da-serie-euphoria_3_21236.jpg",
            },
            {
              type: "paragraph",
              content:
                "Embora sua luta contra o vício ainda seja o arco mais dramático da série, como mostra o quinto episódio, “Euphoria” prova que pode tirar o foco da personagem principal e ainda assim continuar consistente.",
            },
            {
              type: "paragraph",
              content:
                "Um dos motivos para isso é o fato de que os adolescentes crescem. Vários programas centrados nesse período da vida se deparam com o problema ao longo dos anos. Os jovens de “Euphoria” não estarão no ensino médio para sempre e mostrá-los na faculdade não parece ir de encontro à proposta do programa. Uma solução plausível seria a chegada de nova geração de jovens.",
            },
            {
              type: "paragraph",
              content:
                "Para o bem da trama, “Euphoria” precisa ir além do vício de Rue. Caso contrário, a série corre o risco de entrar no ciclo interminável da personagem chegando ao fundo do poço até ser resgatada por amigos e familiares.",
            },
            {
              type: "paragraph",
              content:
                "Essas falhas no roteiro não tiram o crédito das ótimas atuações que marcaram esta temporada. Zendaya faz um retrato tão visceral de uma adolescente viciada em drogas que não é exagero imaginar que nova indicação ao Emmy pode ocorrer.",
            },
            {
              type: "h2",
              content: "TALENTO EM ASCENSÃO",
            },
            {
              type: "paragraph",
              content:
                "No entanto, pode ser que ela tenha que concorrer com uma colega: Sydney Sweeney, que protagonizou algumas das cenas mais comentadas desta temporada.Antes mesmo do fim da exibição dos atuais episódios, “Euphoria” ganhou a terceira rodada. A renovação acontece justamente quando a segunda temporada continua a bater recordes de audiência, além de ser um dos assuntos mais comentados do Twitter, a cada novo episódio.",
            },
            {
              type: "img",
              content:
                "https://i.em.com.br/2rKNdz7R2Brw4cZCLEJt02yQqD0=/675x0/smart/imgsapp.em.com.br/app/noticia_127983242361/2022/02/27/1348312/casey-bloys-executivo-da-hbo-sorri-para-a-camera-_4_25296.jpg",
            },
            {
              type: "paragraph",
              content:
                "Nada menos de 14 milhões de espectadores foram atraídos pela estreia da segunda temporada, considerando-se todas as plataformas da emissora.",
            },
            {
              type: "paragraph",
              content:
                "Apesar de o último episódio ainda não ter ido ao ar, tudo indica que Zendaya estará no centro da próxima temporada. Casey Bloys, executivo da HBO, afirmou que não vê futuro para a série sem a atriz, ainda que a segunda rodada tenha provado o contrário.",
            },
            {
              type: "link",
              content:
                "https://www.em.com.br/app/noticia/cultura/2022/02/27/interna_cultura,1348312/euphoria-encerra-a-segunda-temporada-com-a-obrigacao-de-se-reinventar.shtml",
            },
          ],
        },
        {
          id: 5,
          title: "Ruptura | Série dirigida por Ben Stiller na Apple TV+ terá 2ª temporada",
          subTitle: "Obra criada por Dan Erickson encerra 1ª temporada nesta sexta-feira",
          date: new Date("06/04/2022"),
          category: "Série",
          frontCover:
            "https://cdn.ome.lt/uTBUvcSCx-_YADHtcWF1y5uDY5M=/987x0/smart/uploads/conteudo/fotos/ruptura.jpg",
          content: [
            {
              type: "paragraph",
              content:
                "Sucesso de crítica, o suspense Ruptura, do Apple TV+, terá uma segunda temporada. A série criada por Dan Erickson e que tem Ben Stiller como diretor em diversos episódios foi renovada pouco antes da exibição do último episódio da 1ª temporada, nesta sexta-feira (8).",
            },
            {
              type: "paragraph",
              content:
                "'É muito empolgante ver a resposta das pessoas que estão amando o seriado - e o nível de engajamento dos fãs', comentou Stiller. “Trazer Ruptura para a televisão foi um longo caminho. Eu li o roteiro do piloto do Dan pela primeira vez há mais de cinco anos. Sempre foi uma história a ser contada em várias temporadas, e estou muito feliz que poderemos continuá-la. Sou agradecido a nossos parceiros na Apple TV+ que nos deram apoio durante todo o caminho. Salve Keir!”, completou.",
            },
            {
              type: "paragraph",
              content:
                "Em Ruptura, Mark Scout (Adam Scott) lidera uma equipe na Lumon, empresa onde os funcionários são submetidos a um procedimento que divide suas lembranças de modo cirúrgico entre seu trabalho e sua vida. A ousada experiência de 'equilíbrio trabalho-vida' é posta em dúvida quando Mark se encontra no centro de um mistério que o forçará a enfrentar a verdadeira natureza de seu trabalho e a sua própria.",
            },
            {
              type: "paragraph",
              content:
                "Acompanhe a gente também no YouTube: no Omeleteve, com os principais assuntos da cultura pop; Hyperdrive, para as notícias mais quentes do universo geek; e Bentô Omelete, nosso canal de animes, mangás e cultura otaku.",
            },
            {
              type: "link",
              content: "https://www.omelete.com.br/series-tv/ruptura-2a-temporada-confirmada",
            },
          ],
        },
      ],
      games: [
        {
          id: 1,
          title: "Project L: tudo que sabemos até o momento",
          subTitle: "Confira as principais informações sobre o jogo de luta da Riot Games até aqui",
          category: "Game",
          frontCover:
            "https://s2.glbimg.com/_cXBJBCedaCk5Tsv_dWbun7MSlI=/0x0:1200x675/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/7/1/pOCXs1RyapL2c0TluOuw/project-l-thumb.jpg",
          date: new Date("2022/08/03"),
          content: [
            {
              type: "paragraph",
              content:
                "Revelado durante a EVO 2019 e posteriormente na celebração dos dez anos de League of Legends, o Project L está cada vez mais próximo de receber uma data para testes. O jogo de luta 2D desenvolvido pela Riot Games será baseado no universo de Runeterra, o mesmo do MOBA de sucesso. Desde então, diversas informações sobre o desenvolvimento chegaram ao público. Confira aqui no ge tudo o que se sabe sobre o andamento de Project L.",
            },

            {
              type: "h2",
              content: "Como será o Project L e quando virá?",
            },
            {
              type: "paragraph",
              content:
                "O título será um jogo de luta ao estilo tag-team – será necessário gerenciar uma dupla de lutadores na partida. Na ocasião, foram mostrados os campeões Jinx, Ekko, Darius, Katarina e Ahri. De acordo com as informações ditas por Tom Cannon, um dos responsáveis pelo Project L, o jogo não será lançado em 2022, podendo esperar pela fase beta em algum momento de 2023.",
            },
            {
              type: "h2",
              content: "Jogo de luta baseado no universo do MOBA",
            },
            {
              type: "paragraph",
              content:
                "Como dito anteriormente, o Project L será totalmente baseado no universo de Runeterra. A confirmação veio em novembro de 2021, quando a desenvolvedora revelou detalhes sobre as mecânicas dos campeões e trechos de gameplay. Desse modo, espera-se que mais heróis do League cheguem ao jogo de luta como, por exemplo, a Illaoi.",
            },
            {
              type: "img",
              content:
                "https://s2.glbimg.com/GPRmjvouuFF1Ae5hs9BHHl5K_88=/0x0:962x639/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/a/K/gqtIeSSfWJlfRFkPPqtw/project-l.png",
            },
            {
              type: "h2",
              content: "O Project L será gratuito?",
            },
            {
              type: "paragraph",
              content:
                "Sim. Nesta segunda-feira, a Riot Games confirmou através de seu site que Project L será um jogo free-to-play (grátis para jogar). Além disso, Cannon também afirmou que a monetização do jogo “respeitará o tempo e o bolso dos jogadores”.",
            },
            {
              type: "img",
              content:
                "https://s2.glbimg.com/_6NWCPT553WGtZgFKwFRZei6uYY=/0x0:1200x690/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/c/o/EfqN00TGaFHe7bgDlAbQ/project-l.jpeg",
            },
            {
              type: "h2",
              content: "Netcode",
            },
            {
              type: "paragraph",
              content:
                "Um bom netcode é algo de extrema importância para um jogo de luta, afim de evitar qualquer oscilação na internet – que pode tornar as partidas difíceis de serem jogadas. Para que isso não ocorra com o Project L, o jogo contará com o mecanismo chamado Rollback Netcode. O recurso tem a finalidade de tornar os principais jogos de lutas online bem próximos de experiências offline. Além disso, a desenvolvedora utilizará ferramentas próprias, que inclusive já estão em uso em outros títulos próprios para reduzir a latência.",
            },
            {
              type: "h2",
              content: "Importante figura do FGC já testou Project L",
            },
            {
              type: "paragraph",
              content:
                "Campeão mundial de Mortal Kombat e de outros jogos de luta, Dominique 'SonicFox' teve a oportunidade de testar o Project L em 2022. Segundo o norte-americano, em entrevista ao Nerd Street, o mesmo achou a jogabilidade interessante e espera uma história atrativa por parte da Riot Games.",
            },
            {
              type: "img",
              content:
                "https://s2.glbimg.com/ue1ICpf1DqGTnzTH4rLAtY6uKqI=/0x0:629x357/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2018/s/M/MRzfMNTSGoGH8COZ5XNw/reproducao.jpg",
            },
            {
              type: "paragraph",
              content:
                "— O jogo me lembrou Skullgirls e Marvel vs. Capcom 3, bem como Street Fighter X Tekken. Eu quero ver a mecânica defensiva e quanta criatividade você pode obter com os personagens — revelou SonicFox ao portal.",
            },
            {
              type: "h2",
              content: "Novidades na EVO 2022?",
            },
            {
              type: "paragraph",
              content:
                "Com o retorno da EVO em 2022, após duas edições canceladas por conta da pandemia de Covid-19, essa é a grande oportunidade da Riot Games revelar informações sobre o Project L como o nome final do jogo e uma data para a fase de testes. Dá para se ter uma grande expectativa por parte da comunidade, uma vez que a Warner Bros. recentemente abriu os testes do MultiVersus (outro jogo de luta gratuito) para o público. Este, inclusive, também pode ter novidades durante o evento.",
            },
            {
              type: "link",
              content:
                "https://ge.globo.com/esports/noticia/2022/08/03/project-l-tudo-que-sabemos-ate-o-momento.ghtml",
            },
          ],
        },
        {
          id: 2,
          title: "MultiVersus faz sucesso em Beta e tem 144 mil usuários simultâneos no PC",
          subTitle:
            "Gratuito, lançamento da Warner Bros. Games tem maior pico de jogadores entre todos os jogos de luta da Steam e da própria publicadora. O jogo superou títulos como Batman e Mortal Kombat; veja",
          category: "Game",
          date: new Date("2022/07/27"),
          frontCover:
            "https://s2.glbimg.com/tAAMBROt9VhJXntA2OWCRkjbOtU=/0x0:1280x720/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/d/Y/jKIbV3QB2U5mJ8gW6Q4w/multiversos.jpg",
          content: [
            {
              type: "paragraph",
              content:
                "MultiVersus, que se estabeleceu como o jogo de luta com maior pico de usuários da Steam recentemente, bateu o próprio recorde com o lançamento do seu Beta aberto nesta terça-feira (26), registrando mais de 144 mil jogadores simultâneos no PC. Vale notar que a base de jogadores é ainda maior, pois o Beta está disponível também no PlayStation 4 (PS4), PlayStation 5 (PS5), Xbox One, Xbox Series X e Xbox Series S com suporte a cross-play. Na Twitch, que garantiu chaves de acesso antecipado para quem assistia a criadores de conteúdo no game, o pico de espectadores foi de 183 mil.",
            },
            {
              type: "paragraph",
              content:
                "Disponível gratuitamente, MultiVersus é um jogo de luta em arena ‘estilo’ Super Smash Bros., mas com foco em partidas dois contra dois. Além disso, várias das principais propriedades intelectuais da Warner Bros. marcam presença, incluindo: Salsicha, Batman, Arya Stark (Game of Thrones), Tom e Jerry, Finn de Hora de Aventura, entre outros personagens.",
            },
            {
              type: "img",
              content:
                "https://s2.glbimg.com/ZQWOcwCDNjQIkxonr1k9EUEZYZs=/0x0:1918x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/b/3/SEPPhNQparuZCz0fGrJA/multiversus-open-beta.png",
            },
            {
              type: "paragraph",
              content:
                "Com todo esse sucesso, o jogo também se tornou o maior lançamento da história da Warner Bros. Games em número de usuários no PC, superando todos os jogos do Batman e Mortal Kombat juntos. Vale lembrar que esses títulos são carro-chefe no portfólio da publicadora.",
            },
            {
              type: "paragraph",
              content:
                "No momento, MultiVersus tem um elenco com 17 personagens jogáveis, incluindo os recém-adicionados Gigante de Ferro e LeBron James, astro de Space Jam: Um Novo Legado. A intenção é alimentar o jogo com novos conteúdos periodicamente, além de permitir que os jogadores testem novos lutadores com uma rotação semanal, semelhante ao que acontece em League of Legends.",
            },
            {
              type: "paragraph",
              content:
                "A EVO, maior evento de jogos de luta do mundo, acontece de 5 a 7 de agosto e contará com um torneio especial de MultiVersus, com premiação total de US$ 100 mil — mais de R$ 550 mil na cotação atual. É de se esperar que o campeonato também sirva de palco para anúncios, como é tradição nas edições do evento.",
            },
            {
              type: "link",
              content:
                "https://www.techtudo.com.br/noticias/2022/07/multiversus-faz-sucesso-em-beta-e-tem-144-mil-usuarios-simultaneos-no-pc.ghtml",
            },
          ],
        },
        {
          id: 3,
          title: "Elden Ring: mod melhora a performance do jogo removendo icônica árvore",
          subTitle: "",
          date: new Date("2022/08/04"),
          category: "Game",
          frontCover: "https://tm.ibxk.com.br/2022/08/03/03154457955253.jpg?ims=704x264",
          content: [
            {
              type: "paragraph",
              content:
                "Elden Ring chegou dominando o mercado, alcançando surpreendentes números de vendas e se tornando um dos candidatos favoritos de diversos jogadores ao prêmio de melhor jogo do ano. Apesar de ser o queridinho de muita gente, o título não é perfeito e sofre com a queda na performance em algumas situações. Pelo menos até jogador quase que literalmente cortar o mal pela raiz.",
            },
            {
              type: "paragraph",
              content:
                "Quem jogou o mais recente souls-like da FromSoftware sabe que no mapa das Terras Intermédias existe uma gigantesca árvore brilhante que pode ser vista mesmo a longínquas distâncias. Pelo visto a icônica Térvore era responsável por boa parte das engasgadas sofridas pelo jogo. A solução? Remover a árvore, é claro.",
            },
            {
              type: "paragraph",
              content:
                "E foi justamente isto o que fez o modder conhecido como K4richard, que liberou uma modificação no site Nexus Mods que permite aos jogadores curtir as partidas com muito menos quedas da taxa de quadros por segundo ao remover a árvore do mapa.",
            },
            {
              type: "paragraph",
              content:
                "Em entrevista ao PC Gamer, o modder relatou perceber que o jogo parecia exigir muito mais do poder de processamento do computador ao se aproximar da gigantesca estrutura e suas belíssimas ramificações. Segundo ele, a Térvore e seus efeitos de partículas eram os causadores dos problemas de performance do jogo.",
            },
            {
              type: "paragraph",
              content:
                "Ao removê-la, o jogo começou a rodar bem melhor, reduzindo bastante as quedas na taxa de quadros por segundo e tornando a experiência de jogo mais fluida, o que ajudou bastante principalmente em batalhas perto da raiz da Térvore. K4richard afirma até mesmo ter conseguido jogar Elden Ring a 30 fps em um computador mais fraco e ter conseguido aumentar a taxa em 15 quadros em uma GT 1030. 'Este mod praticamente reduziu os requisitos de vídeo mínimos para o jogo', disse o modder.",
            },
            {
              type: "paragraph",
              content:
                "Ainda em beta, a modificação não é perfeita: embora a Térvore tenha sido removida, alguns de seus galhos continuam visíveis — algo que o modder afirma estar trabalhando para consertar. De qualquer forma, se você está sofrendo com quedas de fps ou seu computador não atendia aos requisitos mínimos, K4richard pode ter a solução para os seus problemas a poucos cliques de distância.",
            },
            {
              type: "link",
              content:
                "https://www.tecmundo.com.br/voxel/242715-elden-ring-mod-melhora-performance-jogo-removendo-iconica-arvore.htm",
            },
          ],
        },
        {
          id: 4,
          title: "Pokémon Legends: Arceus tem bug que trava completamente o seu progresso",
          subTitle: "",
          date: new Date("2022/02/19"),
          category: "Game",
          frontCover: "https://tm.ibxk.com.br/2022/02/18/18114206022220.jpg?ims=704x264",
          content: [
            {
              type: "paragraph",
              content:
                "Um novo bug em Pokémon Legends Arceus está travando o progresso de muitos jogadores, que causam o problema sem perceber. O glitch acontece na missão 23 do jogo e pode ser ativado por acidente, impedindo o jogador de terminar a missão e, por consequência, o game.",
            },
            {
              type: "paragraph",
              content:
                "O bug parece ter sido introduzido no update 1.0.2 para o game, segundo reporta o Nintendo Life, e tem tudo a ver com o Cresselia. A missão envolve conversar com um NPC chamado Melli, que vai pedir para você capturar um desses pokémon. Mas, se você já tiver conseguido o Cresselia antes de falar com o Melli, ele não vai computar que você já está com o pokémon, e não será possível capturar outro, travando seu progresso. O vídeo abaixo mostra isso acontecendo em tempo real:",
            },
            {
              type: "paragraph",
              content:
                "Esse é um bug bastante perigoso, especialmente para um game no estilo de Legends Arceus, que incentiva a exploração do jogador. Não devem ser poucas pessoas que gostam de visitar os lugares fora de ordem quando têm a chance. Um glitch tão fácil de acontecer e que trava o progresso é um dos piores cenários para qualquer jogo.",
            },
            {
              type: "paragraph",
              content:
                "Ao mesmo tempo que é um bug fácil de acontecer, também é fácil de evitar quando você sabe que ele existe, pelo menos. Então, aos jogadores que ainda não chegaram na missão 23, fiquem atentos a essa situação. Por enquanto não temos informações de que a Game Freak esteja trabalhando para resolver o problema.",
            },
            {
              type: "link",
              content:
                "https://www.tecmundo.com.br/voxel/234090-pokemon-legends-arceus-tem-bug-trava-completamente-progresso.htm",
            },
          ],
        },
      ],
      movies: [
        {
          id: 1,
          title: "Sonic the Hedgehog 2 ultrapassa US$400 milhões de arrecadação",
          subTitle: "",
          category: "Filme",
          frontCover:
            "https://gamerview.uai.com.br/wp-content/uploads/2022/06/Sonic-2-ultapassa-400-milhoes-bilheteria-1.jpg",
          date: new Date("2022/06/23"),
          content: [
            {
              type: "paragraph",
              content:
                "Acelerando ainda mais nas bilheterias, Sonic the Hedgehog 2 atingiu US$400 milhões de arrecadação desde a sua estreia. A informação foi divulgada pelo site Deadline, que também revelou que ele está na oitava posição como o filme mais assistido de 2022 e pode crescer ainda mais quando chegar no mercado japonês e chinês.",
            },
            {
              type: "paragraph",
              content:
                "O Brasil também figura nesta lista do ouriço, estando no sexto lugar onde o público mais assistiu ao filme. Só aqui foram US$12 milhões, ficando atrás da Austrália, França, México, Reino Unido e Estados Unidos. Inclusive, no circuito americano, a aventura rendeu US$190,6 milhões para os cofres da Paramount.",
            },
            {
              type: "h2",
              content: "Sonic corre em direção ao infinito",
            },
            {
              type: "paragraph",
              content:
                "Desde os anos 90 não vemos o Sonic tão em alta quanto agora. Além do sucesso cinematográfico, veremos uma série baseada na adaptação com Knuckles como o protagonista na Paramount+. Além disso, também tem um desenho animado vindo por aí através da Netflix e um novo game de “zona aberta” da SEGA para ser lançado ainda no fim de 2022. Não é pouca coisa não.",
            },
            {
              type: "link",
              content: "https://gamerview.uai.com.br/noticias/sonic-2-ultrapassa-400-milhoes/",
            },
          ],
        },
        {
          id: 2,
          title: "'A Fera do Mar' vai ganhar sequência? Diretor responde!",
          subTitle: "",
          category: "Filme",
          frontCover:
            "https://i0.wp.com/hypando.com.br/wp-content/uploads/2022/07/a-fera-do-mar.jpg?resize=770%2C380&ssl=1",
          date: new Date("2022/08/04"),
          content: [
            {
              type: "paragraph",
              content:
                "‘A Fera do Mar‘, nova animação de Chris Williams, diretor de ‘Moana: Um Mar de Aventuras’ e ‘Operação Big Hero‘, já se tornou um dos grandes sucessos da Netflix e, em uma recente entrevista ao ComicBook.com, o diretor Chris Williams comentou sobre a possibilidade de uma sequência.",
            },
            {
              type: "paragraph",
              content:
                "Williams revelou que há um desejo de continuar a elogiada história do longa-metragem e que está aberto a torná-lo realidade.",
            },
            {
              type: "paragraph",
              content:
                "“Tem sido avassaladora, honestamente, a resposta”, ele contou. “Eu trabalhei no filme ‘Operação Big Hero’ e sempre pensamos que ele sempre deu margens para sequências, estávamos quase prometendo mais filmes no final desse, enquanto ‘A Fera do Mar’ pareceu mais completo e não abria muitas possibilidades. Mas, honestamente, tenho pensado sobre isso e tenho algumas noções de onde poderíamos ir. E é verdade que é um mundo bastante expansivo. Não houve nenhuma conversa direta sobre isso, mas eu poderia potencialmente estar aberto a isso”.",
            },
            {
              type: "paragraph",
              content:
                "A produção é ambientada numa época em que as feras aterrorizantes ainda vagavam pelos mares e os caçadores de monstros eram considerados heróis — e o maior de todos eles era o valente Jacob Holland.",
            },
            {
              type: "paragraph",
              content:
                "Agora, o famoso aventureiro encontrará em Maisie, uma garota que embarcou como clandestina em seu navio, uma aliada inesperada numa jornada épica por águas desconhecidas.",
            },
            {
              type: "link",
              content:
                "https://cinepop.com.br/a-fera-do-mar-vai-ganhar-sequencia-diretor-responde-354611/",
            },
          ],
        },
        {
          id: 3,
          title: "Diretor de 'Batman' confirma série derivada com foco no Asilo Arkham",
          subTitle:
            "Filme estrelado por Robert Pattinson também ganhará uma continuação até 2027 e spin-off sobre o Pinguim",
          date: new Date("2022/03/04"),
          category: "Filme",
          frontCover:
            "https://www.rbsdirect.com.br/filestore/9/8/5/0/8/9/1_f1c1f32a391d0e9/1980589_11a7c3f4325546e.jpg?w=700",
          content: [
            {
              type: "paragraph",
              content:
                "Batman recém estreou nos cinemas, mas já está rendendo frutos. Além de uma continuação, o filme vai gerar mais duas séries spin-offs: uma focada no Pinguim e outra sobre o Asilo Arkham. As informações foram confirmadas pelo diretor  Matt Reeves em entrevista ao Toronto Sun.",
            },
            {
              type: "paragraph",
              content:
                "— Primeiro, estamos fazendo a série do Pinguim, que terá Colin Farrell como você nunca o viu. Ele rouba todas as cenas. Eu falei com a HBO Max e mostrei cenas de Colin no filme, propondo o que essa série poderia ser, e eles simplesmente disseram: 'Vamos fazer' — declarou. ",
            },
            {
              type: "paragraph",
              content:
                "Ele também citou, sem entrar em detalhes, a produção que irá acompanhar Arkham, instituição para onde são enviados os criminosos de Gotham City com problemas mentais. ",
            },
            {
              type: "paragraph",
              content:
                "— E depois vamos fazer uma segunda série que é conectada com Arkham. Então sim, estamos pensando e falando sobre os próximos projetos, mas, honestamente, neste momento, quero mesmo é que as pessoas se conectem com esse primeiro filme. ",
            },
            {
              type: "paragraph",
              content:
                "Estrelado por Robert Pattinson, Batman já é um sucesso de público e crítica. A produção conta com 83% de aprovação no Rotten Tomatoes, site que agrega notas de críticos especializados do mundo inteiro e, arrecadou no Brasil, apenas em sessões de pré-estreia, cerca de R$ 7,5 milhões, segundo dados da Comscore.",
            },
            {
              type: "paragraph",
              content:
                "Recentemente, Dylan Clark, um dos produtores do filme, anunciou uma continuação. A produção deve estrear antes de 2027, segundo ele. ",
            },
            {
              type: "link",
              content:
                "https://gauchazh.clicrbs.com.br/cultura-e-lazer/tv/noticia/2022/03/diretor-de-batman-confirma-serie-derivada-com-foco-no-asilo-arkham-cl0ciezci003q017cem8rtl0q.html",
            },
          ],
        },
        {
          id: 4,
          title: "'Top Gun 2' ultrapassa 'Titanic' e arrecada R$ 3,4 bilhões nos EUA e Canadá",
          subTitle: "",
          date: new Date("07/08/2022"),
          category: "Filme",
          frontCover:
            "https://conteudo.imguol.com.br/c/entretenimento/d7/2022/07/21/tom-cruise-em-top-gun-maverick-2022-1658429356444_v2_900x506.jpg.webp",
          content: [
            {
              type: "paragraph",
              content:
                "'Top Gun: Maverick' voou longe e conseguiu ultrapassar a bilheteria de 'Titanic' no combinado de ingressos comercializados nos Estados Unidos e Canadá. O filme com Tom Cruise se tornou a sétima maior arrecadação da história do país — excluíndo a inflação do período entre as películas. As informações são da Collider.",
            },
            {
              type: "paragraph",
              content:
                "O longa já está em sua décima primeira semana em cartaz e continua se mantendo como um dos títulos mais assistidos nos cinemas norte-americanos e canadenses. Na última semana, o filme da Paramount arrecadou mais US$ 7 milhões na bilheteria na região, cerca de R$ 36 milhões.",
            },
            {
              type: "paragraph",
              content:
                "'Top Gun: Maverick' chegou à marca de US$ 662 milhões domésticos (cerca de R$ 3,4 bilhões), passando os US$ 659,3 milhões de 'Titanic' (cerca de R$ 3,3 bilhões).",
            },
            {
              type: "paragraph",
              content:
                "Se continuar neste ritmo, o longa poderá ultrapassar a bilheteria de 'Vingadores: Guerra Infinita', que conta com US$ 678,8 milhões, cerca de R$ 3,5 bilhões). Caso consiga, 'Top Gun: Maverick' chegará ao sexto lugar.",
            },
            {
              type: "paragraph",
              content:
                "No entanto, dificilmente o título conseguirá passar o quinto lugar da lista, 'Pantera Negra', com US$ 700 milhões, cerca de R$ 3,6 bilhões, afinal não é provável que a bilheteria mantenha o fôlego por ainda muito tempo.",
            },
            {
              type: "paragraph",
              content:
                "Mundialmente, 'Top Gun: Maverick' já conta com US$ 1,35 bilhão de arrecadação (cerca de R$ 6 bilhões) e se tornou a décima terceira maior bilheteria da história.",
            },
            {
              type: "link",
              content:
                "https://www.uol.com.br/splash/noticias/2022/08/07/top-gun-2-ultrapassa-titanic-e-arrecada-r-34-bilhoes-nos-eua.htm",
            },
          ],
        },
        {
          id: 5,
          title: "Arremessando Alto quebra grande tradição dos filmes de Adam Sandler",
          subTitle: "Fãs sentiram falta desse detalhe",
          date: new Date("2022/06/20"),
          category: "Filme",
          frontCover:
            "https://vejasp.abril.com.br/wp-content/uploads/2022/06/arremessando-alto-credito-netflix.jpg",
          content: [
            {
              type: "paragraph",
              content: "Arremessando Alto, novo filme de Adam Sandler para a Netflix, quebrou uma tradição conhecida dos projetos do astro com a produtora Happy Madison: sua esposa, Jackie, não aparece em momento algum do filme.",
            },
            {
              type: "paragraph",
              content: "Sandler e Jackie se conheceram no filme O Paizão, de 1999, e se casaram em 2003. Adam Sandler tem, desde então, o costume de sempre incluir ao menos um membro de sua família na maioria de seus filmes, sendo Jackie a convidada mais frequente.",
            },
            {
              type: "paragraph",
              content: "No entanto, Arremessando Alto rompe com essa prática tradicional da família Sandler.Não houve alguma explicação oficial para a ausência de Jackie no novo filme, mas o site Screen Rant acredita que possa estar relacionado ao gênero do filme, já que o forte da Happy Madison é a comédia, e Arremessando Alto é um drama.",
            },
            {
              type: "paragraph",
              content: "Em comparação, outros filmes de drama do ator também não contaram com aparições de sua família.",
            },
            {
              type: "h2",
              content: "Adam Sandler é o 'Rei do Basquete' na Netflix",
            },
            {
              type: "paragraph",
              content: "Adam Sandler retorna em mais um projeto para a Netflix, agora vivendo Stanley Sugerman, um olheiro de basquete, que tem sua mão machucada ao longo do filme.",
            },
            {
              type: "paragraph",
              content: "'Um olheiro de basquete azarado encontra um jogador com potencial de sucesso e se esforça para provar que ambos merecem chegar à NBA', revela a sinopse.",
            },
            {
              type: "paragraph",
              content: "Dirigido por Jeremiah Zagar, com roteiro de Taylor Materne e Will Fetters, o elenco ainda conta com estrelas como Ben Foster, Robert Duvall e Queen Latifah. Jogadores da NBA como Boban Marjanovi, Trae Young, Jordan Clarkson, Khris Middleton, Aaron Gordon, Kyle Lowry, Seth Curry, Tobias Harris, Tyrese Maxey, e Matisse Thybulle - além de LeBron James também aparecem.",
            },
            {
              type: "link",
              content: "https://www.uai.com.br/app/noticia/cinema/2022/06/20/noticias-cinema,288466/arremessando-alto-quebra-grande-tradicao-dos-filmes-de-adam-sandler.shtml",
            },
          ],
        },
      ],
      animes: [
        {
          id: 1,
          title: "Demon Slayer libera nova imagem do vilão da terceira temporada",
          subTitle:
            "Apesar de ter previsões de estreia apenas para o ano que vem, sem nenhuma data definida, Demon Slayer já está lançando esboços do anime.",
          category: "Anime",
          frontCover: "https://www.nerdsite.com.br/wp-content/uploads/2022/06/demon-slayer.jpg",
          date: new Date("2022/06/06"),
          content: [
            {
              type: "paragraph",
              content:
                "Demon Slayer: Kimetsu no Yaiba, atualmente, está tendo sua terceira temporada produzida para, possivelmente, uma estreia no ano que vem. Ainda não há muitos detalhes sobre essa nova temporada, mas sabemos que ela adotará o arco Village Arc, trazendo a Hashira do Amor, Mitsuri Kanroji, e o Hashira da Névoa, Muichiro Tokito para o elenco, além de novos vilões. ",
            },
            {
              type: "img",
              content:
                "https://i0.wp.com/www.nerdsite.com.br/wp-content/uploads/2022/06/0kv0ld6v9u391.jpg?w=910&ssl=1",
            },
            {
              type: "paragraph",
              content:
                "Um novo esboço foi liberado hoje, dia 6 de junho, pelo estúdio de animação do anime, destacando um dos novos vilões da terceira temporada de Demon Slayer. A ufotable divulgou a arte de Doma, parcialmente pintada e assustadora. As mãos do personagem estão cobertas de sangue, assim como seus lábios vermelhos. A imagem é ainda mais perturbadora para aqueles que conhecem Doma e sabem do que ele é capaz. A nova temporada também deve mostrar uma reunião dos Upper Moon, os principais oficiais de Muzan. (via Comic Book)",
            },
            {
              type: "link",
              content:
                "https://www.nerdsite.com.br/anime-manga/demon-slayer-libera-imagem-do-vilao-da-temporada-3/",
            },
          ],
        },
        {
          id: 2,
          title:
            "One Piece: Toei Animation sinaliza que novo filme poderá ser exibido na América Latina",
          subTitle: "",
          date: new Date("2022/08/07"),
          category: "Anime",
          frontCover:
            "https://i0.wp.com/anmtv.com.br/wp-content/uploads/2022/06/one-piece-red-romance-1.jpg?w=800&ssl=1",
          content: [
            {
              type: "paragraph",
              content:
                "No sábado (6) o longa One Piece Film Red estreou nos cinemas japoneses e, considerando o fato de que em 2022 tivemos algumas produções de anime sendo exibidas nos cinemas como Jujutsu Kaisen 0; My Hero Academia: Missão Mundial de Heróis, além da chegada de Dragon Ball Super: Super Hero no próximo dia 18, devemos cogitar se o novo longa de Eiichiro Oda também será exibido por aqui.",
            },
            {
              type: "paragraph",
              content:
                "O perfil oficial da Toei Animation na América Latina postou em suas redes sobre a felicidade do lançamento do filme no Japão e comentou estar ansioso por sua chegada aos cinemas locais.",
            },
            {
              type: "paragraph",
              content:
                "Este é o 15ª filme de One Piece e, se confirmado a vinda para os cinemas latino-americanos, seria o primeiro a ser exibido nos cinemas brasileiros. Ainda não há detalhes sobre a empresa que irá distribuir, aposta-se na Crunchyroll, pertencente à Sony Pictures, ou a rede de cinemas Cinépolis. Até o momento, a Crunchyroll confirmou distribuição nos seguintes países: Estados Unidos; Canadá; Austrália; Nova Zelândia e alguns países europeus durante a Temporada de Outono.",
            },
            {
              type: "paragraph",
              content:
                "A produção tem direção de Goro Taniguchi (Code Geass), tendo sido escolhido pelo próprio criador de One Piece: Eiichiro Oda, que atua como produtor executivo. O roteiro ficou à cargo de Tsutomu Kuroiwa (One Piece Film Gold). Eiichiro também desenhou as roupas que os personagens usam nas batalhas do longa.",
            },
            {
              type: "paragraph",
              content: "One Piece Film Red ainda não possui previsão de lançamento no Brasil.",
            },
            {
              type: "link",
              content:
                "https://anmtv.com.br/one-piece-toei-animation-sinaliza-que-novo-filme-podera-ser-exibido-na-america-latina/",
            },
          ],
        },
        {
          id: 3,
          title: "Komi Can't Communicate | 2ª temporada ou continuação? Entenda os novos episódios",
          subTitle: "",
          date: new Date("2022/04/27"),
          category: "Anime",
          frontCover:
            "https://cdn.ome.lt/ZleB4xP65jwT1sZOOB1ZLa36-rY=/570x0/smart/uploads/conteudo/fotos/komi-san-capa.jpg",
          content: [
            {
              type: "paragraph",
              content:
                "O popular anime Komi Can’t Communicate estreou um novo episódio no Brasil nesta quarta-feira, 27 de abril. No entanto, a novidade está confundindo alguns fãs: é uma segunda temporada ou apenas uma continuação da primeira? ",
            },
            {
              type: "paragraph",
              content:
                "A dúvida se dá devido a uma diferença entre o lançamento internacional, promovido pela Netflix, e a televisão japonesa: por lá, os novos episódios foram lançados como uma segunda temporada, mas internacionalmente a Netflix tem divulgado o os capítulos inéditos de Komi Can’t Communicate como um novo arco dentro da mesma temporada.",
            },
            {
              type: "paragraph",
              content:
                "Alguns sites estão usando o termo “2ª fase” para se referir a esse fenômeno, já que a Netflix leva os fãs a entenderem que não se trata de uma segunda temporada, e sim de uma continuidade da primeira. No entanto, a plataforma de streaming não explicou o motivo para não ter aderido ao padrão adotado pelo Japão.",
            },
            {
              type: "paragraph",
              content:
                "Sendo assim, a 2ª temporada de Komi Can’t Communicate já está em lançamento na Netflix Brasil, mas pode ser encontrada pela plataforma de streaming dentro da primeira temporada, a partir do episódio 13.",
            },
            {
              type: "paragraph",
              content:
                "Sinopse: Tadano ajuda Komi, sua colega de escola tímida e antissocial, a melhorar sua comunicação e alcançar um objetivo: fazer 100 amigos.",
            },
            {
              type: "link",
              content:
                "https://entreterse.com.br/animes-pt/komi-cant-cummunicate-segunda-temporada/",
            },
          ],
        },
        {
          id: 4,
          title:
            "Kaguya-sama: Love is War, Episódio Final da 3ª Temporada tem Vídeo Promocional e terá 1 hora de duração na TV japonesa",
          subTitle: "",
          date: new Date("2022/06/17"),
          category: "Anime",
          frontCover:
            "https://www.animesxis.com.br/wp-content/uploads/2022/06/Kaguya-sama-Ultra-Romantic-final-season-3-trailer.jpg",
          content: [
            {
              type: "paragraph",
              content:
                "A equipe técnica de Kaguya-sama wa Kokurasetai -Ultra Romantic-, a terceira temporada do anime de televisão escrito e ilustrado por Aka Akasaka, Kaguya-sama: Love is War (Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen), revelou um novo vídeo promocional e um visual chave, que revela que o episódio final da temporada em 24 de Junho será um episódio de uma hora de duração nas TVs japonesas, incluíndo os comerciais (na pratica seria cerca de 48 minutos de episódio de anime).",
            },
            {
              type: "img",
              content:
                "https://www.animesxis.com.br/wp-content/uploads/2022/06/Kaguya-sama-Ultra-Romantic-final-season-3.jpg",
            },
            {
              type: "paragraph",
              content: "O slogan do visual diz: “Adeus comédia de amor”.",
            },
            {
              type: "paragraph",
              content:
                "A série receberá um projeto especial “Kaguya Day” após a transmissão do episódio final e será executado por 24 horas. O projeto envolverá uma retrospectiva da série com o elenco e a equipe.",
            },
            {
              type: "paragraph",
              content:
                "A 3ª temporada estreou nos canais Tokyo MX, BS11, Gunma TV e Tochigi TV em 8 de Abril às 00:00h (efetivamente, 9 de Abril no horário do Japão). O anime também irá ao ar na MBS, RKB e TeNY. A série será transmitida online no Japão pela Abema. A Crunchyroll está transmitindo o anime para fora do Japão e está produzindo uma versão dublada em português da nova temporada, que terá um total de 13 episódios.",
            },
            {
              type: "img",
              content:
                "https://www.animesxis.com.br/wp-content/uploads/2022/03/Kaguya-Sama-Ultra-Romantic-anime-visual.jpg",
            },
            {
              type: "paragraph",
              content:
                "Masayuki Suzuki voltou a apresentar a música tema de abertura “GIRI GIRI” com Suu. Airi Suzuki voltou a interpretar a música tema de encerramento “Heart wa Oteage” (My Heart Does Not Know What to Do).",
            },
            {
              type: "paragraph",
              content:
                "Aka Akasaka começou a série na revista Miracle Jump da Shueisha de Maio de 2015, mas ele se mudou para Young Jump em Março de 2016. Recentemente foi revelado que o mangá começará seu último arco de história na 47ª edição de este ano da revista da Shueisha, Weekly Young Jump, em 21 de Outubro. Anteriormente, já havia sido revelado que a história estava próxima de sua última história.",
            },
            {
              type: "link",
              content:
                "https://www.animesxis.com.br/2022/06/17/kaguya-sama-love-is-war-episodio-final-da-3a-temporada-tem-video-promocional-e-tera-1-hora-de-duracao-na-tv-japonesa/",
            },
          ],
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";

    this.urlPrefix = import.meta.env.API_URL;

    this.get("/home", () => {
      return {
        highlights: [
          {
            id: 1,
            title: "Sonic the Hedgehog 2 ultrapassa US$400 milhões de arrecadação",
            category: "Filme",
            img: "https://gamerview.uai.com.br/wp-content/uploads/2022/06/Sonic-2-ultapassa-400-milhoes-bilheteria-1.jpg",
          },
          {
            id: 1,
            title: "Demon Slayer libera nova imagem do vilão da terceira temporada",
            category: "Anime",
            img: "https://www.nerdsite.com.br/wp-content/uploads/2022/06/demon-slayer.jpg",
          },
          {
            id: 1,
            title: "Project L: tudo que sabemos até o momento",
            category: "Game",
            img: "https://s2.glbimg.com/_cXBJBCedaCk5Tsv_dWbun7MSlI=/0x0:1200x675/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/7/1/pOCXs1RyapL2c0TluOuw/project-l-thumb.jpg",
          },
        ],
        news: [
          {
            id: 1,
            title: "The Witcher Revela Péssima Notícia Para A 3ª Temporada",
            category: "Série",
            img: "https://streamingsbrasil.com/wp-content/uploads/2022/05/the-witcher-3-temporada.jpg.webp",
          },
          {
            id: 2,
            title: "MultiVersus faz sucesso em Beta e tem 144 mil usuários simultâneos no PC",
            category: "Game",
            img: "https://s2.glbimg.com/tAAMBROt9VhJXntA2OWCRkjbOtU=/0x0:1280x720/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/d/Y/jKIbV3QB2U5mJ8gW6Q4w/multiversos.jpg",
          },
          {
            id: 2,
            title: "'A Fera do Mar' vai ganhar sequência? Diretor responde!",
            category: "Filme",
            img: "https://i0.wp.com/hypando.com.br/wp-content/uploads/2022/07/a-fera-do-mar.jpg?resize=770%2C380&ssl=1",
          },
        ],
        newsList: [
          {
            id: 2,
            title: "6ª temporada de Peaky Blinders é despedida com gosto de 'quero mais'",
            content:
              "Ao fim da quinta temporada de Peaky Blinders, um Tommy Shelby (Cillian Murphy) desolado se perguntava: “Será que encontrei o único homem que não posso derrotar?”. O homem era o fascista Oswald Mosley (Sam Claflin), e a questão vinha após um grave revés nos planos do protagonista em assassinar o adversário. Era a maior derrota para Tommy e para a gangue Peaky Blinders desde o começo da série – e o seu peso, adequadamente, ainda é palpável na sexta e última temporada, que encerra a porção seriada da saga da família Shelby com um gosto de “quero mais”.",
            date: new Date("2022/06/10"),
            category: "Série",
            img: "https://cdn.ome.lt/gHY3SuAjK_R1kzV7YhHxUyP_Oso=/987x0/smart/uploads/conteudo/fotos/0094_PB6_20FEB21RV_1.jpg",
          },
          {
            id: 3,
            title: "Stranger Things já mostrou o monstro da 5ª temporada e você não percebeu",
            content:
              "A quinta temporada de Stranger Things não teve detalhes revelados até agora. Mas o primeiro ano da série já pode ter mostrado qual será o grande monstro desse desfecho da série da Netflix.",
            date: new Date("2022/08/06"),
            category: "Série",
            img: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2022/07/Stranger-Things-observatorio-do-cinema-1200-900.jpg",
          },
          {
            id: 2,
            title:
              "One Piece: Toei Animation sinaliza que novo filme poderá ser exibido na América Latina",
            content:
              "No dia 06/08/2022 o longa One Piece Film Red estreou nos cinemas japoneses e, considerando o fato de que em 2022 tivemos algumas produções de anime sendo exibidas nos cinemas como Jujutsu Kaisen 0; My Hero Academia: Missão Mundial de Heróis, além da chegada de Dragon Ball Super: Super Hero no próximo dia 18, devemos cogitar se o novo longa de Eiichiro Oda também será exibido por aqui.",
            date: new Date("2022/08/07"),
            category: "Anime",
            img: "https://i0.wp.com/anmtv.com.br/wp-content/uploads/2022/06/one-piece-red-romance-1.jpg?w=800&ssl=1",
          },
          {
            id: 3,
            title: "Elden Ring: mod melhora a performance do jogo removendo icônica árvore",
            content:
              "Elden Ring chegou dominando o mercado, alcançando surpreendentes números de vendas e se tornando um dos candidatos favoritos de diversos jogadores ao prêmio de melhor jogo do ano. Apesar de ser o queridinho de muita gente, o título não é perfeito e sofre com a queda na performance em algumas situações. Pelo menos até jogador quase que literalmente cortar o mal pela raiz.",
            date: new Date("2022/08/04"),
            category: "Game",
            img: "https://tm.ibxk.com.br/2022/08/03/03154457955253.jpg?ims=704x264",
          },
          {
            id: 4,
            title: "'Euphoria' encerra a segunda temporada com a obrigação de se reinventar",
            content:
              "HBO confirma mais episódios da série, que corre o risco de perder fôlego se não buscar novas tramas além do ciclo vicioso vivido por Rue, personagem de Zendaya",
            date: new Date("2022/02/27"),
            category: "Série",
            img: "https://imagens.brasil.elpais.com/resizer/CZgMt3hJ8wt-UJm3fq1HUA0Y_xo=/414x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/NOA6YXBL23QBCFBVMTMYNOXBSY.jpg",
          },
          {
            id: 3,
            title: "Diretor de 'Batman' confirma série derivada com foco no Asilo Arkham",
            content:
              "Batman recém estreou nos cinemas, mas já está rendendo frutos. Além de uma continuação, o filme vai gerar mais duas séries spin-offs: uma focada no Pinguim e outra sobre o Asilo Arkham. As informações foram confirmadas pelo diretor  Matt Reeves em entrevista ao Toronto Sun.",
            date: new Date("2022/03/04"),
            category: "Filme",
            img: "https://www.rbsdirect.com.br/filestore/9/8/5/0/8/9/1_f1c1f32a391d0e9/1980589_11a7c3f4325546e.jpg?w=700",
          },
        ],
        recentNews: [
          {
            id: 4,
            title: "'Top Gun 2' ultrapassa 'Titanic' e arrecada R$ 3,4 bilhões nos EUA e Canadá",
            content:
              "'Top Gun: Maverick' voou longe e conseguiu ultrapassar a bilheteria de 'Titanic' no combinado de ingressos comercializados nos Estados Unidos e Canadá. O filme com Tom Cruise se tornou a sétima maior arrecadação da história do país — excluíndo a inflação do período entre as películas. As informações são da Collider.",
            date: new Date("07/08/2022"),
            category: "Filme",
            img: "https://conteudo.imguol.com.br/c/entretenimento/d7/2022/07/21/tom-cruise-em-top-gun-maverick-2022-1658429356444_v2_900x506.jpg.webp",
          },
          {
            id: 3,
            title:
              "Komi Can't Communicate | 2ª temporada ou continuação? Entenda os novos episódios",
            content:
              "O popular anime Komi Can't Communicate estreou um novo episódio no Brasil nesta quarta-feira, 27 de abril. No entanto, a novidade está confundindo alguns fãs: é uma segunda temporada ou apenas uma continuação da primeira? ",
            date: new Date("27/04/2022"),
            category: "Anime",
            img: "https://cdn.ome.lt/ZleB4xP65jwT1sZOOB1ZLa36-rY=/570x0/smart/uploads/conteudo/fotos/komi-san-capa.jpg",
          },
          {
            id: 4,
            title: "Pokémon Legends: Arceus tem bug que trava completamente o seu progresso",
            content:
              "Um novo bug em Pokémon Legends Arceus está travando o progresso de muitos jogadores, que causam o problema sem perceber. O glitch acontece na missão 23 do jogo e pode ser ativado por acidente, impedindo o jogador de terminar a missão e, por consequência, o game.",
            date: new Date("19/02/2022"),
            category: "Game",
            img: "https://tm.ibxk.com.br/2022/02/18/18114206022220.jpg?ims=704x264",
          },
          {
            id: 5,
            title: "Ruptura | Série dirigida por Ben Stiller na Apple TV+ terá 2ª temporada",
            content:
              "Sucesso de crítica, o suspense Ruptura, do Apple TV+, terá uma segunda temporada. A série criada por Dan Erickson e que tem Ben Stiller como diretor em diversos episódios foi renovada pouco antes da exibição do último episódio da 1ª temporada.",
            date: new Date("06/04/2022"),
            category: "Série",
            img: "https://cdn.ome.lt/uTBUvcSCx-_YADHtcWF1y5uDY5M=/987x0/smart/uploads/conteudo/fotos/ruptura.jpg",
          },
          {
            id: 4,
            title:
              "Kaguya-sama: Love is War, Episódio Final da 3ª Temporada tem Vídeo Promocional e terá 1 hora de duração na TV japonesa",
            content:
              "A equipe técnica de Kaguya-sama wa Kokurasetai -Ultra Romantic-, a terceira temporada do anime de televisão escrito e ilustrado por Aka Akasaka, Kaguya-sama: Love is War (Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen), revelou um novo vídeo promocional e um visual chave, que revela que o episódio final da temporada em 24 de Junho será um episódio de uma hora de duração nas TVs japonesas, incluíndo os comerciais (na pratica seria cerca de 48 minutos de episódio de anime).",
            date: new Date("2022/06/17"),
            category: "Anime",
            img: "https://www.animesxis.com.br/wp-content/uploads/2022/06/Kaguya-sama-Ultra-Romantic-final-season-3-trailer.jpg",
          },
          {
            id: 5,
            title: "Arremessando Alto quebra grande tradição dos filmes de Adam Sandler",
            content:
              "Arremessando Alto, novo filme de Adam Sandler para a Netflix, quebrou uma tradição conhecida dos projetos do astro com a produtora Happy Madison: sua esposa, Jackie, não aparece em momento algum do filme.",
            date: new Date("20/06/2022"),
            category: "Filme",
            img: "https://vejasp.abril.com.br/wp-content/uploads/2022/06/arremessando-alto-credito-netflix.jpg",
          },
        ],
      };
    });
    this.get("/notice/:category/:id", (schema: any, request: any) => {
      const id = request.params.id;
      const category = request.params.category;

      const data = schema[category].find(id);

      return data.attrs;
    });
  },
});