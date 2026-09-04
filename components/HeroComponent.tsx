import Image from 'next/image';

export default function Hero() {
  return (
    <div className='grid justify-center'>
      <div className='w-full'>
        <Image src='/imagens/heroImage2.png' alt='hero' width={1200} height={500} />
      </div>
    </div>
  )
}
