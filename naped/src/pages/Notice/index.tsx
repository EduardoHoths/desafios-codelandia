import { Header } from "../../components/Header";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { FrontCover, Main, RecentNews } from "./styles";
import { CardNotice } from "../../components/CardNotice";
import { format } from "date-fns";
import { Footer } from "../../components/Footer";

interface ResponseNotice {
  id: number;
  title: string;
  subTitle: string;
  category: string;
  frontCover: string;
  date: string;
  content: {
    type: string;
    content: string;
  }[];
}

interface ResponseRecentNews {
  id: number;
  title: string;
  category: string;
  content: string;
  date: string;
  img: string;
}

export function Notice() {
  const [dataNotice, setDataNotice] = useState<ResponseNotice>();
  const [dataRecentNews, setDataRecentNews] = useState<ResponseRecentNews[]>();
  const { category, id } = useParams();

  useEffect(() => {
    api.get(`/api/notice/${category}/${id}`).then((res) => setDataNotice(res.data));

    api.get("/api/home").then((res) => setDataRecentNews(res.data.recentNews));
  }, []);

  if (!dataNotice) return null;

  return (
    <>
      <Header />

      <Main>
        <h1>{dataNotice.title}</h1>

        <span>{dataNotice.subTitle}</span>

        <time dateTime={dataNotice.date}>{format(new Date(dataNotice.date), "dd/MM/yyyy")}</time>

        <FrontCover>
          <span>{dataNotice.category}</span>
          <img src={dataNotice.frontCover} />
        </FrontCover>

        {dataNotice.content.map((content) => {
          switch (content.type) {
            case "paragraph":
              return <p>{content.content}</p>;
            case "img":
              return <img src={content.content} />;
            case "h2":
              return <h2>{content.content}</h2>;
            case "link":
              return (
                <a href={content.content} target="_blank">
                  Acesse a matéria original aqui
                </a>
              );
          }
        })}

        <RecentNews>
          <h2>Notícias mais recentes</h2>

          <div>
            {dataRecentNews &&
              dataRecentNews.map((notice) => (
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
      </Main>

      <Footer />
    </>
  );
}
