import { Box, Button, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import bg from "../../../Assets/bg.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link as ScrollLink } from "react-scroll";
const useStyle = makeStyles((theme) => {
  return {
    container: {
      height: "100%",
      minHeight: "93vh",
      display: "flex",
      alignItems: "end",
      justifyContent: "center",
      padding: "20px 0px 0px 0px",
      filter:
        "brightness( 100% ) contrast( 80% ) saturate( 100% ) blur( 0px ) hue-rotate( 0deg )",
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(${bg})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top",
      backgroundSize: "cover",
      [theme.breakpoints.down("md")]: {
        height: "100%",
        minHeight: "96vh",
      },
    },
    subContainer: {
      width: "100%",
      maxWidth: "1440px",
      padding: "0px 20px",
      marginTop: "80px",
      color: theme.palette.white.main,
      display: "flex",
      flexDirection: "column",
      justifyContent:'space-between',
      gap: "180px",
      height: "100%",
      minHeight: "66vh",
      [theme.breakpoints.down("md")]: {
        width: "auto",
        gap: "20px",
        marginTop: "50px",
        height: "100%",
        minHeight: "80vh",
      },
    },
    contentContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      padding: "20px",
      width: "100%",
      maxWidth: "600px",
      [theme.breakpoints.down("md")]: {
        width: "auto",
        gap: "10px",
      },
    },
    taglineContainer: {
      display: "flex",
      gap: "20px",
      alignItems: "center",
    },
    line: {
      width: "30px",
      height: "1px",
      background: theme.palette.primary.main,
    },
    IconsContainer: {
      padding: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "20px",
      flexWrap: "wrap",
    },
    iconBox: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
    },
    icons: {
      fontSize: "18px",
      transition: "0.5s",
      color: theme.palette.white.main,
      "&:hover": {
        color: theme.palette.primary.main,
        cursor: "pointer",
      },
    },
    active: {
      cursor: "pointer",
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
  };
});

const HeroSection = () => {
  const {
    container,
    subContainer,
    contentContainer,
    taglineContainer,
    line,
    IconsContainer,
    iconBox,
    icons,
    active,
  } = useStyle();
  return (
    <Box className={container}>
      <Box className={subContainer}>
        <Box className={contentContainer}>
          <Box className={taglineContainer}>
            <Box className={line} />
            <Typography color={"primary"} sx={{ fontSize: "14px" }}>
              KAYUU FURNITURE STORE
            </Typography>
          </Box>
          <Box>
            <Typography variant="h3" sx={{ fontWeight: "bolder" }}>
              Make Yourself At Home
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                filter: "none",
                color: (theme) => theme.palette.white.main,
              }}
            >
              Vestibulum, diam vulputate amet cras in diam quis turpis curabitur
              tellus aliquet tellus iaculis tempus, sollicitudin massa duis
              eleifend egestas turpis sit etiam commodo viverra lacinia ipsum
              convallis sed augue purus scelerisque non vestibulum elementum mi,
              pellentesque leo tincidunt integer.
            </Typography>
          </Box>
          <Box>
            <Button variant="contained">SHOP NOW</Button>
          </Box>
        </Box>
        <Box className={IconsContainer}>
          <ScrollLink
            className={active}
            to="New Collection"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            <Typography sx={{ fontWeight: 200, fontSize: "14px" }}>
              Scroll Down
            </Typography>
          </ScrollLink>
          <Box className={iconBox}>
            <Link href="https://facebook.com" target={"_blank"}>
              <FacebookIcon className={icons} />
            </Link>
            <Link href="https://twitter.com" target={"_blank"}>
              <TwitterIcon className={icons} />
            </Link>
            <Link href="https://youtube.com" target={"_blank"}>
              <YouTubeIcon className={icons} />
            </Link>
            <Link href="https://instagram.com" target={"_blank"}>
              <InstagramIcon className={icons} />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
