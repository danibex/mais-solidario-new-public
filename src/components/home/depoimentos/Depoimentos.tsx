import React from 'react'
import fonts from '@/styles/fonts.module.css'
import Image from 'next/image'
import CardDepoimento from './CardDepoimento'
import Carousel from '../carousel/Carousel'
export default function Depoimentos() {
  return (
    <div className='h-[846px] pl-[104px] pr-[101px] flex justify-center items-start py-[84px]'>
        <div className='w-[1233px]'>
            <div className='mb-[32px]'>
                <h2 className={`${fonts.poppis} text-neutral-900 text-[40px] font-bold leading-[48px] tracking-tight`}>Depoimentos</h2>
                <p className={`${fonts.ubuntu} text-neutral-700 text-base`}>Veja sobre as jornadas de sucesso de nossos alunos, e o que mais estão falando sobre a Mais Solidário</p>
            </div>
            <div className='my-[32px] flex flex-row justify-center items-center gap-[24px]'>
              {/*Cards*/}
              <CardDepoimento src='/img/home/SandraAlencar.png' nome="Sandra Alencar" curso="Graduação em Odontologia" depoimento="Conheci o Mais Solidário Bolsa de Estudos através de uma amiga e que também tinha um sonho de cursar um Graduação mas, os valores não cabiam em meu orçamento. Quando encontrei o Mais Solidário e atualmete estou cursando Odontologia com Bolsas de Estudos com 80/ de desconto por todo o curso e as prestações cabem no meu bolso o melhor que não vou ficar devende depois mais nada. Eu recomendo e apromo."/>
              <CardDepoimento src='/img/home/PauloCesar.png' nome="Paulo Cesar" curso="Graduação Psicologia" depoimento="Conheci o Mais Solidário Bolsa de Estudos através de uma amiga e que também tinha um sonho de cursar um Graduação mas, os valores não cabiam em meu orçamento. Quando encontrei o Mais Solidário e atualmete estou cursando Odontologia com Bolsas de Estudos com 80/ de desconto por todo o curso e as prestações cabem no meu bolso o melhor que não vou ficar devende depois mais nada. Eu recomendo e apromo."/>
              <CardDepoimento src='/img/home/CristinaBezerra.png' nome="Cristina Bezerra" curso="Graduação Enfermagem" depoimento="Conheci o Mais Solidário Bolsa de Estudos através de uma amiga e que também tinha um sonho de cursar um Graduação mas, os valores não cabiam em meu orçamento. Quando encontrei o Mais Solidário e atualmete estou cursando Odontologia com Bolsas de Estudos com 80/ de desconto por todo o curso e as prestações cabem no meu bolso o melhor que não vou ficar devende depois mais nada. Eu recomendo e apromo."/>
            </div>
            <div className='mb-[32px]'>
              {/* <Carousel/> */}
            </div>
        </div>
    </div>
  )
}
