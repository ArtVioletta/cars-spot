import React from 'react';
import { carsFooter } from '../../shared/data/carsFooter';

const Footer = () => {
  return (
    <footer className="mt-6 bg-custom-gray text-white sm:mt-20 md:mt-6">
      <div
        className="container mx-auto mb-8 flex grid grid-cols-1 flex-col gap-1 px-4 pt-20
          md:grid-cols-2"
      >
        {carsFooter.map((item) => (
          <div key={item.id} className="mb-5">
            <h3 className="mb-2 font-bebas-neue text-2xl font-bold leading-9">
              {item.header}
            </h3>
            <p className="mb-4">{item.description}</p>
            <div className="flex w-max items-center border-b-2 border-white">
              {item.title}
              <img src={item.image} alt="Arrow Down" className="ml-2" />
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto flex gap-1 border-t border-white px-4 pt-6">
        <div className="w-3/4 font-roboto-condensed font-bold">Cars Spot</div>
        <p className="w-1/4 font-roboto-condensed underline">
          Polityka prywatności
        </p>
      </div>
    </footer>
  );
};

export default Footer;
