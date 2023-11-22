import React from 'react'
import fonts from '@/styles/fonts.module.css'
import { IconPlus } from '@tabler/icons-react'
import AlternarPergunta from './AlternarPergunta'
export default function PerguntasFrequentes() {
    const respostaMock = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
  return (
    <div className='min-h-[846px] px-[104px] flex flex-col justify-start items-center py-[84px] bg-neutral-100'>
        <div className='w-[1233px]'>
            <div className='flex flex-col justify-start items-start mb-[32px]'>
                <h3 className={`${fonts.poppis} text-neutral-700 text-[40px] font-bold font-['Poppins'] leading-[48px] tracking-tight`}>Perguntas Frequentes e Fale Conosco</h3>
                <div className={`${fonts.ubuntu} text-neutral-700 text-base flex flex-col justify-start items-start`}>
                    <p>Ainda em dúvida sobre a Mais Solidário? Veja nossa seção de Perguntas frequentes.</p>
                    <p>Não encontrou o que procurava? Clique em <b>Fale conosco</b> e envie suas dúvidas</p>
                </div>
            </div>
            <div className='flex flex-col justify-start items-start'>
                {/* Pergunta Base */}
                <AlternarPergunta pergunta='Como escolher um curso?' resposta={respostaMock}/>
                <AlternarPergunta pergunta='Quais as instituições de ensino são parceiras?' resposta={respostaMock}/>
                <AlternarPergunta pergunta='Por que devo adquirir uma bolsa na Mais Solidário?' resposta={respostaMock}/>
                <AlternarPergunta pergunta='Quais os benefícios em adquirir uma bolsa de estudos?' resposta={respostaMock}/>
            </div>
        </div>
    </div>
  )
}
