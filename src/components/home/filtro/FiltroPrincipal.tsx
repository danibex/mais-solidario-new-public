import React from 'react'
import AnuncioFiltro from '../AnuncioFiltro'
import Filtro from './Filtro'
export default function FiltroPrincipal() {
  return (
    <div className='w-full h-full'>
      <div className='bg-[#147BA7] pb-[44px] flex justify-center items-center flex-col'>
        <AnuncioFiltro/>
        {/* Filtro */}
        <Filtro/>
      </div>
    </div>
  )
}
