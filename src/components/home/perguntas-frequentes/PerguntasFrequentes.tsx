import React from 'react'
import fonts from '@/styles/fonts.module.css'
import { IconPlus } from '@tabler/icons-react'
import AlternarPergunta from './AlternarPergunta'
export default function PerguntasFrequentes() {
    const respostaMock = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    const comoEscolher = `Escolher um curso na Mais Solidário é simples e eficiente. Siga estes passos: 1. Acesse nosso site. 2. Escolha o curso desejado. 3. Indique a cidade onde pretende estudar. 4. Preencha o formulário para a bolsa. 5. Realize o pagamento da primeira mensalidade. 6. Comece sua jornada acadêmica!`
    const parceiros = `Nossas parcerias abrangem instituições renomadas, incluindo: Centro Universitário Unifatecei EAD - Brasil Centro Universitário Universo - Salvador Centro Universitário Uniftc - Bahia Centro Universitário Unex - Bahia Centro Universitário Uniedutec - Brasil Faculdade Fatec - Bahia Faculdade Santíssimo - Bahia Faculdade Unifbb - Bahia Faculdade Atualiza - Bahia Faculdade V. Cairú - Bahia Faculdade H. Rocha - Bahia CPET Técnico - Brasil UNIEDUTEC / Técnico - Brasil Colégio Acadêmico / Pituba Colégio Acadêmico / Vilas do Atlântico - Bahia Colégio Renovação Alagoinhas - Bahia UNIEDUTEC Profissões - Brasil Temos uma variedade de opções para atender às suas necessidades educacionais em diferentes níveis.`
    const porQueAdiquirir = `Adquirir uma bolsa de estudos na Mais Solidário Bolsas de Estudos é a chave para desbloquear um futuro promissor e acessível à educação de qualidade. Nossa instituição é dedicada a oferecer oportunidades transformadoras, permitindo que você alcance seus objetivos acadêmicos sem sobrecarregar seu orçamento. Com uma abordagem solidária, proporcionamos não apenas educação, mas também apoio integral para que você se destaque em sua jornada acadêmica. Ao escolher uma bolsa conosco, você não apenas investe em sua própria educação, mas também se une a uma comunidade comprometida com o sucesso mútuo. Faça parte desta trajetória inspiradora e conquiste horizontes ilimitados com a Mais Solidário Bolsas de Estudos.`
    const beneficicios = `Ao optar por uma bolsa na Mais Solidário, você desfrutará de diversos benefícios: Economia Financeira Expressiva: Redução significativa nos custos de mensalidades, permitindo uma economia substancial ao longo do curso. Acesso à Educação de Qualidade: Garantia de uma educação de alta qualidade, mantendo os mesmos padrões acadêmicos com a bolsa de 80% de desconto. Foco no Desempenho Acadêmico: Liberdade das preocupações financeiras, permitindo total concentração no desempenho acadêmico. Menos Endividamento Pós-Graduação: Minimização dos custos durante o curso, reduzindo a necessidade de empréstimos estudantis pós-graduação. Estabilidade Financeira Durante os Estudos: Tranquilidade financeira ao longo do período acadêmico, eliminando a pressão constante relacionada aos custos educacionais. Oportunidade de Envolvimento Extracurricular: Participação em atividades extracurriculares, estágios e projetos sem preocupações financeiras adicionais. Conclusão do Curso sem Preocupações: Formatura com confiança, sustentada por uma bolsa que permitiu foco no aprendizado e crescimento pessoal. Rede de Contatos e Oportunidades Profissionais: Fazer parte de uma comunidade educacional que valoriza o talento, oferecendo benefícios financeiros e uma rede de contatos profissionais.`
    return (
    <div className='min-h-[846px] px-[104px] flex flex-col justify-start items-center py-[84px] bg-neutral-100'>
        <div className='w-[1233px]'>
            <div className='flex flex-col justify-start items-start mb-[32px]'>
                <h3 className={`${fonts.poppis} text-neutral-700 text-[40px] font-bold font-['Poppins'] leading-[48px] tracking-tight`}>Perguntas Frequentes e Fale Conosco</h3>
                <div className={`${fonts.ubuntu} text-neutral-700 text-base flex flex-col justify-start items-start`}>
                    <p>Ainda em dúvida sobre a Mais Solidário? Veja nossa seção de Perguntas frequentes.</p>
                    <p>Não encontrou o que procurava? Clique em <b>Fale conosco</b> e envie suas dúvidas</p>
                </div>
            </div>
            <div className='flex flex-col justify-start items-start'>
                {/* Pergunta Base */}
                <AlternarPergunta pergunta='Como escolher um curso?' resposta={comoEscolher}/>
                <AlternarPergunta pergunta='Quais as instituições de ensino são parceiras?' resposta={parceiros}/>
                <AlternarPergunta pergunta='Por que devo adquirir uma bolsa na Mais Solidário?' resposta={porQueAdiquirir}/>
                <AlternarPergunta pergunta='Quais os benefícios em adquirir uma bolsa de estudos?' resposta={beneficicios}/>
            </div>
        </div>
    </div>
  )
}
