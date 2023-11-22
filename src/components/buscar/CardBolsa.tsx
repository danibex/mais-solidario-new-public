import React from 'react'
import Image from 'next/image'
import fonts from '@/styles/fonts.module.css'
export default function CardBolsa(props) {
  return (
    <div className='text-left w-[292px] h-[392px] flex flex-col items-start justify-start p-[16px] rounded-lg shadow border border-[#CECECE]'>
      <div className='mt-[16px]'> {/* 16px (os 9px são por conta da imagem atualiza) */}
          <Image className='mt-[9px] mb-[8px]' src='/img/parceiros_card_curso/Atualiza.png' alt='Logo parceiro Faculdade Atualiza' width={290} height={63}/>
      </div>
      <h3 className={`${fonts.poppis} text-[#343A40] text-base font-bold leading-snug`}>Análise e Desenvolvimento de Sistemas</h3>
      <div className={`flex flex-col text-[#343A40] text-sm leading-[21px]`}>
          <p>Tecnólogo (Graduação)</p>
          <p>5 Semestres - Entrada 1º semestre 2023 -  Hibrido / Campus Professor Barros</p>
      </div>
      <p className={`
      bg-[#FFBC7D] rounded-2xl flex justify-center items-center
      ${fonts.ubuntu} my-[16px] px-[16px] py-[4px] text-center text-[#343A40]
      `}>Manhã</p>
      <div className={`${fonts.ubuntu} flex flex-row mb-[4px] text-[#71717A]  text-sm leading-[21px]`}>
          <p className={`mr-[8px] font-bold line-through`}>589,00</p>
          <p className={`px-[4px] bg-[#FFE1D8]`}>-31%</p>
      </div>
      <div className='mb-[4px] flex flex-row text-[#343A40] items-center justify-center'>
          <p className={`${fonts.ubuntu} text-[14px] font-light`}>R$</p>
          <p className={`${fonts.poppis} font-bold mx-[4px] text-[20px]`}>406,41</p>
          <p className={`${fonts.ubuntu} text-[14px] font-light`}>/mês</p>
      </div>
      <p className={`${fonts.ubuntu} text-sm text-[#343A40]`}>Economia de até R$ 5.477,70</p>
    </div>
  )
}
