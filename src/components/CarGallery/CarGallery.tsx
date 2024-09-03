import React from "react";


const CarGallery = () => {
    return(
        <section className=" justify-between  pt-60 px-24">
            <div className="pl-120 pt-25 ">
            <p className="text-blue-700 text-[21.5px] leading-8 font-roboto-condensed">Prezentacja firmy</p>
        <h2 className="text-3xl font-bebas-neue text-[40px] mt-2 mb-6">ZOBACZ NASZĄ GALERIĘ ZDJĘĆ</h2>
        </div>
        <div className="space-x-10">
        <a href="#" className="text-blue-600 underline font-roboto-flex">Samochody osobowe</a>
        <a href="#" className="text-black font-roboto-flex">Samochody dostawcze</a>
      </div>

      </section>
    )
}

export default CarGallery;