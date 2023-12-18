import React, { use, useContext, useEffect, useState } from 'react'
import fonts from '@/styles/fonts.module.css'
import Image from 'next/image'
import CardBolsa from './CardBolsa'
import FiltroContext from '@/contexts/FiltroContext'
import HeroAnuncio from './HeroAnuncio'
import CursosContext from '@/contexts/CursosContext'
import { useRouter } from 'next/router'
export default function Filtro(props) {
const router = useRouter()
const {filtrar, setFiltrar, atualizarCursos} = useContext(FiltroContext)
const {cursos, setCursos} = useContext(CursosContext) // Responsável por armazenar os cursos obtidos na consulta e rederizar na tela (array)
let [pagina, setPagina] = useState(1) // Responsável pela paginação
useEffect(() => {
    atualizarCursos()
},[atualizarCursos])

useEffect(() => {
    console.log(filtrar)
},[filtrar])

  return (
    <>
    <div className='h-[273px] bg-[#147BA7] rounded-b-lg flex flex-col items-center w-full'>
      <div className='w-full flex flex-col items-center'>
        <h1 className={`${fonts.poppis} text-center text-neutral-100 text-[50px] font-bold leading-[60px] tracking-wide my-8`}>
            Encontre seu curso!</h1>
        <div className='text-[#71717A] text-sm font-bold leading-[21px] w-[1030px] h-[293px] bg-white rounded-lg shadow border border-black border-opacity-20 pt-[32px] pl-[24px]'>
            {/* Primeira Linha */}
            <div className='flex flex-row justify-between gap-[13px]'>
                <div className='flex flex-col justify-center items-start'>
                    <p className={`${fonts.ubuntu} pb-[8px]`}>Qual curso quer estudar ?</p>
                    <input 
                    value={filtrar.nome}
                    onChange={(e) => {setFiltrar({...filtrar, nome: e.target.value})}}
                    className={`
                        ${fonts.ubuntu} h-[43px] px-3 py-[10px] w-[433px] text-base rounded-md border-2 border-stone-300
                        `} 
                    type='text' placeholder='Análise e desenvolvimento de sistemas'
                    />
                </div>
                <div className='flex flex-col justify-center items-start'>
                    <p className={`${fonts.ubuntu} pb-[8px]`}>Nível do curso</p>
                    <select className={`
                        ${fonts.ubuntu} h-[40px] pl-[16px] pr-[12px] py-[8px] w-[205px] text-base rounded-md border-2 border-stone-300
                        bg-white
                        `} 
                        placeholder='Análise e desenvolvimento de sistemas'>
                        <option value="">Todos</option>
                        <option value="Graduacao">Graduação</option>
                        <option value="Pos-Graduacao">Pós-Graduação</option>
                        <option value="Tecnico">Técnico</option>
                        <option value="Escolas">Escolas</option>
                    </select>
                </div>
                <div className={`${fonts.ubuntu} flex flex-col justify-center items-start mr-[24px]`}>
                    <p className='pb-[8px]'>Em que cidade?</p>
                    <input type='text' className={`
                    h-[43px] px-[12px] py-[10px] w-[318px] text-base rounded-md border-2 border-stone-300
                    bg-white
                    `}
                    placeholder='Salvador/BA'
                    />
                </div>
            </div>

            {/* Segunda Linha */}
            <div className={`flex flex-row justify-start items-center mt-[16px]`}>
                <div className={`${fonts.ubuntu} flex flex-col justify-center items-start mr-[12px]`}>
                    <p className='pb-[8px]'>Prefere alguma instituição?</p>
                    <input type='text' className={`
                    h-[43px] px-[12px] py-[10px] w-[293px] text-base rounded-md border-2 border-stone-300
                    bg-white
                    `}
                    placeholder='Digite a Faculdade'
                    />
                </div>
                <div className='flex flex-col justify-center items-start mr-[12px]'>
                    <p className={`${fonts.ubuntu} pb-[8px]`}>Turno do curso</p>
                    <select className={`
                        ${fonts.ubuntu} h-[40px] pl-[16px] pr-[12px] py-[8px] w-[187px] text-base rounded-md border-2 border-stone-300
                        bg-white
                        `} 
                        placeholder='Análise e desenvolvimento de sistemas'>
                        <option value="">Todos</option>
                        <option value="EAD">EAD</option>
                        <option value="Manha">Manhã</option>
                        <option value="Noite">Noite</option>
                        <option value="Integral">Integral</option>
                    </select>
                </div>
                <div className='flex flex-col justify-center items-start mr-[12px]'>
                    <p className={`${fonts.ubuntu} pb-[8px]`}>Inicio das aulas</p>
                    <select className={`
                        ${fonts.ubuntu} h-[40px] pl-[16px] pr-[12px] py-[8px] w-[187px] text-base rounded-md border-2 border-stone-300
                        bg-white
                        `} 
                        placeholder='Análise e desenvolvimento de sistemas'>
                        <option value="Graduação">Selecione</option>
                        <option value="Lorem ipsum">Lorem ipsum 2</option>
                        <option value="Lorem ipsum">Lorem ipsum 3</option>
                        <option value="Lorem ipsum">Lorem ipsum 4</option>
                    </select>
                </div>
                <div className='flex flex-col justify-center items-start mr-[12px]'>
                    <p className={`${fonts.ubuntu} pb-[8px]`}>Tipo de graduação</p>
                    <select className={`
                        ${fonts.ubuntu} h-[40px] pl-[16px] pr-[12px] py-[8px] w-[187px] text-base rounded-md border-2 border-stone-300
                        bg-white
                        `} 
                        placeholder='Análise e desenvolvimento de sistemas'>
                        <option value="Graduação">Selecione</option>
                        <option value="Lorem ipsum">Lorem ipsum 2</option>
                        <option value="Lorem ipsum">Lorem ipsum 3</option>
                        <option value="Lorem ipsum">Lorem ipsum 4</option>
                    </select>
                </div>
            </div>

            {/* Terceira Linha */}
            <div className={`flex flex-row justify-start items-center ${fonts.ubuntu}`}>
                <div className='mt-[17.5px] mr-[12px]'>
                    <p className='font-bold'>Escolha a modalidade</p>
                    <div className='flex flex-row'>
                        <div className='flex flex-row mr-[16px]'>
                            <input type='checkbox' className='mr-[8px]'/>
                            <label className='font-normal'>Presencial</label>
                        </div>
                        <div className='flex flex-row mr-[16px]'>
                            <input type='checkbox' className='mr-[8px]'/>
                            <label className='font-normal'>Híbrido</label>
                        </div>
                        <div className='flex flex-row mr-[16px]'>
                            <input type='checkbox' className='mr-[8px]'/>
                            <label className='font-normal'>Online</label>
                        </div>
                    </div>
                </div>
                <div className={`mt-[16px] w-[584px] flex flex-col justify-center items-start`}>
                    <p className='mb-[8px] text-zinc-500 text-sm font-bold leading-[21px]'>Quanto pretende pagar?</p>
                    <div className='flex flex-row justify-center items-center'>
                        <input type='range' min="0" max="100" className={` cursor-pointer w-[461px] h-[2px] bg-sky-500 text-sky-500 mr-[8px]`}/>
                        <p  className='text-zinc-500 text-sm font-normal leading-[21px]'>R$ 600,00/mês</p>
                    </div>
                </div>
            </div>
            {/* Quinta Linha */}
            <div className={`w-full flex justify-center items-center mt-[7px]`}>
                <button onClick={() => {atualizarCursos()}} className={`${fonts.ubuntu} flex justify-center items-center font-bold rounded border text-base border-[#FFBC7D] w-[250px] h-[50px] text-white bg-[#FF6B3D] py-[16px] px-[100px]`}>Buscar</button>
            </div>
        </div>

      </div>
    </div>
    <div  className='w-full pt-[208px] flex flex-col items-center justify-center'>
        <div className='flex flex-row justify-between w-[1232px]'>
            <h1 className={`${fonts.poppis} w-[750px] text-neutral-700 text-3xl font-bold leading-[39px]`}>{props.nomeDoCurso ? `Bolsas de ${props.nomeDoCurso}` : ""}{props.cidade && props.nomeDoCurso ? ` em ${props.cidade}` : ""}</h1>
            <div className={`${fonts.ubuntu} flex flex-col justify-center items-start`}>
                <p className={`text-[#121212] text-sm mb-[8px] font-bold leading-[21px]`}>Ordenar</p>
                <select
                className={`
                    h-[40px] pl-[12px] pr-[9px] py-[9.5px] w-[187px] text-base rounded-md border-2 border-stone-300
                    bg-white text-[#71717A]
                    `} 
                    placeholder='Análise e desenvolvimento de sistemas'>
                    <option value={null}>Selecione</option>
                    <option value="cursos.nome">Curso</option>
                    <option value="parceiros.nome">Instituição</option>
                    <option value="cursos.cidade">Cidade</option>
                    <option value="curso.nivel">Nível do curso</option>
                    <option value="curso.turno">Turno</option>
                    <option value="preco_com_desconto">Preço</option>
                </select>
            </div>
        </div>

        <div className='flex flex-row justify-center flex-wrap items-center mt-[16px] w-[1300px] gap-[24px] mb-[24px]'>
            {/* Card */}
            {cursos.map((curso, index) => {
                if(index >= 0 && index <=7) {
                    return <CardBolsa 
                    key={index} 
                    id={curso.id} 
                    caminho_imagem_parceiro={curso.caminho_imagem_parceiro} 
                    nome_curso={curso.nome_curso} 
                    nivel={curso.nivel} 
                    tempo={curso.semestres} 
                    inicio={curso.inicio} 
                    modalidade={curso.modalidade} 
                    endereco={curso.endereco} 
                    turno={curso.turno} 
                    preco={curso.preco} 
                    desconto_porcentagem={curso.desconto_porcentagem} 
                    preco_com_desconto={curso.preco_com_desconto} 
                    economia_total={curso.economia_total}/>
                }
            })}
        </div>
        {/* Anúncio */}
            <HeroAnuncio/>
        { /* Cards Cursos */ }
        <div className='flex flex-row justify-center flex-wrap  items-center mt-[16px] w-[1300px] gap-[24px] mb-[8px]'>
            {/* Card */}
            {cursos.map((curso, index) => {
                if(index >= 8 && index <=15) {
                    return <CardBolsa 
                    key={index} 
                    id={curso.id} 
                    caminho_imagem_parceiro={curso.caminho_imagem_parceiro}
                    nome_curso={curso.nome_curso} 
                    nivel={curso.nivel} 
                    tempo={curso.semestres} 
                    inicio={curso.inicio} 
                    modalidade={curso.modalidade} 
                    endereco={curso.endereco} 
                    turno={curso.turno} 
                    preco={curso.preco} 
                    desconto_porcentagem={curso.desconto_porcentagem} 
                    preco_com_desconto={curso.preco_com_desconto} 
                    economia_total={curso.economia_total}/>
                }
            })}
        </div>

        {/* Botões de paginação */}
        <div className={`gap-[12px] flex flex-row justify-center items-center mt-[22px] mb-[32px]`}>
            <button onClick={() => {if(pagina>=1){setPagina(--pagina)}}}>
                <Image src='/img/icones/arrow-left.svg' width={24} height={24} alt='Seta apontada para esquerda'/>
            </button>
            <div className={`${fonts.ubuntu} text-[#71717A] text-sm leading-[21px] gap-[12px]`}>
                <button onClick={() => {setPagina(1)}} className={`rounded-full mr-[12px] px-[10px] py-[4px] bg-[#189ED7] text-[#F6F6F6]`}>1</button>
                <button onClick={() => {setPagina(2)}} className={`rounded-full mr-[12px] px-[10px] py-[4px]`}>2</button>
                <button onClick={() => {setPagina(3)}} className={`rounded-full mr-[12px] px-[10px] py-[4px]`}>3</button>
            </div>
            <button onClick={() => {setPagina(++pagina)}}>
                <Image src='/img/icones/arrow-right.svg' width={24} height={24} alt='Seta apontada para direita'/>
            </button>
        </div>  
    </div>
    </>
  )
}
