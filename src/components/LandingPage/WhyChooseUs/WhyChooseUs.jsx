import { Box, Divider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import NearMeIcon from "@mui/icons-material/NearMe";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
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
      padding: "20px 0px",
    },
    contentContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "20px",
      padding:'40px 0px',
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
    card:{
        width:'100%',
        maxWidth:'250px',
        padding:'20px',
        display:'flex',
        flexDirection:'column',
        gap:'10px',
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        transition:'0.5s',
        "&:hover":{
            transform:"scale(1.05)",
            cursor:'pointer'
        },
        [theme.breakpoints.down('md')]:{
            width:'auto'
        }
    }
  };
});

const WhyChooseUs = () => {
  const {
    container,
    subContainer,
    contentContainer,
    line,
    taglineContainer,
    headingContainer,
    headingBox,
    card
  } = useStyle();
  const [cardData] = useState([
    {
      icon: (
        <SettingsApplicationsIcon color="primary" sx={{ fontSize: "55px" }} />
      ),
      title: "Big Discounts",
      desc: "Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.",
    },
    {
      icon: <LocalShippingIcon color="primary" sx={{ fontSize: "55px" }} />,
      title: "Free Shipping",
      desc: "Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.",
    },
    {
      icon: (
        <AccountBalanceWalletIcon color="primary" sx={{ fontSize: "55px" }} />
      ),
      title: "Secure Payments",
      desc: "Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.",
    },
    {
      icon: <NearMeIcon color="primary" sx={{ fontSize: "55px" }} />,
      title: "Order Tracking",
      desc: "Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.",
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
                IF YOU WONDER
              </Typography>
            </Box>
            <Box className={headingBox}>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  Why Choose Us
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Divider sx={{width:'100%',height:'2px'}} />
          </Box>
          <Box className={contentContainer}>
    {
        cardData?.map((data,i)=>{
                return (
                  <Box key={i} className={card}>
                    <Box>{data?.icon}</Box>
                    <Box>
                      <Typography variant="h5">{data?.title}</Typography>
                      <Typography>{data?.desc}</Typography>
                    </Box>
                  </Box>
                );
        })
    }
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WhyChooseUs;
