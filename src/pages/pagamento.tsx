import Filtro from '@/components/buscar/Filtro'
import Footer from '@/components/footer/Footer'
import Menu from '@/components/menu/Menu'
import PagamentoPrincipal from '@/components/pagamento/PagamentoPrincipal'
import React from 'react'

export default function buscar() {
  return (
    <>
        <Menu home={false} buscar={false} revista={false} vocacional={false}/>
            <PagamentoPrincipal/>
        <Footer/>
    </>
  )
}
