const mongoose = require("mongoose");

module.exports = async ()=>{
    try {
        const mongourl = 'mongodb+srv://kundan:9960322509@cluster0.k4tndq4.mongodb.net/kundan_portfollio?retryWrites=true&w=majority&appName=Cluster0'
        await mongoose.connect(mongourl);
        console.log("database is connected");
        
    
    
    } catch (error) {
        console.log("error",error);
        
    }
}