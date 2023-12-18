import Footer from '@/components/footer/Footer'
import Menu from '@/components/menu/Menu'
import Image from 'next/image'
import React from 'react'
import fonts from '@/styles/fonts.module.css'
import Link from 'next/link'
export default function mais1code() {
  return (
    <div className=''>
        <Menu home={false} buscar={false} revista={false} vocacional={false}/>
        <div className='w-full flex justify-center items-center'>
        <div className='w-[1240px] rounded-lg mb-[36px] p-0 text-left flex flex-col justify-center py-4 items-center'>
              <Image className='mb-3  rounded-lg ' src='/img/notícias/noticiasGH.png' width={1000} height={384} alt='Estudante jovem interagindo com estudante da terceira idade'/>
              <div className='flex flex-col justify-start items-start'>
              <h3 className={`mb-3 ${fonts.poppis} text-neutral-900 text-2xl font-bold leading-[33.60px]`}>
              Trio de Impacto: Mais1Code, Instituto Mais Solidário e FATESP unem forças para doar mil bolsas de estudo em tecnologia em 2024
              </h3>
              <p className={`
                flex justify-center items-center
                mb-3 py-1 px-4 bg-emerald-200 rounded-2xl
                ${fonts.ubuntu} text-center text-neutral-700 text-base font-bold 
              `}>Inclusão</p>
              <p className={`${fonts.ubuntu} text-zinc-500 text-sm font-normal leading-[21px] mb-3`}>
                Por Mozart Estrela em 16/12/2023
              </p>
              <p className={`${fonts.ubuntu} text-neutral-900 text-base`}>
              Pensando em expandir o conceito desse projeto experimental, a Mais1Code firmou uma parceria com o Instituto Mais Solidário, responsável por ofertar bolsas de estudo para pessoas de baixa renda a partir de parcerias com universidades. Com o apoio da FATESP (Faculdade de Tecnologia e Educação Superior), a Mais1Code e o Mais Solidário pretendem doar cerca de mil bolsas no ano de 2024. Os cursos, que serão ministrados de maneira online para todo o Brasil, serão majoritariamente para a área de tecnologia, incluindo setores correlatos como formações em gestão e recursos humanos, estimulando e orientando a entrada dos estudantes no mercado de trabalho. 
                <br /><br />
                Sendo ambos incentivados pelo BNDES Garagem, programa idealizado pelo Banco Nacional de Desenvolvimento para apoiar negócios de impacto, a comunicação entre a Mais1Code e o Mais Solidário ocorreu em um dos encontros do programa e, de acordo com Diogo, essa promete ser uma parceria de sucesso: “Essa união foi pensada para estender ainda mais a meta de ambos os negócios, que é estimular um sistema educacional mais justo e trazer equidade para o mercado de trabalho. Temos certeza de que será uma parceria duradoura pois já estamos materializando a ideia de apoiar a criação de um polo do Mais Solidário, que hoje fica na Bahia, aqui em São Paulo, visando atingir cada vez mais os jovens periféricos de todo o Brasil”. 
                <br /><br />
                Ainda que não haja recorte de região, é preciso atender a alguns requisitos para participar da seleção do projeto “Anjo Solidário”. Dentre eles: ter renda familiar de até cinco salários mínimos, ensino médio completo, interesse pelo mercado da tecnologia, compromisso e disponibilidade para realizar as atividades propostas por cada curso. As bolsas, que também serão distribuídas para alunos e ex-alunos da Mais1Code, estão disponíveis para o pré-cadastro, etapa que antecipa a seleção, através do link: <Link className={`text-blue-600 hover:underline`} href="https://bit.ly/bolsafaculdadeanjosolidario">https://bit.ly/bolsafaculdadeanjosolidario</Link>.
            </p>
            </div>
            </div>
            </div>
        <Footer/>
    </div>
  )
}
