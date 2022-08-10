import { INewsList } from "../../interface/types";
import { ImageContainer, Notice } from "./styles";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface ContainerNoticeProps {
  notice: INewsList;
}

export function ContainerNotice({ notice }: ContainerNoticeProps) {
  console.log(notice)
  return (
    <Notice>
      <ImageContainer>
        <span>{notice.category}</span>
        <img src={notice.img} alt={notice.title} />
      </ImageContainer>

      <div>
        <h3>{notice.title}</h3>
        <span>{notice.content}</span>

        <data value={notice.date}>
          {format(new Date(notice.date), "dd/MM/yyyy", { locale: ptBR })}
        </data>

        <a href="">Ler notícia</a>
      </div>
    </Notice>
  );
}
