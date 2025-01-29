const mongoose=require('mongoose');

const connectDb=async ()=>{
    try{
        mongoose.connect(process.env.MONGO_URI);
        console.log('Database connected');
    } catch(err){
        console.log('Error connecting to database');

    }
};
module.exports=connectDb;