import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createServer, Model, Server } from "miragejs";

createServer({
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
          text: "Filme kakaka",
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
              type: "img",
              content:
                "https://s2.glbimg.com/_cXBJBCedaCk5Tsv_dWbun7MSlI=/0x0:1200x675/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/7/1/pOCXs1RyapL2c0TluOuw/project-l-thumb.jpg",
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
            date: new Date("17/06/2022"),
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
    this.get("/notice/:category/:id", (schema, request) => {
      const id = request.params.id;
      const category = request.params.category;

      const data = schema[category].find(id);

      return data.attrs;
    });
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
