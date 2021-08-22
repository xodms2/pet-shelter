const express = require("express");
const cors = require("cors");
const app = express();
require("./config/mongoose.config");
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));
require("./routes/pet.routes")(app);
const port = 8000;

// const dotenv = require('dotenv');
// dotenv.config()

// const port = process.env.port

app.listen(port, console.log(`Listening on port: ${port}`));
