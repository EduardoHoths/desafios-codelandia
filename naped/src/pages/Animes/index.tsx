import { MagnifyingGlass } from "phosphor-react";
import { FormEvent, useEffect, useState } from "react";
import { api } from "../../api/api";
import { CardNotice } from "../../components/CardNotice";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { INotice } from "../../interface/types";
import { Notice } from "../Notice";
import { FirstSection, NoticesGrid, SearchBar } from "./styles";

export function Animes() {
  const [dataAnimes, setDataAnimes] = useState<INotice[]>();
  const [filteredDataAnimes, setFilteredDataAnimes] = useState<INotice[]>([]);
  const [searchAnime, setSearchAnime] = useState("");
  const [titlesNotices, setTitlesNotices] = useState<string[]>();

  useEffect(() => {
    api.get("/api/animes").then((res) => {
      const titles: string[] = [];
      const data: INotice[] = res.data.animes;

      data.forEach((notice) => {
        titles.push(notice.title);
      });

      setDataAnimes(data);
      setTitlesNotices(titles);
    });
  }, []);

  function handleChange(event: FormEvent<HTMLInputElement>) {
    setSearchAnime(event.currentTarget.value);

    if (!dataAnimes || !titlesNotices) {
      return;
    }
    console.log(searchAnime);
    if (event.currentTarget.value === "") {
      setFilteredDataAnimes([]);
      return;
    }

    const lowerCaseSearch = event.currentTarget.value.toLocaleLowerCase();

    const filteredTitle = titlesNotices.filter((title) =>
      title.toLocaleLowerCase().includes(lowerCaseSearch)
    );

    const newDataAnimes: INotice[] = []

    filteredTitle.forEach(title => {
      newDataAnimes.push(dataAnimes?.filter((notice) => notice.title === title)[0])
    })


    setFilteredDataAnimes(newDataAnimes);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <>
      <Header page="animes" />

      <main>
        <FirstSection>
          <h1>Animes</h1>
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
              value={searchAnime}
              onChange={handleChange}
            />
            <button>
              <MagnifyingGlass size={24} />
            </button>
          </form>
        </SearchBar>

        <NoticesGrid>
          {filteredDataAnimes.length > 0 ? (
            filteredDataAnimes.map((notice) => (
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
          ) : searchAnime && filteredDataAnimes.length === 0 ? (
            <h2>Anime não encontrado</h2>
          ) : (
            dataAnimes &&
            dataAnimes.map((notice) => (
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
