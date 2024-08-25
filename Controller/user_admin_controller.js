
const adminDb = require("../Model/adminModel");
const cloudinary = require("../Cloudinary/cloudinary")
const detailDb = require("../Model/DetailsModel");
const messageDb = require("../Model/MessageModel");

const register = async(req,res)=>{
    const {name,password} = req.body

    try {
        if(!name || !password){
          return res.status(400).json({error:"all fields are required"})
        }

        const newuser = await new  adminDb({
            name,password
        })

        await newuser.save();
        res.status(200).json(newuser)
    } catch (error) {
        console.log(error);
        
    }
}


const login = async(req,res)=>{


    const {name,password} = req.body;

    try {
        

        if(!name || !password){
            return res.status(400).json({error:"both fields are required"})
        }

        // const validuser = await adminDb.findOne({name})

        // if(!validuser){
        //     return res.status(400).json({error:"owner is not exist"})
        // }

        // const validpassword = await adminDb.findOne({})

         const validuser = await adminDb.findOne({name:name,password:password});
         if(validuser){
            res.send(validuser)
         }else{
            res.status(400).json({error:"not valid"})
            
         }
          
        

    } catch (error) {
        console.log(error);
        
    }

}

const logout = async(req,res)=>{
  
    

}

const addDetails = async(req,res)=>{

 const {about,frontendurl,fullstackurl,uiuxurl} = req.body;

 try {
    if(!about || !frontendurl || !fullstackurl || !uiuxurl){
       return res.status(400).json({error:"all fields are required"})
    }

    console.log(req.file);
    



    const file = req.file?.path;
    const uploads = await cloudinary.uploader.upload(file);

    const newdetails = new detailDb({
        about,aboutimg:uploads.secure_url,frontendurl,fullstackurl,uiuxurl
    })

    await newdetails.save();

    res.status(200).json(newdetails);


 } catch (error) {
    console.log(error);
    
 }

}


const getdata = async(req,res)=>{

  try {
    let count = await detailDb.collection.count();
    console.log(count);
    
    const data = await detailDb.find().skip(count-1);
    res.status(200).send(data);
  } catch (error) {
    
  }

}

const message = async(req,res)=>{
    const {name,email,message} = req.body;

    try {
        if(!name || !email || !message){
             return res.status(400).json({error:"all fields are required"});
        }

        const newmessage = new messageDb({
             name,email,message
        })

        await newmessage.save();
        res.status(200).json(newmessage);


    } catch (error) {
        console.log(error);
        
    }
}


module.exports = {register,login,logout,addDetails,getdata,message};