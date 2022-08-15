import { MagnifyingGlass } from "phosphor-react";
import { FormEvent, useEffect, useState } from "react";
import { api } from "../../api/api";
import { CardNotice } from "../../components/CardNotice";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { INotice } from "../../interface/types";
import { FirstSection, NoticesGrid, SearchBar } from "../stylesPages";

import imageCover from "../../assets/movie.jpg";

export function Movies() {
  const [dataMovies, setDataMovies] = useState<INotice[]>();
  const [filteredDataMovies, setFilteredDataMovies] = useState<INotice[]>([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [titlesNotices, setTitlesNotices] = useState<string[]>();

  useEffect(() => {
    api.get("/api/movies").then((res) => {
      const titles: string[] = [];
      const data: INotice[] = res.data.movies;

      data.forEach((notice) => {
        titles.push(notice.title);
      });

      setDataMovies(data);
      setTitlesNotices(titles);
    });
  }, []);

  function handleChange(event: FormEvent<HTMLInputElement>) {
    setSearchMovie(event.currentTarget.value);

    if (!dataMovies || !titlesNotices) {
      return;
    }
    console.log(searchMovie);
    if (event.currentTarget.value === "") {
      setFilteredDataMovies([]);
      return;
    }

    const lowerCaseSearch = event.currentTarget.value.toLocaleLowerCase();

    const filteredTitle = titlesNotices.filter((title) =>
      title.toLocaleLowerCase().includes(lowerCaseSearch)
    );

    const newDataMovies: INotice[] = [];

    filteredTitle.forEach((title) => {
      newDataMovies.push(dataMovies?.filter((notice) => notice.title === title)[0]);
    });

    setFilteredDataMovies(newDataMovies);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <>
      <Header page="movies" />

      <main>
        <FirstSection url={imageCover}>
          <h1>Filmes</h1>
          <span>
            O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos
            relacionados.
          </span>
        </FirstSection>

        <SearchBar>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Quer ajuda na procura? Pesquise aqui"
              value={searchMovie}
              onChange={handleChange}
            />
            <button>
              <MagnifyingGlass size={24} />
            </button>
          </form>
        </SearchBar>

        <NoticesGrid>
          {filteredDataMovies.length > 0 ? (
            filteredDataMovies.map((notice) => (
              <li key={notice.id}>
                <CardNotice
                  key={notice.id}
                  img={notice.frontCover}
                  title={notice.title}
                  category={notice.category}
                  id={notice.id}
                  withCategory={false}
                />
              </li>
            ))
          ) : searchMovie && filteredDataMovies.length === 0 ? (
            <h2>Notícia não encontrada</h2>
          ) : (
            dataMovies &&
            dataMovies.map((notice) => (
              <li key={notice.id}>
                <CardNotice
                  key={notice.id}
                  img={notice.frontCover}
                  title={notice.title}
                  category={notice.category}
                  id={notice.id}
                  withCategory={false}
                />
              </li>
            ))
          )}
        </NoticesGrid>
      </main>

      <Footer />
    </>
  );
}
