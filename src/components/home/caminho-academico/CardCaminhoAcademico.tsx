import React from 'react'
import Image from 'next/image'
import fonts from '@/styles/fonts.module.css'
import Link from 'next/link'
export default function CardCaminhoAcademico(props) {
  return (
    <Link href={props.href} className={`
    w-[290px] h-[212px] pb-3 bg-white rounded-lg shadow border border-stone-300 flex-col justify-start items-center
    text-center text-cyan-950 text-base font-bold ${fonts.poppis} leading-snug
    hover:bg-stone-100 active:bg-stone-200
    `}>
        <Image className='rounded-t-lg' src={props.src} alt='Imagem do Curso' width={290} height={140}/>
        <div className='w-full flex justify-center items-center p-0'>
            <p className={`
                w-[258px] h-[48px] text-center leading-snug flex justify-center items-center my-[12px]
            `}>{props.nome_do_curso}</p>
        </div>
    </Link>  
  )
}
