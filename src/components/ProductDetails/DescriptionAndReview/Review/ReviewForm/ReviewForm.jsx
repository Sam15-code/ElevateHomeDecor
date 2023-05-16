import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";

const useStyle = makeStyles((theme) => {
  return {
    container: {
      padding: "40px 0px 0px 0px",
      color: theme.palette.grey[800],
    },
    subContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "40px",
    },
    formContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      border: `1px solid ${theme.palette.grey[200]}`,
      padding: "20px",
    },
    titleContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
    },
    ratingContainer: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    fieldContainer: {
      display: "flex",
      gap: "20px",
      [theme.breakpoints.down("md")]: {
        flexWrap: "wrap",
        gap: "20px",
      },
    },
    checkBoxContainer: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      [theme.breakpoints.down("md")]: {
        flexWrap: "wrap",
        gap:'5px'
      },
    },
  };
});

const ReviewForm = ({ setproduct, product }) => {
  const {
    container,
    subContainer,
    formContainer,
    titleContainer,
    ratingContainer,
    fieldContainer,
    checkBoxContainer,
  } = useStyle();
  const [rating, setrating] = useState(4);
  const [values, setvalues] = useState({});
  const handleChange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    let obj = { ...values, rating: rating };
    console.log(obj);
    setproduct({ ...product, reviews: [...product?.reviews, obj] });
  };
  return (
    <Box className={container}>
      <Box className={subContainer}>
        <Box className={formContainer}>
          <Box className={titleContainer}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Add a review
            </Typography>
            <Typography>
              Your email address will not be published. Required fields are
              marked *
            </Typography>
          </Box>
          <Box className={ratingContainer}>
            <Typography sx={{ fontWeight: "bold" }}>Your rating *</Typography>
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
                setrating(newValue);
              }}
            />
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "bold" }}>Your review *</Typography>
            <Box>
              <FormControl fullWidth>
                <TextField
                  multiline
                  minRows={5}
                  fullWidth
                  name="review"
                  placeholder="Review..."
                  onChange={handleChange}
                />
              </FormControl>
            </Box>
          </Box>
          <Box className={fieldContainer}>
            <FormControl fullWidth>
              <Typography sx={{ fontWeight: "bold" }}>Name *</Typography>
              <TextField
                name="name"
                placeholder="Name..."
                fullWidth
                size="small"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl fullWidth>
              <Typography sx={{ fontWeight: "bold" }}>Email *</Typography>
              <TextField
                name="email"
                type={"email"}
                placeholder="Email..."
                fullWidth
                onChange={handleChange}
                size="small"
              />
            </FormControl>
          </Box>
          <Box className={checkBoxContainer}>
            <Box>
              <Checkbox
                defaultChecked
                name="save detail"
                onChange={handleChange}
              />
            </Box>
            <Typography>
              Save my name, email, and website in this browser for the next time
              I comment.
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{ padding: "10px 30px" }}
              onClick={handleSubmit}
            >
              SUBMIT
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewForm;
