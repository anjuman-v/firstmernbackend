const mongoose = require('mongoose')

const moviesSchema = new mongoose.Schema(
    {
        title: { type: String, required : true},
        poster: {type:String, required : true},
       imdbrating: { type:Number, required :true },
       relieseDate:{ type : String, required : true}

    },{
        versionKey: false,
        timestamps: true,
    }
) 

module.exports = mongoose.model('movie', moviesSchema)