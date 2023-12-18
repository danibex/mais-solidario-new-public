import React from 'react'
import fonts from '@/styles/fonts.module.css'
import CardDentroDoAnuncio from './CardDentroDoAnuncio'
import fundo from "@/styles/estilo.module.css"
export default function HeroAnuncio() {
  return (
    <div className=' w-full flex justify-center items-center bg-[#F6F6F6] mt-[30px] mb-[32px] pb-[48px] pt-[49px] shadow'>
    <div className={`gap-[23px] w-[1232px] h-[374px] flex flex-row justify-center items-center`}>
        <div className={`px-[24px] py-[32px] flex flex-col justify-center items-start w-[411px] h-[268px]`}>
            <h3 className={` ${fonts.poppis} text-[#121212] text-[30px] font-bold leading-[39px]`}>Com o <span className={`text-[#FF6B3D]`}>Mais Solidário</span><br /> entrar na faculdade<br /> fica mais <span className={`text-[#FF6B3D]`}>fácil</span>!</h3>
            <p className={`${fonts.ubuntu} whitespace-nowrap text-[#343A40] text-[14px]`}>Veja as vantagens que podem vir com a sua bolsa de estudo:</p>
        </div>
        {/* Card Anúncio */}
        <div className={`w-[627px] h-[277px] flex flex-row`}>
            <CardDentroDoAnuncio cor="bg-[#189ED7]" src="/img/icones/dollar.svg" titulo="Matrícula digital gratuita" descricao="Matricule-se agora mesmo sem sair de casa e sem pagar nenhuma taxa por isso!"/>
            <CardDentroDoAnuncio cor="bg-[#6BCA91]" src="/img/icones/card.svg" titulo="Carteirinha Clube MAIS+" descricao="Programa de benefícios exclusivos os com descontos nas melhores lojas do Brasil."/>
            <CardDentroDoAnuncio cor="bg-[#FF6B3D]" src="/img/icones/computer.svg" titulo="Renovação Monitorada" descricao="Nossa equipe está pronta para ajudar! Oferecemos suporte remoto para tornar o processo mais fácil e rápido."/>
        </div>
    </div>
</div>
  )
}
