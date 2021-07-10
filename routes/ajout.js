const express= require("express")
const ajout = require("../models/ajout")
const router = express.Router()


router.post("/ajout",(req,res)=>{

    const newprod = new ajout({
        ...req.body
    })
    newprod.save()
    .then(ajout=> res.json({msg:"chef added",ajout}) )
    .catch(err=>console.log(err))



})




router.get("/",(req,res)=>{
    ajout.find()
    .then(prods=> res.json({msg:"data fatched",prods}))
    .catch(err=>console.log(err))
})

router.put("/:email",(req,res)=>{
    ajout.findOneAndUpdate({name:req.params.name},{$set:{...req.body}})
    .then(ajout=> res.json({msg:"prod edited",ajout}))
    .catch(err=>console.log(err))
})


module.exports= router