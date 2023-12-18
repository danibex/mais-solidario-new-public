import React, { useContext, useEffect } from 'react'
import AutenticacaoContext from '@/contexts/AutenticacaoGoogleContext';
export default function BotaoEntrar() {
  const {usuarioGoogle, setUsuarioGoogle, loginGoogle} = useContext(AutenticacaoContext)
  return (
    <button onClick={() => loginGoogle()} className="font-bold px-4 py-2 bg-white text-[#189ED7] rounded border border-[#189ED7] justify-start items-center gap-2.5 flex hover:bg-[#189ED7] hover:border-white hover:text-white active:bg-sky-600">
      Entrar
    </button>
  )
}
