import Footer from '@/components/footer/Footer'
import Menu from '@/components/menu/Menu'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import fonts from '@/styles/fonts.module.css'
export default function expoFavela() {
  return (
    <div>
      <Menu buscar={false} home={false} revista={false} vocacional={false} />
      <div className='w-full flex justify-center items-center'>
        <div className='w-[1240px] rounded-lg mb-[36px] p-0 text-left flex flex-col justify-center py-4 items-center'>
             
                <div className='flex flex-row justify-around gap-2 w-full'>
                    <Image className='mb-3  rounded-lg ' src='/img/notícias/noticiasP1.png' width={500} height={384} alt='Estudante jovem interagindo com estudante da terceira idade'/>
                    <Image className='mb-3  rounded-lg ' src='/img/notícias/expoFavela2.jpg' width={500} height={384} alt='Estudante jovem interagindo com estudante da terceira idade'/>
                </div>
           
              
              <div className='flex flex-col justify-start items-start'>
              <h3 className={`mb-3 ${fonts.poppis} text-neutral-900 text-2xl font-bold leading-[33.60px]`}>
              Destaque na ExpoFavela Inovation Bahia - Brasil Startup baina Mais Solidário gera impacto social pelo acesso à educação em todo o Brasil
              </h3>
              <p className={`
                flex justify-center items-center
                mb-3 py-1 px-4 bg-emerald-200 rounded-2xl
                ${fonts.ubuntu} text-center text-neutral-700 text-base font-bold 
                `}>Reconhecimento</p>
              <p className={`${fonts.ubuntu} text-zinc-500 text-sm font-normal leading-[21px] mb-3`}>
                Por Alice Charrman | Agência: Safira | em 16/12/2023
              </p>
              <div className='flex flex-row-reverse gap-4'>
                <Image className='mb-3  rounded-lg ' src='/img/notícias/expoFavelaVertical.jpg' width={500} height={384} alt='Estudante jovem interagindo com estudante da terceira idade'/>
                <p className={`${fonts.ubuntu} text-neutral-900 text-base`}>
                Em um país que oferece cerca de 6 milhões de vagas para cursos de ensino superior, cerca de 52% das vagas ficam ociosas por não serem preenchidas pelos alunos que dependem da nota do Enem para pedir financiamento em programas de financiamento federal
<br /><br />
O Mais Solidário é uma startup educacional baiana que oferece bolsas de estudos parciais, que chegam a até 80% de desconto para diversos cursos de graduação, pós-graduação e ensino técnico em instituições privadas. Com essa iniciativa, a startup promove inclusão social para milhares de estudantes de baixa renda que não tiveram acesso ou êxito no Enem.
<br /><br />
Mercado de ensino brasileiro
Atualmente, as instituições de ensino do todo Brasil oferecem 6.1 milhões de vagas para cursos superiores, porém cerca de 3.2 milhões de vagas ficam ociosas (52%). Dessas vagas, 1.2 milhão estão no Nordeste e cerca de 373 mil, especificamente na Bahia.
<br /><br />
Na realidade, 80% dos estudantes que terminam o ensino médio em todo 
O Brasil tem o desejo de entrar para a universidade, algo em torno de 4 a 5 milhões de pessoas, por ano. Porém, cerca de 62% encontram barreiras financeiras, principalmente estudantes de baixa renda que dependem da nota do Enem para pedir financiamentos federais, como o ProUni, Fies e Sisu, mas não conseguem passar ou nem mesmo realizar o exame.
<br /><br />
Para minimizar esse problema, o Mais Solidário tem parceria com cerca de + de 1000 Unidades de ensino espalhadas em 960 municípios brasileiros e oferece + de 280 mil vagas. Com a oferta de bolsas de estudos, desde sua fundação, a startup já impactou cerca de 12 mil famílias pelo acesso à educação e, consequentemente, às oportunidades de trabalho.
<br /><br />
No Nordeste, onde o Mais Solidário tem uma atuação mais expressiva, sua iniciativa vem transformando a vida de estudantes de escolas públicas, uma vez que tornou possível o acesso à educação de qualidade, gerando nos anos de 2021, 2022, 2023 mais de R$ 4.800.000,00 em economia para esses mais de 4.208 alunos Já em 2023 a economia já ultrapassa 6.5 Milhão e Meio de reais em Economia . 
<br /><br />
Já para as organizações parceiras geramos mais de 10 Milhões em Novos Contratos. "Segundo o Reitor da UniFatecie Gilmar Oliveira, o encontro é uma oportunidade para que gestores de todo o Brasil venham a sede da IES e possam trocar experiências vividas em cada região do país e também possam participar de reuniões e treinamento em “como tornar seu polo cada vez mais próximo do aluno”. Queremos ter a cada dia um ensino mais humanizado e mais próximo dos alunos UNIFATECIE.
<br /><br />
"Acreditamos que a educação tem poder transformador na vida das pessoas e das famílias. Quando um aluno conclui um curso superior em uma família, onde muitas vezes é o primeiro da família a conquistar tal feito, toda a família é transformada. Esse poder transformador altera toda a rotina da família e possibilita que outros daquele meio também venham a alcançar tal sonho em um curso superior. ”
<br /><br />
De acordo o Professor Mozart Estrela, fundador e CEO do Mais Solidário, a ideia de ver jovens de baixa renda terem acesso à educação o motiva. “Esses jovens têm um potencial incrível e a educação pode fornecer dignidade para suas famílias a partir de seus esforços e competência. Me sinto muito honrado quando encontro com uma pessoa que foi beneficiada pelo nosso programa", ressalta.
<br /><br />
Reconhecimento
Com esse projeto, o Mais Solidário já foi reconhecido com o selo Impact Brasil pela Innovation Latam, e os selos de impacto da ABS Innovation, Innovation Latan, InovAtiva Brasil, Top 10 Expo Favela Innovation, Top 3 BTX EXperience e BNDES  GARAGEM IMPACTO, recentemente, recebeu homenagem durante o Segundo Encontro de Gestores da Rede UniFatecie de Educação, uma de suas instituições parceiras. O evento celebrou a parceria e discutiu maneiras de continuar inovando na educação e fortalecer o compromisso social.
A expectativa é que a parceria entre as instituições continue fortalecida e que as novas iniciativas sejam adotadas em prol da educação superior de qualidade e inclusão social.
                </p>
                </div>
            </div>
            </div>
            </div>
      <Footer/>
    </div>
  )
}
