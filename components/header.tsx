import { Bookmark, Search, User } from 'lucide-react';

export default function Page(){
  
  return(
    <header className='p-3'>
      <nav className='flex justify-around items-center'>
        <div>
          LOGO
        </div>
        <div>
          <form className='flex w-100 outline-1 outline-gray-300 rounded-md h-10 bg-[#f4f4f4] shadow-md'>
            <input type="text" className='w-full h-full text-base text-gray-700 pl-2 outline-hidden' placeholder='Pesquise por um produto'/>
            <div className='w-10 flex justify-center items-center'>
              <Search size={20} className='text-gray-500'/>
            </div>
          </form>
        </div>
        <div className='flex gap-5'>
          <div>
            <Bookmark size={20}/>
          </div>
          <div>
            <User size={20}/>
          </div>
        </div>
      </nav>
    </header>
  )
}