import React from 'react';
const HeroSection = () => {
  return (
    <section className=" py-24">
      <div className=" container flex flex-col gap-1  mx-auto px-4 ">
        <h1 className="text-5xl lg:w-[55%] font-normal mb-4 font-bebas-neue text-[76.29px] leading-[83.92px] tracking-[-0.04em]">
          SPRZEDAJEMY SAMOCHODY
          <br /> Z EUROPY
        </h1>
        <p className=" text-base leading-6 font-roboto-condensed font-normal mt-8">
          Kup komfortowy pojazd, aby każda podróż <br />
          była wyjątkowym przeżyciem.
        </p>

        <div className="mt-12 space-x-6 ">
          <button className="bg-blue-700 border-blue-700  text-white py-3 border-2 px-6 rounded-md">
            Zobacz zdjęcia
          </button>
          <button className="border-2 border-blue-700 bg-transparent py-3 px-6 rounded-md text-blue-700">
            Zadzwoń do nas
          </button>
        </div>
      </div>
      <div className="flex justify-end ">
        <img
          src="./assets/images/Hero.png"
          alt="Car"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
