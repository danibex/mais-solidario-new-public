import React, { useEffect, useState } from 'react'
import Botao from './Botao'
import estilos from '@/styles/estilo.module.css'
import Link from 'next/link'
import Filtro from '@/core/home/Filtro'
export default function FiltroPagina() {
    const FiltroPadrao = new Filtro("Graduação","","","","1000",true, true, true)
    const tipoPadraoDeBotao = {graduacao: false, posGraduacao: false, tecnico: false, escolas: false}
    const [marcarBotaoTipo, setMarcarBotaoTipo] = useState({...tipoPadraoDeBotao, graduacao: true})
    const [filtrar, setFiltrar] = useState(FiltroPadrao)

    const url = `/buscar?${filtrar.tipo ? `tipo=${filtrar.tipo}&` : ""}${filtrar.pretencao ? `pretencao=${filtrar.pretencao}&` : ""}${filtrar.nome ? `nome=${filtrar.nome}&` : ""}${filtrar.faculdade ? `faculdade=${filtrar.faculdade}&` : ""}${filtrar.cidade ? `cidade=${filtrar.cidade}&` : ""}presencial=${filtrar.presencial}&hibrido=${filtrar.hibrido}&online=${filtrar.online}`    

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

    useEffect(() => { console.log(filtrar)}, [filtrar])
    
    // Sugestão de filtro CURSO 
        const cursosDisponiveis = ['Análise e Desenvolvimento de Sistemas', 'Direito', 'Administração', 'Psicologia', 'Enfermagem'];
        const [inputCursoValue, setInputCursoValue] = useState('');
        const [sugestoesCurso, setSugestoesCurso] = useState([]);
        function handleInputChangeCurso(e)  {
            const textoDigitado = e.target.value;
            setInputCursoValue(textoDigitado);
            setFiltrar({...filtrar, nome: textoDigitado})
            // Filtrar cursos com base no texto digitado
            const sugestoesCursoFiltradas = cursosDisponiveis.filter(curso =>
            curso.toLowerCase().includes(textoDigitado.toLowerCase())
            );
            setSugestoesCurso(sugestoesCursoFiltradas);
        };
        function selecionarSugestaoCurso(sugestao) {
            setInputCursoValue(sugestao);
            setFiltrar({...filtrar, nome: sugestao})
            setSugestoesCurso([]);
        };
    // Fim sugestão de filtro

    // Sugestão de filtro PADRÃO (FACULDADE)
    const faculdadesDisponiveis = ['Universo', 'Unifatecie', 'Unijorge', 'Unifacs']
    const [inputFaculdadeValue, setInputFaculdadeValue] = useState('');
    const [sugestoesFaculdade, setSugestoesFaculdade] = useState([]);
    function handleInputChangeFaculdade(e)  {
        const textoDigitado = e.target.value;
        setInputFaculdadeValue(textoDigitado);
        setFiltrar({...filtrar, faculdade: textoDigitado})
        // Filtrar cursos com base no texto digitado
        const sugestoesFiltradas = faculdadesDisponiveis.filter(curso =>
        curso.toLowerCase().includes(textoDigitado.toLowerCase())
        );
        setSugestoesFaculdade(sugestoesFiltradas);
    };
    function selecionarSugestaoFaculdade(sugestao) {
        setInputFaculdadeValue(sugestao);
        setFiltrar({...filtrar, faculdade: sugestao})
        setSugestoesFaculdade([]);
    };
    // Fim sugestão de filtro
    
    // Sugestão de filtro PADRÃO (FACULDADE)
    const cidadesDisponiveis = ['Salvador', 'Feira de Santana', 'Jequié', 'Camaçari']
    const [inputCidadeValue, setInputCidadeValue] = useState('');
    const [sugestoesCidade, setSugestoesCidade] = useState([]);
    function handleInputChangeCidade(e)  {
        const textoDigitado = e.target.value;
        setInputCidadeValue(textoDigitado);
        setFiltrar({...filtrar, cidade: textoDigitado})
        // Filtrar cursos com base no texto digitado
        const sugestoesFiltradas = cidadesDisponiveis.filter(curso =>
        curso.toLowerCase().includes(textoDigitado.toLowerCase())
        );
        setSugestoesCidade(sugestoesFiltradas);
    };
    function selecionarSugestaoCidade(sugestao) {
        setInputCidadeValue(sugestao);
        setFiltrar({...filtrar, cidade: sugestao})
        setSugestoesCidade([]);
    };
    // Fim sugestão de filtro

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
                    <input  autoComplete="off" value={inputCursoValue} onChange={handleInputChangeCurso}
                     /*onChange={(e) => {setFiltrar({...filtrar, nome: e.target.value})}}*/ 
                     className='rounded border border-stone-300  px-[12px] py-[10px] w-[290px]' placeholder='Qual curso gostaria de fazer?' type='text'/>
                     <div className='relative'>
                        {sugestoesCurso.length > 0 && (
                            <ul className={`${inputCursoValue ? "" : "hidden"} absolute bg-white w-full border-2 rounded p-1 flex-col top-[10px]`}>
                            {sugestoesCurso.map((sugestao, index) => (
                                <li className='p-1' key={index} onClick={() => selecionarSugestaoCurso(sugestao)}>
                                {sugestao}
                                </li>
                            ))}
                            </ul>
                        )}
                    </div>
                </div>
                <div className='flex flex-col mr-[8px]'>
                    <p className='mb-[8px] text-zinc-500 text-sm font-bold leading-[21px]'>Escolha a faculdade</p>
                    <input autoComplete="off" value={inputFaculdadeValue} onChange={handleInputChangeFaculdade} /*onChange={(e) => atualizarFaculdade(e.target.value)}*/ className='rounded border border-stone-300  px-[12px] py-[10px] w-[290px]' placeholder='Alguma faculdade preferida?' type='text'/>
                    <div className='relative'>
                        {sugestoesFaculdade.length > 0 && (
                            <ul className={`${inputFaculdadeValue ? "" : "hidden"} absolute bg-white w-full border-2 rounded p-1 flex-col top-[10px]`}>
                            {sugestoesFaculdade.map((sugestao, index) => (
                                <li className='p-1' key={index} onClick={() => selecionarSugestaoFaculdade(sugestao)}>
                                {sugestao}
                                </li>
                            ))}
                            </ul>
                        )}
                    </div>
                </div>
                <div className='flex flex-col mr-[8px]'>
                    <p className='mb-[8px] text-zinc-500 text-sm font-bold leading-[21px]'>Em que cidade quer estudar</p>
                    <input autoComplete="off" value={inputCidadeValue} onChange={handleInputChangeCidade} /*onChange={(e) => atualizarCidade(e.target.value)}*/ className='rounded border border-stone-300  px-[12px] py-[10px] w-[290px]' placeholder='Localização' type='text'/>
                    <div className='relative'>
                        {sugestoesCidade.length > 0 && (
                            <ul className={`${inputCidadeValue ? "" : "hidden"} absolute bg-white w-full border-2 rounded p-1 flex-col top-[10px]`}>
                            {sugestoesCidade.map((sugestao, index) => (
                                <li className='p-1' key={index} onClick={() => selecionarSugestaoCidade(sugestao)}>
                                {sugestao}
                                </li>
                            ))}
                            </ul>
                        )}
                    </div>
                </div>
                <div className='flex justify-center items-end'>
                    <Link  href={url} className='px-[16px] py-[8px] h-[47px] hover:bg-orange-500 active:bg-orange-600 bg-[#FF6B3D] rounded border border-orange-300 text-center text-white text-base font-bold leading-normal flex justify-center items-center'>Buscar</Link>
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
