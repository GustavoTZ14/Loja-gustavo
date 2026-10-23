import { Truck } from 'lucide-react';

export default function Page() {
  return (
    <section>
      <article className='grid grid-cols-5'>
        <nav className='col-span-4 flex gap-2 items-center text-sm font-bold text-[#755a4b] bg-[#f4f0ec]'>
          <div className='w-30 text-center uppercase'>
            <span>Cama</span>
          </div>
          <div className='w-30 text-center uppercase'>
            <span>Mesa</span>
          </div>
          <div className='w-30 text-center uppercase'>
            <span>Banho</span>
          </div>
          <div className='w-30 text-center uppercase'>
            <span>Kits</span>
          </div>
          <div className='w-30 text-center uppercase'>
            <span>Lançamentos</span>
          </div>
          <div className='w-30 text-center uppercase'>
            <span>Outlet</span>
          </div>
          <div className='w-30 text-center uppercase'>
            <span>Marcas</span>
          </div>
        </nav>
        <div className='flex items-center p-2 justify-center gap-4 bg-[#f3e5db] col-span-1'>
          <Truck size={30} className='text-[#755a4b]' />
          <div className='grid'>
            <span className='text-sm font-bold'>Frete Grátis</span>
            <span className='text-xs text-[#755a4b]'>em compras acima de R$: 299</span>
          </div>
        </div>
      </article>
    </section>
  )
}
