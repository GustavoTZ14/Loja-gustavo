import { Truck, CreditCard, ShoppingBag, RefreshCw, Headset } from 'lucide-react';

export default function Page() {
  return (
    <section className='p-8 bg-[#f3f0ed]'>
      <article className="grid grid-cols-5 gap-2">
        <div className='flex justify-center items-center gap-4'>
          <Truck size={50} className='text-[#693c20]' />
          <div className='grid'>
            <span className='text-sm font-bold'>Frete Grátis</span>
            <span className='text-xs'>em compras acima de R$: 299</span>
          </div>
        </div>
        <div className='flex justify-center items-center gap-4'>
          <CreditCard size={50} className='text-[#693c20]' />
          <div className='grid'>
            <span className='text-sm font-bold'>Até 12x sem juros</span>
            <span className='text-xs'>no cartão de crédito</span>
          </div>
        </div>
        <div className='flex justify-center items-center gap-4'>
          <ShoppingBag size={50} className='text-[#693c20]' />
          <div className='grid'>
            <span className='text-sm font-bold'>Compras Segura</span>
            <span className='text-xs'>seus dados protegidos</span>
          </div>
        </div>
        <div className='flex justify-center items-center gap-4'>
          <RefreshCw size={50} className='text-[#693c20]' />
          <div className='grid'>
            <span className='text-sm font-bold'>Troca Fácil</span>
            <span className='text-xs'>em até 30 dias</span>
          </div>
        </div>
        <div className='flex justify-center items-center gap-4'>
          <Headset size={50} className='text-[#693c20]' />
          <div className='grid'>
            <span className='text-sm font-bold'>Atendimento Expecializado</span>
            <span className='text-xs'>suporte via Whatsapp</span>
          </div>
        </div>
      </article>
    </section>
  )
}
