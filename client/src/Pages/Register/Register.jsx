import { Box, Button, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const useStyle = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      minHeight: "100vh",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    },
    subContainer: {
      width: "100%",
      maxWidth: "450px",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    },
  };
});

const Register = () => {
  const { container, subContainer } = useStyle();
  const [value, setvalues] = useState({});
  const handleChange = (e) => {
    setvalues({ ...value, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(value);
    const respone = await axios.post(
      "/users/auth/register",
      value
    );
    console.log(respone);
    if (respone.data.isSuccess) {
      alert(respone.data.message);
      navigate("/login");
    } else {
      alert("something went wrong");
    }
  };
  return (
    <Box className={container}>
      <form onSubmit={handleSubmit} className={subContainer}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Signup
          </Typography>
        </Box>
        <Box>
          <Typography>Name</Typography>
          <TextField
            name="name"
            required
            fullWidth
            type="text"
            placeholder="name"
            size="small"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <Typography>Username</Typography>
          <TextField
            name="username"
            required
            fullWidth
            type="text"
            placeholder="username"
            size="small"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <Typography>Email</Typography>
          <TextField
            name="email"
            required
            fullWidth
            type="email"
            placeholder="Email"
            size="small"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <Typography>Password</Typography>
          <TextField
            name="password"
            required
            fullWidth
            type="password"
            placeholder="Password"
            size="small"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <Button type="submit" fullWidth variant={"contained"} size={"small"}>
            Signup
          </Button>
        </Box>
        <Box>
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/login");
            }}
          >
            Already Have Account.?
          </Typography>
        </Box>
      </form>
    </Box>
  );
};

export default Register;
