import React from 'react'
import fonts from '@/styles/fonts.module.css'
import Image from 'next/image'
import CardDepoimento from './CardDepoimento'
import Carousel from '../carousel/Carousel'
export default function Depoimentos() {
  return (
    <div className='h-[846px] pl-[104px] pr-[101px] flex justify-center items-start py-[84px]'>
        <div className='w-[1233px]'>
            <div className='mb-[32px]'>
                <h2 className={`${fonts.poppis} text-neutral-900 text-[40px] font-bold leading-[48px] tracking-tight`}>Depoimentos</h2>
                <p className={`${fonts.ubuntu} text-neutral-700 text-base`}>Veja sobre as jornadas de sucesso de nossos alunos, e o que mais estão falando sobre a Mais Solidário</p>
            </div>
            <div className='my-[32px] flex flex-row justify-center items-center gap-[24px]'>
              {/*Cards*/}
              <CardDepoimento/>
              <CardDepoimento/>
              <CardDepoimento/>
            </div>
            <div className='mb-[32px]'>
              <Carousel/>
            </div>
        </div>
    </div>
  )
}
