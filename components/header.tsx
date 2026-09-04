import Image from 'next/image';
import { ShoppingCart, User, Bookmark, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className='p-5 bg-[#f4f4f4]'>
      <nav className='flex justify-around items-center'>
        <div>
          <Image src='/logo4.png' alt='logo' width={150} height={70} className='rounded-xl' />
        </div>
        <div className='flex gap-2 items-center outline-1 outline-gray-300 rounded-xl w-130 h-10 p-1.5'>
          <input type='text' placeholder='Pesquise por produtos ... ' className='w-full h-full outline-hidden' />
          <Search className='text-gray-400' />
        </div>
        <div>
          <ul className='flex gap-5'>
            <li>
              <Bookmark className='text-gray-500' />
            </li>
            <li>
              <User className='text-gray-500' />
            </li>
            <li>
              <ShoppingCart className='text-gray-500' />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
