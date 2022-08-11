import { Container } from "./styles";

interface NewsProps {
  width?: string;
  height?: string;
  img: string;
  category: string;
  title: string;
  id: number;
  withCategory?: boolean;
}

export function CardNotice({ img, width = "338", height = "250", category, title, id, withCategory = true }: NewsProps) {
  let categoryFormated = "";

  switch (category) {
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
    <Container width={width} height={height} href={`/notice/${categoryFormated}/${id}`}>
      {withCategory && <span>{category}</span>}

      <img src={img} />

      <h2>{title}</h2>
    </Container>
  );
}
