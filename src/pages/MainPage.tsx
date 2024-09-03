import React from 'react';
import Header from '../sections/Header/Header';
import HeroSection from '../sections/HeroSection/HeroSection';
import CarGallery from '../sections/CarGallery/CarGallery';
import CarCard from '../sections/CarCard/CarCard';
import Footer from '../sections/Footer/Footer';

const MainPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <CarGallery />
      <CarCard />
      <Footer />
    </>
  );
};

export default MainPage;
