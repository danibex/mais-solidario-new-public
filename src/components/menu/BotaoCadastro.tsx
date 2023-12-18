import React, { useContext } from 'react'
import AutenticacaoContext from '@/contexts/AutenticacaoGoogleContext';

export default function BotaoCadastro() {
  const {loginGoogle} = useContext(AutenticacaoContext)
  return (
    <button onClick={() => loginGoogle()} className="bg-[#FF6B3D] hover:bg-orange-500 active:bg-orange-600 rounded justify-start items-center gap-2.5 flex">
    <div className="px-4 py-2 rounded border border-white justify-start items-center flex">
        <div className="whitespace-nowrap text-center text-white text-base font-bold leading-normal">Cadastre-se</div>
    </div>
    </button>
  )
}
