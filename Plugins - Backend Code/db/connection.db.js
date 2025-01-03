import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

//Establishing connectiion wtih mongodb

const connectDB = async ()=>{
    try{
        const connection = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connection
            .connection.host}`);
    }catch(error){
        console.log("MONGODB connection failed",error);
        process.exit(1);      
    }
}

export default connectDB;