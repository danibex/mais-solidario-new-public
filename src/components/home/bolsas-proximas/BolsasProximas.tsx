import React, { useEffect, useState } from 'react'
import fonts from '@/styles/fonts.module.css'
import { IconChevronLeft, IconChevronRight, IconCircleFilled, IconMapPinFilled } from '@tabler/icons-react'
import CardBolsa from './CardBolsa'
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link';
import IdentificarLocalizacao from '@/utils/IdentificarLocalizacao'
export default function BolsasProximas() {
  const [localizacao, setLocalizacao] = useState({latitude: 0, longitude: 0})
  const [cursos, setCursos] = useState([])
  const [localizacaoCidadeEstado, setLocalizacaoCidadeEstado] = useState({cidade: "", estado: ""})

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
      const {latitude, longitude} = position.coords
      setLocalizacao({latitude: latitude, longitude: longitude})
      },
      (error) => {
        console.error("Erro ao obter a localização:", error);
      }
    )
    fetch("/api/bolsasProximas")
      .then(response => response.json())
      .then(arrayDeCursos => {
        setCursos(arrayDeCursos)
      })
  }, [])
  
  useEffect(() => {
    if (localizacao.latitude !== 0 && localizacao.longitude !== 0) {
      fetch(`/api/IdentificarLocalizacao?lat=${localizacao.latitude}&long=${localizacao.longitude}`)
        .then((resp) => resp.json())
        .then((resp) => {setLocalizacaoCidadeEstado(resp)})
        .catch((erro) => console.log(`ERRO NA CHAMADA DE LOCALIZAÇÃO: ${erro}`));
    }
  }, [localizacao]);


  return (
    <div className='h-[626px] py-[84px] px-[103px] w-full flex flex-col justify-center items-center'>
      <div className='w-[1233px]'>
        {/* Título */}
        <div className='m-0 p-0 flex flex-col'>
          <h2 className={`tracking-tight text-[40px] font-bold leading-[48px] ${fonts.poppis}`}>Bolsas próximo de você</h2>
          <div className={`flex flex-row justify-between text-zinc-500 text-base font-normal ${fonts.ubuntu}`}>
            <div className='flex flex-row'>
              <IconMapPinFilled className='mr-[8px]'/>
              <p className='mr-2'>Instituições com bolsas de estudo em: </p>
              <p className='text-blue-500 font-bold'>{localizacaoCidadeEstado.cidade} - {localizacaoCidadeEstado.estado}</p>
            </div>
            <Link href={`/buscar/buscar?cidade=${localizacaoCidadeEstado.cidade}`} className='text-orange-500 hover:text-orange-600 active:text-orange-700 font-bold'>Explorar mais Bolsas</Link>
          </div>
        </div>
        {/* Cards */}
        <div className='my-[32px] flex flex-row justify-center items-center gap-[24px]'>
          
          {cursos.map((curso, index) => {
            return <CardBolsa 
                      href={`/bolsa/bolsa?id=${curso.id}&nome=${curso.nome_curso}`}
                      key={index} 
                      precoComDesconto={curso.preco_com_desconto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} 
                      preco={curso.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} 
                      estado={curso.estado.substring(0, 2).toUpperCase()} 
                      cidade={curso.cidade} 
                      turno={curso.turno} 
                      modalidade={curso.modalidade} 
                      nome={curso.nome_curso} 
                      maisCursado={curso.mais_cursado}  
                      src={curso.caminho_imagem_parceiro}/> 
          })}
          {/* imagem="caminho/da/imagem" maisCursado(ativa a bandeira) nome="Nome do curso" modalidade="Presencial | EAD | Híbrido" turno="Manhã | Tarde | Noite" cidade="Salvador" estado="Bahia" precoCheio="399,99" precoComDesconto="199,99"*/}
        </div>
        {/* Botões Slide */}
      </div>
    </div>
  )
}
