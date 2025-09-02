import Image from "next-export-optimize-images/image";
import EduardoImg from "./Eduardo.jpg";
import RuslanImg from "./Ruslan.jpg";
import styles from "./WhoAreWe.module.css";
import { Header } from "@/app/components/Header";

const Membros = [
  {
    name: "Eduardo Aleixo (fundador)",
    img: EduardoImg,
    content: (
      <>
        Desenvolvedor fullstack e fotógrafo. <br />
        <br />
        Após anos trabalhando para empresas estrangeiras, incluindo startups de
        São Francisco, decidiu se mudar para Portugal para viver uma vida
        desacelerada. <br />
        <br />
        De bits a inteligência artificial, ele adora tudo sobre tecnologia.
      </>
    ),
  },
  {
    name: "Ruslan Pascoal (cofundador)",
    img: RuslanImg,
    content: (
      <>
        Desenvolvedor frontend e pintor nas horas vagas. <br />
        Tem duas cachorrinhas sapecas que adoram aprontar. <br /> <br />
        Especialista em frontend, usa sua experiência artística como pintor para
        dar um toque artístico.
      </>
    ),
  },
];

export function WhoAreWe() {
  return (
    <section id="quem-somos" className="mx-4 py-9 container px-4">
      <Header title="Quem Somos" />

      <div className="flex flex-wrap gap-4">
        {Membros.map((m) => {
          return (
            <div
              key={m.name}
              className={`flex-1 flex flex-col items-center pb-6 ${styles.item}`}
            >
              <Image
                className={styles.cropper}
                src={m.img}
                width="190"
                height="190"
                alt="Foto"
              />
              <h3 className="text-center text-2xl font-bold py-9">{m.name}</h3>
              <p className="text-center">{m.content}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
