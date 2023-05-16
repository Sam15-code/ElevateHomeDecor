import { Box, Button, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import news from "../../../Assets/news.jfif";
const useStyle = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),url(${news})`,
      backgroundPosition: "left center",
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
      alignItems: "end",
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
    InputContainer:{
        display:'flex',
        gap:'20px',
        [theme.breakpoints.down('md')]:{
            flexWrap:'wrap'
        }
    }
  };
});

const NewsLatter = () => {
  const {
    container,
    subContainer,
    contentContainer,
    taglineContainer,
    line,
    InputContainer,
  } = useStyle();
  return (
    <Box className={container}>
      <Box className={subContainer}>
        <Box className={contentContainer}>
          <Box className={taglineContainer}>
            <Box className={line} />
            <Typography color={"primary"} sx={{ fontSize: "14px" }}>
              SUBSCRIBE TO OUR NEWSLETTER
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              See The Latest Collection & Get Special Offer
            </Typography>
          </Box>
          <Box className={InputContainer}>
            <TextField name="email" size="small" fullWidth placeholder="Email Address"/>
            <Button variant="contained" sx={{ padding: {md:"0px 30px",xs:'5px 30px'} }}>
              SUBSCRIBE
            </Button>
          </Box>
          <Box>
            <Typography>
              Cras interdum lectus velit nibh senectus fringilla ut.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsLatter;
