import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const useStyle = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      justifyContent: "center",
      padding: "40px 0px",
      [theme.breakpoints.down("md")]: {
        flexWrap: "wrap",
      },
    },
    cardContainer: {
      width: "100%",
      position: "relative",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
    imageContainer: {
      height: "100%",
      width: "100%",
      filter: "brightness(60%)",
      transition: "0.5s",
      "&:hover": {
        filter: "brightness(50%)",
      },
    },
    TitleContainer: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      position: "absolute",
      bottom: "20px",
      left: "20px",
      cursor: "pointer",
      transition: "0.5s",
      color: theme.palette.white.main,
      "&:hover": {
        color: theme.palette.primary.main,
        gap: "20px",
      },
    },
  };
});

const CategoriesBanner = () => {
  const { container, cardContainer, imageContainer, TitleContainer } =
    useStyle();
  const [cardData] = useState([
    {
      title: "Living Room",
      image:
        "https://media.istockphoto.com/id/1182454657/photo/bohemian-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=qw37MGIiTL_jML3_Tbm4bM-jNLCrocSWj7DanhBr_bY=",
    },
    {
      title: "Bedroom",
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlZHJvb218ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      title: "Kitchen",
      image:
        "https://images.unsplash.com/photo-1539922980492-38f6673af8dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kdWxhciUyMGtpdGNoZW58ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      title: "Bath Room",
      image:
        "https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmF0aHJvb218ZW58MHx8MHx8&w=1000&q=80",
    },
  ]);
  return (
    <Box className={container}>
      <Grid container>
        {cardData?.map((data, i) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              className={cardContainer}
              index={i}
            >
              <Box className={imageContainer}>
                <img
                  src={data?.image}
                  alt={"categories"}
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Box className={TitleContainer}>
                <Typography variant="h5">{data?.title}</Typography>
                <ArrowRightAltIcon />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CategoriesBanner;
