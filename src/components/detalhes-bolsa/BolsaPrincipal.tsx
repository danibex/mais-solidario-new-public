import React, { useState } from 'react'
import fonts from '@/styles/fonts.module.css'
import Image from 'next/image'
import { IconBriefcase, IconMapPinFilled, IconStar, IconStarFilled, IconStarHalfFilled } from '@tabler/icons-react'
import CardBolsa from '@/components/home/bolsas-proximas/CardBolsa'
import Carousel from '../home/carousel/Carousel'
import AlternarPergunta from '../home/perguntas-frequentes/AlternarPergunta'
import AlternarDuvida from './AlternarDuvida'
import ResumoDePagamento from './ResumoDePagamento'
export default function BolsaPrincipal() {
  const [active, setActive] = useState(true)
  const respostaMock = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
  return (
    <div className={`bg-[#F6F6F6] flex flex-col justify-center items-center w-full pt-[107px]`}>

        <div className={`flex flex-row items-start`}>
          <div className={`w-[819px] mr-[24px]`}>
            <div className={`flex flex-row text-base ${fonts.ubuntu}`}>
              <p className={`text-[#CECECE] font-[400] `}>Bolsas de estudo/Faculdades/UniFatecie/</p>
              <p className={`text-[#121212] text-[16px] font-[700]`}>Análise e Desenvolvimento de Sistemas</p>
            </div>
            <h2 className={`text-[#121212] text-[40px] ${fonts.poppis} font-[700] w-[762px]`}>Análise e Desenvolvimento de Sistemas</h2>
            <Image alt='Instituição parceira' src='/img/parceiros/UniFatecie.png' width={145} height={65}/>
            <div className='flex flex-row justify-start items-center gap-[8px] mb-[8px]'>
              <p>Tecnólogo</p> 
              <div className="w-[9px] h-[9px] bg-[#CECECE] rounded-full"></div>
              <p>EAD</p>
              <div className="w-[9px] h-[9px] bg-[#CECECE] rounded-full"></div>
              <p>2 anos</p>
              <div className="w-[9px] h-[9px] bg-[#CECECE] rounded-full"></div>
              <p>Início Imediato</p>
            </div>  
            <div className={`text-[#121212] text-[16px] ${fonts.ubuntu} font-[700]`}>
              <button className={`${active ? "border-b-[3px] border-black" : ""} px-[16px] py-[6px]`}>Sobre o Curso</button>
              <button className={` px-[16px] py-[6px]`}>Sobre a Faculdade</button>
              <button className={` px-[16px] py-[6px]`}>Dúvidas e Regras</button>
            </div>
             {/* SOBRE O CURSO */}
            {/* COMPONENTIZAR */}
            <div className={`mt-[84px]`}>
              <h2 className={`mb-[16px] text-[#121212] text-[40px] ${fonts.poppis} font-[700]`}>Sobre o curso na Unifatecie</h2>
              <p className={`text-[#343A40] text-[16px] ${fonts.inter}`}>O curso de Análise e Desenvolvimento de Sistemas capacita profissionais para projetar, desenvolver e atualizar sistemas de informação em diversos setores. Com uma formação tecnológica de aproximadamente três anos, os estudantes adquirem habilidades em programação, banco de dados, redes de computadores e engenharia de software. Essa formação prepara os alunos para atuar em empresas de tecnologia e telecomunicações, exigindo atualização constante diante das demandas do mercado em evolução.</p>
            </div>

            {/* CARD DE EMPREGABILIDADE */}
            {/* COMPONENTIZAR */}
            <div className={`my-[32px] flex flex-col justify-start items-start p-[32px] rounded-lg bg-white border border-[#CECECE] shadow-md w-[397px]`}>
                <div className={`flex flex-row justify-center items-center text-[#FF6B3D] gap-[16px] mb-[16px]`}>
                  <div className={`bg-[#FF6B3D] p-[12px] rounded-full`}>
                    <IconBriefcase width={24} height={24} color='white'/>
                  </div>
                  <p className={`text-[20px] ${fonts.poppis} font-[700]`}>Alta empregabilidade</p>
                </div>
                <p className={`text-[#71717A] text-[16px] ${fonts.inter}`}>
                Essa área é muito requisitada, um profissional dessa área ganha em média R$3.800 por mês
                </p>
            </div>


            {/* SOBRE A UNIFATECIE */}
            {/* COMPONENTIZAR */}
            <div className={`w-[835px]`}>
              <h2 className={`${fonts.poppis} text-[24px] font-[700]`}>Como funciona o curso EaD na Faculdade Unifatecie</h2>
              <p className={`text-[#121212] ${fonts.inter} text-[16px] font-[400]`}>Na modalidade EaD (Educação a Distância), a maior parte das atividades é realizada online, com encontros presenciais pontuais para provas e atividades práticas. Esses encontros podem ocorrer com frequência mensal, trimestral ou semestral, ou mesmo apenas uma vez ao final do curso para a apresentação do trabalho de conclusão. Essa abordagem flexível permite aos estudantes conciliar os estudos com outras responsabilidades, oferecendo conveniência e adaptabilidade aos diferentes perfis de alunos.</p>
            </div> 

            {/* SOBRE A FACULDADE */}
            <div className={`mt-[84px] flex flex-col`}>
              <h2 className={`${fonts.poppis} text-[40px] font-[700]`}>Sobre a Faculdade UniFatecie</h2>
              <div className={`${fonts.ubuntu} flex flex-row justify-start items-center gap-[4px] text-[16px] font-[400] text-[#71717A]`}>
                <p>4.5</p>
                <div className='flex flex-row justify-start items-start'>
                  <IconStarFilled width={20} height={20} className='text-[#EDE526]'/>
                  <IconStarFilled width={20} height={20} className='text-[#EDE526]'/>
                  <IconStarFilled width={20} height={20} className='text-[#EDE526]'/>
                  <IconStarFilled width={20} height={20} className='text-[#EDE526]'/>
                  <IconStarHalfFilled width={20} height={20} className='text-[#EDE526]'/>
                  {/* <IconStar/> */}
                </div>
                <p>365 avaliações</p>
              </div>

              {/* BARRAS DE PROGRESSO */}
              <div className={`flex flex-row ${fonts.inter} text-[16px] font-[400] text-[#343A40] mt-[17.5px] gap-[18px]`}>
                <div className={`flex flex-col justify-start items-start`}>
                  <div className={`flex flex-row justify-center items-center gap-[16px]`}>
                    <p>Qualidade de ensino</p>
                    {/* BARRA */}
                    <div className={`h-[4px] w-[135px] bg-[#CECECE] rounded`}>
                      <div className={`h-full bg-[#343A40] w-[50%] rounded-l`}></div>
                    </div>
                  </div>
                  <div className={`flex flex-row justify-center items-center gap-[16px]`}>
                    <p>Professores</p>
                    <div className={`h-[4px] w-[135px] bg-[#CECECE] rounded`}>
                      <div className={`h-full bg-[#343A40] w-[75%] rounded-l`}></div>
                    </div>
                  </div>
                </div>
                <div className={`flex flex-col justify-start items-start`}>
                  <div className={`flex flex-row  justify-center items-center gap-[16px]`}>
                    <p>Atendimento ao aluno</p>
                    <div className={`h-[4px] w-[135px] bg-[#CECECE] rounded`}>
                      <div className={`h-full bg-[#343A40] w-[25%] rounded-l`}></div>
                    </div>
                  </div>
                  <div className={`flex flex-row justify-center items-center gap-[16px]`}>
                    <p>Materiais de ensino</p>
                    <div className={`h-[4px] w-[135px] bg-[#CECECE] rounded`}>
                      <div className={`h-full bg-[#343A40] w-[40%] rounded-l`}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className={`mt-[32px] text-[#1A202C] ${fonts.ubuntu} text-[16px] font-[400]`}>A Universidade Unifatecie é uma renomada instituição de ensino superior, reconhecida por sua excelência acadêmica e compromisso com a formação de profissionais qualificados. Com uma ampla oferta de cursos em diversas áreas do conhecimento, a Unifatecie destaca-se por sua infraestrutura moderna, corpo docente qualificado e ambiente propício ao aprendizado. 
              <br /><br />O campus da Universidade Unifatecie é um local dinâmico e acolhedor, projetado para proporcionar uma experiência acadêmica enriquecedora. Com salas de aula equipadas, laboratórios de última geração e biblioteca com vasto acervo, o campus oferece aos estudantes um ambiente propício ao estudo e à pesquisa.
            </p>

            <div className={`mt-[16px]`}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15595.521058291277!2d-38.97068419055175!3d-12.256381214108572!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7143752f1db4ccf%3A0xbc43231cdccf86ec!2sUnifatecie%20Feira%20de%20Santana!5e0!3m2!1spt-BR!2sbr!4v1699411963922!5m2!1spt-BR!2sbr" width="819" height="290"  loading="lazy"></iframe>
            </div>

          </div>
          {/* CARD DE PAGAMENTO */}
          <div className={`flex justify-start items-start`}>
            <ResumoDePagamento />
          </div>
          
        </div>
        {/* Quem se interessou por esse curso, também procurou por: */}
        <div className={`flex flex-col items-start justify-start w-[1233px] mt-[168px]`}>
          <h2 className={`w-[825px] text-[#121212] ${fonts.poppis} text-[40px] font-[700]`}>Quem se interessou por esse curso, também procurou por:</h2>
          <div className={`flex flex-row justify-between items-center text-[16px] w-full`}>
            <div className={`flex flex-row ${fonts.ubuntu} items-center`}>
              <IconMapPinFilled className={`text-[#71717A] mr-[8px]`} width={20} height={20}/>
              <p className={`text-[#71717A] font-[400] mr-1`}>Instituições com bolsas de estudo em: </p>
              <p className={`text-[#189ED7] font-[700]`}>Bahia - BA</p>
            </div>
            <button className={`text-[#189ED7] ${fonts.ubuntu} text-[16px] font-[700]`}>Explorar mais Bolsas</button>
          </div>
          {/* BOLSAS */}
          <div>
            <div className='my-[32px] flex flex-row justify-center items-center'>
            {/* Card */}
            <CardBolsa/> {/* imagem="caminho/da/imagem" maisCursado(ativa a bandeira) nome="Nome do curso" modalidade="Presencial | EAD | Híbrido" turno="Manhã | Tarde | Noite" cidade="Salvador" estado="Bahia" precoCheio="399,99" precoComDesconto="199,99"*/}
            <CardBolsa className='mx-[24px]'/>
            <CardBolsa/>
            </div>
            {/* Botões Slide */}
            <Carousel/>
          </div>
          {/* DUVIDAS */}
          {/* CRIAR NOVO COMPONENTE TOMANDO COMO BASE O COMPONENTE ABAIXO */}
          <div className='flex flex-col justify-start items-start mb-[84px]'>
            {/* Pergunta Base */}
            <h2 className={`text-[#121212] text-[40px] ${fonts.poppis} font-[700] mt-[27px] mb-[32px]`}>Dúvidas e Regras</h2>
            <AlternarDuvida pergunta='Como escolher um curso?' resposta={respostaMock}/>
            <AlternarDuvida pergunta='Quais as instituições de ensino são parceiras?' resposta={respostaMock}/>
            <AlternarDuvida pergunta='Por que devo adquirir uma bolsa na Mais Solidário?' resposta={respostaMock}/>
            <AlternarDuvida pergunta='Quais os benefícios em adquirir uma bolsa de estudos?' resposta={respostaMock}/>
          </div>
        
        
        </div>

    </div>
  )
}
