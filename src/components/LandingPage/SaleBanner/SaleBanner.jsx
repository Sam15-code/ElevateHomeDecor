import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import cabinet from "../../../Assets/cabinet.jpg";
const useStyle = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),url(${cabinet})`,
      backgroundPosition: "right center",
      padding: "50px 20px",
      backgroundSize: "80%",
      backgroundRepeat: "no-repeat",
      [theme.breakpoints.down("md")]: {
        backgroundSize: "cover",
      },
    },
    subContainer: {
      width: "100%",
      maxWidth: "1440px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "20px",
      padding: "50px 0px",
    },
    contentContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      padding: "50px",
      maxWidth: "450px",
      gap: "20px",
      background: theme.palette.white.main,
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      [theme.breakpoints.down("md")]: {
        width: "auto",
        padding: "50px 20px",
      },
    },
  };
});

const SaleBanner = () => {
  const { container, subContainer, contentContainer } = useStyle();
  return (
    <Box className={container}>
      <Box className={subContainer}>
        <Box className={contentContainer}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Sales up to 50% OFF
            </Typography>
          </Box>
          <Box>
            <Typography>
              Molestie amet tempor, diam id magna ridiculus tincidunt cursus
              curabitur non ipsum mattis in vel venenatis nam enim facilisis mi,
              egestas metus, nunc at.
            </Typography>
          </Box>
          <Box>
            <Button variant="contained">SHOP NOW</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SaleBanner;
