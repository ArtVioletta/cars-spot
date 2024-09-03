import React from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import CarGallery from "../components/CarGallery/CarGallery";
import CarCard from "../components/CarCard/CarCard";


const HomePage = () => {
    return(
       <>
       <Header/>
       <HeroSection/>
       <CarGallery/>
       <CarCard/>
       </>
    )
}

export default HomePage;