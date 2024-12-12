import mongoose from 'mongoose';

const connectDB = async () => {
    try{
       await mongoose.connect('mongodb://127.0.0.1:27017/userAuth');
       console.log("MongoDB connected");
    } catch (error){
        console.log('Error connecting DB', error);
        process.exit(1);
    }
};

export default connectDB;