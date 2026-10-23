import Image from "next/image";

export default function Page() {
  return (
    <section className="w-full h-150">
      <article className="w-full h-full relative">
        <Image src="/HeroImage2.png" alt="heroimage" fill priority sizes="100vw" />
      </article>
    </section>
  )
}
