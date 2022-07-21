import { Header } from "./components/Header";

import "./styles/globalStyles.scss";
import styles from "./styles/App.module.scss";

import Image from "./assets/image.svg";
import PlayIcon from "./assets/play.svg";

export function App() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <div className={styles.containerContent}>
          <strong>HAYAO MIYAZAKI</strong>

          <h1>
            A VIAGEM <br />
            DE CHIHIRO
          </h1>

          <span>
            Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são
            transformados em animais.
          </span>

          <div>
            <a href="https://www.netflix.com/br/title/60023642" target="_blank">
              <span>
                <img src={PlayIcon} alt="Icone de play" />
                ASSISTIR AGORA
              </span>
            </a>
            <a
              href="https://www.youtube.com/watch?v=ByXuk9QqQkk&ab_channel=MadmanAnime"
              target="_blank"
            >
              <span>ASSISTA O TRAILER</span>
            </a>
          </div>
        </div>

        <div className={styles.containerImage}>
          <img src={Image} alt="Dois fantasmas" />
        </div>
      </main>
    </>
  );
}
