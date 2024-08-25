const mongoose = require("mongoose");

const detailsSchema = new mongoose.Schema({
    about:{
        type:String,
    },
    aboutimg:{
        type:String,
        required:true
    },
    frontendurl:{
        type:String
    },
    fullstackurl:{
        type:String
    },
    uiuxurl:{
        type:String
    }
})

const detailsModel = mongoose.model("detailsmodel",detailsSchema);
module.exports = detailsModel