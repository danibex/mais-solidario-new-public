import Link from 'next/link'
import React from 'react'
interface BotaoRotaMenu {
  href: string,
  className?: string,
  ativo?: boolean,
  nome: string
}
export default function Botao(props: BotaoRotaMenu) {
  return (
    <div className={`${props.className} px-5 py-4 justify-center items-center gap-2.5 flex`}>
        <Link className={`${props.ativo ? "text-orange-400" : "text-cyan-700"} hover:text-orange-400 active:text-orange-500 whitespace-nowrap text-base font-bold leading-normal`} href={props.href}>{props.nome}</Link>
    </div>
  )
}
