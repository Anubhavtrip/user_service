const mongoDB = require('mongoose');

const connectDB = async()=>{
try {
    //try to connect mongo db
    await mongoDB.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('DB Connected ...');
} catch (error) {
    console.log("mongo connection error -",error.message);
    
}
}

module.exports = connectDB;