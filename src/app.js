const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// import routes
// const userRoutes  = require('./routes');

//middlewares
app.use(cors());
app.use(express.json());


//initial

app.get('/',(req,res)=>{
    res.send("User service is Modular now!");
})

const userRoutes = require('./routes/userRoutes.js');
app.use('/api/users', userRoutes);

module.exports = app;