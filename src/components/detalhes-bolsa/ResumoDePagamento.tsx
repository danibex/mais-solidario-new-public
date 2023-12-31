import React, { useContext, useEffect, useState } from 'react'
import fonts from "@/styles/fonts.module.css"
import bolsaDetalhes from '@/core/bolsaDetalhes'
import Link from 'next/link'

{/* PERIGO!!! ÁREA DE TESTE */}
import AutenticacaoGoogleContext from "@/contexts/AutenticacaoGoogleContext"
{/* PERIGO!!! ÁREA DE TESTE */}

export default function ResumoDePagamento(props) {

{/* PERIGO!!! ÁREA DE TESTE */}
const {usuarioGoogle, setUsuarioGoogle} = useContext(AutenticacaoGoogleContext)
{/* PERIGO!!! ÁREA DE TESTE */}
    const bolsaDetalhesBase = new bolsaDetalhes()
    const [detalhesDeBolsa, setDetalhesDeBolsa] = useState(bolsaDetalhesBase)
    useEffect(() => {
      if(props.id) {
        fetch(`/api/detalhesDeBolsas?id=${props.id}`)
        .then((resp) => resp.json())
        .then((resp) => setDetalhesDeBolsa(resp[0]))
      }
    },[props.id])
    useEffect(() => {
        console.log(detalhesDeBolsa)
    },[detalhesDeBolsa])

  return (
    <div className={`flex flex-col p-[16px] rounded-[5px] border-[1px] border-[#CECECE] bg-white w-full h-full`}>
        <div className={`flex flex-row justify-between items-start`}>
            <div className={`text-[#343A40]`}>
                <p className={`text-[16px] ${fonts.ubuntu} font-[700]`}>Mensalidade</p>
                <div className={`flex flex-row text-[#71717A]`}>
                    <p className={`text-[14px] ${fonts.ubuntu} font-[700] mr-[8px] line-through`}>{detalhesDeBolsa.preco.toLocaleString('pt-BR', { timezone: 'UTC' })}</p>
                    {/** <p className='bg-[#FFE1D8] px-1'>-{detalhesDeBolsa.desconto_porcentagem}%</p> */}
                </div>
                <div className={`flex flex-row justify-start items-center text-[14px] ${fonts.ubuntu} font-[300]`}>
                    <p>R$</p>
                    <p className={`text-[20px] ${fonts.poppis} font-[700]`}>{detalhesDeBolsa.preco_com_desconto.toLocaleString('pt-BR', { timezone: 'UTC' })}</p>
                    <p>/mês</p>
                </div>
                {/* <p className={`text-[14px] ${fonts.ubuntu} font-[400]`}>Economia de até R$ 1.248,00</p> */}
            </div>           
            <div className={`${fonts.ubuntu} rounded-[6px] flex flex-col justify-center items-center px-[12px] py-[8px] border border-[#FF6B3D]`}>
                <p className={`text-[#343A40] text-[14px] font-[400]`}>Bolsa</p> 
                <p className={`text-[#FF6B3D] text-[16px] font-[700]`}>{detalhesDeBolsa.desconto_porcentagem}%</p>
            </div>   
        </div>
        <div className={`w-full flex flex-col my-[16px] justify-start items-start text-[#343A40] text-[16px] ${fonts.ubuntu} `}>
            <p className='font-[700]'>{detalhesDeBolsa.modalidade}</p>
            <p className='font-[400]'>{detalhesDeBolsa.turno}</p>
        </div>
        <div className={`flex flex-row justify-start items-center`}>
            <div className={`flex flex-col justify-start items-start text-[#343A40] text-[16px] ${fonts.ubuntu}`}>
                <p className={`font-[700]`}>{detalhesDeBolsa.cidade} / {detalhesDeBolsa.estado}</p>
                <p className={`font-[400]`}>{detalhesDeBolsa.endereco}</p> {/* .substring(0,33) */}
            </div>
            {/**<button className={`whitespace-nowrap py-[8px] px-[4px] border-[1.75px] border-[#189ED7] rounded-md text-[#189ED7] text-[16px] ${fonts.ubuntu} font-[700]`}>Alterar Local</button> */}
        </div>
        <div className='flex justify-center items-center h-[28px] w-[333px] my-[14px]'>
            <button className={`text-[#189ED7] text-[16px] ${fonts.ubuntu} font-[700]`}>Como funciona a bolsa?</button>
        </div>
        <Link href={`/pagamento/pagamento?id=${props.id}`} className={`text-center w-full text-[16px] bg-[#FF6B3D] py-[8px] rounded-[4px] border border-[#662B18] text-[#FFFFFF] ${fonts.ubuntu} font-[700]`}>Garantir essa bolsa</Link>
    </div>
  )
}
