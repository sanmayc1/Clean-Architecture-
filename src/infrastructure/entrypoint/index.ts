import express from "express"
import userRoutes from "../../presentation/routes/user.routes" 
const app = express()


app.use("/user",userRoutes)

console.log("hel")
app.listen(2000,()=>{
    console.log("\n server running on port 2000")
})


