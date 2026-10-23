import Image from "next/image";

export default function Page() {
  return (
    <section className="p-15">
      <article className="grid grid-cols-3 gap-5">
        <div className="rounded-md relative h-70">
          <Image src="/categoria1.png" alt="categoria1" fill className="rounded-md" />
        </div>
        <div className="rounded-md relative h-70">
          <Image src="/categoria2.png" alt="categoria1" fill className="rounded-md" />
        </div>
        <div className="rounded-md relative h-70">
          <Image src="/categoria3.png" alt="categoria1" fill className="rounded-md" />
        </div>
      </article>
    </section>
  )
}
