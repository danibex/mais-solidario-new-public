import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Menu from '../menu/Menu'
import FiltroPrincipal from './filtro/FiltroPrincipal'
import BolsasProximas from './bolsas-proximas/BolsasProximas'
import FaculdadesComBolsasPrincipal from './faculdades-com-bolsas/FaculdadesComBolsasPrincipal'
import HeroAnuncioPrincipal from './hero-anuncio/HeroAnuncioPrincipal'
import CaminhoAcademicoPrincipal from './caminho-academico/CaminhoAcademicoPrincipal'
import Noticias from './noticias/Noticias'
import Depoimentos from './depoimentos/Depoimentos'
import PerguntasFrequentes from './perguntas-frequentes/PerguntasFrequentes'
import Footer from '../footer/Footer'
export default function Home() {
  return (
    <div className=''>
      <Menu home={true} buscar={false} revista={false} vocacional={false}/>
      <FiltroPrincipal/>
      <BolsasProximas/>
      <FaculdadesComBolsasPrincipal/>
      <HeroAnuncioPrincipal/>
      <CaminhoAcademicoPrincipal/>
      <Noticias/>
      <Depoimentos/>
      <PerguntasFrequentes/>
      <Footer/>
    </div>
  )
}
