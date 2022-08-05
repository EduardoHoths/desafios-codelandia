import { Container, Wrapper } from "./styles";

import { Link } from "react-router-dom";

interface HeaderProps {
  page: string;
}

export function Header({ page }: HeaderProps) {
  return (
    <Container>
      <Wrapper>
        <span>Naped</span>

        <div>
          <nav>
            <Link to="/" className={page === "home" ? "active" : ""}>
              Home
            </Link>
            <Link to="/series" className={page === "series" ? "active" : ""}>
              Séries
            </Link>
            <Link to="/movies" className={page === "movies" ? "active" : ""}>
              Filmes
            </Link>
            <Link to="/animes" className={page === "animes" ? "active" : ""}>
              Animes
            </Link>
            <Link to="/games" className={page === "games" ? "active" : ""}>
              Games
            </Link>
          </nav>

          <button>Minha conta</button>
        </div>
      </Wrapper>
    </Container>
  );
}
