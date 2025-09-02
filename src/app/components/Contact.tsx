import { Header } from "@/app/components/Header";
import CarpaFloatingImg from "./carpa-floating.svg";
import Image from "next/image";

export function Contact() {
  return (
    <section className="container text-center py-12 flex flex-col-reverse md:flex-row">
      <div className="flex-0 md:flex-2" />

      <div className="flex-1 md:flex-3">
        <Header title="Gostou? Tem dúvidas?" />
        <p>
          Estamos 100% disponíveis para responder quaisquer dúvidas. <br />
          Aqui você importa.
        </p>
        <a
          href="mailto:eduardo@carpa.dev"
          className="inline-block button py-3 px-12 my-9"
        >
          Fale com a gente
        </a>
        <p>
          Ou mande um e-mail para{" "}
          <strong>
            <i>eduardo@carpa.dev</i>
          </strong>
        </p>
      </div>

      <div className="flex-1 md:flex-2 flex justify-center md:content-center">
        <Image
          src={CarpaFloatingImg}
          alt="Desenho de uma carpa usando um teclado"
          width="300"
          height="187"
        />
      </div>
    </section>
  );
}
