import BolsaPrincipal from '@/components/detalhes-bolsa/BolsaPrincipal'
import Footer from '@/components/footer/Footer'
import Menu from '@/components/menu/Menu'
import React from 'react'

export default function bolsa() {
return (
<>
    <Menu home={false} buscar={false} revista={false} vocacional={false}/>
    <BolsaPrincipal/>
    <Footer/>
</>
)
}
