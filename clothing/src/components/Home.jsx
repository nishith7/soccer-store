import React from "react";
import NavBar from "./Navbar";
import HeroComponent from "./HeroComponent";
import DealOftheDay from "./DealOftheDay";
import Categories from "./Categories";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import ShopByBrands from "./ShopByBrands";

const Home = () => {
  return (
    // <>
    <div style={{ maxHeight: "100vh", overflowY: "auto" }}>
    <NavBar />
      <HeroComponent />
      <DealOftheDay />
      <ShopByBrands />
      <Categories />
      <AboutUs />
      <Footer />

    </div>
    
    // </>
  );
};

export default Home;
