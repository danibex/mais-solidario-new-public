import Home from '@/components/home/Home'
import React, { useEffect, useState } from 'react'

export default function Principal() {
  return (
  <div className='m-0 p-0'>
    <p className='hidden w-full bg-red-600 text-white font-black'>MUDAR CORES PARA AS ESPECÍFICAS DO PROJETO</p>
    <Home/>
  </div>
  )
}
