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

app.use(cors({

    origin: process.env.CLIENT_URL
    
    }));


// routes middleware



app.use('/api', ((req, res) => {

    res.json({
        message: "fuck off"
    })

}))


//server

const port =  8000;

app.listen(port,(req,res,next)=>{

    console.log(`API is running on port ${port}`);
    
})
