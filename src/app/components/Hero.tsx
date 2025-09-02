import Image from "next/image";
import HeroBg from "./HeroBg.png";
import Logo from "./logo.png";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={`relative flex items-center justify-between pb-48 lg:pb-28 pt-16 lg:pt-0 ${styles.hero}`}>
        <div className="relative container w-full flex items-center justify-center lg:justify-between z-1 flex-wrap-reverse">
            <div className={`${styles.heroLeft}`}>
                <h1>
                SE <span className={styles.orange}>TRANSFORME</span>
                </h1>
                <h1>CONOSCO</h1>
                <p className="mt-8">Websites, sistemas e muito mais.</p>
                <p>+15 anos de experiência ao seu dispor.</p>
                <button className="button mt-8 py-3 px-12 self-center">Pedir Orçamento</button>
            </div>
            <Image src={Logo} alt="" className="relative h-auto w-auto mb-8 lg:mb-0"/>
        </div>
      <Image src={HeroBg} fill alt="" />
    </section>
  );
}
