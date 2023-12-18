import React, { useContext, useEffect, useState } from 'react'
import CardResumo from './CardResumo'
import Conta from './Conta'
import { useRouter } from 'next/router'
import bolsaDetalhes from '@/core/bolsaDetalhes'

export default function PagamentoPrincipal() {

  const bolsaDetalhesBase = new bolsaDetalhes()
  const router = useRouter()
  const pesquisa = router.query
  const [curso, setCurso] = useState(bolsaDetalhesBase)
  let filtro = {
      // Criar uma classe em um arquivo separado
      id: pesquisa.id,
    }
  
  useEffect(() => {
    if(filtro.id) {
      fetch(`/api/detalhesDeBolsas?id=${filtro.id}`)
        .then((curso) => curso.json())
        .then((curso) => {setCurso(curso[0])})
    }
  }, [filtro.id])

  useEffect(() => {
    console.log(curso)
  }, [curso])

  return (
    <div className={`flex flex-row justify-center items-start bg-[#F6F6F6] pt-[62px]`}>
      {/* LADO ESQUERDO */}
      <div className={`w-[818px] mr-[25px] mb-[175px]`}>
        <Conta/>
      </div>
      {/* LADO DIREITO */}
      <div className={`w-[397px]`}>
        <CardResumo caminho_imagem_parceiro={curso.caminho_imagem_parceiro} nome_curso={curso.nome_curso} nome_parceiro={curso.nome_parceiro} desconto_porcentagem={curso.desconto_porcentagem} preco_com_desconto={curso.preco_com_desconto}/>
      </div>
    </div>
  )
}
