const app = require('./app') ;
const connectDB  =  require('./config/db');


const PORT = process.env.PORT || 5500;

const connectServer  = async()=>{
    await connectDB();
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
        
    })
}

//connect server

connectServer()