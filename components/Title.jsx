// components/ImageComponent.js
// 'use client'
import Image from 'next/image';

const Title = () => {
  return (
    <div className='border-2 mx-auto w-2/5 '  >
      <h1 className=' text-green-300 text-balance text-5xl w-2/5 '  >My Awesome Image</h1>
      <Image src="/vacas.png" alt="Vacas" width={300} height={300} />
    </div>
  );
}

export default Title;

