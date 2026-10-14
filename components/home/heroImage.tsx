import Image from "next/image";

export default function Page() {
  return (
    <section className="w-full h-200 p-10">
      <article className="w-full h-full relative rounded-xl">
        <Image src="/HeroImage.png" alt="heroimage" fill priority sizes="100vw" className="rounded-xl" />
      </article>
    </section>
  )
}
