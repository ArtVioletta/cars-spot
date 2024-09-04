import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../../src/index.css';
const CarCard = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlaySpeed={3000}
      className=" mt-6 sm:mt-20 p-0 container gap-1  mx-auto px-4"
      containerClass="container-padding-bottom"
      draggable
      focusOnSelect
      infinite
      itemClass="carousel-item"
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
          partialVisibilityGutter: 0,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          partialVisibilityGutter: 0,
        },
        mobile: {
          breakpoint: { max: 499, min: 0 },
          items: 1,
          partialVisibilityGutter: 0,
        },
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
      <div className="flex justify-center  sm:justify-start px-5">
        <img src="./assets/images/Car.png" alt="car" />
      </div>
      <div className="flex justify-center  sm:justify-start px-5">
        <img src="./assets/images/Jaguar.png" alt="car" />
      </div>
      <div className="flex justify-center  sm:justify-start px-5">
        <img src="./assets/images/Car-2.png" alt="car" />
      </div>
    </Carousel>
  );
};

export default CarCard;
