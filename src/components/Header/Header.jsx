import { Box, Button, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import ContactsIcon from "@mui/icons-material/Contacts";
import CollectionsIcon from "@mui/icons-material/Collections";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import logo from "../../Assets/logo.svg";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import HeaderDrawer from "../Drawer/Drawer";
import { useSelector } from "react-redux";
import { getCartValues } from "../../Redux/Slices/CartSlice";
import { Link } from "react-router-dom";
const useStyle = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      justifyContent: "center",
    },
    HeaderContainer: {
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
      gap: "20px",
      alignItems: "center",
      width: "100%",
      maxWidth: "1440px",
    },
    LinkContainer: {
      width: "100%",
      display: "flex",
      gap: "50px",
      cursor: "pointer",
      justifyContent: "end",
      alignItems: "center",
      [theme.breakpoints.down("lg")]: {
        display: "none",
      },
    },

    NavLinksSection: {
      display: "flex",
      gap: "50px",
      alignItems: "center",
      [theme.breakpoints.down("lg")]: {
        flexWrap: "wrap",
      },
    },
    active: {
      color: theme.palette.primary.main,
      fontWeight: "bold",
    },
    linkStyles: {
      color: theme.palette.white.main,
    },
    hamburgerIcon: {
      display: "none",
      [theme.breakpoints.down("lg")]: {
        display: "block",
      },
    },
    iconsContainer: {
      display: "flex",
      gap: "20px",
      alignItems: "center",
      [theme.breakpoints.down("lg")]: {
        display: "none",
      },
    },
    IconBox: {
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "40px",
      width: "40px",
      borderRadius: "50%",
      transition: "0.5s",
      position: "relative",
    },
    CartItems: {
      padding: "5px",
      background: theme.palette.primary.main,
      position: "absolute",
      borderRadius: "50%",
      fontSize: "12px",
      height: "15px",
      width: "15px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      top: 0,
      left: 0,
      transform: "translate(80%,-30%)",
    },
  };
});

const Header = () => {
  const [state, setstate] = useState([
    {
      title: "Home",
      selected: false,
      icon: <HomeIcon sx={{ fontSize: "35px" }} />,
      link: "/",
    },
    {
      title: "Products",
      selected: false,
      icon: <DesignServicesIcon sx={{ fontSize: "35px" }} />,
      link: "/products",
    },
    {
      title: "About Us",
      selected: false,
      icon: <InfoIcon sx={{ fontSize: "35px" }} />,
      link: "/aboutus",
    },
    {
      title: "Contact Us",
      selected: false,
      icon: <ContactsIcon sx={{ fontSize: "35px" }} />,
      link: "/contactus",
    },
  ]);
  const {
    container,
    HeaderContainer,
    LinkContainer,
    NavLinksSection,
    active,
    linkStyles,
    hamburgerIcon,
    iconsContainer,
    IconBox,
    CartItems,
  } = useStyle();
  const [open, setOpen] = useState(false);
  const { cart } = useSelector(getCartValues);
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = (obj) => {
    let value = state?.filter((f) => {
      if (f.link === obj.link) {
        f.selected = true;
      } else {
        f.selected = false;
      }
      return f;
    });
    setstate(value);

    navigate(obj.link);
  };
  useEffect(() => {
    let value = state?.filter((f) => {
      if (f.link === location.pathname) {
        f.selected = true;
      } else {
        f.selected = false;
      }
      return f;
    });
    setstate(value);
  }, [navigate]);

  return (
    <Box className={container}>
      <Box className={HeaderContainer}>
        <Box className={NavLinksSection}>
          <Link to={"/"}>
            <img src={logo} alt={"logo"} style={{ width: "120px" }} />
          </Link>
        </Box>

        <Box className={LinkContainer}>
          {state.map((link, i) => {
            return (
              <Typography
                className={link.selected ? active : linkStyles}
                key={i}
                sx={{
                  "&:hover": { color: (theme) => theme.palette.primary.main },
                }}
                onClick={() => {
                  handleClick(link);
                }}
              >
                {link.title}
              </Typography>
            );
          })}
        </Box>
        <Box className={iconsContainer}>
          <Box className={IconBox} onClick={() => navigate("/cart")}>
            <AddShoppingCartIcon color="primary" sx={{ fontSize: "35px" }} />
            <Box className={CartItems}>{cart?.length}</Box>
          </Box>
        </Box>
        <Button variant={"contained"} onClick={() => navigate("/login")}>
          Login
        </Button>
        <Box className={hamburgerIcon}>
          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon color="primary" sx={{ fontSize: "25px" }} />
          </IconButton>
        </Box>
      </Box>

      <HeaderDrawer open={open} setOpen={setOpen} list={state} />
    </Box>
  );
};

export default Header;
