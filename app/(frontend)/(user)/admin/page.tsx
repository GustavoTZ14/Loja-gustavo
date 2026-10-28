import { LayoutDashboard, ChevronRight } from 'lucide-react';

export default function Page() {
  return (
    <section className='grid grid-cols-2'>
      <aside className='p-5 border-r border-gray-300 max-w-50 min-h-screen'>
        <div className='flex gap-2 p-2 items-center border-b border-gray-300 justify-center'>
          <LayoutDashboard size={17} />
          <h1 className='font-bold text-base'>Dashboard</h1>
        </div>
        <nav>
          <ul>
            <li>Inicio</li>
            <li>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between [&::-webkit-details-marker]:hidden">
                  Produtos
                  <span className="transition-transform group-open:rotate-90">
                    <ChevronRight />
                  </span>
                </summary>
                <ul>
                  <li>Cadastrar produtos</li>
                </ul>
              </details>
            </li>
          </ul>
        </nav>
      </aside>
      <article>

      </article>
    </section>
  )
}
