const mongoose = require("mongoose");

const doctorRegisterSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    email: String,
    speciality: String,
    location: String,
    area: String
});

const register = mongoose.model('doctor', doctorRegisterSchema);

module.exports = register;