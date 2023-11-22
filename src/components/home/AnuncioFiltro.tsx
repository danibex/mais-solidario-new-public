import React from 'react'
import Image from 'next/image'
export default function AnuncioFiltro() {
  return (
    <div className='flex flex-row justify-between items-center w-[1022px]' >
        <div className='flex flex-col w-[50%]'>
          <h2 className='mb-[9px] text-white text-[53.28px] font-bold leading-[63.94px] tracking-wide'>Encontre seu caminho para o sucesso</h2>
          <h3 className="mt-[9px] p-2 opacity-90 text-white text-xl font-bold leading-7 max-w-[445px]">Descubra as oportunidades que os cursos oferecem e tome uma decisão que transformará sua vida</h3>
        </div>
         
        <div className='relative w-[50%]'>
            <Image alt='Aluna sorrindo' src="/img/home/aluna.png" className='mt-[27px] rounded-t-full mx-[17px]' width={400.05} height={362.836}/>
            <div className='absolute text-[#D64517] rotate-[-15deg] flex flex-col justify-center items-center bottom-[16px] right-[15px] rounded-full w-[156px] h-[156px] border border-[#FFBC7D] bg-white'>
                <h2 className='w-[109px] text-sm font-light leading-[21px]'>Bolsas com até</h2>
                <h2 className="text-5xl font-black leading-[57.47px] tracking-wide">80%</h2>
                <h2 className='w-[109px] text-right text-sm font-light leading-[21px]'>de desconto!</h2>
            </div>
        </div>
      
    </div>
  )
}
