import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { ProductData } from "../../../Resources/ProductData/ProductData";
import ProductCards from "../../Cards/ProductCards";
import ProductDetailsModal from "../../Modals/ProductDetailsModal";

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

const BestSellingProducts = () => {
  const {
    container,
    subContainer,
    contentContainer,
    line,
    taglineContainer,
    headingContainer,
    headingBox,
  } = useStyle();
  const [selectedProduct, setselectedProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = (data) => {
    console.log(data);
    setselectedProduct(data);
    setOpen(true);
  };
  return (
    <>
      <Box className={container}>
        <Box className={subContainer}>
          <Box className={headingContainer}>
            <Box className={taglineContainer}>
              <Box className={line} />
              <Typography color={"primary"} sx={{ fontSize: "14px" }}>
                BEST SELLER
              </Typography>
            </Box>
            <Box className={headingBox}>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  Discover Our
                  <br /> Most Selling Products
                </Typography>
              </Box>
              <Box>
                <Button variant="contained">VIEW ALL BEST SELLERS</Button>
              </Box>
            </Box>
          </Box>
          <Box className={contentContainer}>
            {ProductData?.map((data, i) => {
              if (i < 8) {
                return (
                  <ProductCards key={i} data={data} handleOpen={handleOpen} />
                );
              }
            })}
          </Box>
        </Box>
      </Box>
      {open && selectedProduct ? (
        <ProductDetailsModal
          open={open}
          setOpen={setOpen}
          selectedProduct={selectedProduct}
          setselectedProduct={setselectedProduct}
        />
      ) : null}
    </>
  );
};

export default BestSellingProducts;
