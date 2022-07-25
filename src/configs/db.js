
const mongoose = require('mongoose');

const connect = () =>{ 
    return mongoose.connect('mongodb+srv://anjuman:anjuman@cluster0movie.gwwxkjn.mongodb.net/movieDataBase?retryWrites=true&w=majority')
    //'mongodb://localhost:27017/moviedb'
    // 'mongodb+srv://anjuman:anjuman@cluster0.l0hn9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
   

}

module.exports = connect;
