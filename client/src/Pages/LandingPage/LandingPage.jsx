import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import BestSellingProducts from "../../Components/LandingPage/BestSellingProducts/BestSellingProducts";
import CategoriesBanner from "../../Components/LandingPage/CategoriesBanner/CategoriesBanner";
import FeaturesProducts from "../../Components/LandingPage/FeaturesProducts/FeaturesProducts";
import HeroSection from "../../Components/LandingPage/HeroSection/HeroSection";
import NewCollection from "../../Components/LandingPage/NewCollection/NewCollection";
import NewsLatter from "../../Components/LandingPage/NewsLatter/NewsLatter";
import SaleBanner from "../../Components/LandingPage/SaleBanner/SaleBanner";
import TestimonialBanner from "../../Components/LandingPage/TestimonialBanner/TestimonialBanner";
import WhyChooseUs from "../../Components/LandingPage/WhyChooseUs/WhyChooseUs";

const useStyle = makeStyles((theme) => {
  return {
    container: {},
    LandingSection: {
      display: "flex",
      flexDirection: "column",
      gap: "60px",
    },
  };
});

const LandingPage = () => {
  const { container, LandingSection } = useStyle();

  return (
    <Box className={container}>
      <Box className={LandingSection}>
        <Box>
          <HeroSection />
        </Box>
        <Box>
          <NewCollection />
        </Box>
        <Box>
          <FeaturesProducts />
        </Box>
        <Box>
          <CategoriesBanner />
        </Box>
        <Box>
          <BestSellingProducts />
        </Box>
        <Box>
          <SaleBanner />
        </Box>
        <Box>
          <TestimonialBanner />
        </Box>
        <Box>
          <WhyChooseUs />
        </Box>
        <Box>
          <NewsLatter />
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
