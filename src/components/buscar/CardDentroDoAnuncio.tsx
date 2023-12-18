import React from 'react'
import Image from 'next/image'
import fonts from '@/styles/fonts.module.css'
export default function CardDentroDoAnuncio(props) {
  return (
    <div className={`flex flex-col justify-start items-start p-[12px]`}>
        <div className={`p-[22px] rounded-full ${props.cor} mb-[16px]`}>
            <Image src={props.src} alt='32' width={36} height={36}/>
        </div>
        <h3 className={`text-[20px] font-bold ${fonts.poppis} leading-7 w-[140px]`}>{props.titulo}</h3>
        <p className={`${fonts.ubuntu} w-[185px] text-[14px] leading-[21px]`}>{props.descricao}</p>
    </div>
  )
}
