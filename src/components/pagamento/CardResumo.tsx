import React from 'react'
import Image from 'next/image'
import fonts from '@/styles/fonts.module.css'
import AlternarDescricao from './AlternarDescricao'
export default function CardResumo(props) {
    const respostaMock = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    const comoEscolher = `Escolher um curso na Mais Solidário é simples e eficiente. Siga estes passos: 1. Acesse nosso site. 2. Escolha o curso desejado. 3. Indique a cidade onde pretende estudar. 4. Preencha o formulário para a bolsa. 5. Realize o pagamento da primeira mensalidade. 6. Comece sua jornada acadêmica!`
    const porQueAdiquirir = `Adquirir uma bolsa de estudos na Mais Solidário Bolsas de Estudos é a chave para desbloquear um futuro promissor e acessível à educação de qualidade. Nossa instituição é dedicada a oferecer oportunidades transformadoras, permitindo que você alcance seus objetivos acadêmicos sem sobrecarregar seu orçamento. Com uma abordagem solidária, proporcionamos não apenas educação, mas também apoio integral para que você se destaque em sua jornada acadêmica. Ao escolher uma bolsa conosco, você não apenas investe em sua própria educação, mas também se une a uma comunidade comprometida com o sucesso mútuo. Faça parte desta trajetória inspiradora e conquiste horizontes ilimitados com a Mais Solidário Bolsas de Estudos.`
    const beneficicios = `Ao optar por uma bolsa na Mais Solidário, você desfrutará de diversos benefícios: Economia Financeira Expressiva: Redução significativa nos custos de mensalidades, permitindo uma economia substancial ao longo do curso. Acesso à Educação de Qualidade: Garantia de uma educação de alta qualidade, mantendo os mesmos padrões acadêmicos com a bolsa de 80% de desconto. Foco no Desempenho Acadêmico: Liberdade das preocupações financeiras, permitindo total concentração no desempenho acadêmico. Menos Endividamento Pós-Graduação: Minimização dos custos durante o curso, reduzindo a necessidade de empréstimos estudantis pós-graduação. Estabilidade Financeira Durante os Estudos: Tranquilidade financeira ao longo do período acadêmico, eliminando a pressão constante relacionada aos custos educacionais. Oportunidade de Envolvimento Extracurricular: Participação em atividades extracurriculares, estágios e projetos sem preocupações financeiras adicionais. Conclusão do Curso sem Preocupações: Formatura com confiança, sustentada por uma bolsa que permitiu foco no aprendizado e crescimento pessoal. Rede de Contatos e Oportunidades Profissionais: Fazer parte de uma comunidade educacional que valoriza o talento, oferecendo benefícios financeiros e uma rede de contatos profissionais.`
  
    return (
    <div className='w-full'>
        {/* CARD RESUMO */}
        <div className={`w-full bg-white text-[#121212] border-[#0000004d] border-[2px] p-[24px] rounded-[8px] flex flex-col gap-[12px]`}>
            <Image alt='Parceiro' src={props.caminho_imagem_parceiro} width={324} height={40} />
            <h2 className={` ${fonts.poppis} text-[20px] font-[700]`}>{props.nome_curso}</h2>
            <p className={`text-[16px] ${fonts.ubuntu} fonts-[400]`}>Universidade {props.nome_parceiro}</p>
            <div className=
            {`
            flex flex-row justify-between items-center 
            text-[#121212] text-[16px] ${fonts.ubuntu} font-[700] 
            `}>
                <p>Bolsa de {props.desconto_porcentagem}%</p>
                <p>{props.preco_com_desconto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}/mês</p>
            </div>
        </div>
        {/* DESCRIÇÕES */}
        <div className={`flex flex-col justify-start items-center px-[12px]`}>
            <AlternarDescricao nome='Benefícios' descricao={beneficicios}/>
            <AlternarDescricao nome='O que devo fazer para garantir a bolsa?' descricao={comoEscolher}/>
            <AlternarDescricao nome='Por que devo adquirir uma bolsa na Mais Solidário?' descricao={porQueAdiquirir}/>
        </div>
    </div>
  )
}
