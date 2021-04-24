const mongoose=require('mongoose');

const railSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    number:{
        type:Number,
        required:true,
        unique:true
    },
    from:{
        station:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"station",
        required:true
        },
        stationName:{
            type:String,
            required:true
        },
        deptDate:{
            type:Date,
            required:true
        }
    },
    to:{
        station:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"station",
        required:true
        },
        stationName:{
            type:String,
            require:true
        },
        arrDate:{
            type:Date,
            required:true
        }
    },
    midStations:[{
        station:{
            stationId:{
                type:mongoose.SchemaTypes.ObjectId,
                ref:"station"
            },
            stationName:{
                type:String,
                require:true
            },
            arrDate:{
                type:Date,
            },
            deptDate:{
                type:Date,
            }
        }

    }],
    addedBy:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"admin",
        required:true
    }
})

module.exports=mongoose.model('rail',railSchema);