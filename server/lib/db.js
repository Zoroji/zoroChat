import mongoose from "mongoose";

export const connectDB = async () =>{

    try {

        mongoose.connection.on('connected', () => {
            console.log("MongoDB connection established!!");
        });

        await mongoose.connect(`${process.env.MONGODB_URI}/chat-app`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }

}