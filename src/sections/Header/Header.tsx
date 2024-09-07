import React from 'react';
import { BoltIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header
      className="container relative mx-auto mt-7 flex h-full w-full flex-col justify-between px-4
        sm:mb-0 sm:flex-row"
    >
      <div className="mb-4 flex items-center">
        <BoltIcon className="h-6 w-6 text-blue-700" />
        <span className="font-roboto-flex text-xl font-bold text-blue-700">
          Cars
        </span>
        <span className="font-roboto-flex text-xl font-bold text-black">
          Spot
        </span>
      </div>

      <nav className="mb-4 flex flex-col sm:mb-0 sm:flex-row sm:items-center sm:space-x-4">
        <ul className="flex space-x-4 font-roboto-flex text-base font-normal leading-6 sm:w-fit">
          <li>
            <a href="#gallery" className="text-black-500">
              Galeria zdjęć
            </a>
          </li>
          <li>
            <a href="#/" className="text-black-500 ml-6">
              FAQ
            </a>
          </li>
        </ul>
      </nav>

      <button className="rounded-md bg-blue-700 px-6 py-3 text-white">
        Zadzwoń do nas
      </button>
    </header>
  );
};

export default Header;
