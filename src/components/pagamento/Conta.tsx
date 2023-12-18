import React, { useContext, useEffect, useState } from 'react'
import fonts from '@/styles/fonts.module.css'
import { IconLock, IconWallet } from '@tabler/icons-react'
import AutenticacaoContext from '@/contexts/AutenticacaoGoogleContext'
import UsuarioContext from '@/contexts/UsuarioContext'
import { InfinitySpin } from 'react-loader-spinner'
import Image from 'next/image'
import { useRouter } from 'next/router'
export default function Conta() {
  const router = useRouter()
  const pesquisa = router.query
  const [cursoId, setCursoId] = useState()
  const {usuarioGoogle, setUsuarioGoogle, loginGoogle} = useContext(AutenticacaoContext)
 // const {usuario, setUsuario} = useContext(UsuarioContext)
  const [formularioCadastro, setFormularioCadastro] = useState({name: "", email: "",mobilePhone: "", cpfCnpj: "", postalCode: "", address: "", addressNumber: "", province: "", complement: ""})
  const [dadosAdicionais, setDadosAdicionais] = useState({email: "", nascimento: "", estado: "", cidade: ""})
  const [carregando, setCarregando] = useState(false)
  const [mostrarBoleto, setMostrarBoleto] = useState(false)
  const [urlPagamento, setUrlPagamento] = useState("")
  let filtro = {
    // Criar uma classe em um arquivo separado
    id: pesquisa.id,
  }

  useEffect(() => {
    atualizarEmail(usuarioGoogle.email)
  },[usuarioGoogle])
  
  function atualizarEmail(email) {
    setFormularioCadastro({...formularioCadastro, email: email}); 
    setDadosAdicionais({...dadosAdicionais, email: email})
  }
  

  function criarUsuarioAsaasEAtualizarNoBanco(e) {
    e.preventDefault()
    if(formularioCadastro.address == "" || formularioCadastro.addressNumber == "" || formularioCadastro.cpfCnpj == "" || formularioCadastro.email == "" || formularioCadastro.mobilePhone == "" || formularioCadastro.name == "" || formularioCadastro.postalCode == "" || formularioCadastro.province == "") {
      window.alert("Preencha os campos obrigatórios!")
    } else if (usuarioGoogle.email == "" || usuarioGoogle.email == undefined || usuarioGoogle.email == null) {
      window.alert("Faça o login antes de finalizar o cadastro!")
    } else {
      setCarregando(true)
      fetch('/api/formularioFinalizarCadastro', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json'
        },
        body: JSON.stringify(formularioCadastro)
      })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .finally(() => inserirNoBancoDadosAdicionais())
    }
  }
  
  function inserirNoBancoDadosAdicionais() {
    fetch('/api/atualizarDadosAdicionaisDoUsuario', { 
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(dadosAdicionais)
    })
      .then(resp => resp.json())
      .then(resp => {console.log(resp); setCarregando(false); gerarPagamento()})
  }

  function gerarPagamento() {
    fetch(`/api/gerarPagamento?curso_id=${pesquisa.id}&email=${usuarioGoogle.email}`)
        .then((link) => link.json())
        .then((link) => {console.log(link); setMostrarBoleto(true); setUrlPagamento(link.invoiceUrl)})   
  }

  function redirecionarParaPagamento(e) {
    e.preventDefault()
    router.push(urlPagamento)
  }

  return (
    <div>
      {/* AINDA NÃO TEM CONTA? */}
      <div className={`
      ${usuarioGoogle.displayName ? "hidden" : ""}
        flex flex-col justify-center items-center gap-[24px]
        w-full bg-[#FFFFFF] py-[24px] px-[12px]
        border border-[#0000004d] rounded-[8px]
        
        `}>
          <h2 className={`text-[#121212] ${fonts.poppis} text-[30px] font-[700]`}>Você já possui uma conta?</h2>
          <button onClick={() => loginGoogle()} className={`px-[16px] py-[8px] bg-[#FF6B3D] ${fonts.ubuntu} text-[16px] font-[700] rounded-[4px] text-[#FFF]`}>Acessar minha conta</button>
          <p className={`${fonts.ubuntu} text-[16px] font-[400] text-[#71717A]`}>Não possui uma conta? Continue seu cadastro e crie a sua conta rápido e facil.</p>
        </div>
        {/* CADASTRO DE DADOS */}
        <div className={`mt-[32px] w-full flex flex-col justify-start items-start `}>
          <div className={`flex w-full flex-row justify-between items-center`}>
            <div className={``}>
              <h2 className={`text-[#000] ${fonts.poppis} text-[40px] font-[700]`}>Cadastro de Dados</h2>
            </div>
            <div className={`flex flex-row ${fonts.ubuntu} text-[16px] font-[700] px-[20px] py-[12px] border border-[#189ED7] rounded-[6px] text-[#189ED7] gap-[8px]`}>
              <p className={``}>Ambiente Seguro </p>
              <IconLock/>
            </div>
          </div>
          {/* BOX DO FUNDO BRANCO */}
          <div className={`mt-[24px] w-full bg-white flex flex-col justify-start items-start px-[24px] rounded-[8px] border-[2px] border-[#0000004d]`}>
            {/* PÁGINA DE BOLETO */}
            <div className={`${mostrarBoleto ? '' : 'hidden'} gap-4 flex flex-col justify-center items-center w-full py-6 mt-6`}>
              <Image alt="Imagem simbolizando evento concluído." width={200} height={200} src="/gifs/check.gif"/>
              <h2 className={`font-bold text-3xl`}>Parabéns! Seu pagamento foi gerado com sucesso.</h2>
              <p className={`text-lg`}>Caso não seja redirecionado para a página de pagamento clique no botão abaixo</p>
              <button onClick={(e) => redirecionarParaPagamento(e)} className={`hover:bg-[#46B1DF] px-4 py-2 font-bold rounded-md border bg-[#189ED7] border-white text-white flex flex-row justify-center items-center gap-2`}> <IconWallet/> PAGAR</button>
            </div>

            <div className={`${mostrarBoleto ? 'hidden' : ''}`}>
              <h3 className={`mt-[12px] mb-[8px] text-[#1A202C] text-[24px] ${fonts.poppis} font-[700]`}>Dados do aluno</h3>
              <hr className={`w-[733px] h-[2px] mb-[36px]`}/>
                {/* DADOS DO ALUNO */}
                <form>
                    <div className={`flex flex-col gap-[16px]`}>
                      {/* LINHA 1 */}
                      <div className='flex flex-row gap-[16px] text-[#71717A]'>
                        {/* NOME */}
                        <div className={`flex flex-col justify-start ${fonts.ubuntu} items-start`}>
                          <label className={`mb-[8px]  text-[14px]  font-[700]`} htmlFor="">Nome Completo</label>
                          <input required onChange={e => setFormularioCadastro({...formularioCadastro, name: e.target.value})} value={formularioCadastro.name} className={`w-[378px] h-[43px] text-[16px] font-[400] py-[10px] px-[12px] border-[2px] border-[#CECECE] rounded-[6px]`} placeholder='Digite seu nome' type="text" name="" id="" />
                        </div>
                        {/* E-MAIL */}
                        <div className={`flex flex-col justify-start ${fonts.ubuntu} items-start`}>
                          <label className={`mb-[8px]  text-[14px]  font-[700]`} htmlFor="">E-mail</label>
                          <input readOnly value={usuarioGoogle.email}  className={`w-[378px] h-[43px] text-[16px] font-[400] py-[10px] px-[12px] border-[2px] border-[#CECECE] rounded-[6px]`} placeholder='Digite seu e-mail' type="text" name="" id="" />
                        </div>
                      </div>
                      {/* LINHA 2 */}
                      <div className='flex flex-row gap-[16px] text-[#71717A]'>
                        {/* CPF */}
                        <div className={`flex flex-col justify-start ${fonts.ubuntu} items-start`}>
                          <label className={`mb-[8px]  text-[14px]  font-[700]`} htmlFor="">CPF</label>
                          <input required onChange={e => setFormularioCadastro({...formularioCadastro, cpfCnpj: e.target.value})} className={`w-[263px] h-[43px] text-[16px] font-[400] py-[10px] px-[12px] border-[2px] border-[#CECECE] rounded-[6px]`} placeholder='Digite seu CPF' type="text" name="" id="" />
                        </div>
                        {/* DATA DE NASCIMENTO */}
                        <div className={`flex flex-col justify-start ${fonts.ubuntu} items-start`}>
                          <label className={`mb-[8px]  text-[14px]  font-[700]`} htmlFor="">Data de Nascimento</label>
                          <input required onChange={(e) => setDadosAdicionais({...dadosAdicionais, nascimento: e.target.value})} className={`w-[205px] h-[43px] text-[16px] font-[400] py-[10px] px-[12px] border-[2px] border-[#CECECE] rounded-[6px]`} placeholder='Digite seu e-mail' type="date" name="" id="" />
                        </div>
                        {/* TELEFONE */}
                        <div className={`flex flex-col justify-start ${fonts.ubuntu} items-start`}>
                          <label className={`mb-[8px]  text-[14px]  font-[700]`} htmlFor="">Telefone</label>
                          <input required onChange={e => setFormularioCadastro({...formularioCadastro, mobilePhone: e.target.value})} className={`w-[270px] h-[43px] text-[16px] font-[400] py-[10px] px-[12px] border-[2px] border-[#CECECE] rounded-[6px]`} placeholder='Digite seu telefone' type="text" name="" id="" />
                        </div>
                      </div>
                    {/* DADOS DE LOCALIZAÇÃO */}
                    <h3 className={`mt-[12px] mb-[8px] text-[#1A202C] text-[24px] ${fonts.poppis} font-[700]`}>Dados de Localização</h3>
                    <hr className={`w-[733px] h-[2px] mb-[26px]`}/>
                    {/* LINHA 1 */}
                    <div className='flex flex-row gap-[16px] text-[#71717A]'>
                      {/* CEP */}
                      <div className={`flex flex-col justify-start ${fonts.ubuntu} items-start`}>
                        <label className={`mb-[8px]  text-[14px]  font-[700]`} htmlFor="">CEP</label>
                        <input required onChange={e => setFormularioCadastro({...formularioCadastro, postalCode: e.target.value})} className={`w-[290px] h-[43px] text-[16px] font-[400] py-[10px] px-[12px] border-[2px] border-[#CECECE] rounded-[6px]`} placeholder='00000-000' type="text" name="" id="" />
                      </div>
                      {/* ESTADO */}
                      <div className={`flex flex-col justify-start ${fonts.ubuntu} items-start`}>
                        <label className={`mb-[8px]  text-[14px]  font-[700]`} htmlFor="">Estado</label>
                        <select required onChange={(e) => setDadosAdicionais({...dadosAdicionais, estado: e.target.value})} className={`w-[138px] h-[43px] text-[16px] font-[400] py-[10px] px-[12px] border-[2px] border-[#CECECE] rounded-[6px]`} placeholder='Digite seu e-mail' id="" >
                          <option value="Selecione">Selecione</option>
                          <option value="Bahia">Bahia</option>
                          <option value="Rio de Janeiro">Rio de Janeiro</option>
                          <option value="São Paulo">São Paulo</option>
                        </select>
                      </div>
                      {/* CIDADE */}
                      <div className={`flex flex-col justify-start ${fonts.ubuntu} items-start`}>
                        <label className={`mb-[8px]  text-[14px]  font-[700]`} htmlFor="">Cidade</label>
                        <input required onChange={(e) => setDadosAdicionais({...dadosAdicionais, cidade: e.target.value})} className={`w-[290px] h-[43px] text-[16px] font-[400] py-[10px] px-[12px] border-[2px] border-[#CECECE] rounded-[6px]`} placeholder='Digite para pesquisar' type="text" name="" id="" />
                      </div>
                    </div>
                    {/* LINHA 2 */}
                    <div className='flex flex-row gap-[16px] text-[#71717A]'>
                      {/* ENDEREÇO */}
                      <div className={`flex flex-col justify-start ${fonts.ubuntu} items-start`}>
                        <label className={`mb-[8px]  text-[14px]  font-[700]`} htmlFor="">Endereço</label>
                        <input required onChange={e => setFormularioCadastro({...formularioCadastro, address: e.target.value})} className={`w-[529px] h-[43px] text-[16px] font-[400] py-[10px] px-[12px] border-[2px] border-[#CECECE] rounded-[6px]`} placeholder='Ex.: Av. Cruzeiro do Sul' type="text" name="" id="" />
                      </div>
                      {/* NÚMER */}
                      <div className={`flex flex-col justify-start ${fonts.ubuntu} items-start`}>
                        <label className={`mb-[8px]  text-[14px]  font-[700]`} htmlFor="">Número</label>
                        <input required onChange={e => setFormularioCadastro({...formularioCadastro, addressNumber: e.target.value})} className={`w-[214px] h-[43px] text-[16px] font-[400] py-[10px] px-[12px] border-[2px] border-[#CECECE] rounded-[6px]`} placeholder='Ex.: 00' type="text" name="" id="" />
                      </div>
                    </div>
                    {/* LINHA 3 */}
                    <div className='flex flex-row gap-[16px] text-[#71717A]'>
                      {/* BAIRRO */}
                      <div className={`flex flex-col justify-start ${fonts.ubuntu} items-start`}>
                        <label className={`mb-[8px]  text-[14px]  font-[700]`} htmlFor="">Bairro</label>
                        <input required onChange={e => setFormularioCadastro({...formularioCadastro, province: e.target.value})} className={`w-[301px] h-[43px] text-[16px] font-[400] py-[10px] px-[12px] border-[2px] border-[#CECECE] rounded-[6px]`} placeholder='Ex.: Pinheiros' type="text" name="" id="" />
                      </div>
                      {/* COMPLEMENTO */}
                      <div className={`flex flex-col justify-start ${fonts.ubuntu} items-start`}>
                        <label className={`mb-[8px]  text-[14px]  font-[700]`} htmlFor="">Complemento(Opcional)</label>
                        <input  onChange={e => setFormularioCadastro({...formularioCadastro, complement: e.target.value})} className={`w-[442px] h-[43px] text-[16px] font-[400] py-[10px] px-[12px] border-[2px] border-[#CECECE] rounded-[6px]`} placeholder='Ex.: Apartamento 00' type="text" name="" id="" />
                      </div>
                    </div>
                    <div className='mt-[60px] flex justify-end items-end '>
                      <button onClick={(e) => criarUsuarioAsaasEAtualizarNoBanco(e)} className={`${fonts.ubuntu} w-[168px] h-[44px] text-center border border-[#FFBC7D] flex justify-center items-center flex-col bg-[#FF6B3D] rounded-[4px] font-[700] mb-[24px] py-[8px] px-[16px] text-white text-[16px]`}>
                        <span className={`${carregando ? 'hidden' : ''}`}>
                          Finalizar Cadastro
                        </span>
                        <div className={`${carregando ? '' : 'hidden'} w-[100%] text-center flex justify-center items-center`}>
                          <InfinitySpin 
                            width='100'
                            color="#189ED7"
                          />  
                        </div>
                      </button>
                    </div>
                  </div>
                </form>
            </div>
          </div>
        </div>
    </div>
  )
}