import { Header } from "@/app/components/Header";
import TriceratopsShowImg from "./triceratops_show.jpg";
import AdlerImg from "./adler.jpg";
import Image from "next-export-optimize-images/image";
import styles from "./Portfolio.module.css";
import Link from "next/link";

const items = [
  {
    name: "Tricerátops Show",
    img: TriceratopsShowImg,
    linkTo: "https://www.triceratops.show",
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
    linkTo: "https://www.adlernas.com",
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
      <div style={{ backgroundColor: "#FFB559" }} className="py-4 px-4">
        <div className="container">
          <Header title={"Portifólio"}></Header>

          <div className="flex gap-8 justify-between">
            {items.map((i) => {
              return (
                <div key={i.name} className="basis-lg">
                  <Link href={i.linkTo} target="_blank">
                    <Image src={i.img} height="448" alt="" />
                  </Link>
                  <h3 className="text-center text-2xl md:text-3xl font-bold py-9">
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
