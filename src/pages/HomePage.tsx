import React from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import CarGallery from "../components/CarGallery/CarGallery";
import CarCard from "../components/CarCard/CarCard";
import Footer from "../components/Footer/Footer";


const HomePage = () => {
    return(
       <>
       <Header/>
       <HeroSection/>
       <CarGallery/>
       <CarCard/>
       <Footer/>
       </>
    )
}

export default HomePage;