import React from 'react'
import Image from 'next/image'
import fonts from '@/styles/fonts.module.css'
export default function CardBolsa(props: any) {
  return (
    <button className={`${props.className} shadow border border-stone-300 rounded-lg w-[395px] h-[255px] hover:bg-stone-100 active:bg-stone-200`}>
        <div className='flex flex-row justify-between h-20 items-center'>
            <Image className='' src={props.src} alt="Logo da instituição" width={184} height={80}/>
            <div className={`${props.maisCursado ?  "" : "hidden"} bg-cyan-700 px-[16px] w-[186px] h-[32px] flex items-center rounded-l-full`}>
                <h3 className={`${fonts.ubuntu} text-white  font-normal`}>Mais cursados</h3>
            </div>
        </div>
        <div className='flex justify-start items-start w-full'>
            <h3 className={`${fonts.poppis} text-left ml-[32px] mr-[34px] mb-[8px] w-[83%] h-14 text-neutral-900 text-xl font-bold leading-7`}>{props.nome}</h3>
        </div>
        <div className={`${fonts.ubuntu} flex flex-row justify-between ml-[32px] mr-[49px] mb-[36px] text-base text-neutral-900`}>
            <div className='flex flex-col text-left'>
                <h4 className=''>{props.modalidade} - {props.turno}</h4>
                <h4>{props.cidade} - {props.estado}</h4>
            </div>
            <div className='flex flex-col items-end'>
                <h4 className='text-zinc-500 line-through'>{props.preco}</h4>
                <h4 className='text-neutral-900 text-[22px] leading-9'>{props.precoComDesconto}</h4>
            </div>
        </div>
    </button>
  )
}
