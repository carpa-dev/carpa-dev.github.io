import { Header } from "@/app/components/Header";
import CarpaFloatingImg from "./carpa-floating.svg";
import Image from "next/image";

export function Contact() {
  return (
    <section className="container text-center py-12 flex">
      <div className="flex-2" />

      <div className="flex-3">
        <Header title="Gostou? Tem dúvidas?" />
        <p>
          Estamos 100% disponíveis para responder quaisquer dúvidas. <br />
          Aqui você importa.
        </p>

        <button>Fale com a gente</button>
      </div>

      <div className="flex-2">
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
