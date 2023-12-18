import React from 'react'
import fonts from '@/styles/fonts.module.css'
import Image from 'next/image'
export default function CardDepoimento(props) {
  return (
    <div className='p-8 w-[395px] h-[508px] rounded-lg shadow flex flex-col items-center justify-between'>
        <div className='flex flex-col justify-start items-center'>
            <Image className='rounded-full' src={props.src} alt='Aluna sorrindo' width={128} height={128}/>
            <h4 className={`${fonts.poppis} text-neutral-700 text-xl font-bold leading-7`}>{props.nome}</h4>
            <p className={`${fonts.ubuntu} text-zinc-500 text-base`}>{props.curso}</p>
        </div>
        <div className=''>
            <p className={`${fonts.ubuntu} w-[350px] text-neutral-700 text-base`}>
                {props.depoimento}
            </p>
        </div>
    </div>
  )
}
