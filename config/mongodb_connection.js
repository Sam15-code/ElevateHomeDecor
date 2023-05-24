const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://Muhammad_Akbar:Akbar.1234@cluster0.63uyc.mongodb.net/movies?retryWrites=true&w=majority"
  )
  .then((res) => {
    console.log("MongoDB Connected ... ");
  })
  .catch((err) => {
    console.log("Error.!!", err);
  });
