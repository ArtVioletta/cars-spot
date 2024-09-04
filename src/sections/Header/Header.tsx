import React from 'react';
import { BoltIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="relative w-full  h-full  flex container  items-center justify-between mt-7 mx-auto px-4">
      <div className="flex items-center mb-4 sm:mb-0 flex-col sm:flex-row ">
        <BoltIcon className="h-6 w-6  text-blue-700 " />
        <span className=" text-blue-700 font-bold text-xl font-roboto-flex">
          Cars
        </span>
        <span className="text-black font-bold text-xl font-roboto-flex">
          Spot
        </span>
      </div>
      <nav className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-4 sm:mb-0">
        <ul className="flex space-x-4 sm:w-fit font-roboto-flex text-base font-normal leading-6 ">
          <li>
            <a href="#gallery" className="text-black-500">
              Galeria zdjęć
            </a>
          </li>
          <li>
            <a href="#" className="text-black-500 ml-6">
              FAQ
            </a>
          </li>
        </ul>
      </nav>

      <button className="bg-blue-700 text-white  py-3 px-6 rounded-md">
        Zadzwoń do nas
      </button>
    </header>
  );
};

export default Header;
