const { Router } = require('express');
// const mongoose = require('mongoose')
const Movie = require('../model/movie.model');

// const router = express.Router()

const router = Router()

router.post('/movie',async(req, res)=>{

    try{
     const movie = await Movie.create(req.body)
     return res.status(201).send(movie)

}
catch(err){

    return res.status(500).send({
       message:err.message 
       
    });
}

});


router.get('/movie/:id',async(req, res)=>{

    try{
     const movie = await Movie.findById(req.params.id).lean().exec();
     return res.status(201).send(movie)

}
catch(err){

    return res.status(500).send({
       message:err.message 
       
    });
}

});


router.get('/movies',async(req, res)=>{

    try{
     const page = req.query.page || 1
     const limit = req.query.limit || 3

     let totalpages = 0;

     let movie ;
    if(req.query.q){
        if(req.query.q == 'sort'){
            movie = await Movie.find().skip((page-1) * limit).limit(limit).lean().exec();

          const totaldocs =  await Movie.find().countDocuments()

            totalpages = (Math.ceil(totaldocs / limit))

           movie = req.query.sort == 1 ? movie.sort(( a,b) => (a.no - b.no)) :  movie.sort(( a,b) => (b.no - a.no))
        }

        else if(req.query.q == 'filter'){
          
            movie = await Movie.find({type:req.query.base}).skip((page-1) * limit).limit(limit).lean().exec();
            
           const totaldocs = await Movie.find({type:req.query.base}).countDocuments()

           totalpages = (Math.ceil(totaldocs / limit))

        }

        else{
            movie = await Movie.find({block:req.query.block}).skip((page-1) * limit).limit(limit).lean().exec();
            const totaldocs = await Movie.find({block:req.query.block}).countDocuments()
            totalpages = (Math.ceil(totaldocs / limit))
        }
    }
    else{
        movie = await Movie.find().skip((page-1) * limit).limit(limit).lean().exec();
        const totaldocs = await Movie.find().countDocuments()

        totalpages = (Math.ceil(totaldocs / limit))

    } 
    let arr = [];
    for(let i = 1; i <= totalpages; i++){
        arr.push(i)
    } 

    return res.status(201).send({
        movie, totalpages : arr
    })
    



}
catch(err){

    return res.status(500).send({
       message:err.message 
       
    });
}

});

module.exports = router


//https://moviesappdb.herokuapp.com/
