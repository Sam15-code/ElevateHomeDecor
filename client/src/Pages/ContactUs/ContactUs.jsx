import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import contactus from "../../Assets/contactus.jpg";
import ContactAddress from "../../Components/ContactUs/ContactAddress";
import ContactUsForm from "../../Components/ContactUs/ContactUsForm";
import NewsLatter from "../../Components/LandingPage/NewsLatter/NewsLatter";
import TopBanner from "../../Components/TopBanner/TopBanner";

const useStyle = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      justifyContent: "center",
      color: theme.palette.grey[600],
      padding: "0px 0px",
    },

    subContainer: {
      width: "100%",
      maxWidth: "1440px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
      padding: "40px 20px",
      transition: "0.5s",
    },
    headingContainer: {
      width: "100%",
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
  };
});

const ContactUs = () => {
  const { container, subContainer, headingContainer } = useStyle();

  return (
    <Box>
      <TopBanner bg={contactus} Text={"Contact Us"} PageName={"Contact Us"} />

      <Box className={container}>
        <Box className={subContainer}>
          <Box className={headingContainer}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Contact Us
            </Typography>
            <Typography>
              Tempus amet, sit erat malesuada lorem purus dictum pretium,
              posuere sagittis ultricies enim massa nisi neque augue in
              condimentum diam commodo ornare.
            </Typography>
          </Box>
          <ContactAddress />
          <ContactUsForm />
          <Box sx={{ width: "100%" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.601281567758!2d-86.80713638445575!3d36.15192031162052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886466bef07995f3%3A0x72df5e9325af96ba!2s210%20Louise%20Ave%2C%20Nashville%2C%20TN%2037203%2C%20USA!5e0!3m2!1sen!2s!4v1680086582285!5m2!1sen!2s"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ height: "500px", width: "100%", border: "none" }}
              title="location"
            ></iframe>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "100%",paddin:'50px 0px' }}>
        <NewsLatter />
      </Box>
    </Box>
  );
};

export default ContactUs;
