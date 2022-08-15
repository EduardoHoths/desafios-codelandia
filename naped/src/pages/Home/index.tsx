import { Header } from "../../components/Header";
import { CardNotice } from "../../components/CardNotice";
import { FirstSection, Highlights, NewsList, RecentNews } from "./styles";
import { ContainerNotice } from "../../components/ContainerNotice";

import { api } from "../../api/api";
import { useEffect, useState } from "react";
import { INews, INewsList } from "../../interface/types";
import { Footer } from "../../components/Footer";

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

  return (
    <>
      <Header page="home" />

      <main>
        <FirstSection>
          <h1>Mundo nerd? Naped!</h1>

          <span>
            O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos
            relacionados.
          </span>
        </FirstSection>

        <Highlights>
          {data && data.highlights.map((notice, index) => {
            if (index === 0) {
              return (
                <CardNotice
                  key={notice.title}
                  width="761"
                  height="350"
                  img={notice.img}
                  category={notice.category}
                  title={notice.title}
                  id={notice.id}
                />
              );
            }
          })}

          <div>
            {data && data.highlights.map((notice, index) => {
              if (index > 0) {
                return (
                  <CardNotice
                    key={notice.title}
                    width="338"
                    height="165"
                    img={notice.img}
                    category={notice.category}
                    title={notice.title}
                    id={notice.id}
                  />
                );
              }
            })}
          </div>
        </Highlights>

        <NewsList>
          <ul>
            {data && data.newsList.map((notice) => (
              <ContainerNotice notice={notice} key={notice.title} />
            ))}
          </ul>

          <aside>
            <h2>Novidades</h2>

            {data && data.news.map((notice) => (
              <CardNotice
                img={notice.img}
                category={notice.category}
                title={notice.title}
                key={notice.title}
                id={notice.id}
              />
            ))}
          </aside>
        </NewsList>

        <RecentNews>
          <h2>Notícias mais recentes</h2>

          <div>
            {data && data.recentNews.map((notice) => (
              <CardNotice
                img={notice.img}
                category={notice.category}
                title={notice.title}
                key={notice.title}
                id={notice.id}
              />
            ))}
          </div>
        </RecentNews>
      </main>

      <Footer />
    </>
  );
}
