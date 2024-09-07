import React from 'react';

const HeroSection = () => {
  return (
    <section className="my-10 sm:my-24">
      <div className="container mx-auto flex flex-col gap-1 px-4">
        <h1
          className="leading-0 mb-4 font-bebas-neue text-[48px] font-normal tracking-[-0.04em]
            sm:text-[76.29px] sm:leading-[83.92px] lg:w-[55%]"
        >
          SPRZEDAJEMY SAMOCHODY
          <br /> Z EUROPY
        </h1>
        <p className="mt-4 font-roboto-condensed text-base font-normal leading-6 sm:mt-8">
          Kup komfortowy pojazd, aby każda podróż <br />
          była wyjątkowym przeżyciem.
        </p>

        <div className="mt-4 space-x-6 sm:mt-12">
          <button className="rounded-md border-2 border-blue-700 bg-blue-700 px-6 py-3 text-white">
            Zobacz zdjęcia
          </button>
          <button className="rounded-md border-2 border-blue-700 bg-transparent px-6 py-3 text-blue-700">
            Zadzwoń do nas
          </button>
        </div>
      </div>
      <div className="flex justify-end">
        <img
          src="./assets/images/Hero.png"
          alt="Car"
          className="h-auto max-w-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;
