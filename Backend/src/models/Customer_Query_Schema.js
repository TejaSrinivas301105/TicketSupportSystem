import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema(
    {
        Name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        subject:{
            type:String,
            required:true
        },
        priority:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        status:{
            type:String
        },
        description:{
            type:String,
            required:true
        }
    },
    {
        timestamps: true 
    }
)

const  Query =  mongoose.model('Queries',CustomerSchema);
export default  Query;