import React, { useContext, useEffect, useState } from 'react'
import Botao from './Botao'
import estilos from '@/styles/estilo.module.css'
import Link from 'next/link'
import FiltroContext from '@/contexts/FiltroContext'
import CursosContext from '@/contexts/CursosContext'
import { useRouter } from 'next/router'
export default function FiltroPagina() {
    const tipoPadraoDeBotao = {graduacao: true, posGraduacao: false, tecnico: false, escolas: false}
    const [marcarBotaoTipo, setMarcarBotaoTipo] = useState(tipoPadraoDeBotao)
    const {filtrar, setFiltrar, atualizarCursos} = useContext(FiltroContext)
    const {cursos} = useContext(CursosContext)
    const router = useRouter()

   

    function atualizarTipoDeBolsa(tipo: string) {
        setFiltrar({...filtrar, tipo: tipo})
    }
    function atualizarPretencao(pretencao: string) {
        setFiltrar({...filtrar, pretencao: pretencao})
    }    
    function atualizarFaculdade(faculdade: string) {
        setFiltrar({...filtrar, faculdade: faculdade})
    }
    function atualizarCidade(cidade: string) {
        setFiltrar({...filtrar, cidade: cidade})
    }
    function atualizaPresencial() {
        setFiltrar({ ...filtrar, presencial: !filtrar.presencial });
    }
    function atualizaHibrido() {
        setFiltrar({ ...filtrar, hibrido: !filtrar.hibrido });
    }
    function atualizaOnline() {
        setFiltrar({ ...filtrar, online: !filtrar.online });
    }

    async function atualizarCursosEBuscar() {
        await atualizarCursos()
        router.push('/buscar/buscar')
    }

    return (
    <div className='flex justify-center items-center w-full'>
        <div className='flex flex-col w-[1022px] h-[294px] bg-white rounded-[8px] py-[36px] px-[24px]'>
            <div className='flex flex-col'>
                <h3 className='text-zinc-500 text-sm font-bold leading-[21px]'>Escolha o tipo de bolsa</h3>
                <div className='flex flex-row'>
                    <Botao active={marcarBotaoTipo.graduacao} onClick={() => {atualizarTipoDeBolsa("Graduação"); setMarcarBotaoTipo({...tipoPadraoDeBotao, graduacao: true})}} nome="Graduação" />
                    <Botao active={marcarBotaoTipo.posGraduacao} onClick={() => {atualizarTipoDeBolsa("Pós-Graduação"); ; setMarcarBotaoTipo({...tipoPadraoDeBotao, posGraduacao: true})}} nome="Pós-Graduação"/>
                    <Botao active={marcarBotaoTipo.tecnico} onClick={() => {atualizarTipoDeBolsa("Técnico"); ; setMarcarBotaoTipo({...tipoPadraoDeBotao, tecnico: true})}} nome="Técnico"/>
                    <Botao active={marcarBotaoTipo.escolas} onClick={() => {atualizarTipoDeBolsa("Escolas"); ; setMarcarBotaoTipo({...tipoPadraoDeBotao, escolas: true})}} nome="Escolas"/>
                </div>
            </div>
            <div className='flex flex-row mt-[16px]'>
                <div className='flex flex-col mr-[8px]'>
                    <p className='mb-[8px] text-zinc-500 text-sm font-bold leading-[21px]'>Escolha seu curso</p>
                    <input  autoComplete="off" value={filtrar.nome} 
                     onChange={(e) => {setFiltrar({...filtrar, nome: e.target.value})}}
                     className='rounded border border-stone-300  px-[12px] py-[10px] w-[290px]' placeholder='Qual curso gostaria de fazer?' type='text'/>
                </div>
                <div className='flex flex-col mr-[8px]'>
                    <p className='mb-[8px] text-zinc-500 text-sm font-bold leading-[21px]'>Escolha a faculdade</p>
                    <input autoComplete="off" value={filtrar.faculdade} onChange={(e) => atualizarFaculdade(e.target.value)} className='rounded border border-stone-300  px-[12px] py-[10px] w-[290px]' placeholder='Alguma faculdade preferida?' type='text'/>
                </div>
                <div className='flex flex-col mr-[8px]'>
                    <p className='mb-[8px] text-zinc-500 text-sm font-bold leading-[21px]'>Em que cidade quer estudar</p>
                    <input autoComplete="off" value={filtrar.cidade} onChange={(e) => atualizarCidade(e.target.value)} className='rounded border border-stone-300  px-[12px] py-[10px] w-[290px]' placeholder='Localização' type='text'/>
                </div>
                <div className='flex justify-center items-end'>
                    <button onClick={() => atualizarCursosEBuscar()} className='px-[16px] py-[8px] h-[47px] hover:bg-orange-500 active:bg-orange-600 bg-[#FF6B3D] rounded border border-orange-300 text-center text-white text-base font-bold leading-normal flex justify-center items-center'>Buscar</button>
                </div>
            </div>
            <div className='flex flex-row mt-[8px]'>
                <div>
                    <p className='mb-[8px] text-zinc-500 text-sm font-bold leading-[21px]'>Quanto pretende pagar?</p>
                    <div className='flex flex-row justify-center items-center'>
                        <input onChange={(e) => atualizarPretencao(e.target.value)} type='range' step="50" min="0" max="2000" className={`cursor-pointer w-[461px] h-[2px] bg-sky-500 text-sky-500 mr-[8px]`}/>
                        <p  className='text-zinc-500 text-sm font-normal leading-[21px]'>R$ {filtrar.pretencao},00/mês</p>
                    </div>
                </div>
                <div className='ml-9 mt-[8px]'>
                    <p className='text-zinc-500 text-sm font-bold leading-[21px]'>Escolha a modalidade</p>
                    <div className='flex flex-row'>
                        <div className='flex flex-row mr-[16px]'>
                            <input defaultChecked onClick={() => atualizaPresencial()} value="Presencial" type='checkbox' className='mr-[8px]'/>
                            <label className='text-zinc-500 text-sm font-normal leading-[21px]'>Presencial</label>
                        </div>
                        <div className='flex flex-row mr-[16px]'>
                            <input defaultChecked onClick={() => atualizaHibrido()} value="Híbrido" type='checkbox' className='mr-[8px]'/>
                            <label className='text-zinc-500 text-sm font-normal leading-[21px]'>Híbrido</label>
                        </div>
                        <div className='flex flex-row mr-[16px]'>
                            <input defaultChecked onClick={() => atualizaOnline()} value="Online" type='checkbox' className='mr-[8px]'/>
                            <label className='text-zinc-500 text-sm font-normal leading-[21px]'>Online</label>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}
