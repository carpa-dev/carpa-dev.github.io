import Image from "next/image";
import HeroBg from "./HeroBg.png";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={`relative ${styles.hero}`}>
      Hero
      <Image src={HeroBg} fill alt="" />
    </section>
  );
}
