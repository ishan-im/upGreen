const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();



// Middlewares

app.use(morgan('dev'))

app.use(bodyParser.json({limit: '5mb', type:'applocation/json'}));

app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use(express.json());


//cors

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions))


// routes middleware


const authRoutes = require('./routes/auth');



app.use('/api', authRoutes);




//server

const port =  8000;

app.listen(port,(req,res,next)=>{

    console.log(`API is running on port ${port}`);
    
})
