import { Header } from "../../components/Header";
import { CardNotice } from "../../components/CardNotice";
import { FirstSection, Footer, Highlights, Main, NewsList, RecentNews } from "./styles";
import { ContainerNotice } from "../../components/ContainerNotice";

import { api } from "../../api/api";
import { useEffect, useState } from "react";
import { INews, INewsList } from "../../interface/types";

const newsList = [
  {
    img: "https://source.unsplash.com/random",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...",
    date: "00/00/0000",
    category: "Filme",
  },
  {
    img: "https://source.unsplash.com/random",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...",
    date: "00/00/0000",
    category: "Filme",
  },
  {
    img: "https://source.unsplash.com/random",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...",
    date: "00/00/0000",
    category: "Filme",
  },
  {
    img: "https://source.unsplash.com/random",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...",
    date: "00/00/0000",
    category: "Filme",
  },
  {
    img: "https://source.unsplash.com/random",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...",
    date: "00/00/0000",
    category: "Filme",
  },
  {
    img: "https://source.unsplash.com/random",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...",
    date: "00/00/0000",
    category: "Filme",
  },
];

interface DataApi {
  highlights: INews[];
  news: INews[];
  newsList: INewsList[];
  recentNews: INews[];
}

export function Home() {
  const [data, setData] = useState<DataApi>();

  useEffect(() => {
    api.get("/api/home").then((res) => setData(res.data));
  }, []);

  if (!data) return null;

  return (
    <>
      <Header page="home" />

      <Main>
        <FirstSection>
          <h1>
            Mundo nerd? 
            Naped!
          </h1>

          <span>
            O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos
            relacionados.
          </span>
        </FirstSection>

        <Highlights>
          {data.highlights.map((notice, index) => {
            if (index === 0) {
              return (
                <CardNotice
                  key={notice.id}
                  width="761"
                  height="350"
                  img={notice.img}
                  category={notice.category}
                  title={notice.title}
                />
              );
            }
          })}

          <div>
            {data.highlights.map((notice, index) => {
              if (index > 0) {
                return (
                  <CardNotice
                    key={notice.id}
                    width="338"
                    height="165"
                    img={notice.img}
                    category={notice.category}
                    title={notice.title}
                  />
                );
              }
            })}
          </div>
        </Highlights>

        <NewsList>
          <ul>
            {data.newsList.map((notice) => (
              <ContainerNotice notice={notice} key={notice.id} />
            ))}
          </ul>

          <aside>
            <h2>Novidades</h2>

            {data.news.map((notice) => (
              <CardNotice
                img={notice.img}
                category={notice.category}
                title={notice.title}
                key={notice.id}
              />
            ))}
          </aside>
        </NewsList>

        <RecentNews>
          <h2>Notícias mais recentes</h2>

          <div>
            {data.recentNews.map((notice) => (
              <CardNotice
                img={notice.img}
                category={notice.category}
                title={notice.title}
                key={notice.id}
              />
            ))}
          </div>
        </RecentNews>
      </Main>

      <Footer>
        <span>Naped</span>

        <p>
          Todas as imagens de filmes, séries e etc são marcas registradas dos seus respectivos
          proprietários.
        </p>
      </Footer>
    </>
  );
}
