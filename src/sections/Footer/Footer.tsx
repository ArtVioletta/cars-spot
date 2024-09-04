import React from 'react';
import { carsFooter } from '../../shared/data/carsFooter';

const Footer = () => {
  return (
    <footer className="bg-custom-gray text-white mt-6 sm:mt-20 md:mt-6  ">
      <div className="grid grid-cols-1 md:grid-cols-2 mb-8 pt-20 container flex flex-col gap-1  mx-auto px-4  ">
        {carsFooter.map((item) => (
          <div key={item.id} className="mb-5">
            <h3 className="font-bold text-2xl leading-9 font-bebas-neue mb-2">
              {item.header}
            </h3>
            <p className=" mb-4">{item.description}</p>
            <div className=" border-b-2 border-white flex items-center w-max">
              {item.title}
              <img src={item.image} alt="Arrow Down" className="ml-2" />
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-white  pt-6 flex container  gap-1  mx-auto px-4 ">
        <div className=" w-3/4 font-roboto-condensed  font-bold">Cars Spot</div>
        <p className=" underline w-1/4 font-roboto-condensed">
          Polityka prywatności
        </p>
      </div>
    </footer>
  );
};

export default Footer;
