import React from 'react';

const CarGallery = () => {
  return (
    <section className="mt-20" id="gallery">
      <div className="mx-auto px-4 container  flex flex-col gap-1  ">
        <p className="text-blue-700 text-[21.5px] leading-8 font-roboto-condensed">
          Prezentacja firmy
        </p>
        <h2 className="text-3xl font-bebas-neue text-[40px] mt-2 mb-6">
          ZOBACZ NASZĄ GALERIĘ ZDJĘĆ
        </h2>
      </div>
      <div className="space-x-10 mx-auto px-4 container  flex-col gap-1 ">
        <a href="#gallery" className="text-blue-600 underline font-roboto-flex">
          Samochody osobowe
        </a>
        <a href="#" className="text-black font-roboto-flex">
          Samochody dostawcze
        </a>
      </div>
    </section>
  );
};

export default CarGallery;
