import React from 'react'
import Image from 'next/image'
import fonts from '@/styles/fonts.module.css'
export default function CardFaculdadeComBolsas(props) {
  return (
    <button className='text-center w-[290px] h-[310px] bg-white shadow border border-stone-300 flex flex-col items-center rounded-lg hover:bg-stone-100 active:bg-stone-200'>
      <div className='mt-[34px] mb-[18px]'>
        <Image src={props.src} className={`w-[290px] h-[63.74px]`} alt='Logo parceiro Atualiza' width={290} height={63.74}/>
      </div>
      <div className='mt-[24px] w-[258px] flex justify-center items-start mb-[8px]'>  
        <p className='text-base h-12 text-neutral-900 font-bold'>{props.nome}</p>
      </div>
      <div className='flex flex-row justify-center items-start w-[258px] h-9'>
        <Image className='mr-[8px]' src='/img/icones/selo.png' width={16} height={16} alt='Icone Selo'/>
        <p className={`${fonts.ubuntu} text-neutral-900 text-xs text-left`}>{props.recomendacao_porcentagem}0% dos estudantes recomendam esta instituição</p>
      </div>
      <div className='mt-[8px] w-[200px] h-0.5 bg-stone-300'>{/* Linha divisória */}</div>
      <div className={`mt-[16px] w-[228px] text-center text-neutral-900 text-xs font-normal ${fonts.ubuntu} leading-[18px]`}>
        <p className=''>A partir de {props.preco_curso_mais_barato}</p>
      </div>
    </button>
  )
}
