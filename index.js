const express = require("express");
const app = express();
const dbconnect = require("./Db/Dbconnect");
const cors = require("cors");


app.use(express.json());
app.use(cors("*"));










const adminRouter = require("./Routes/Adminroutes/adminRoutes");
app.use("/admin/api",adminRouter);







dbconnect();

app.listen(4000,()=>{
    console.log("listening");
    
})