import HeroImage from "@/components/home/heroImage";
import Categorias from "@/components/home/categorias";
import InfoHome from "@/components/home/InfoHome";
import HeroCategoria from "@/components/home/HeroCategoria";
import Destaques from "@/components/produtos/destaques";

export default function Home() {
  return (
    <>
      <HeroCategoria />
      <HeroImage />
      <Categorias />
      <InfoHome />
      <Destaques />
    </>
  );
}
