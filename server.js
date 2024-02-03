
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const ticketRouter = require('./routes/ticketRouter')
const app = express()

const cors = require('cors')
const corsOptions = {
  origin: '*'
}
app.use(cors(corsOptions))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next()
})

app.use('/api/tickets',ticketRouter)

mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("running server on",process.env.PORT)
    })
}).catch((error)=>{
console.log("error===========",error)
})



