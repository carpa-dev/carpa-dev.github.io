import { Header } from "@/app/components/Header";
import TriceratopsShowImg from "./triceratops_show.jpg";
import AdlerImg from "./adler.jpg";
import Image from "next/image";
import styles from "./Portfolio.module.css";

const items = [
  {
    name: "Tricerátops Show",
    img: TriceratopsShowImg,
    content: (
      <p>
        Podcast de música alternativa capitaneado por DJ Luiz Terra. <br />
        <br />
        Um website super rápido, descolado, com um admin fácil de mexer.
        <br />
        <br />
        Também desenvolvemos uma plataforma própria para publicação de podcast.
      </p>
    ),
  },
  {
    name: "Adler Scaffolding",
    img: AdlerImg,
    content: (
      <p>
        Empresa americana de Andaimes e outras estruturas metálicas. <br />
        <br />
        Landing page editável via admin. <br /> <br />
        Sistema interno de followup de leads.
      </p>
    ),
  },
];
export function Portfolio() {
  return (
    <section id="portifolio" className="relative">
      <div style={{ backgroundColor: "#FFB559" }} className="py-4">
        <div className="container">
          <Header title={"Portifólio"}></Header>

          <div className="flex gap-8 justify-between">
            {items.map((i) => {
              return (
                <div className="basis-lg">
                  <Image src={i.img} height="448" alt="" />
                  <h3 className="text-center text-3xl font-bold py-9">
                    {i.name}
                  </h3>

                  {i.content}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.wave} />
    </section>
  );
}
