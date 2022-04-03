const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    name:{
        type : String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value))
                throw new Error("Invalid Email id")
        }
    },
    phone:{
        type:Number,
        required:true,
        min:10
    },
    message:{
        type:String,
        required:true,
        minLength:3
    }
})

// create colection

const user_data= mongoose.model("user",userSchema);

module.exports = user_data;