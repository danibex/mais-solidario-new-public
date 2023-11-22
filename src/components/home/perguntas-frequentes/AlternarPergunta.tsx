import { IconMinus, IconPlus } from '@tabler/icons-react'
import React, { useState } from 'react'
import fonts from '@/styles/fonts.module.css'
interface Pergunta {
  pergunta: string,
  resposta: string
}
export default function TogglePergunta(props: Pergunta) {
    const [mostrar, setMostrar] = useState(false)
    const alternarVisualizacao = () => { setMostrar(!mostrar) }
  return (
    <div className='flex flex-col'>
        <button onClick={alternarVisualizacao} className='w-[1023px] flex flex-row items-center justify-between py-[32px] border-b-2'>
            <h3 className={`${fonts.poppis} text-neutral-700 text-2xl font-bold leading-[33.60px]`}>{props.pergunta}</h3>
            {mostrar ? <IconMinus stroke={1.5}/> : <IconPlus stroke={1.5}/>}
        </button>
        <p className={`${mostrar ? 'flex' : 'hidden'} ${fonts.ubuntu} w-[1023px] my-[16px] text-neutral-700 text-base`}>
          {props.resposta}
        </p>
    </div>
  )
}
