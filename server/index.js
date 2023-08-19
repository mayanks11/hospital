require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const entry = require("./models/register");
const doc = require("./models/doctor");
const route = require("./routes/register");
const docRoute = require("./routes/doctorReg");
const cors = require("cors");
const app = express();
app.use(cors({origin:'*'}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.json());

app.use('/', route);
app.use('/', docRoute);
mongoose.connect(process.env.DB_CONN).then(console.log("Database connected"));

app.listen(4000, function(){
    console.log("Server is running on port 2000");
});
