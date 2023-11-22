import React from 'react'
import fonts from '@/styles/fonts.module.css'
import Image from 'next/image'
interface cardNoticiaMenor {
    src: string,
    alt: string,
    tagNome: string,
    tagCor: string,
    titulo: string,
    autor: string,
    data: string,
    descricao: string,
    corTexto: string
}
export default function CardNoticiaMenor(props: cardNoticiaMenor) {
  return (
    <button className='w-[392px] h-[547px] flex flex-col justify-start items-start text-left rounded-lg'>
        {/**src alt tagNome tagCor Título Autor Data Descrição */}
        <Image className='mb-3' src={props.src} width={392} height={288} alt={props.alt}/>
        <p className={`
        flex justify-center items-center text-center
        mb-3 px-4 py-1 ${props.tagCor} rounded-2xl gap-2.5
        ${props.corTexto} text-base font-bold font-['Ubuntu']
        `}>{props.tagNome}</p>
        <h3 className={`mb-3 ${fonts.poppis} text-neutral-900 text-2xl font-bold leading-[33.60px]`}>{props.titulo}</h3>
        <p className={`mb-3 ${fonts.ubuntu} text-zinc-500 text-sm font-['Ubuntu'] leading-[21px]`}>Por {props.autor}  em {props.data}</p>
        <p className={`${fonts.ubuntu} text-neutral-900 text-base`}>{props.descricao}</p>
    </button>
  )
}
