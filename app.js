const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const router = require("./routes/route");

app.use(cors({
    origin:"*",
}));

const PORT = 3000;
const DB = process.env.DB;
app.use(bodyParser.json());

app.use(router);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("Connection is successful");
}).catch(e => {
    console.log(e);
})

app.listen(PORT, '0.0.0.0' ,() => {
    console.log(`server is running on port => ${PORT}`);
})