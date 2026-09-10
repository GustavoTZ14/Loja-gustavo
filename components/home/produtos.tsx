import Image from "next/image";

export default function Protutos() {
  return (
    <>
      <section className="flex w-full p-2">
        <article className="grid grid-cols-3 gap-2 m-auto">
          <div className="w-100 h-100 p-1">
            <div className="w-full h-60 relative">
              <Image src="/imagens/camamesaebanho_1.webp" alt="produto1" fill className="object-cover rounded-sm" />
            </div>
            <div className="p-1">
              <h2 className="text-base mb-5">Colcha king Prata</h2>
              <div className="flex justify-between gap-2">
                <div>
                  <span className="line-through">
                    R$ 100
                  </span>
                  <span>
                    R$ 55
                  </span>
                </div>
                <div className="text-sm">
                  saiba mais
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}
