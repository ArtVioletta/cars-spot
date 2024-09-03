import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-custom-gray text-white p-11 mt-80 pl-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pt-20">
        <div className='w-[576px] h-[185px]'>
          <h3 className="font-bold text-2xl   leading-9  font-bebas-neue mb-2">
            ID NOSTRUD ENIM ESSE CONSECTETUR IN EU MOLLIT FUGIAT AUTE. VELIT NULLA COMMODO.
          </h3>
          <p className="text-white mb-4">
            Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et [...]
          </p>
          <a href="#" className="text-white underline flex items-center">
            Rozwiń <span className="ml-2">↓</span>
          </a>
        </div>

        <div className='w-[576px] h-[185px] '>
          <h3 className="font-bold  text-2xl leading-9 font-bebas-neue mb-2">
            ID NOSTRUD ENIM ESSE CONSECTETUR IN EU MOLLIT FUGIAT AUTE. VELIT NULLA COMMODO.
          </h3>
          <p className="text-white mb-4">
            Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et [...]
          </p>
          <a href="#" className="text-white underline flex items-center">
            Rozwiń<span className="ml-2">↓</span>
          </a>
        </div>
      </div>

      <div className="border-t border-white pt-4 flex ">
        <div className="text-white w-3/4 font-roboto-condensed  font-bold">
          Cars Spot
        </div>
        <a href="#" className="text-white underline w-1/4 font-roboto-condensed">
          Polityka prywatności
        </a>
      </div>
    </footer>
  );
};

export default Footer;