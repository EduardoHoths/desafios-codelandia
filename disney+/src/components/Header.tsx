import Logo from "../assets/logo.svg";
import { FacebookLogo } from "../assets/FacebookLogo";
import { InstagramLogo } from "../assets/InstagramLogo";
import { TwitterLogo } from "../assets/TwitterLogo";
import { YoutubeLogo } from "../assets/YoutubeLogo";

import styles from "../styles/Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <a href="./">
        <img src={Logo} alt="" />
      </a>

      <div>
        <a href="https://www.facebook.com/eduardohoths/" target="blank">
          <FacebookLogo />
        </a>
        <a href="https://www.instagram.com/eduardo.hoths/" target="blank">
          <InstagramLogo />
        </a>
        <a href="https://twitter.com/eduardo_hoths" target="blank">
          <TwitterLogo />
        </a>
        <a
          href="https://www.youtube.com/watch?v=XKd-qdNNko4&ab_channel=TalesWeavermusic"
          target="blank"
        >
          <YoutubeLogo />
        </a>
      </div>
    </header>
  );
}
