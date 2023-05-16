import { Box, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import RelatedProducts from "../../../RelatedProducts/RelatedProducts";
import BottomProductBanner from "../../../BottomProductBanner/BottomProductBanner";
import notfound from "../../../../Assets/notfound.mp4";
const useStyle = makeStyles((theme) => {
  return {
    container: {
      padding: "40px 0px 0px 0px",
    },
    contentContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      color: theme.palette.grey[800],
      [theme.breakpoints.down("md")]: {
        flexWrap: "wrap",
      },
    },
    imageContainer: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    contentBox: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      border: `1px solid ${theme.palette.grey[200]}`,
    },
    content: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      width: "100%",
      maxWidth: "450px",
      padding: "20px 40px",
      [theme.breakpoints.down("md")]: {
        padding: "20px",
      },
    },
    List: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    instructionContainer: {
      flexDirection: "row-reverse",
    },
    stickyBottom: {
      marginTop: "50px",
      position: "sticky",
      bottom: 0,
    },
  };
});

const Description = ({ product }) => {
  const {
    container,
    content,
    contentBox,
    contentContainer,
    imageContainer,
    List,
    instructionContainer,
    stickyBottom,
  } = useStyle();
  const [features, setfeatures] = useState(null);
  const [instruction, setinstruction] = useState(null);
  useEffect(() => {
    setfeatures(product?.features);
    setinstruction(product?.careInstructions);
  }, [product]);
  console.log(product);
  return (
    <Box className={container}>
      <Box className={contentContainer}>
        <Box className={imageContainer}>
          {features ? (
            <img
              src={features?.image}
              alt={"features"}
              style={{ width: "100%" }}
            />
          ) : (
            <Box>
              <CardMedia
                src={notfound}
                component={"video"}
                autoPlay={true}
                loop
                sx={{ width: "100%" }}
              />
            </Box>
          )}
        </Box>
        <Box className={contentBox}>
          {features ? (
            <Box className={content}>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  {features?.title}
                </Typography>
              </Box>
              <Box>
                <Typography>{features?.desc}</Typography>
              </Box>
              <Box>
                {features?.featuresList?.map((list, i) => {
                  return (
                    <Box key={i} className={List}>
                      <DoneIcon color="primary" />{" "}
                      <Typography>{list}</Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                No Data Found
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
      <Box className={`${contentContainer} ${instructionContainer}`}>
        <Box className={imageContainer}>
          {instruction ? (
            <img
              src={instruction?.image}
              alt={"instruction"}
              style={{ width: "100%" }}
            />
          ) : (
            <Box>
              <CardMedia
                src={notfound}
                component={"video"}
                autoPlay={true}
                loop
                sx={{ width: "100%" }}
              />
            </Box>
          )}
        </Box>
        <Box className={contentBox}>
          {instruction ? (
            <Box className={content}>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  {instruction?.title}
                </Typography>
              </Box>
              <Box>
                <Typography>{instruction?.desc}</Typography>
              </Box>
              <Box>
                {instruction?.instructionList?.map((list, i) => {
                  return (
                    <Box key={i} className={List}>
                      <DoneIcon color="primary" />{" "}
                      <Typography>{list}</Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                No Data Found
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
      <Box>
        <RelatedProducts />
      </Box>
      <Box className={stickyBottom}>
        <BottomProductBanner product={product} />
      </Box>
    </Box>
  );
};

export default Description;
