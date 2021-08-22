const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/petsdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully established connection to the databse"))
  .catch("Something went wrong while connecting to the databse.");
