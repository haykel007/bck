const express= require("express")
const user = require("../models/user")
const router = express.Router()


router.post("/addUser",(req,res)=>{

    const newUser = new user({
        ...req.body
    })
    newUser.save()
    .then(user=> res.json({msg:"user added",user}) )
    .catch(err=>console.log(err))



})


router.get("/",(req,res)=>{
    user.find()
    .then(users=> res.json({msg:"data fatched",users}))
    .catch(err=>console.log(err))
})



router.put("/:email",(req,res)=>{
    user.findOneAndUpdate({email:req.params.email},{$set:{...req.body}})
    .then(user=> res.json({msg:"user edited",user}))
    .catch(err=>console.log(err))
})


module.exports= router