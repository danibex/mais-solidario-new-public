import React from 'react'
import fonts from '@/styles/fonts.module.css'
import Image from 'next/image'
export default function CardDepoimento() {
  return (
    <div className='p-8 w-[395px] h-[508px] rounded-lg shadow flex flex-col items-center justify-between'>
        <div className='flex flex-col justify-start items-center'>
            <Image className='rounded-full' src='/img/home/avatar1.png' alt='Aluna sorrindo' width={128} height={128}/>
            <h4 className={`${fonts.poppis} text-neutral-700 text-xl font-bold leading-7`}>Sandra Alencar</h4>
            <p className={`${fonts.ubuntu} text-zinc-500 text-base`}>Graduação Odontologia</p>
        </div>
        <div className=''>
            <p className={`${fonts.ubuntu} w-[350px] text-neutral-700 text-base`}>
                Conheci o Mais Solidário Bolsa de Estudos através de uma amiga e que também tinha um sonho de cursar um Graduação mas, os valores não cabiam em meu orçamento. Quando encontrei o Mais Solidário e atualmete estou cursando Odontologia com Bolsas de Estudos com 80/ de desconto por todo o curso e as prestações cabem no meu bolso o melhor que não vou ficar devende depois mais nada. Eu recomendo e apromo.
            </p>
        </div>
    </div>
  )
}
