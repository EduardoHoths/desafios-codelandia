import { Container } from "./styles";

interface NewsProps {
  width?: string;
  height?: string;
  img: string;
  category: string;
  title: string;
}

export function CardNotice({ img, width = "338", height = "250", category, title }: NewsProps) {
  return (
    <Container width={width} height={height}>
      <span>{category}</span>

      <img src={img} />

      <h2>
        {title}
      </h2>
    </Container>
  );
}
