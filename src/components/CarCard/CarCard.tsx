import React, {useState} from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../../../src/index.css"
const CarCard = () => {
    return(
        <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        centerMode={false}
        className= "pl-24 pt-20 "
        containerClass="container-padding-bottom"
        draggable
        focusOnSelect
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 2,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass="custom-slider-class"
        slidesToSlide={1}
        swipeable
      >
       
        <div>
            <img src="./assets/images/Car.png"/>
        </div>
        <div >
        <img src="./assets/images/Jaguar.png"/>
        </div>

        <div>
        <img src="./assets/images/Car-2.png"/>
        </div>
    

      </Carousel>
  );
}


export default CarCard;