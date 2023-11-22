import React from 'react'

export default function Botao(props:any) {
  const {onClick, active} = props
  return (
    <button onClick={props.onClick} className={`${props.active ? "text-white font-bold bg-[#189ED7]" : "border border-[#189ED7] bg-white text-[#189ED7] font-normal"} hover:text-white hover:bg-[#189ED7] active:bg-sky-600 text-center mr-[12px] mt-[8px] leading-normal  text-base px-[16px] py-[8px] rounded`}>{props.nome}</button>
  )
}
