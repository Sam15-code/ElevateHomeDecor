import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import collection from "../../../Assets/collection.jpg";
const useStyle = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 20px",
    },
    subContainer: {
      width: "100%",
      maxWidth: "1440px",
      padding: "50px 0px",
      display: "flex",
      justifyContent: "space-between",
      gap: "40px",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        flexWrap: "wrap",
      },
    },
    ImageContainer: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      [theme.breakpoints.down("md")]: {
        width: "auto",
        padding:'0px'
      },
    },
    ContentContainer: {
      width: "80%",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      padding: "20px",
      [theme.breakpoints.down("md")]: {
        width: "auto",
        padding:'0px'
      },
    },
    taglineContainer: {
      display: "flex",
      gap: "20px",
      alignItems: "center",
    },
    line: {
      width: "50px",
      height: "1px",
      background: theme.palette.primary.main,
    },
    image: {
      width: "90%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
  };
});

const NewCollection = () => {
  const {
    container,
    subContainer,
    ImageContainer,
    ContentContainer,
    taglineContainer,
    line,
    image,
  } = useStyle();
  return (
    <Box className={container} id={"New Collection"}>
      <Box className={subContainer}>
        <Box className={ImageContainer}>
          <img
            src={collection}
            alt={"new collection"}
            className={image}
          />
        </Box>
        <Box className={ContentContainer}>
          <Box className={taglineContainer}>
            <Box className={line} />
            <Typography color={"primary"} sx={{ fontSize: "14px" }}>
              NEW COLLECTION
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              maxWidth: "450px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              A Perfect Set For Your Living Room
            </Typography>
            <Typography>
              Massa cras egestas laoreet montes, dapibus eu sit etiam curabitur
              faucibus habitasse lectus vestibulum leo, odio dolor quis maecenas
              faucibus vulputate pharetra nunc sed maecenas diam quisque
              habitasse.
            </Typography>
          </Box>
          <Box>
            <Button variant="contained">SHOP THIS COLLECTION</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewCollection;
