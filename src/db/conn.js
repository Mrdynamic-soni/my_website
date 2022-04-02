const mongoose = require("mongoose");
const oldb = "mongodb+srv://soni:soni@cluster0.k4ysl.mongodb.net/contact_details?retryWrites=true&w=majority"
const localdb = "mongodb://localhost:27017/dynamic_website"
mongoose.connect(localdb,{
    useNewUrlParser:true,
}).then(()=>{
    console.log("Database connected");
}).catch((err)=>{
    console.log(err);
})