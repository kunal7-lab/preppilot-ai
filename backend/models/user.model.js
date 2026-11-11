import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true,
        unique : true
    },
    credits :{
        type : Number,
        default : 100,
    }
},   {timestamps : true})


const user = mongoose.model("user", userschema)
export default user;    