
const express = require('express');

const movieController = require('./controlers/movies.controler');

const connect = require('./configs/db')

const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

const port = process.env.PORT || 5000;

app.use('/',movieController);

module.exports = () => {
    
app.listen(port, async() => {
   
    try{
     
    await connect();
    
        console.log('litening on port '+ port);

    }
    catch(err){
    console.log({
       message : err.message,
       status:"opps" 
    })

    }

})
}
