import { INewsList } from "../../interface/types";
import { ImageContainer, Notice } from "./styles";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface ContainerNoticeProps {
  notice: INewsList;
}

export function ContainerNotice({ notice }: ContainerNoticeProps) {
  let categoryFormated = "";

  switch (notice.category) {
    case "Filme":
      categoryFormated = "movies";
      break;
    case "Anime":
      categoryFormated = "animes";
      break;
    case "Game":
      categoryFormated = "games";
      break;
    case "Série":
      categoryFormated = "series";
      break;
  }

  return (
    <Notice>
      <ImageContainer>
        <span>{notice.category}</span>
        <img src={notice.img} alt={notice.title} />
      </ImageContainer>

      <div>
        <h3>{notice.title}</h3>
        <span>{notice.content}</span>

        <time dateTime={notice.date}>
          {format(new Date(notice.date), "dd/MM/yyyy", { locale: ptBR })}
        </time>

        <a href={`/notice/${categoryFormated}/${notice.id}`}>Ler notícia</a>
      </div>
    </Notice>
  );
}
