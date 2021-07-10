const express=require("express")
const connect=require("./config/connectDB")
const authRouter = require('./routes/auth')


const app=express()


app.use(express.json())

connect()



app.use("/user/users",require("./routes/user"))
app.use("/chef/chefs",require("./routes/chef"))
app.use("/ajout/prods",require("./routes/ajout"))


const port=5000
app.listen(port,err=>{
    err? console.log(err) : console.log('serveur is running on port ${port}')
})