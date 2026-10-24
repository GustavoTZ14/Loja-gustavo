import { db } from "@/src/prisma/db";
import Image from "next/image";

export default async function Page() {
  "use cache";
  const produtos = await db.orm.public.Product.where({ isFeatured: true }).all();

  return (
    <section className="p-15">
      <article className="grid grid-cols-5 gap-2">
        {produtos.map(({ id, name, image, price }) => (
          <div key={id} className="outline-1 outline-gray-300 rounded-md bg-white p-1 shadow-md">
            <div className="relative w-full h-80">
              <Image src={image!} alt={name} fill className="rounded-md" />
            </div>
            <div>
              <h1>{name}</h1>
              <span>{price}</span>
            </div>
          </div>
        ))}
      </article>
    </section>
  )
}
