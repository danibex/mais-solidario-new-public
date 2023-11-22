/* eslint-disable react-hooks/rules-of-hooks */
import Filtro from '@/components/buscar/Filtro'
import Footer from '@/components/footer/Footer'
import Menu from '@/components/menu/Menu'
import React from 'react'

import { useRouter } from 'next/router'

export default function buscar() {
  const router = useRouter()
  const pesquisa = router.query
  let filtro = {
    // Criar uma classe em um arquivo separado
    tipo: pesquisa.tipo, 
    nome: pesquisa.nome,
    faculdade: pesquisa.faculdade,
    cidade: pesquisa.cidade,
    pretencao: pesquisa.pretencao,
    presencial: pesquisa.presencial,
    hibrido: pesquisa.hibrido,
    online: pesquisa.online
  }
  // URL
  //http://localhost:3000/buscar?tipo=Gradua%C3%A7%C3%A3o&nome=An%C3%A1lise%20e%20Desenvolvimento%20de%20Sistemas&faculdade=Universo&cidade=Salvador&pretencao=500&modalidade=Presencial
  return (
    <>
        <Menu home={false} buscar={true} revista={false} vocacional={false}/> 
        <p><b>Tipo:</b> {filtro.tipo}</p>
        <p><b>Nome:</b> {filtro.nome}</p>
        <p><b>Faculdade:</b> {filtro.faculdade}</p>
        <p><b>Cidade:</b> {filtro.cidade}</p>
        <p><b>Pretencao:</b> {filtro.pretencao}</p>
        <p><b>Presencial:</b> {filtro.presencial}</p>
        <p><b>Híbrido:</b> {filtro.hibrido}</p>
        <p><b>Online:</b> {filtro.online}</p>
        
        <Filtro/>
        {/* Tentar colocar resultado da pesquisa Aqui */}
        <Footer/>
    </>
  )
}
