import { Container, FadeModal, Wrapper } from "./styles";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import menuIcon from "../../assets/menu.svg";

import { X } from "phosphor-react";

interface HeaderProps {
  page: string;
}

export function Header({ page }: HeaderProps) {
  const [headerActive, setHeaderActive] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth < 768);
  const [menuMobileActive, setMenuMobileActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleScroll() {
    setHeaderActive(window.scrollY > 0);
  }
  function handleResize() {
    setMobile(window.innerWidth < 768);
  }

  function openMenu() {
    setMenuMobileActive(true);
  }
  function closeMenu() {
    setMenuMobileActive(false);
  }

  return (
    <Container active={headerActive}>
      <Wrapper>
        <span>Naped</span>

        {mobile ? (
          <>
            <div>
              <img src={menuIcon} alt="Menu" onClick={openMenu} />
              <FadeModal
                className={menuMobileActive ? "menuActive" : ""}
                onClick={closeMenu}
              ></FadeModal>
              <nav className={menuMobileActive ? "menuActive" : ""}>
                <X size={24} onClick={closeMenu}/>
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
            </div>
            <button>Minha conta</button>
          </>
        ) : (
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
        )}
      </Wrapper>
    </Container>
  );
}
