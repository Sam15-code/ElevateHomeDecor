import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import RelatedProducts from "../../../RelatedProducts/RelatedProducts";
import ReviewForm from "./ReviewForm/ReviewForm";
import ViewReview from "./ViewReview/ViewReview";

const useStyle = makeStyles((theme) => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  };
});

const Review = ({ product, setproduct }) => {
  const { container } = useStyle();
  console.log(product);

  return (
    <Box className={container}>
      <ViewReview product={product} />
      <ReviewForm product={product} setproduct={setproduct}/>
      <RelatedProducts />
    </Box>
  );
};

export default Review;
