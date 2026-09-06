"use client";
import Image from 'next/image';
import { ShoppingCart, User, Bookmark, Search } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';

export default function Header() {
  async function getUser(){
    const {data: session} = await authClient.getSession();

    if(!session){
      redirect('/signin')
    }

    return redirect('/usuario')
  }

  return (
    <header className='p-5 bg-[#f4f4f4]'>
      <nav className='flex justify-around items-center'>
        <div>
          <a href="/">
            <Image src='/logo4.png' alt='logo' width={150} height={70} className='rounded-xl' />
          </a>
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
              <User className='text-gray-500' onClick={getUser} />
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
