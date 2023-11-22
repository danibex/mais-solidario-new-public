import { IconMinus, IconPlus } from '@tabler/icons-react'
import React, { useState } from 'react'
import fonts from '@/styles/fonts.module.css'

interface Pergunta {
    nome: string,
    descricao: string
  }
export default function AlternarDescricao(props: Pergunta) {
    const [mostrar, setMostrar] = useState(false)
    const alternarVisualizacao = () => { setMostrar(!mostrar) }

  return (
    <button onClick={alternarVisualizacao} className='flex flex-col justify-center items-start w-full'>
        <div className={`py-[32px] flex flex-row justify-between items-center w-full`}>
            <p className={`text-left w-[280px] text-[#121212] text-[24px] ${fonts.poppis} font-[700]`}>{props.nome}</p>
            {mostrar ? <IconMinus width={24} height={24} stroke={1.5}/> : <IconPlus width={24} height={24} stroke={1.5}/>}
        </div>
        <hr className='w-full border-[1px] border-[#71717A] mb-2'/>
        <p className={`${mostrar ? "" : "hidden"} text-left`}>{props.descricao}</p>
    </button>
  )
}
