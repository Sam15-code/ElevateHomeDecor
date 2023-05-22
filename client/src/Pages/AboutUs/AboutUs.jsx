import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import aboutus from "../../Assets/aboutus.jpg";
import DescriptionContainer from "../../Components/Aboutus/DescriptionContainer/DescriptionContainer";
import IntroSection from "../../Components/Aboutus/IntroSection/IntroSection";
import ProductQualityBanner from "../../Components/Aboutus/ProductQualityBanner/ProductQualityBanner";
import StoreInfo from "../../Components/Aboutus/StoreInfo/StoreInfo";
import NewsLatter from "../../Components/LandingPage/NewsLatter/NewsLatter";
import TopBanner from "../../Components/TopBanner/TopBanner";

const useStyle = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      justifyContent: "center",
      color: theme.palette.grey[600],
      background: theme.palette.background.secondary,
    },

    subContainer: {
      width: "100%",
      maxWidth: "1440px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
      padding: "40px 20px",
      transition: "0.5s",
    },
    headingContainer: {
      width: "100%",
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
  };
});

const AboutUs = () => {
  const { container, subContainer, headingContainer } = useStyle();

  return (
    <Box>
      <TopBanner bg={aboutus} Text={"About Us"} PageName={"About Us"} />

      <Box className={container}>
        <Box className={subContainer}>
          <Box className={headingContainer}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              About Us
            </Typography>
            <Typography>
              Tempus amet, sit erat malesuada lorem purus dictum pretium,
              posuere sagittis ultricies enim massa nisi neque augue in
              condimentum diam commodo ornare.
            </Typography>
          </Box>
          <Box sx={{ width: "100%" }}>
            <IntroSection />
          </Box>
        </Box>
      </Box>
      <Box>
        <StoreInfo />
      </Box>
      <Box>
        <DescriptionContainer />
      </Box>
      <Box>
        <ProductQualityBanner />
      </Box>
      <Box sx={{ width: "100%", paddin: "50px 0px" }}>
        <NewsLatter />
      </Box>
    </Box>
  );
};

export default AboutUs;
