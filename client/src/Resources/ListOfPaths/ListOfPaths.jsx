
import Cart from "../../Pages/Cart/Cart";
import Checkout from "../../Pages/Checkout/Checkout";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import LandingPage from "../../Pages/LandingPage/LandingPage";
import Login from "../../Pages/Login/Login";
import MainPage from "../../Pages/MainPage/MainPage";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";
import Products from "../../Pages/Products/Products";
import Register from "../../Pages/Register/Register";

export const Paths = [
  {
    path: "/",
    component: <MainPage ActivePage={<LandingPage />} />,
  },
 
  {
    path: "/products",
    component: <MainPage ActivePage={<Products />} />,
  },
  {
    path: "/products/:id",
    component: <MainPage ActivePage={<ProductDetails />} />,
  },
  {
    path: "/contactus",
    component: <MainPage ActivePage={<ContactUs />} />,
  },
  {
    path: "/cart",
    component: <MainPage ActivePage={<Cart />} />,
  },
  {
    path: "/checkout",
    component: <MainPage ActivePage={<Checkout />} />,
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/register",
    component: <Register />,
  },
];
