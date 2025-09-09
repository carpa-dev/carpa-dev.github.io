import { TopBar } from "@/app/components/TopBar";
import { Hero } from "@/app/components/Hero";
import { Portfolio } from "@/app/components/Portfolio";
import { WhoAreWe } from "@/app/components/WhoAreWe";
import { OurServices } from "@/app/components/OurServices";
import { SecretIngredient } from "@/app/components/SecretIngredient";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <TopBar />
      <Hero />
      <WhoAreWe />
      <Portfolio />
      <OurServices />
      <SecretIngredient />
      <Contact />
      <Footer />
    </div>
  );
}
