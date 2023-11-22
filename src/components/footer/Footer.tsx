import React from 'react'
import Image from 'next/image'
import fonts from '@/styles/fonts.module.css'
export default function Footer() {
  return (
    <div className='h-[594px]  flex flex-col justify-start items-center bg-neutral-900'>
        <div className='w-[1233px] flex flex-col pt-[96px] pb-[64px]'>
            <div className='w-[1229px]'>
                <div className='flex flex-row items-center justify-between mb-[64px]'>
                    <Image className='' src='/logo/logoBranca.png' width={185} height={78.41} alt='Logo Mais Solidário'/>
                    <div className='flex flex-row'>
                        <Image className='mr-[24px]' src='/img/icones/whatsapp.png' alt='Logo do Whatsapp' width={32} height={32}/>
                        <Image className='mr-[24px]' src='/img/icones/facebook.png' alt='Logo do Facebook' width={32} height={32}/>
                        <Image className='mr-[24px]' src='/img/icones/instagram.png' alt='Logo do Instagram' width={32} height={32}/>
                    </div>
                </div>
                <div className='flex flex-row items-start'>

                    <div className='w-[288px] mr-[24px]'>
                        <h1 className={`${fonts.ubuntu} text-white text-lg font-bold leading-[27px]`}>O Mais Solidário</h1>
                        <div className={`${fonts.ubuntu} text-neutral-100 text-base flex flex-col justify-start items-start my-[12px]`}>
                            <button className='mt-[12px]'>Quem Somos</button>
                            <button className='mt-[12px]'>Faculdades Paceiras</button>
                            <button className='mt-[12px]'>Seja Parceiro</button>
                            <button className='mt-[12px]'>Revista+</button>
                        </div>
                    </div>

                    <div className='w-[288px] mr-[24px]'>
                        <h1 className={`${fonts.ubuntu} text-white text-lg font-bold leading-[27px]`}>Cursos Mais Buscados</h1>
                        <div className={`${fonts.ubuntu} text-neutral-100 text-base flex flex-col justify-start items-start my-[12px]`}>
                            <button className='mt-[12px]'>Administração</button>
                            <button className='mt-[12px]'>Pedagogia</button>
                            <button className='mt-[12px]'>Enfermagem</button>
                            <button className='mt-[12px]'>Fisioterapia</button>
                        </div>
                    </div>

                    <div className='w-[288px] mr-[24px]'>
                        <h1 className={`${fonts.ubuntu} text-white text-lg font-bold leading-[27px]`}>Fale Conosco</h1>
                        <div className={`${fonts.ubuntu} text-neutral-100 text-base flex flex-col justify-start items-start my-[12px]`}>
                            <button className='mt-[12px]'>maissolidarioadm@gmail.com</button>
                            <button className='mt-[12px]'>71 99259-2363</button>
                            <button className='mt-[12px]'>71 98761-2190</button>
                        </div>
                    </div>

                    <div className='w-[288px] mr-[24px]'>
                        <h1 className={`${fonts.ubuntu} text-white text-lg font-bold leading-[27px]`}>Politica e Privacidade</h1>
                        <div className={`${fonts.ubuntu} text-neutral-100 text-base flex flex-col justify-start items-start my-[12px]`}>
                            <button className='mt-[12px]'>Termos De Uso</button>
                            <button className='mt-[12px]'>Politica de Reembolso</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        {/* Região Cinza */}
        <div className={`${fonts.ubuntu} w-full h-[120px] py-9 bg-neutral-700 flex flex-col justify-center items-center text-neutral-100 text-base`}>
            <p>© 2022 Todos os direitos reservados. Mais Solidário Bolsas de Estudo</p>
            <p>CNPJ: 25.230.193/0001-06</p>
        </div>
    </div>
  )
}
