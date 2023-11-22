import React from 'react'
import Image from 'next/image'
import fonts from '@/styles/fonts.module.css'
import AlternarDescricao from './AlternarDescricao'
export default function CardResumo() {
    const respostaMock = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
  return (
    <div className='w-full'>
        {/* CARD RESUMO */}
        <div className={`w-full bg-white text-[#121212] border-[#0000004d] border-[2px] p-[24px] rounded-[8px] flex flex-col gap-[12px]`}>
            <Image alt='Parceiro' src='/img/parceiros_card/Unifatecie.png' width={324} height={40} />
            <h2 className={` ${fonts.poppis} text-[20px] font-[700]`}>Análise e Desenvolvimento de Sistemas</h2>
            <p className={`text-[16px] ${fonts.ubuntu} fonts-[400]`}>Universidade Unifacetie</p>
            <div className=
            {`
            flex flex-row justify-between items-center 
            text-[#121212] text-[16px] ${fonts.ubuntu} font-[700] 
            `}>
                <p>Bolsa de 50%</p>
                <p>R$ 274,99/mês</p>
            </div>
        </div>
        {/* DESCRIÇÕES */}
        <div className={`flex flex-col justify-start items-center px-[12px]`}>
            <AlternarDescricao nome='Benefícios' descricao={respostaMock}/>
            <AlternarDescricao nome='O que devo fazer para garantir a bolsa?' descricao={respostaMock}/>
            <AlternarDescricao nome='Quais os benefícios em adquirir essa bolsa de estudos?' descricao={respostaMock}/>
        </div>
    </div>
  )
}
