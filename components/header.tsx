"use client";
import { authClient } from '@/app/(backend)/lib/auth-client';
import { Heart, Search, User, ShoppingCart } from 'lucide-react';
import { redirect } from 'next/navigation';
import Image from "next/image";

export default function Page() {

  const { data: session } = authClient.useSession();
  const userName = session?.user.name;

  function Login() {
    if (!session) {
      redirect('/sign-in')
    }

    return redirect('/usuario')
  }

  return (
    <header className='p-5'>
      <nav className='flex justify-around items-center'>
        <div className='w-50 h-15 relative'>
          <Image src="/logo.png" alt='logo' fill />
        </div>
        <div>
          <form className='flex w-150 outline-1 outline-gray-300 rounded-4xl h-10'>
            <input type="text" className='w-full h-full text-sm text-gray-700 pl-4 outline-hidden' placeholder='O que você está buscando?' />
            <div className='w-10 flex justify-center items-center'>
              <Search size={20} className='text-gray-500' />
            </div>
          </form>
        </div>
        <div className='flex items-center gap-10 text-gray-700'>
          <div className='flex gap-2 items-center cursor-pointer' onClick={Login}>
            <User size={25} />
            {userName ? <span className='font-bold text-sm'>Olá {userName}</span> : <span className='text-base font-bold grid'>Entrar<span className='text-xs font-medium'>minha conta</span></span>}
          </div>
          <div className='flex gap-2 items-center'>
            <Heart size={25} />
            <span className='font-bold text-sm'>Favoritos</span>
          </div>
          <div className='flex gap-2 items-center'>
            <ShoppingCart size={25} />
            <div className='grid'>
              <span className='font-bold text-sm'>Meu carrinho</span>
              <span className='font-bold text-xs'>R$: 0,00</span>
            </div>
          </div>
        </div>
      </nav>
    </header >
  )
}
