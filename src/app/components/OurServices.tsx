import LaptopImg from "./laptop.jpg";
import styles from "./OurServices.module.css";
import { Header } from "@/app/components/Header";

export function OurServices() {
  return (
    <div className="container py-4">
      <div className="flex gap-8">
        <div
          className={`${styles.laptopWrapper} flex-1`}
          style={{ backgroundImage: `url(${LaptopImg.src})` }}
        ></div>

        <div className="flex-1 px-4 content-center">
          <Header title="Nossos serviços" className="pt-0" />

          <h3 className="text-2xl font-bold py-2">
            Desenvolvimento de Sites Institucionais
          </h3>
          <p>
            Um site institucional é a vitrine digital da sua empresa: ela
            transmite credibilidade, fortalece a marca e centraliza informações
            essenciais para clientes e parceiros.
          </p>

          <h3 className="text-2xl font-bold py-2">Design Responsivo</h3>
          <p>
            Para que seu site funcione bem em qualquer dispositivo. Desde
            computadores, celulares, e até em TVs.
          </p>

          <h3 className="text-2xl font-bold py-2">
            Correções de sites já existentes
          </h3>
          <p>
            Para quem já tem um site, mas precisa de uma correçãozinha aqui e
            ali.
          </p>

          <h3 className="text-2xl font-bold py-2">Sistemas internos</h3>
          <p>
            Desenvolvemos sistemas adaptados às suas realidades. Gerando
            relatórios, integrações e funcionalidades que você precisa.
          </p>
        </div>
      </div>
    </div>
  );
}
