import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import fonts from '@/styles/fonts.module.css'
import { IconSearch } from '@tabler/icons-react'
import CardCaminhoAcademico from './CardCaminhoAcademico'
import Carousel from '../carousel/Carousel'
export default function CaminhoAcademicoPrincipal() {
    const [cursos, setCursos] = useState([])
    
    useEffect(() => {
        fetch("/api/caminhoAcademico")
          .then(response => response.json())
          .then(arrayDeCursos => {
            setCursos(arrayDeCursos)
            console.log(arrayDeCursos)
          })
      }, [])
    

  return (
    <div className='py-[84px] flex flex-col items-center h-[840px] bg-white '>
        <div className='w-[1233px]'>    
            <div className='flex flex-col'>
                <div className='flex'>
                    <h3 className={`${fonts.poppis} text-neutral-900 text-[40px] font-bold leading-[48px] tracking-tight w-[100%]`}>Explore seu caminho acadêmico</h3>
                </div>
                <div className='flex flex-row justify-between'>
                    <div className={`${fonts.ubuntu} w-[814px] text-zinc-500 text-base`}>
                        <p>Descubra  o curso ideal para você e trace sua jornada acadêmica com confiança. Descubra salários, mercado de trabalho, área de atuação e mais.</p>
                    </div>
                    <div className={`${fonts.ubuntu} flex flex-col justify-start items-start text-zinc-500`}>
                        <p className='text-sm font-bold leading-[21px] mb-[8px]'>Pesquisar por curso</p>
                        <div className='flex flex-row'>
                            <input placeholder='Qual curso gostaria de fazer?' className='w-[260px] text-base font-normal py-[9.5px] pl-[12px] mr-0 pr-0  rounded-l-md border border-cyan-700' type='text'/>
                            <button className={`flex justify-center items-center p-[9px] text-white bg-cyan-700 hover:bg-cyan-800 active:bg-cyan-900 rounded-r-md`}><IconSearch stroke={1.5}/></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-[32px] gap-[24px] grid grid-cols-4'>
                {/* Card */}
                {cursos.map((curso, index) => {    
                    return <CardCaminhoAcademico key={index} nome_do_curso={curso.nome} src={curso.caminho_imagem}/>
                })}
            </div>
            {/* Botões Slide */}
            <Carousel/>
        </div>
    </div>
  )
}
