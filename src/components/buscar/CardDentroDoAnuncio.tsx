import React from 'react'
import Image from 'next/image'
import fonts from '@/styles/fonts.module.css'
export default function CardDentroDoAnuncio() {
  return (
    <div className={`flex flex-col justify-start items-start p-[12px]`}>
        <div className={`p-[22px] rounded-full bg-[#189ED7] mb-[16px]`}>
            <Image src='/img/icones/dollar.svg' alt='32' width={36} height={36}/>
        </div>
        <h3 className={`text-[20px] font-bold ${fonts.poppis} leading-7 w-[140px]`}>Matrícula digital gratuita</h3>
        <p className={`${fonts.ubuntu} w-[185px] text-[14px] leading-[21px]`}>Matricule-se agora mesmo sem sair de casa e sem pagar nenhuma taxa por isso!</p>
    </div>
  )
}
