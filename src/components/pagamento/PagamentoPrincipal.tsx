import React from 'react'
import CardResumo from './CardResumo'
import Conta from './Conta'
export default function PagamentoPrincipal() {
  return (
    <div className={`flex flex-row justify-center items-start bg-[#F6F6F6] pt-[62px]`}>
      {/* LADO ESQUERDO */}
      <div className={`w-[818px] mr-[25px] mb-[175px]`}>
        <Conta/>
      </div>
      {/* LADO DIREITO */}
      <div className={`w-[397px]`}>
        <CardResumo/>
      </div>
    </div>
  )
}
