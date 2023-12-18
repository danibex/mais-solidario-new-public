import BolsaPrincipal from '@/components/detalhes-bolsa/BolsaPrincipal'
import Footer from '@/components/footer/Footer'
import Menu from '@/components/menu/Menu'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Bolsa() {
    const router = useRouter()
    const pesquisa = router.query
    let filtro = {
        // Criar uma classe em um arquivo separado
        id: pesquisa.id,
      }
      // URL
  //http://localhost:3000/buscar?tipo=Gradua%C3%A7%C3%A3o&nome=An%C3%A1lise%20e%20Desenvolvimento%20de%20Sistemas&faculdade=Universo&cidade=Salvador&pretencao=500&modalidade=Presencial
return (
<>
    <Menu home={false} buscar={false} revista={false} vocacional={false}/>
    <BolsaPrincipal id={filtro.id}/>
    <Footer/>
</>
)
}
