import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createServer, Model } from "miragejs";
import { v4 as uuidv4 } from "uuid";

import { Routes } from "react-router-dom";

createServer({
  routes() {
    this.namespace = "api";

    this.urlPrefix = import.meta.env.API_URL 

    this.get("/home", () => {
      return {
        highlights: [
          {
            id: uuidv4(),
            title: "Sonic the Hedgehog 2 ultrapassa US$400 milhões de arrecadação",
            category: "Filme",
            img: "https://gamerview.uai.com.br/wp-content/uploads/2022/06/Sonic-2-ultapassa-400-milhoes-bilheteria-1.jpg",
          },
          {
            id: uuidv4(),
            title: "Demon Slayer libera nova imagem do vilão da terceira temporada",
            category: "Anime",
            img: "https://www.nerdsite.com.br/wp-content/uploads/2022/06/demon-slayer.jpg",
          },
          {
            id: uuidv4(),
            title: "Project L: tudo que sabemos até o momento",
            category: "Game",
            img: "https://s2.glbimg.com/_cXBJBCedaCk5Tsv_dWbun7MSlI=/0x0:1200x675/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/7/1/pOCXs1RyapL2c0TluOuw/project-l-thumb.jpg",
          },
        ],
        news: [
          {
            id: uuidv4(),
            title: "The Witcher Revela Péssima Notícia Para A 3ª Temporada",
            category: "Série",
            img: "https://streamingsbrasil.com/wp-content/uploads/2022/05/the-witcher-3-temporada.jpg.webp",
          },
          {
            id: uuidv4(),
            title: "MultiVersus faz sucesso em Beta e tem 144 mil usuários simultâneos no PC",
            category: "Game",
            img: "https://s2.glbimg.com/tAAMBROt9VhJXntA2OWCRkjbOtU=/0x0:1280x720/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/d/Y/jKIbV3QB2U5mJ8gW6Q4w/multiversos.jpg",
          },
          {
            id: uuidv4(),
            title: "'A Fera do Mar' vai ganhar sequência? Diretor responde!",
            category: "Filme",
            img: "https://i0.wp.com/hypando.com.br/wp-content/uploads/2022/07/a-fera-do-mar.jpg?resize=770%2C380&ssl=1",
          },
        ],
        newsList: [
          {
            id: uuidv4(),
            title: "6ª temporada de Peaky Blinders é despedida com gosto de 'quero mais'",
            content:
              "Ao fim da quinta temporada de Peaky Blinders, um Tommy Shelby (Cillian Murphy) desolado se perguntava: “Será que encontrei o único homem que não posso derrotar?”. O homem era o fascista Oswald Mosley (Sam Claflin), e a questão vinha após um grave revés nos planos do protagonista em assassinar o adversário. Era a maior derrota para Tommy e para a gangue Peaky Blinders desde o começo da série – e o seu peso, adequadamente, ainda é palpável na sexta e última temporada, que encerra a porção seriada da saga da família Shelby com um gosto de “quero mais”.",
            date: new Date("10/06/2022"),
            category: "Série",
            img: "https://cdn.ome.lt/gHY3SuAjK_R1kzV7YhHxUyP_Oso=/987x0/smart/uploads/conteudo/fotos/0094_PB6_20FEB21RV_1.jpg",
          },
          {
            id: uuidv4(),
            title: "Stranger Things já mostrou o monstro da 5ª temporada e você não percebeu",
            content:
              "A quinta temporada de Stranger Things não teve detalhes revelados até agora. Mas o primeiro ano da série já pode ter mostrado qual será o grande monstro desse desfecho da série da Netflix.",
            date: new Date("06/08/2022"),
            category: "Série",
            img: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2022/07/Stranger-Things-observatorio-do-cinema-1200-900.jpg",
          },
          {
            id: uuidv4(),
            title:
              "One Piece: Toei Animation sinaliza que novo filme poderá ser exibido na América Latina",
            content:
              "No dia 06/08/2022 o longa One Piece Film Red estreou nos cinemas japoneses e, considerando o fato de que em 2022 tivemos algumas produções de anime sendo exibidas nos cinemas como Jujutsu Kaisen 0; My Hero Academia: Missão Mundial de Heróis, além da chegada de Dragon Ball Super: Super Hero no próximo dia 18, devemos cogitar se o novo longa de Eiichiro Oda também será exibido por aqui.",
            date: new Date("07/08/2022"),
            category: "Anime",
            img: "https://i0.wp.com/anmtv.com.br/wp-content/uploads/2022/06/one-piece-red-romance-1.jpg?w=800&ssl=1",
          },
          {
            id: uuidv4(),
            title: "Elden Ring: mod melhora a performance do jogo removendo icônica árvore",
            content:
              "Elden Ring chegou dominando o mercado, alcançando surpreendentes números de vendas e se tornando um dos candidatos favoritos de diversos jogadores ao prêmio de melhor jogo do ano. Apesar de ser o queridinho de muita gente, o título não é perfeito e sofre com a queda na performance em algumas situações. Pelo menos até jogador quase que literalmente cortar o mal pela raiz.",
            date: new Date("04/08/2022"),
            category: "Game",
            img: "https://tm.ibxk.com.br/2022/08/03/03154457955253.jpg?ims=704x264",
          },
          {
            id: uuidv4(),
            title: "'Euphoria' encerra a segunda temporada com a obrigação de se reinventar",
            content:
              "HBO confirma mais episódios da série, que corre o risco de perder fôlego se não buscar novas tramas além do ciclo vicioso vivido por Rue, personagem de Zendaya",
            date: new Date("27/02/2022"),
            category: "Série",
            img: "https://imagens.brasil.elpais.com/resizer/CZgMt3hJ8wt-UJm3fq1HUA0Y_xo=/414x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/NOA6YXBL23QBCFBVMTMYNOXBSY.jpg",
          },
          {
            id: uuidv4(),
            title: "Diretor de 'Batman' confirma série derivada com foco no Asilo Arkham",
            content:
              "Batman recém estreou nos cinemas, mas já está rendendo frutos. Além de uma continuação, o filme vai gerar mais duas séries spin-offs: uma focada no Pinguim e outra sobre o Asilo Arkham. As informações foram confirmadas pelo diretor  Matt Reeves em entrevista ao Toronto Sun.",
            date: new Date("04/03/2022"),
            category: "Filme",
            img: "https://www.rbsdirect.com.br/filestore/9/8/5/0/8/9/1_f1c1f32a391d0e9/1980589_11a7c3f4325546e.jpg?w=700",
          },
        ],
        recentNews: [
          {
            id: uuidv4(),
            title: "'Top Gun 2' ultrapassa 'Titanic' e arrecada R$ 3,4 bilhões nos EUA e Canadá",
            content:
              "'Top Gun: Maverick' voou longe e conseguiu ultrapassar a bilheteria de 'Titanic' no combinado de ingressos comercializados nos Estados Unidos e Canadá. O filme com Tom Cruise se tornou a sétima maior arrecadação da história do país — excluíndo a inflação do período entre as películas. As informações são da Collider.",
            date: new Date("07/08/2022"),
            category: "Filme",
            img: "https://conteudo.imguol.com.br/c/entretenimento/d7/2022/07/21/tom-cruise-em-top-gun-maverick-2022-1658429356444_v2_900x506.jpg.webp",
          },
          {
            id: uuidv4(),
            title:
              "Komi Can't Communicate | 2ª temporada ou continuação? Entenda os novos episódios",
            content:
              "O popular anime Komi Can't Communicate estreou um novo episódio no Brasil nesta quarta-feira, 27 de abril. No entanto, a novidade está confundindo alguns fãs: é uma segunda temporada ou apenas uma continuação da primeira? ",
            date: new Date("27/04/2022"),
            category: "Anime",
            img: "https://cdn.ome.lt/ZleB4xP65jwT1sZOOB1ZLa36-rY=/570x0/smart/uploads/conteudo/fotos/komi-san-capa.jpg",
          },
          {
            id: uuidv4(),
            title: "Pokémon Legends: Arceus tem bug que trava completamente o seu progresso",
            content:
              "Um novo bug em Pokémon Legends Arceus está travando o progresso de muitos jogadores, que causam o problema sem perceber. O glitch acontece na missão 23 do jogo e pode ser ativado por acidente, impedindo o jogador de terminar a missão e, por consequência, o game.",
            date: new Date("19/02/2022"),
            category: "Game",
            img: "https://tm.ibxk.com.br/2022/02/18/18114206022220.jpg?ims=704x264",
          },
          {
            id: uuidv4(),
            title: "Ruptura | Série dirigida por Ben Stiller na Apple TV+ terá 2ª temporada",
            content:
              "Sucesso de crítica, o suspense Ruptura, do Apple TV+, terá uma segunda temporada. A série criada por Dan Erickson e que tem Ben Stiller como diretor em diversos episódios foi renovada pouco antes da exibição do último episódio da 1ª temporada.",
            date: new Date("06/04/2022"),
            category: "Série",
            img: "https://cdn.ome.lt/uTBUvcSCx-_YADHtcWF1y5uDY5M=/987x0/smart/uploads/conteudo/fotos/ruptura.jpg",
          },
          {
            id: uuidv4(),
            title:
              "Kaguya-sama: Love is War, Episódio Final da 3ª Temporada tem Vídeo Promocional e terá 1 hora de duração na TV japonesa",
            content:
              "A equipe técnica de Kaguya-sama wa Kokurasetai -Ultra Romantic-, a terceira temporada do anime de televisão escrito e ilustrado por Aka Akasaka, Kaguya-sama: Love is War (Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen), revelou um novo vídeo promocional e um visual chave, que revela que o episódio final da temporada em 24 de Junho será um episódio de uma hora de duração nas TVs japonesas, incluíndo os comerciais (na pratica seria cerca de 48 minutos de episódio de anime).",
            date: new Date("17/06/2022"),
            category: "Anime",
            img: "https://www.animesxis.com.br/wp-content/uploads/2022/06/Kaguya-sama-Ultra-Romantic-final-season-3-trailer.jpg",
          },
          {
            id: uuidv4(),
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
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
