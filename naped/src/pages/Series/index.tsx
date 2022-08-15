import { MagnifyingGlass } from "phosphor-react";
import { FormEvent, useEffect, useState } from "react";
import { api } from "../../api/api";
import { CardNotice } from "../../components/CardNotice";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { INotice } from "../../interface/types";
import { FirstSection, NoticesGrid, SearchBar } from "../stylesPages";

import imageCover from "../../assets/serie.jpg";

export function Series() {
  const [dataSeries, setDataSeries] = useState<INotice[]>();
  const [filteredDataSeries, setFilteredDataSeries] = useState<INotice[]>([]);
  const [searchSerie, setSearchSerie] = useState("");
  const [titlesNotices, setTitlesNotices] = useState<string[]>();

  useEffect(() => {
    api.get("/api/series").then((res) => {
      const titles: string[] = [];
      const data: INotice[] = res.data.series;

      data.forEach((notice) => {
        titles.push(notice.title);
      });

      setDataSeries(data);
      setTitlesNotices(titles);
    });
  }, []);

  function handleChange(event: FormEvent<HTMLInputElement>) {
    setSearchSerie(event.currentTarget.value);

    if (!dataSeries || !titlesNotices) {
      return;
    }
    console.log(searchSerie);
    if (event.currentTarget.value === "") {
      setFilteredDataSeries([]);
      return;
    }

    const lowerCaseSearch = event.currentTarget.value.toLocaleLowerCase();

    const filteredTitle = titlesNotices.filter((title) =>
      title.toLocaleLowerCase().includes(lowerCaseSearch)
    );

    const newDataSeries: INotice[] = [];

    filteredTitle.forEach((title) => {
      newDataSeries.push(dataSeries?.filter((notice) => notice.title === title)[0]);
    });

    setFilteredDataSeries(newDataSeries);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <>
      <Header page="series" />

      <main>
        <FirstSection url={imageCover} backgroundPosition="center top">
          <h1>Séries</h1>
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
              value={searchSerie}
              onChange={handleChange}
            />
            <button>
              <MagnifyingGlass size={24} />
            </button>
          </form>
        </SearchBar>

        <NoticesGrid>
          {filteredDataSeries.length > 0 ? (
            filteredDataSeries.map((notice) => (
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
          ) : searchSerie && filteredDataSeries.length === 0 ? (
            <h2>Notícia não encontrada</h2>
          ) : (
            dataSeries &&
            dataSeries.map((notice) => (
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
