import { Box, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Fade } from "react-awesome-reveal";
import {useNavigate } from "react-router";
const useStyle = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      justifyContent: "center",
      padding: "50px 20px 20px 20px",
      background: theme.palette.background.footer,
    },
    subContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "50px",
      width: "100%",
      maxWidth: "1440px",
      alignItems: "center",
      padding: "20px 0px",
      color:theme.palette.white.main,
      [theme.breakpoints.down("md")]: {
        width: "auto",
      },
    },
    contentContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      gap: "20px",
      [theme.breakpoints.down("md")]: {
        width: "auto",
        justifyContent: "space-between",
        flexWrap: "wrap",
      },
    },
    cardContainer: {
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      width: "100%",
      maxWidth: "300px",
      [theme.breakpoints.down("md")]: {
        width: "auto",
      },
    },
    iconContainer: {
      height: "50px",
      width: "50px",
      display: "flex",
      borderRadius: "50%",
      alignItems: "center",
      justifyContent: "center",
      transition: "0.5s",
      background: theme.palette.grey[900],
      "&:hover": {
        background: theme.palette.grey[700],
        cursor: "pointer",
      },
    },
    links: {
      transition: "0.5s",
      "&:hover": {
        color: theme.palette.primary.main,
        cursor: "pointer",
      },
    },
  };
});

const Footer = () => {
  const {
    container,
    subContainer,
    contentContainer,
    cardContainer,
    iconContainer,
    links,
  } = useStyle();
  const navigate = useNavigate()

  const [usefullLinks] = useState([
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Products",
      link: "/products",
    },
    {
      title: "About Us",
      link: "/aboutus",
    },
    {
      title: "Contact Us",
      link: "/contactus",
    },
  ]);

  return (
    <Box className={container}>
      <Box className={subContainer}>
        <Box className={contentContainer}>
          <Box className={cardContainer}>
            <Box>
              <Typography variant="h5">About Us</Typography>
            </Box>
            <Box>
              <Typography>
                3538 Torrance Blvd, Torrance, CA 90503, USA +1 123 456 7890
              </Typography>
              <Typography>info@example.com</Typography>
              <Typography>Visit Our Store</Typography>
            </Box>
          </Box>

          <Box className={cardContainer}>
            <Box>
              <Typography variant="h5">Usefull Links</Typography>
            </Box>
            <Box>
              {usefullLinks?.map((data, i) => {
                return (
                  <Typography
                    key={i}
                    className={links}
                    onClick={() => navigate(data?.link)}
                  >
                    {data?.title}
                  </Typography>
                );
              })}
            </Box>
          </Box>
          <Box className={cardContainer}>
            <Box>
              <Typography variant="h5">Quick Links</Typography>
            </Box>
            <Box>
              <Typography className={links}>About Us</Typography>
              <Typography className={links}>FAQs</Typography>
            </Box>
          </Box>

          <Box className={cardContainer}>
            <Box>
              <Typography variant="h5">Stay In Touch</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Box>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <Fade direction="up" duration={1000} triggerOnce>
                  <Box className={iconContainer}>
                    <Link href="https://www.linkedin.com/" target={"_blank"}>
                      <LinkedInIcon color="primary" sx={{ fontSize: "20px" }} />
                    </Link>
                  </Box>
                </Fade>

                <Fade direction="up" duration={1500} triggerOnce>
                  <Box className={iconContainer}>
                    <Link href="https://www.facebook.com/" target={"_blank"}>
                      <FacebookIcon color="primary" sx={{ fontSize: "20px" }} />
                    </Link>
                  </Box>
                </Fade>
                <Fade direction="up" duration={2000} triggerOnce>
                  <Box className={iconContainer}>
                    <Link href="https://www.twitter.com/" target={"_blank"}>
                      <TwitterIcon color="primary" sx={{ fontSize: "20px" }} />
                    </Link>
                  </Box>
                </Fade>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography sx={{ fontWeight: 400 }}>
            Copyright All rights reserved
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
