const Router = require("express").Router();
const admincontroller = require("../../Controller/user_admin_controller")
const multer = require("../../Multer/userStorage");


Router.post("/register",admincontroller.register);
Router.post("/login",admincontroller.login);
Router.post("/logout",admincontroller.logout);
Router.post("/addDetails",multer.single("aboutimg"),admincontroller.addDetails)
Router.get("/getinfo",admincontroller.getdata);
Router.post("/addmessage",admincontroller.message);








module.exports = Router