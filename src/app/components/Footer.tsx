import Link from "next/link";
import styles from "./Footer.module.css";
import CarpaBubblesImg from "./carpa_cute.svg";
import Image from "next/image";

export function Footer() {
  return (
    <footer>
      <div className={styles.waves}></div>
      <div className={styles.footer}>
        <div className="container flex justify-center">
          <Image
            className={styles.carpaBubbles}
            alt="Carpa nadando"
            src={CarpaBubblesImg}
            width="100"
            height="100"
          />

          <div className="flex items-center">
            Carpa.dev {new Date().getFullYear()} Todos os direitos reservados
          </div>
        </div>
      </div>
    </footer>
  );
}
