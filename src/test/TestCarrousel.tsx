import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardFaculdadeComBolsas from '@/components/home/faculdades-com-bolsas/CardFaculdadeComBolsas';
import Dots from './Dot';

export default function testCarrousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


 
       
        //const nominatimApiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
  
        


  return (
    <div className='h-full'>
    <div style={{
      position: "relative",
      paddingBottom: "30px"
    }}>
    <Carousel
    swipeable={true}
    draggable={true}
    showDots={false}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={1000}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}

    itemClass="carousel-item-padding-40-px"

    customButtonGroup={<Dots style={{zIndex: '10'}} next={undefined} previous={undefined} goToSlide={undefined} />}
    
  >
      <div className={`flex justify-center items-center`}>
        <CardFaculdadeComBolsas/>
      </div>
      <div className={`flex justify-center items-center`}>
        <CardFaculdadeComBolsas/>
      </div>
      <div className={`flex justify-center items-center`}>
        <CardFaculdadeComBolsas/>
      </div>
      <div className={`flex justify-center items-center`}>
        <CardFaculdadeComBolsas/>
      </div>
      <div className={`flex justify-center items-center`}>
        <CardFaculdadeComBolsas/>
      </div>
      <div className={`flex justify-center items-center`}>
        <CardFaculdadeComBolsas/>
      </div>

  </Carousel>
  </div>

  <button 
  className='myWonderfulButton'
  onClick={
    () => {
      navigator.geolocation.getCurrentPosition( location => {
        console.log(location);
      });
    }
  }>
     Show Location
</button>


  </div>
  )
}
