import React from 'react'
import fonts from '@/styles/fonts.module.css'
import { IconLock } from '@tabler/icons-react'
export default function Conta() {
  return (
    <div>
      {/* AINDA NÃO TEM CONTA? */}
      <div className={`
        flex flex-col justify-center items-center gap-[24px]
        w-full bg-[#FFFFFF] py-[24px] px-[12px]
        border border-[#0000004d] rounded-[8px]
        
        `}>
          <h2 className={`text-[#121212] ${fonts.poppis} text-[30px] font-[700]`}>Você já possui uma conta?</h2>
          <button className={`px-[16px] py-[8px] bg-[#FF6B3D] ${fonts.ubuntu} text-[16px] font-[700] rounded-[4px] text-[#FFF]`}>Acessar minha conta</button>
          <p className={`${fonts.ubuntu} text-[16px] font-[400] text-[#71717A]`}>Não possui uma conta? Continue seu cadastro e crie a sua conta rápido e facil.</p>
        </div>
        {/* CADASTRO DE DADOS */}
        <div className={`mt-[32px] w-full flex flex-col justify-start items-start`}>
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
                        <input className={`w-[378px] h-[43px] text-[16px] font-[400] py-[10px] px-[12px] border-[2px] border-[#CECECE] rounded-[6px]`} placeholder='Digite seu nome' type="text" name="" id="" />
                      </div>
                      {/* E-MAIL */}
                      <div className={`flex flex-col justify-start ${fonts.ubuntu} items-start`}>
                        <label className={`mb-[8px]  text-[14px]  font-[700]`} htmlFor="">E-mail</label>
                        <input className={`w-[378px] h-[43px] text-[16px] font-[400] py-[10px] px-[12px] border-[2px] border-[#CECECE] rounded-[6px]`} placeholder='Digite seu e-mail' type="text" name="" id="" />
                      </div>
                    </div>
                    {/* LINHA 2 */}
                    <div className='flex flex-row gap-[16px] text-[#71717A]'>
                      {/* CPF */}
                      <div className={`flex flex-col justify-start ${fonts.ubuntu} items-start`}>
                        <label className={`mb-[8px]  text-[14px]  font-[700]`} htmlFor="">CPF</label>
                        <input className={`w-[263px] h-[43px] text-[16px] font-[400] py-[10px] px-[12px] border-[2px] border-[#CECECE] rounded-[6px]`} placeholder='Digite seu CPF' type="text" name="" id="" />
                      </div>
                      {/* DATA DE NASCIMENTO */}
                      <div className={`flex flex-col justify-start ${fonts.ubuntu} items-start`}>
                        <label className={`mb-[8px]  text-[14px]  font-[700]`} htmlFor="">Data de Nascimento</label>
                        <input className={`w-[205px] h-[43px] text-[16px] font-[400] py-[10px] px-[12px] border-[2px] border-[#CECECE] rounded-[6px]`} placeholder='Digite seu e-mail' type="date" name="" id="" />
                      </div>
                      {/* TELEFONE */}
                      <div className={`flex flex-col justify-start ${fonts.ubuntu} items-start`}>
                        <label className={`mb-[8px]  text-[14px]  font-[700]`} htmlFor="">Telefone</label>
                        <input className={`w-[270px] h-[43px] text-[16px] font-[400] py-[10px] px-[12px] border-[2px] border-[#CECECE] rounded-[6px]`} placeholder='Digite seu e-mail' type="text" name="" id="" />
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
                      <input className={`w-[290px] h-[43px] text-[16px] font-[400] py-[10px] px-[12px] border-[2px] border-[#CECECE] rounded-[6px]`} placeholder='00000-000' type="text" name="" id="" />
                    </div>
                    {/* ESTADO */}
                    <div className={`flex flex-col justify-start ${fonts.ubuntu} items-start`}>
                      <label className={`mb-[8px]  text-[14px]  font-[700]`} htmlFor="">Estado</label>
                      <select className={`w-[138px] h-[43px] text-[16px] font-[400] py-[10px] px-[12px] border-[2px] border-[#CECECE] rounded-[6px]`} placeholder='Digite seu e-mail' id="" >
                        <option value="Selecione">Selecione</option>
                        <option value="Bahia">Bahia</option>
                        <option value="Rio de Janeiro">Rio de Janeiro</option>
                        <option value="São Paulo">São Paulo</option>
                      </select>
                    </div>
                    {/* CIDADE */}
                    <div className={`flex flex-col justify-start ${fonts.ubuntu} items-start`}>
                      <label className={`mb-[8px]  text-[14px]  font-[700]`} htmlFor="">Cidade</label>
                      <input className={`w-[290px] h-[43px] text-[16px] font-[400] py-[10px] px-[12px] border-[2px] border-[#CECECE] rounded-[6px]`} placeholder='Digite para pesquisar' type="text" name="" id="" />
                    </div>
                  </div>
                  {/* LINHA 2 */}
                  <div className='flex flex-row gap-[16px] text-[#71717A]'>
                    {/* ENDEREÇO */}
                    <div className={`flex flex-col justify-start ${fonts.ubuntu} items-start`}>
                      <label className={`mb-[8px]  text-[14px]  font-[700]`} htmlFor="">Endereço</label>
                      <input className={`w-[529px] h-[43px] text-[16px] font-[400] py-[10px] px-[12px] border-[2px] border-[#CECECE] rounded-[6px]`} placeholder='Ex.: Av. Cruzeiro do Sul' type="text" name="" id="" />
                    </div>
                    {/* NÚMER */}
                    <div className={`flex flex-col justify-start ${fonts.ubuntu} items-start`}>
                      <label className={`mb-[8px]  text-[14px]  font-[700]`} htmlFor="">Número</label>
                      <input className={`w-[214px] h-[43px] text-[16px] font-[400] py-[10px] px-[12px] border-[2px] border-[#CECECE] rounded-[6px]`} placeholder='Ex.: 00' type="text" name="" id="" />
                    </div>
                  </div>
                  {/* LINHA 3 */}
                  <div className='flex flex-row gap-[16px] text-[#71717A]'>
                    {/* BAIRRO */}
                    <div className={`flex flex-col justify-start ${fonts.ubuntu} items-start`}>
                      <label className={`mb-[8px]  text-[14px]  font-[700]`} htmlFor="">Bairro</label>
                      <input className={`w-[301px] h-[43px] text-[16px] font-[400] py-[10px] px-[12px] border-[2px] border-[#CECECE] rounded-[6px]`} placeholder='Ex.: Pinheiros' type="text" name="" id="" />
                    </div>
                    {/* COMPLEMENTO */}
                    <div className={`flex flex-col justify-start ${fonts.ubuntu} items-start`}>
                      <label className={`mb-[8px]  text-[14px]  font-[700]`} htmlFor="">Complemento(Opcional)</label>
                      <input className={`w-[442px] h-[43px] text-[16px] font-[400] py-[10px] px-[12px] border-[2px] border-[#CECECE] rounded-[6px]`} placeholder='Ex.: Apartamento 00' type="text" name="" id="" />
                    </div>
                  </div>
                  <div className='mt-[60px] flex justify-end items-end '>
                    <button className={`${fonts.ubuntu} border border-[#FFBC7D] bg-[#FF6B3D] rounded-[4px] font-[700] mb-[24px] py-[8px] px-[16px] text-white text-[16px]`}>Finalizar Cadastro</button>
                  </div>
                </div>
              </form>
          </div>
        </div>
    </div>
  )
}
