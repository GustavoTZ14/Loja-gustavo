import Image from 'next/image';

export default function Hero() {
  return (
    <div className='bg-[#f5f5f5]'>
      <div className='w-full'>
        <Image src='/imagens/heroImage1.png' alt='hero' width={1920} height={500} />
      </div>
    </div>
  )
}
