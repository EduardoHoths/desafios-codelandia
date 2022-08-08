import { INewsList } from "../../interface/types";
import { ImageContainer, Notice } from "./styles";

interface ContainerNoticeProps {
  notice: INewsList;
}

export function ContainerNotice({ notice }: ContainerNoticeProps) {
  return (
    <Notice>
      <ImageContainer>
        <span>{notice.category}</span>
        <img src={notice.img} alt={notice.title} />
      </ImageContainer>

      <div>
        <h3>{notice.title}</h3>
        <span>{notice.content}</span>

        <data value={notice.date}>{notice.date}</data>

        <a href="">Ler notícia</a>
      </div>
    </Notice>
  );
}
