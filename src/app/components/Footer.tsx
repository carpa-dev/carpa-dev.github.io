import Link from "next/link";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer>
      <div className={styles.waves}></div>
      <div className={styles.footer}>
        <div className="container">
          <Link href="https://www.svgbackgrounds.com/license/" target="_blank">
            SVG License
          </Link>
        </div>
      </div>
    </footer>
  );
}
