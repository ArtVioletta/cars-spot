import React from 'react';

const CarGallery = () => {
  return (
    <section className="mt-20" id="gallery">
      <div className="container mx-auto flex flex-col gap-1 px-4">
        <p className="font-roboto-condensed text-[21.5px] leading-8 text-blue-700">
          Prezentacja firmy
        </p>
        <h2 className="mb-6 mt-2 font-bebas-neue text-3xl text-[40px]">
          ZOBACZ NASZĄ GALERIĘ ZDJĘĆ
        </h2>
      </div>
      <div className="container mx-auto flex-col gap-1 space-x-10 px-4">
        <a href="#gallery" className="font-roboto-flex text-blue-600 underline">
          Samochody osobowe
        </a>
        <a href="#/" className="font-roboto-flex text-black">
          Samochody dostawcze
        </a>
      </div>
    </section>
  );
};

export default CarGallery;
