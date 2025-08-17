import express from 'express';
import "dotenv/config";
import cors from 'cors';
import http from 'http';


const app = express();
const server = http.createServer(app); //creating this since socket.io use this 

// Middleware
app.use(cors());
app.use(express.json({limit:'4mb'}));

app.use("/api/status", (req,res) =>{
    res.send("server is live")
})

const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
