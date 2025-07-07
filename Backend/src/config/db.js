import mongoose from 'mongoose';

export const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Successfully connected !")
    }catch(e){
        console.log("Error while connecting the database !",e)
        process.exit(1);
    }
}

