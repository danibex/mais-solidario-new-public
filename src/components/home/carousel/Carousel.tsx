import { IconChevronLeft, IconChevronRight, IconCircleFilled } from '@tabler/icons-react'
import React from 'react'

export default function Carousel() {
  return (
    <div className='mt-[36px] flex flex-row justify-center items-center '>
        <button className='mr-[28px] text-cyan-700' ><IconChevronLeft width={24} stroke={1.5}/></button>
        <button className='text-cyan-700 mr-[12px]'><IconCircleFilled width={20} /></button>
        <button className='text-zinc-500 text-opacity-40 mr-[12px] hover:text-zinc-600 active:text-zinc-700'><IconCircleFilled width={20} /></button>
        <button className='text-zinc-500 text-opacity-40 mr-[28px] hover:text-zinc-600 active:text-zinc-700'><IconCircleFilled width={20} /></button>
        <button className='text-cyan-700' ><IconChevronRight stroke={1.5}/></button>
    </div>
  )
}
