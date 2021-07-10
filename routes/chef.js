const express= require("express")
const chef = require("../models/chef")
const router = express.Router()


router.post("/addchef",(req,res)=>{

    const newChef = new chef({
        ...req.body
    })
    newChef.save()
    .then(chef=> res.json({msg:"chef added",chef}) )
    .catch(err=>console.log(err))



})



router.get("/",(req,res)=>{
    user.find()
    .then(chefs=> res.json({msg:"data fatched",chefs}))
    .catch(err=>console.log(err))
})


router.delete("/:email",(req,res)=>{
    user.findOneAndDelete({email:req.params.email})
    .then(user=> res.json({msg:"user deleted",user}))
    .catch(err=>console.log(err))
})


router.put("/:email",(req,res)=>{
    chef.findOneAndUpdate({email:req.params.email},{$set:{...req.body}})
    .then(chef=> res.json({msg:"chef edited",chef}))
    .catch(err=>console.log(err))
})





module.exports= router