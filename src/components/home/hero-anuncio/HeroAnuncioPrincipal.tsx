import React from 'react'
import fonts from '@/styles/fonts.module.css'
import Image from 'next/image'
import Link from 'next/link'
export default function HeroAnuncioPrincipal() {
  return (
    <div className='h-56 bg-slate-900 flex justify-center '>
      <div className='w-[1233px] relative flex flex-row justify-between items-center pt-[40px] pb-[41px] '>
        <div className={`${fonts.poppis} flex flex-col justify-start items-start w-[682px] h-[143px]`}>
            <h3 className={`text-neutral-100 text-[34px] font-semibold leading-[41.96px] tracking-tight`}>Corra e não perca essa oportunidade de bolsas de estudos com até</h3>
            <h3 className={`text-orange-400 text-[46.63px] font-bold leading-[55.95px] tracking-wide`}>80% de desconto</h3>
        </div>
        {/* Imagem */}
        <Image className='absolute left-[580px]' src='/img/home/formando.png' width={438} height={214} alt='Formando'/>
        <div>
            <Link href="/buscar/buscar" className='px-[16px] py-[8px] gap-2.5 bg-orange-400 rounded text-center text-white text-base hover:bg-orange-500 active:bg-orange-600'>Ver bolsas em promoção</Link>
        </div>
      </div>
    </div>
  )
}
