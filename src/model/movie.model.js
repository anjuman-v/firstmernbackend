const mongoose = require('mongoose')

const moviesSchema = new mongoose.Schema(
    {
        
        title: { type: String, required : true},
        poster: {type:String, required : true},
        rating: { type:Number, required :true },
       release_date:{ type : String, required : true}

    },{
        versionKey: false,
        timestamps: true,
    }
) 

module.exports = mongoose.model('movie', moviesSchema)