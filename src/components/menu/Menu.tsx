import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import Botao from './Botao'
import BotaoCadastro from './BotaoCadastro'
import BotaoEntrar from './BotaoEntrar'
import fonts from '@/styles/fonts.module.css'
import Link from 'next/link'
import AutenticacaoContext from '@/contexts/AutenticacaoGoogleContext'
import { IconUser } from '@tabler/icons-react'
interface Rota {
  buscar: boolean,
  home: boolean,
  revista: boolean, 
  vocacional: boolean
}
export default function Menu(props: Rota) {
  const {usuarioGoogle, setUsuarioGoogle} = useContext(AutenticacaoContext)
  const [opcoesUsuario, setOpcoesUsuario] = useState(false)

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
        <Botao ativo={props.buscar} href='/buscar/buscar'  nome="Busque sua Bolsa"/>
        <Botao ativo={props.revista} href='/#revista' nome="Revista+"/>
        <Botao ativo={props.vocacional} href='/#vocacional' nome="Teste Vocacional"/>
    </div>

    {/* Botões Cadastro */}
    <div className="justify-end items-start gap-4 inline-flex w-[20%]">
      
      <div className={`${usuarioGoogle.displayName ? `flex` : `hidden`} relative flex flex-row gap-2 justify-center items-center`}>
        <h2>Olá, <b>{usuarioGoogle.displayName}</b></h2>
        
        <button onClick={() => setOpcoesUsuario(!opcoesUsuario)} className={`bg-white w-[50px] h-[50px] border overflow-hidden rounded-full flex justify-center items-center`}>
            <Image className={`rounded-full`} src={usuarioGoogle.photoURL} alt='Foto do perfil' width={50} height={50}/>
        </button>
        <button 
        className={`${opcoesUsuario ? "flex" : "hidden"} absolute top-[55px] right-[4px] bg-white px-2 py-1 rounded-lg hover:bg-[#FF6B3D] font-bold hover:text-white`} 
        onClick={() => {
          setUsuarioGoogle({});
          setOpcoesUsuario(!opcoesUsuario)
          }
        }>
          Sair
        </button>

      </div>
    
      <div className={`${usuarioGoogle.displayName ? `hidden` : `flex`} flex-row gap-x-[16px]`}>
        <BotaoCadastro/>
        <BotaoEntrar/> 
      </div>
      
    </div>
  </div>
</div>
  )
}
