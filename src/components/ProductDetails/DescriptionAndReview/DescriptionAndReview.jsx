import { Box, Tab, Tabs } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Description from "./Description/Description";
import Review from "./Review/Review";

const useStyle = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    subContainer: {
      width: "100%",
      maxWidth: "1440px",
      background: theme.palette.white.main,
      padding: "40px 20px",
    },
    root: {
      position: "relative",
      fontWeight: "bold",
      borderTop: `2px solid ${theme.palette.grey[200]}`,
      "& .MuiTabs-indicator": {
        display: "block",
        position: "absolute",
        top: 0,
      },
    },
  };
});

const DescriptionAndReview = ({ product, setproduct }) => {
  const { container, subContainer, root } = useStyle();
  const [value, setValue] = React.useState(0);
  const handleChange = (__, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className={container}>
      <Box className={subContainer}>
        <Box>
          <Tabs
            value={value}
            className={root}
            onChange={handleChange}
            TabIndicatorProps={{ children: <span /> }}
          >
            <Tab label="Description" sx={{ fontWeight: "bold" }} />
            <Tab
              label={`Review (${product?.reviews?.length})`}
              sx={{ fontWeight: "bold" }}
            />
          </Tabs>
        </Box>
        <Box>
          {value == 0 ? (
            <Description product={product} />
          ) : (
            <Review product={product} setproduct={setproduct} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default DescriptionAndReview;
