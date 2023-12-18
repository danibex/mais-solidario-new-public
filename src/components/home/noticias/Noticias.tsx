import React from 'react'
import Image from 'next/image'
import fonts from '@/styles/fonts.module.css'
import CardNoticiaMenor from './CardNoticiaMenor'
import Link from 'next/link'
export default function Noticias() {
  return (
      <div id="revista" className='h-[1442px] bg-neutral-100 pl-[104px] pr-[101px] flex justify-center items-start py-[84px]'>
        <div className='w-[1233px]'>
        <div className='flex flex-col mb-[32px]'>
            <div className='mb-[8px]'>
                <h1 className={`${fonts.poppis} text-neutral-900 text-[40px] font-bold leading-[48px] tracking-tight`}>Notícias</h1>
            </div>
            <div className={`${fonts.ubuntu} flex flex-row justify-between text-base`}>
                <p className={`text-zinc-500`}>Fique por dentro das últimas novidades e acontecimentos relevantes através do portal mais solidário</p>
                <button className={`opacity-90 text-sky-400 font-bold hover:text-sky-500 active:text-sky-600`}>Explorar mais notícias</button>
            </div>
        </div>
        {/* Notícias */}
        <div className='flex flex-row justify-between min-w-[1233px]'>
          <div className='fle flex-col w-[809px] justify-between'>
            {/* Notícia Grande Horizontal */}
            <Link href='/materias/mais1code' className=' rounded-lg w-[809px] h-[593px] mb-[36px] p-0 text-left flex flex-col justify-start items-start'>
              <Image className='mb-3  rounded-lg ' src='/img/notícias/noticiasGH.png' width={809} height={384} alt='Estudante jovem interagindo com estudante da terceira idade'/>
              <p className={`
                flex justify-center items-center
                mb-3 py-1 px-4 bg-emerald-200 rounded-2xl
                ${fonts.ubuntu} text-center text-neutral-700 text-base font-bold 
              `}>Inclusão</p>
              <h3 className={`hover:underline mb-3 ${fonts.poppis} text-neutral-900 text-2xl font-bold leading-[33.60px]`}>
              Trio de Impacto: Mais1Code, Instituto Mais Solidário e FATESP unem forças para doar mil bolsas de estudo em tecnologia em 2024
              </h3>
              <p className={`${fonts.ubuntu} text-zinc-500 text-sm font-normal leading-[21px] mb-3`}>
                Por Mozart Estrela em 16/12/2023
              </p>
              <p className={`${fonts.ubuntu} text-neutral-900 text-base`}>
              Pensando em expandir o conceito desse projeto experimental, a Mais1Code firmou uma parceria com o Instituto Mais Solidário, responsável por ofertar bolsas de estudo para pessoas de baixa renda a partir de parcerias com universidades. Com o apoio da FATESP (Faculdade de Tecnologia e Educação Superior)...
              </p>
            </Link>
            {/* Notícias Pequenas */}
            <div className='flex flex-row justify-between text-left'>
              {/* Notícia 1 */}
              {/**src alt tagNome tagCor Título Autor Data Descrição */}
                 <CardNoticiaMenor link="/materias/expo-favela" key='1' src='/img/notícias/noticiasP1.png' alt='Aluna ajudando aluno' corTexto='text-neutral-700' autor='Mozart Estrela' data='16/12/2023' tagCor='bg-orange-300' tagNome='Reconhecimento' titulo='Destaque na ExpoFavela Inovation Bahia' descricao='Em um país que oferece cerca de 6 milhões de vagas para cursos de ensino superior, cerca de 52% das vagas ficam ociosas por não serem preenchidas...'/>
                  {/* Notícia 2 */}
                 <CardNoticiaMenor link="" key='2' src='/img/notícias/noticiasP2.png' alt='Aluno estudando' corTexto='text-neutral-100' autor='Paulo da Silva' data='10/07/2023' tagCor='bg-sky-400' tagNome='Vestibular e ENEM' titulo='O que estudar para o Enem? Veja o que mais cai' descricao='Descubra quais conteúdos você deve estudar para o Enem. Conheça também um plano de estudo gratuito para arrasar no exame'/> 
            </div>
          </div>
          {/* Notícia Grande Vertical */}
          <button className='w-[392px] h-[1160px] rounded-lg text-left flex flex-col justify-start items-start'>
            <Image className='mb-3' src='/img/notícias/noticiasGV.png' width={392} height={917} alt='Estudante em pé indeciso'/>
            <p className={`
                flex justify-center items-center 
                mb-3 py-1 px-4 bg-emerald-200 rounded-2xl
                ${fonts.ubuntu} text-center bg-orange-800
                text-neutral-100 text-base font-bold 
              `}>Mercado de Trabalho</p>
            <h3 className={`${fonts.poppis} text-neutral-900 text-2xl font-bold leading-[33.60px] mb-3`}>
              Como montar um plano de transição de carreira?
            </h3>
            <p className={`${fonts.ubuntu} text-zinc-500 text-sm leading-[21px] mb-3`}>
              Por João Fernandes da Silva em 13/07/2023
            </p>
            <p className={`${fonts.ubuntu} text-neutral-900 text-base w-[399px]`}>
              Em meio a um mundo dinâmico e em constante evolução, a ideia de permanecer em uma única carreira ao longo da vida tornou-se cada vez mais incomum. A...
            </p>
          </button>
        </div>

      </div>
    </div>
  )
}
