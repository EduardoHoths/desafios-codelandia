import { Header } from "../../components/Header";
import { CardNotice } from "../../components/CardNotice";
import { FirstSection, Footer, Highlights, Main, NewsList, RecentNews } from "./styles";
import { ContainerNotice } from "../../components/ContainerNotice";

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

export function Home() {
  return (
    <>
      <Header page="home" />

      <Main>
        <FirstSection>
          <h1>
            Mundo nerd? <br />
            Naped!
          </h1>

          <span>
            O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos
            relacionados.
          </span>
        </FirstSection>

        <Highlights>
          <CardNotice
            width="761"
            height="350"
            img="https://source.unsplash.com/random"
            category="Filme"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et
            velit in, blandit molestie dolor."
          />

          <div>
            <CardNotice
              width="338"
              height="165"
              img="https://source.unsplash.com/random"
              category="Anime"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et
            velit in, blandit molestie dolor."
            />

            <CardNotice
              width="338"
              height="165"
              img="https://source.unsplash.com/random"
              category="Série"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et
            velit in, blandit molestie dolor."
            />
          </div>
        </Highlights>

        <NewsList>
          <ul>
            {newsList.map((notice) => (
              <ContainerNotice notice={notice} />
            ))}
          </ul>

          <aside>
            <h2>Novidades</h2>

            <CardNotice
              img="https://source.unsplash.com/random"
              category="Anime"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et
            velit in, blandit molestie dolor."
            />

            <CardNotice
              img="https://source.unsplash.com/random"
              category="Série"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et
            velit in, blandit molestie dolor."
            />
            <CardNotice
              img="https://source.unsplash.com/random"
              category="Série"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et
            velit in, blandit molestie dolor."
            />
          </aside>
        </NewsList>

        <RecentNews>
          <h2>Notícias mais recentes</h2>

          <div>
            <CardNotice
              img="https://source.unsplash.com/random"
              category="Anime"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et
            velit in, blandit molestie dolor."
            />

            <CardNotice
              img="https://source.unsplash.com/random"
              category="Série"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et
            velit in, blandit molestie dolor."
            />
            <CardNotice
              img="https://source.unsplash.com/random"
              category="Série"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et
            velit in, blandit molestie dolor."
            />

            <CardNotice
              img="https://source.unsplash.com/random"
              category="Anime"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et
            velit in, blandit molestie dolor."
            />

            <CardNotice
              img="https://source.unsplash.com/random"
              category="Série"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et
            velit in, blandit molestie dolor."
            />
            <CardNotice
              img="https://source.unsplash.com/random"
              category="Série"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et
            velit in, blandit molestie dolor."
            />
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
