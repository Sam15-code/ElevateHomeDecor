import { Avatar, Box, Rating, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyle = makeStyles((theme) => {
  return {
    container: {
      color: theme.palette.grey[500],

      border: `1px solid ${theme.palette.grey[200]}`,
      [theme.breakpoints.down("md")]: {
        padding: "20px 0px",
      },
    },
    subContainer: {
      display: "flex",
      gap: "20px",
      padding: "20px",
      borderBottom: `1px solid ${theme.palette.grey[200]}`,
      [theme.breakpoints.down("md")]: {
        flexWrap: "wrap",
      },
    },
    avatarContainer: {},
    contentContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
  };
});

const ViewReview = ({ product }) => {
  const { container, subContainer, avatarContainer, contentContainer } =
    useStyle();
  console.log(product);
  return (
    <Box className={container}>
      {product?.reviews.length>0 ? (
        product?.reviews?.map((review, i) => {
          return (
            <Box key={i} className={subContainer}>
              <Box className={avatarContainer}>
                <Avatar
                  src="/broken-image.jpg"
                  sx={{ height: "55px", width: "55px" }}
                />
              </Box>
              <Box className={contentContainer}>
                <Typography variant="h6">{review?.review}</Typography>
                <Rating value={review?.rating} readOnly />
                <Typography
                  sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                >
                  {review?.name}
                </Typography>
              </Box>
            </Box>
          );
        })
      ) : (
        <Box sx={{textAlign: "center" ,padding:'20px'}}>
          <Typography sx={{ fontWeight: "bold" }}>No Review Found.!</Typography>
        </Box>
      )}
    </Box>
  );
};

export default ViewReview;
