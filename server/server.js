require ("dotenv").config()
const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const corsOptions = require("./config/corsOptions")
const connectDB = require("./config/dbconn")
const PORT = process.env.PORT || 7001
const app = express()
connectDB()
//middlewares
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))
//routes
app.use("/api/photos", require("./routers/photo"))
app.use("/api/posts", require("./routers/post"))
app.use("/api/todos", require("./routers/todo"))
app.use("/api/users", require("./routers/user"))
app.get("/",(req,res)=>{
res.send("this is the home page")
})
mongoose.connection.once('open',()=>{
    console.log('connected');
    app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`)
        })
})
mongoose.connection.on('error', err=>{
    console.log(err)
})

