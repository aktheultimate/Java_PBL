const mongoose=require("mongoose");
//const railInfo = require("./railInfo");
//const stationInfo = require("./stationInfo");

const fairSchema=new mongoose.Schema({
    trainName:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"rail",
        required:true,
        unique:true
    },
    fairToEndStation:[{
        endStation:{
            endStationId:{ 
                type:mongoose.SchemaTypes.ObjectId,
                ref:"station"
            },
            genCoachFair:{
                type:Number
            },
            sleepCoachFair:{
                 type:Number
            },
            acCoachFair:{
                 type:Number
            }
        }
    }]
})

module.exports=mongoose.model('fair',fairSchema);