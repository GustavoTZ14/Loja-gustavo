import { Heart, Search, CircleUser, ShoppingCart } from 'lucide-react';

export default function Page() {

  return (
    <header className='p-5'>
      <nav className='flex justify-around items-center'>
        <div>
          LOGO
        </div>
        <div>
          <form className='flex w-120 outline-1 outline-gray-300 rounded-xl h-10 bg-[#d9d9d9]'>
            <input type="text" className='w-full h-full text-base text-gray-500 pl-2 outline-hidden' placeholder='Pesquise por um produto' />
            <div className='w-10 flex justify-center items-center'>
              <Search size={20} className='text-gray-500' />
            </div>
          </form>
        </div>
        <div className='flex items-center gap-5 text-gray-500'>
          <div>
            <Heart size={20} />
          </div>
          <div>
            <ShoppingCart size={20} />
          </div>
          <div>
            <CircleUser size={30} />
          </div>
        </div>
      </nav>
    </header>
  )
}
