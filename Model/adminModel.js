const mongoose  = require("mongoose");

const adminSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const adminModel = mongoose.model("adminschema",adminSchema);
module.exports = adminModel;