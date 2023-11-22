import React, { useEffect, useState } from 'react'
import fonts from '@/styles/fonts.module.css'
import { IconChevronLeft, IconChevronRight, IconCircleFilled, IconMapPinFilled } from '@tabler/icons-react'
import CardFaculdadeComBolsas from './CardFaculdadeComBolsas'
export default function FaculdadesComBolsasPrincipal() {
  const [parceiros, setParceiros] = useState([])
  useEffect(() => {
    fetch("/api/parceiros")
      .then(response => response.json())
      .then(arrayDeParceiros => {
        setParceiros(arrayDeParceiros)
      })
  }, [])

  return (
    <div className='h-645 bg-sky-400 pl-[104px] pr-[101px] text-white flex justify-center items-center py-[84px]'>
      <div className='w-[1233px]'>
        <div className='flex flex-row justify-between items-end'>   
          <div>
            <h2 className={`${fonts.poppis} font-bold leading-[48px] text-[40px]`}>Faculdades com Bolsas</h2>
            <div className={`${fonts.ubuntu} flex flex-row`}>
              <IconMapPinFilled className='mr-[8px]'/>
              <p className='mr-2'>Instituições com bolsas de estudo em: </p>
              <p className='font-bold'>Bahia - BA</p>
            </div>
          </div>
          <button className={`${fonts.ubuntu} opacity-80 hover:opacity-90 active:opacity-100 font-bold`}>Explorar mais Faculdades</button>
        </div>
        <div className='my-[32px] flex flex-row gap-[25px] justify-center items-center'>
          {/* Card */}  
          {parceiros.map((parceiro, index) => {
            return <CardFaculdadeComBolsas key={index} nome={parceiro.nome} src={parceiro.caminho_imagem} recomendacao_porcentagem={parceiro.recomendacao_porcentagem} preco_curso_mais_barato={parceiro.preco_curso_mais_barato.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}/> 
          })}
        </div>
        {/* Botões Slide */}
        <div className='mt-[36px] flex flex-row justify-center items-center '>
          <button className='mr-[28px] text-white' ><IconChevronLeft width={24} stroke={1.5}/></button>
          <button className='text-white mr-[12px]'><IconCircleFilled width={20} /></button>
          <button className='text-zinc-500 text-opacity-40 mr-[12px] hover:text-zinc-600 active:text-zinc-700'><IconCircleFilled width={20} /></button>
          <button className='text-zinc-500 text-opacity-40 mr-[28px] hover:text-zinc-600 active:text-zinc-700'><IconCircleFilled width={20} /></button>
          <button className='text-white' ><IconChevronRight stroke={1.5}/></button>
        </div>
      </div>
    </div>
  )
}
