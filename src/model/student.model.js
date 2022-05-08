const mongoose = require('mongoose')

const stidentSchema = new Schema(
    {
        firstName: { type: String, required : true},
        email: {type:String, require : true},
        mobileNo: { type:String, require :true }

    },{
        versionKey: false,
        timestamps: true,
    }
) 

