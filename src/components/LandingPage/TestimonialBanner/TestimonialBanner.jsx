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
        "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/woman-with-black-jacket-avatar.jpg",
      name: "Kyle Hader",
      jobdesc: "developer",
      msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      image:
        "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/man-wearing-glasses-avatar.jpg",
      name: "Joseph Teath",
      jobdesc: "Lawyer Zone",
      msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      image:
        "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/woman-with-black-jacket-avatar.jpg",
      name: "Shadale B.",
      jobdesc: "Business Consultants",
      msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      image:
        "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/man-wearing-glasses-avatar.jpg",
      name: "Robert Macnail",
      jobdesc: "Serial Entrepreneur",
      msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
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
