import { Header } from "@/app/components/Header";
import styles from "./SecretIngredient.module.css";
import SardinhaImg from "./sardinhas.jpg";

export function SecretIngredient() {
  return (
    <section className="container py-8">
      <div className="flex">
        <div className="flex-1 px-4">
          <Header title="O ingrediente secreto" />

          <p>
            Com mais de 15 anos de experiência combinados, nós sabemos onde{" "}
            <strong>simplificar</strong>. <br />
            <br />
            Acreditamos que a tecnologia foi feita para facilitar a vida humana.
            Com a gente, você <strong>esquece dos seus problemas</strong>.{" "}
            <br />
            <br />
            <strong>Suporte total</strong>. Só atendemos projetos que somos
            capazes de dar total atenção, não nos confunda com agências de
            design de esquina. <br />
            <br />
            Software é uma arte, e deve ser tratado como tal. <br />
            Como uma boa sardinha na brasa,{" "}
            <strong>a tradição e atenção aos detalhes são essenciais.</strong>
          </p>
        </div>
        <div className="flex-1">
          <div
            className={`${styles.img} flex-1`}
            style={{ backgroundImage: `url(${SardinhaImg.src})` }}
          ></div>
        </div>
      </div>
    </section>
  );
}
