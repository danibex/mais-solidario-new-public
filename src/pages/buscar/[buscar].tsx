/* eslint-disable react-hooks/rules-of-hooks */
import Filtro from '@/components/buscar/Filtro'
import Footer from '@/components/footer/Footer'
import Menu from '@/components/menu/Menu'
import React from 'react'

import { useRouter } from 'next/router'

export default function buscar() {

  return (
    <>
        <Menu home={false} buscar={true} revista={false} vocacional={false}/>         
        <Filtro/>
        {/* Tentar colocar resultado da pesquisa Aqui */}
        <Footer/>
    </>
  )
}
