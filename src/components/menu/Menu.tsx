import React from 'react'
import Image from 'next/image'
import Botao from './Botao'
import BotaoCadastro from './BotaoCadastro'
import BotaoEntrar from './BotaoEntrar'
import fonts from '@/styles/fonts.module.css'
import Link from 'next/link'
interface Rota {
  buscar: boolean,
  home: boolean,
  revista: boolean, 
  vocacional: boolean
}
export default function Menu(props: Rota) {
  return (
<div className={`${fonts.ubuntu} m-0 w-full h-[72px] pr-24 py-2 bg-white shadow border-b border-blue-100 flex justify-center items-center`}>
  <div className='w-[1440px] flex flex-row justify-center items-center'>
    {/* Logo */}
    <Link href="/" className="flex justify-end items-center w-[20%] h-[55px] mr-2">
      <Image alt='Logomarca Mais Solidário' src="/logo/logoAzul.png" className='w-[130px]' width={130} height={55}/>
    </Link>

    {/* Botões do Menu */}
    <div className="justify-start items-end flex w-[60%]">
        <Botao ativo={props.home} href='/' nome="Início"/>
        <Botao ativo={props.buscar} href='/buscar'  nome="Busque sua Bolsa"/>
        <Botao ativo={props.revista} href='/revista' nome="Revista+"/>
        <Botao ativo={props.vocacional} href='/vocacional' nome="Teste Vocacional"/>
    </div>

    {/* Botões Cadastro */}
    <div className="justify-end items-start gap-4 inline-flex w-[20%]">
      <BotaoCadastro/>
      <BotaoEntrar/>
    </div>
  </div>
</div>
  )
}
