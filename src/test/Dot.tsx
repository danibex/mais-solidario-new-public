import React from 'react'

export default function Dots({ next, previous, goToSlide, ...rest }) {
  const { carouselState: { currentSlide } } = rest;

  return (
    <div className="carousel-button-group" style={{position: 'absolute', width: '100%', marginTop: '300px', zIndex: '10'}}>
      <div className='flex flex-row gap-2 justify-center items-center w-full'>
        <button onClick={() => previous()}>{`<`}</button>
        <button>{`O`}</button>
        <button>{`O`}</button>
        <button>{`O`}</button>
        <button onClick={() => next()}>{`>`}</button>
      </div>
    </div>
  )
}
