"use client";
import Image from 'next/image';
import { ShoppingCart, User, TextAlignJustify, Search } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';

export default function Header() {
  async function getUser() {
    const { data: session } = await authClient.getSession();

    if (!session) {
      redirect('/signin')
    }

    return redirect('/usuario')
  }

  return (
    <header className='p-5 bg-[#f5f5f5]'>
      <nav className='flex justify-around items-center'>
        <div>
          <TextAlignJustify size={22} className='text-gray-500' />
        </div>
        <div>
          <a href="/">
            <Image src='/logo1.png' alt='logo' width={150} height={70} className='rounded-xl' />
          </a>
        </div>
        <div>
          <ul className='flex gap-5'>
            <li>
              <Search className='text-gray-500' size={22} />
            </li>
            <li>
              <User className='text-gray-500 cursor-pointer' size={22} onClick={getUser} />
            </li>
            <li>
              <ShoppingCart className='text-gray-500' size={22} />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
