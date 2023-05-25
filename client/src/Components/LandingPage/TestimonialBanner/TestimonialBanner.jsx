import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import Carousel from "react-grid-carousel";

import TestimonialCards from "../../Cards/TestimonialCards";

const useStyle = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    },
    subContainer: {
      width: "100%",
      maxWidth: "1440px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      padding: "50px 0px",
    },
    contentContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "20px",
      flexWrap: "wrap",
      [theme.breakpoints.down("md")]: {
        justifyContent: "space-evenly",
      },
    },
    line: {
      width: "50px",
      height: "1px",
      background: theme.palette.primary.main,
    },
    taglineContainer: {
      display: "flex",
      gap: "20px",
      alignItems: "center",
    },
    headingContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    headingBox: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "end",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        gap: "20px",
        alignItems: "start",
      },
    },
  };
});

const TestimonialBanner = () => {
  const {
    container,
    subContainer,
    contentContainer,
    line,
    taglineContainer,
    headingContainer,
    headingBox,
  } = useStyle();
  const [cardData] = useState([
    {
      image:
        "https://as1.ftcdn.net/v2/jpg/00/57/35/54/1000_F_57355460_EIxA64s7m8ieHyHSGjRnPT3NuDyqEZxJ.jpg",
      name: "Kyle Hader",
      jobdesc: "developer",
      msg: "I can't say enough good things about this furniture store. They have a wide range of styles to choose from, and their prices are very competitive. Plus, the delivery service was prompt and efficient. Will definitely be shopping here again!",
    },
    {
      image:
        "https://www.westernhealth.com/sites/wha/cache/file/54E03103-8DB7-4701-B7514383C046F807_width370.jpg",
      name: "Joseph Teath",
      jobdesc: "Lawyer Zone",
      msg: "This furniture store has become my go-to place for all my furniture needs. The quality of their products is exceptional, and they offer unique and stylish pieces that you won't find elsewhere. It's definitely worth a visit if you're looking to furnish your home.",
    },
    {
      image:
        "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/woman-with-black-jacket-avatar.jpg",
      name: "Shadale B.",
      jobdesc: "Business Consultants",
      msg: "The furniture store exceeded my expectations in every way. Not only do they have a beautiful selection, but the prices are reasonable too. The whole process, from browsing to purchasing, was smooth and hassle-free. I'm extremely satisfied with my purchases.",
    },
    {
      image:
        "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/man-wearing-glasses-avatar.jpg",
      name: "Robert Macnail",
      jobdesc: "Serial Entrepreneur",
      msg: "I highly recommend this furniture store for their exceptional craftsmanship. The furniture I bought from them is durable, well-made, and built to last. It's clear that they take pride in their work and offer only the best to their customers.",
    },
  ]);
  return (
    <>
      <Box className={container}>
        <Box className={subContainer}>
          <Box className={headingContainer}>
            <Box className={taglineContainer}>
              <Box className={line} />
              <Typography color={"primary"} sx={{ fontSize: "14px" }}>
                TESTIMONIALS
              </Typography>
            </Box>
            <Box className={headingBox}>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  What People Say
                </Typography>
              </Box>
              <Box>
                <Button variant="contained">VIEW ALL TESTIMONIAL</Button>
              </Box>
            </Box>
          </Box>
          <Box className={contentContainer}>
            <Box sx={{ width: "100%" }}>
              <Carousel
                rows={1}
                cols={2}
                gap={10}
                loop
                autoplay={5000}
                hideArrow
                showDots={true}
                dotColorActive="#edb932"
              >
                {cardData?.map((data, i) => {
                  return (
                    <Carousel.Item>
                      <Box
                        sx={{
                          padding: "50px 0px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "100px",
                        }}
                      >
                        <TestimonialCards data={data} />
                      </Box>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TestimonialBanner;
