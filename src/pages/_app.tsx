import '@/styles/globals.css'
import React, { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/react';
import AutenticacaoGoogleContext from '@/contexts/AutenticacaoGoogleContext'
import { getAuth, signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import {app} from "@/firebase/autenticacao"
import UsuarioContext from '@/contexts/UsuarioContext'
import FiltroContext from '@/contexts/FiltroContext'
import Filtro from '@/core/Filtro';
import CursosContext from '@/contexts/CursosContext'
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
export default function App({ Component, pageProps }) {
  const [usuario, setUsuario] = useState({})
  const [usuarioGoogle, setUsuarioGoogle] = useState({})
  const [cursos, setCursos] = useState([]) // Responsável por armazenar os cursos obtidos na consulta e rederizar na tela (array)
  const [filtrar, setFiltrar] = useState(new Filtro("Graduação","","","",1000,true,true,true))
  const [emailDoUsuarioParaConsultaNoBanco, setEmailDoUsuarioParaConsultaNoBanco] = useState('')
  const [dadosDaRequisicaoParaCadastroDeUsuarioNoBanco, setDadosDaRequisicaoParaCadastroDeUsuarioNoBanco] = useState(usuarioGoogle)

  function loginGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUsuarioGoogle(user)
        setUsuario({...usuario, email: user.email})
        setDadosDaRequisicaoParaCadastroDeUsuarioNoBanco(user)
        setEmailDoUsuarioParaConsultaNoBanco(user.email)
      })
      .catch((error) => {
        console.log(`ERRO: ${error}`)
      });
    }
    
    useEffect(() => {
      fetch('/api/persistirUsuarioGoogleNoBanco', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosDaRequisicaoParaCadastroDeUsuarioNoBanco)
    })
      .then((res) => res.json())
    }, [dadosDaRequisicaoParaCadastroDeUsuarioNoBanco])

    function atualizarCursos() {
      fetch('/api/FiltrarCursos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(filtrar)
      })
          .then(resp => resp.json())
          .then(resp => setCursos(resp))
  }

  return (
  <>
    <CursosContext.Provider value={{cursos, setCursos}}>
      <FiltroContext.Provider value={{filtrar, setFiltrar, atualizarCursos}}>
        <UsuarioContext.Provider value={{usuario, setUsuario}}>
          <AutenticacaoGoogleContext.Provider value={{usuarioGoogle, setUsuarioGoogle, loginGoogle}}>
            <Component {...pageProps} />
            <Analytics />
          </AutenticacaoGoogleContext.Provider>
        </UsuarioContext.Provider>
      </FiltroContext.Provider>
    </CursosContext.Provider>
  </>
  )

}
