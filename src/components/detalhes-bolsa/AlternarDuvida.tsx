import React, { useState } from 'react'
import fonts from '@/styles/fonts.module.css'
import { IconMinus, IconPlus } from '@tabler/icons-react'
interface Duvidas {
    pergunta?: string,
    resposta?: string
}
export default function AlternarDuvida(props: Duvidas) {
    const [mostrar, setMostrar] = useState(false)
    const alternarVisualizacao = () => { setMostrar(!mostrar) }
  return (
    <div className='flex flex-col'>
        <button onClick={alternarVisualizacao} className='w-[1023px] flex flex-row items-center justify-between py-[32px] border-b-[0.5px] border-[#71717A]'>
            <h3 className={`${fonts.poppis} text-[#343A40] font-[700] text-[24px] leading-[33.60px]`}>{props.pergunta}</h3>
            {mostrar ? <IconMinus color='#343A40' stroke={1.5}/> : <IconPlus color='#343A40' stroke={1.5}/>}
        </button>
        <p className={`${mostrar ? 'flex' : 'hidden'} ${fonts.poppis} w-[1023px] my-[16px] text-base text-neutral-700`}>
          {props.resposta}
        </p>
    </div>
  )
}
