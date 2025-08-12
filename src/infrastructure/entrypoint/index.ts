import express from "express"
import userRoutes from "../../presentation/routes/user.routes" 
const app = express()


app.use("/user",userRoutes)


app.listen(5000,()=>{
    console.log("\n server running on port 5000")
})


