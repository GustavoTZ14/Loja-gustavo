"use client";
import { authClient } from '@/app/(backend)/lib/auth-client';
import { Heart, Search, User, ShoppingCart } from 'lucide-react';
import { redirect } from 'next/navigation';

export default function Page() {

  const {data: session} = authClient.useSession();
  const userName = session?.user.name;

  function Login(){
    if(!session){
      redirect('/sign-in')
    }

    return redirect('/usuario')
  }

  return (
    <header className='p-5'>
      <nav className='flex justify-around items-center'>
        <div>
          LOGO
        </div>
        <div>
          <form className='flex w-120 outline-1 outline-gray-500 rounded-xl h-10 bg-[#d9d9d9] shadow-md'>
            <input type="text" className='w-full h-full text-base text-gray-500 pl-2 outline-hidden' placeholder='Pesquise por um produto' />
            <div className='w-10 flex justify-center items-center'>
              <Search size={20} className='text-gray-500' />
            </div>
          </form>
        </div>
        <div className='flex items-center gap-5 text-gray-700'>
          <div>
            <Heart size={20} />
          </div>
          <div>
            <ShoppingCart size={20} />
          </div>
          <div className='flex gap-2 items-center cursor-pointer' onClick={Login}>
            <User size={20} />
            {userName && (
              <span>Olá <span>{userName}</span></span>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
