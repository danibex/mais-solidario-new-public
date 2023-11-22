import Footer from '@/components/footer/Footer'
import Menu from '@/components/menu/Menu'
import React from 'react'

export default function revista() {
  return (
    <>
        <Menu buscar={false} home={false} revista={true} vocacional={false}/>
        <Footer/>
    </>
  )
}
