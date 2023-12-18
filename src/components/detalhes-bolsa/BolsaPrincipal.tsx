import React, { useContext, useEffect, useState } from 'react'
import fonts from '@/styles/fonts.module.css'
import Image from 'next/image'
import { IconBriefcase, IconMapPinFilled, IconStar, IconStarFilled, IconStarHalfFilled } from '@tabler/icons-react'
import CardBolsa from '@/components/home/bolsas-proximas/CardBolsa'
import Carousel from '../home/carousel/Carousel'
import AlternarPergunta from '../home/perguntas-frequentes/AlternarPergunta'
import AlternarDuvida from './AlternarDuvida'
import ResumoDePagamento from './ResumoDePagamento'
import bolsaDetalhes from '@/core/bolsaDetalhes'
import Link from 'next/link'
{/* PERIGO!!! ÁREA DE TESTE */}
import AutenticacaoContext from '@/contexts/AutenticacaoGoogleContext'
{/* PERIGO!!! ÁREA DE TESTE */}
export default function BolsaPrincipal(props) {
{/* PERIGO!!! ÁREA DE TESTE */}
const {usuarioGoogle, setUsuarioGoogle} = useContext(AutenticacaoContext)
{/* PERIGO!!! ÁREA DE TESTE */}
  const comoEscolher = `Escolher um curso na Mais Solidário é simples e eficiente. Siga estes passos: 1. Acesse nosso site. 2. Escolha o curso desejado. 3. Indique a cidade onde pretende estudar. 4. Preencha o formulário para a bolsa. 5. Realize o pagamento da primeira mensalidade. 6. Comece sua jornada acadêmica!`
  const porQueAdiquirir = `Adquirir uma bolsa de estudos na Mais Solidário Bolsas de Estudos é a chave para desbloquear um futuro promissor e acessível à educação de qualidade. Nossa instituição é dedicada a oferecer oportunidades transformadoras, permitindo que você alcance seus objetivos acadêmicos sem sobrecarregar seu orçamento. Com uma abordagem solidária, proporcionamos não apenas educação, mas também apoio integral para que você se destaque em sua jornada acadêmica. Ao escolher uma bolsa conosco, você não apenas investe em sua própria educação, mas também se une a uma comunidade comprometida com o sucesso mútuo. Faça parte desta trajetória inspiradora e conquiste horizontes ilimitados com a Mais Solidário Bolsas de Estudos.`
  const beneficicios = `Ao optar por uma bolsa na Mais Solidário, você desfrutará de diversos benefícios: Economia Financeira Expressiva: Redução significativa nos custos de mensalidades, permitindo uma economia substancial ao longo do curso. Acesso à Educação de Qualidade: Garantia de uma educação de alta qualidade, mantendo os mesmos padrões acadêmicos com a bolsa de 80% de desconto. Foco no Desempenho Acadêmico: Liberdade das preocupações financeiras, permitindo total concentração no desempenho acadêmico. Menos Endividamento Pós-Graduação: Minimização dos custos durante o curso, reduzindo a necessidade de empréstimos estudantis pós-graduação. Estabilidade Financeira Durante os Estudos: Tranquilidade financeira ao longo do período acadêmico, eliminando a pressão constante relacionada aos custos educacionais. Oportunidade de Envolvimento Extracurricular: Participação em atividades extracurriculares, estágios e projetos sem preocupações financeiras adicionais. Conclusão do Curso sem Preocupações: Formatura com confiança, sustentada por uma bolsa que permitiu foco no aprendizado e crescimento pessoal. Rede de Contatos e Oportunidades Profissionais: Fazer parte de uma comunidade educacional que valoriza o talento, oferecendo benefícios financeiros e uma rede de contatos profissionais.`
  const parceiros = `Nossas parcerias abrangem instituições renomadas, incluindo: Centro Universitário Unifatecei EAD - Brasil Centro Universitário Universo - Salvador Centro Universitário Uniftc - Bahia Centro Universitário Unex - Bahia Centro Universitário Uniedutec - Brasil Faculdade Fatec - Bahia Faculdade Santíssimo - Bahia Faculdade Unifbb - Bahia Faculdade Atualiza - Bahia Faculdade V. Cairú - Bahia Faculdade H. Rocha - Bahia CPET Técnico - Brasil UNIEDUTEC / Técnico - Brasil Colégio Acadêmico / Pituba Colégio Acadêmico / Vilas do Atlântico - Bahia Colégio Renovação Alagoinhas - Bahia UNIEDUTEC Profissões - Brasil Temos uma variedade de opções para atender às suas necessidades educacionais em diferentes níveis.`
  const bolsaDetalhesBase = new bolsaDetalhes()
  const [detalhesDeBolsa, setDetalhesDeBolsa] = useState(bolsaDetalhesBase)
  const [cursos, setCursos] = useState([])
  const [localizacao, setLocalizacao] = useState({latitude: 0, longitude: 0})
  const [localizacaoCidadeEstado, setLocalizacaoCidadeEstado] = useState({cidade: "", estado: ""})
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
      console.log(position);
      const {latitude, longitude} = position.coords
      setLocalizacao({latitude: latitude, longitude: longitude})
      },
      (error) => {
        console.error("Erro ao obter a localização:", error);
      }
    )
    fetch("/api/bolsasProximas")
      .then(response => response.json())
      .then(arrayDeCursos => {
        setCursos(arrayDeCursos)
      })
  }, [])
  
  useEffect(() => {
    if(props.id) {
      fetch(`/api/detalhesDeBolsas?id=${props.id}`)
      .then((resp) => resp.json())
      .then((resp) => setDetalhesDeBolsa(resp[0]))
    }
  },[props.id])

  useEffect(() => {
    // Verifica se a localização está definida
    if (localizacao.latitude !== 0 && localizacao.longitude !== 0) {
      fetch(`/api/IdentificarLocalizacao?lat=${localizacao.latitude}&long=${localizacao.longitude}`)
        .then((resp) => resp.json())
        .then((resp) => {setLocalizacaoCidadeEstado(resp)})
        .catch((erro) => console.log(`ERRO NA CHAMADA DE LOCALIZAÇÃO: ${erro}`));
    }
  }, [localizacao]);
  
  const [active, setActive] = useState(true)
  const respostaMock = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
  return (
    <div className={`bg-[#F6F6F6] flex flex-col justify-center items-center w-full pt-[107px]`}>
        <div className={`flex flex-row items-start`}>
          <div className={`w-[819px] mr-[24px]`}>
            <div className={`flex flex-row text-base ${fonts.ubuntu}`}>
              <p className={`text-[#CECECE] font-[400] `}>Bolsas de estudo/Faculdades/{detalhesDeBolsa.nome_parceiro}/</p>
              <p className={`text-[#121212] text-[16px] font-[700]`}>{detalhesDeBolsa.nome_curso}</p>
            </div>
            <h2 className={`text-[#121212] text-[40px] ${fonts.poppis} font-[700] w-[762px]`}>{detalhesDeBolsa.nome_curso}</h2>
            <Image className='mt-[8px] mb-[16px]' alt='Instituição parceira' src={detalhesDeBolsa.caminho_imagem_parceiro} width={145} height={65}/>
            <div className='flex flex-row justify-start items-center gap-[8px] mb-[8px]'>
              <p>{detalhesDeBolsa.nivel}</p> 
              <div className="w-[9px] h-[9px] bg-[#CECECE] rounded-full"></div>
              <p>{detalhesDeBolsa.modalidade}</p>
              <div className="w-[9px] h-[9px] bg-[#CECECE] rounded-full"></div>
              <p>5 anos</p>
              <div className="w-[9px] h-[9px] bg-[#CECECE] rounded-full"></div>
              <p>Início Imediato</p>
            </div>  
            <div className={`text-[#121212] text-[16px] ${fonts.ubuntu} font-[700]`}>
              <Link href="#curso" className={`${active ? "border-b-[3px] border-black" : ""} px-[16px] py-[6px]`}>Sobre o Curso</Link>
              <Link href="#faculdade" className={` px-[16px] py-[6px]`}>Sobre a Faculdade</Link>
              <Link href="#duvidas" className={` px-[16px] py-[6px]`}>Dúvidas e Regras</Link>
            </div>
             {/* SOBRE O CURSO */}
            {/* COMPONENTIZAR */}
            <div id="curso" className={`mt-[84px]`}>
              <h2 className={`mb-[16px] text-[#121212] text-[40px] ${fonts.poppis} font-[700]`}>Sobre o curso na {detalhesDeBolsa.nome_parceiro}</h2>
              <p className={`text-[#343A40] text-[16px] ${fonts.inter}`}>{detalhesDeBolsa.sobre_curso}</p>
            </div>

            {/* CARD DE EMPREGABILIDADE */}
            {/* COMPONENTIZAR */}
            <div className={`${detalhesDeBolsa.alta_empregabilidade ? "" : "hidden"} my-[32px] flex flex-col justify-start items-start p-[32px] rounded-lg bg-white border border-[#CECECE] shadow-md w-[397px]`}>
                <div className={`flex flex-row justify-center items-center text-[#FF6B3D] gap-[16px] mb-[16px]`}>
                  <div className={`bg-[#FF6B3D] p-[12px] rounded-full`}>
                    <IconBriefcase width={24} height={24} color='white'/>
                  </div>
                  <p className={`text-[20px] ${fonts.poppis} font-[700]`}>Alta empregabilidade</p>
                </div>
                <p className={`text-[#71717A] text-[16px] ${fonts.inter}`}>
                Essa área é muito requisitada, um profissional dessa área ganha em média R$3.800 por mês
                </p>
            </div>


            {/* SOBRE A UNIFATECIE */}
            {/* COMPONENTIZAR */}
            <div id="faculdade" className={`w-[835px]`}>
              <h2 className={`${fonts.poppis} text-[24px] font-[700]`}>Como funciona o curso {detalhesDeBolsa.modalidade} na Faculdade {detalhesDeBolsa.nome_parceiro}</h2>
              <p className={`text-[#121212] ${fonts.inter} text-[16px] font-[400]`}>{detalhesDeBolsa.sobre_presencial}</p>
            </div> 

            {/* SOBRE A FACULDADE */}
            <div className={`mt-[84px] flex flex-col`}>
              <h2 className={`${fonts.poppis} text-[40px] font-[700]`}>Sobre a Faculdade {detalhesDeBolsa.nome_parceiro}</h2>
              <div className={`${fonts.ubuntu} flex flex-row justify-start items-center gap-[4px] text-[16px] font-[400] text-[#71717A]`}>
                <p>4.5</p>
                <div className='flex flex-row justify-start items-start'>
                  <IconStarFilled width={20} height={20} className='text-[#EDE526]'/>
                  <IconStarFilled width={20} height={20} className='text-[#EDE526]'/>
                  <IconStarFilled width={20} height={20} className='text-[#EDE526]'/>
                  <IconStarFilled width={20} height={20} className='text-[#EDE526]'/>
                  <IconStarHalfFilled width={20} height={20} className='text-[#EDE526]'/>
                  {/* <IconStar/> */}
                </div>
                <p>365 avaliações</p>
              </div>

              {/* BARRAS DE PROGRESSO */}
              <div className={`flex flex-row ${fonts.inter} text-[16px] font-[400] text-[#343A40] mt-[17.5px] gap-[18px]`}>
                <div className={`flex flex-col justify-start items-start`}>
                  <div className={`flex flex-row justify-center items-center gap-[16px]`}>
                    <p>Qualidade de ensino</p>
                    {/* BARRA */}
                    <div className={`h-[4px] w-[135px] bg-[#CECECE] rounded`}>
                      <div className={`h-full bg-[#343A40] w-[50%] rounded-l`}></div>
                    </div>
                  </div>
                  <div className={`flex flex-row justify-center items-center gap-[16px]`}>
                    <p>Professores</p>
                    <div className={`h-[4px] w-[135px] bg-[#CECECE] rounded`}>
                      <div className={`h-full bg-[#343A40] w-[75%] rounded-l`}></div>
                    </div>
                  </div>
                </div>
                <div className={`flex flex-col justify-start items-start`}>
                  <div className={`flex flex-row  justify-center items-center gap-[16px]`}>
                    <p>Atendimento ao aluno</p>
                    <div className={`h-[4px] w-[135px] bg-[#CECECE] rounded`}>
                      <div className={`h-full bg-[#343A40] w-[25%] rounded-l`}></div>
                    </div>
                  </div>
                  <div className={`flex flex-row justify-center items-center gap-[16px]`}>
                    <p>Materiais de ensino</p>
                    <div className={`h-[4px] w-[135px] bg-[#CECECE] rounded`}>
                      <div className={`h-full bg-[#343A40] w-[40%] rounded-l`}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className={`mt-[32px] text-[#1A202C] ${fonts.ubuntu} text-[16px] font-[400]`}>{detalhesDeBolsa.sobre_faculdade} 
              <br /><br />{detalhesDeBolsa.sobre_campus}
            </p>

            <div className={`mt-[16px]`}>
              <iframe src={detalhesDeBolsa.url_localizacao_mapa} width="819" height="290"  loading="lazy"></iframe>
            </div>

          </div>
          {/* CARD DE PAGAMENTO */}
          <div className={`flex justify-start items-start`}>
            <ResumoDePagamento id={props.id}/>
          </div>
          
        </div>
        {/* Quem se interessou por esse curso, também procurou por: */}
        <div className={`flex flex-col items-start justify-start w-[1233px] mt-[168px]`}>
          <h2 className={`w-[825px] text-[#121212] ${fonts.poppis} text-[40px] font-[700]`}>Quem se interessou por esse curso, também procurou por:</h2>
          <div className={`flex flex-row justify-between items-center text-[16px] w-full`}>
            <div className={`flex flex-row ${fonts.ubuntu} items-center`}>
              <IconMapPinFilled className={`text-[#71717A] mr-[8px]`} width={20} height={20}/>
              <p className={`text-[#71717A] font-[400] mr-1`}>Instituições com bolsas de estudo em: </p>
              <p className={`text-[#189ED7] font-[700]`}>{localizacaoCidadeEstado.cidade} - {localizacaoCidadeEstado.estado}</p>
            </div>
            <button className={`text-[#189ED7] ${fonts.ubuntu} text-[16px] font-[700]`}>Explorar mais Bolsas</button>
          </div>
          {/* BOLSAS */}
          <div>
            <div className='my-[32px] flex flex-row justify-center items-center gap-[24px]'>
            {/* Card */}
            {cursos.map((curso, index) => {
            return <CardBolsa 
                      href={`/bolsa/bolsa?id=${curso.id}&nome=${curso.nome_curso}`}
                      key={index} 
                      precoComDesconto={curso.preco_com_desconto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} 
                      preco={curso.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} 
                      estado={curso.estado.substring(0, 2).toUpperCase()} 
                      cidade={curso.cidade} 
                      turno={curso.turno} 
                      modalidade={curso.modalidade} 
                      nome={curso.nome_curso} 
                      maisCursado={curso.mais_cursado}  
                      src={curso.caminho_imagem_parceiro}/> 
          })} 
            </div>
            {/* Botões Slide */}
            <Carousel/>
          </div>
          {/* DUVIDAS */}
          {/* CRIAR NOVO COMPONENTE TOMANDO COMO BASE O COMPONENTE ABAIXO */}
          <div id="duvidas" className='flex flex-col justify-start items-start mb-[84px]'>
            {/* Pergunta Base */}
            <h2 className={`text-[#121212] text-[40px] ${fonts.poppis} font-[700] mt-[27px] mb-[32px]`}>Dúvidas e Regras</h2>
            <AlternarPergunta pergunta='Como escolher um curso?' resposta={comoEscolher}/>
            <AlternarPergunta pergunta='Quais as instituições de ensino são parceiras?' resposta={parceiros}/>
            <AlternarPergunta pergunta='Por que devo adquirir uma bolsa na Mais Solidário?' resposta={porQueAdiquirir}/>
            <AlternarPergunta pergunta='Quais os benefícios em adquirir uma bolsa de estudos?' resposta={beneficicios}/>
          </div>
        
        
        </div>

    </div>
  )
}
