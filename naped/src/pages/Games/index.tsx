import { MagnifyingGlass } from "phosphor-react";
import { FormEvent, useEffect, useState } from "react";
import { api } from "../../api/api";
import { CardNotice } from "../../components/CardNotice";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { INotice } from "../../interface/types";
import { FirstSection, NoticesGrid, SearchBar } from "../stylesPages";

import imageCover from "../../assets/game.jpg";

export function Games() {
  const [dataGames, setDataGames] = useState<INotice[]>();
  const [filteredDataGames, setFilteredDataGames] = useState<INotice[]>([]);
  const [searchGame, setSearchGame] = useState("");
  const [titlesNotices, setTitlesNotices] = useState<string[]>();

  useEffect(() => {
    api.get("/api/games").then((res) => {
      const titles: string[] = [];
      const data: INotice[] = res.data.games;

      data.forEach((notice) => {
        titles.push(notice.title);
      });

      setDataGames(data);
      setTitlesNotices(titles);
    });
  }, []);

  function handleChange(event: FormEvent<HTMLInputElement>) {
    setSearchGame(event.currentTarget.value);

    if (!dataGames || !titlesNotices) {
      return;
    }
    console.log(searchGame);
    if (event.currentTarget.value === "") {
      setFilteredDataGames([]);
      return;
    }

    const lowerCaseSearch = event.currentTarget.value.toLocaleLowerCase();

    const filteredTitle = titlesNotices.filter((title) =>
      title.toLocaleLowerCase().includes(lowerCaseSearch)
    );

    const newDataGames: INotice[] = [];

    filteredTitle.forEach((title) => {
      newDataGames.push(dataGames?.filter((notice) => notice.title === title)[0]);
    });

    setFilteredDataGames(newDataGames);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <>
      <Header page="games" />

      <main>
        <FirstSection url={imageCover}>
          <h1>Games</h1>
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
              value={searchGame}
              onChange={handleChange}
            />
            <button>
              <MagnifyingGlass size={24} />
            </button>
          </form>
        </SearchBar>

        <NoticesGrid>
          {filteredDataGames.length > 0 ? (
            filteredDataGames.map((notice) => (
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
          ) : searchGame && filteredDataGames.length === 0 ? (
            <h2>Notícia não encontrada</h2>
          ) : (
            dataGames &&
            dataGames.map((notice) => (
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
