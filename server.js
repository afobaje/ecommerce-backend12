const express = require("express");
const { urlencoded } = require("express");
const dotenv = require("dotenv").config();
const cors=require('cors');
const connectDB=require('./config/db');
let router = require("./Routes/Routes");
let PORT = process.env.PORT;
let app = express();


app.use(
    cors({
    origin:'*',
})
)

app.use(express.json());
app.use(urlencoded({ extended: false }))
app.use("/", router);



connectDB()

app.listen(PORT, () => console.log(`server created on port ${PORT}`));

