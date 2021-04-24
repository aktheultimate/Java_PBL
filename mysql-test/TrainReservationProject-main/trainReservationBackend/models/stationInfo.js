const mongoose = require('mongoose')
const admin = require('./admin')

const stationSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    code:{
        type:Number,
        required:true,
        unique:true
    },
    addedBy:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"admin",
        required:true
    }
},
    {
        timestamps:true
    }
)

module.exports=mongoose.model('station',stationSchema);