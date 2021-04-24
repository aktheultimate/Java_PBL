const mongoose=require('mongoose');


const sleepCoachBlockSchema= new mongoose.Schema({
    blockId:{
        type:String,
        required:true
    },
    seats:[{
        seatNo:{
            type:Number,
            required:true,
            min:1,
            max:72
        },
        bookingStatus:{
            type:Boolean,
            required:true,
            default:false
        }
    }]
})

const sleepCoachSchema=new mongoose.Schema({
    trainInfo:{
            type:mongoose.SchemaTypes.ObjectId,
            ref:"rail",
            required:true,
            unique:true
    },
    blocks:[sleepCoachBlockSchema]
},
{
    timestamps:true
})
const genCoachBlockSchema= new mongoose.Schema({
    blockId:{
        type:String,
        required:true
    },
    seats:[{
        seatNo:{
            type:Number,
            required:true,
            min:1,
            max:200
        },
        bookingStatus:{
            type:Boolean,
            required:true,
            default:false
        }
    }]
})

const genCoachSchema=new mongoose.Schema({
    trainInfo:{
            type:mongoose.SchemaTypes.ObjectId,
            ref:"rail",
            required:true,
            unique:true
    },
    blocks:[genCoachBlockSchema]
},
{
    timestamps:true
})
const acCoachBlockSchema= new mongoose.Schema({
    blockId:{
        type:String,
        required:true
    },
    seats:[{
        seatNo:{
            type:Number,
            required:true,
            min:1,
            max:40
        },
        bookingStatus:{
            type:Boolean,
            required:true,
            default:false
        }
    }]
})

const acCoachSchema=new mongoose.Schema({
    trainInfo:{
            type:mongoose.SchemaTypes.ObjectId,
            ref:"rail",
            required:true,
            unique:true
    },
    blocks:[acCoachBlockSchema]
},
{
    timestamps:true
})

const sleepCoach=mongoose.model('sleepCoach',sleepCoachSchema);
const genCoach=mongoose.model('genCoach',genCoachSchema);
const acCoach=mongoose.model('acCoach',acCoachSchema);

module.exports={sleepCoach,genCoach,acCoach};

    //{
    //     type:Number,
    //     required:true,
    //     //min:1,
    //     max:12
    // },
//     seats:[{
        
//             seatId:{
//                 type:String,
//                 required:true,
//                 unique:true
//             },
//             seatNo:{
//                 type:Number,
//                 required:true,
//                // min:1,
//                 max:72
//             },
//             bookingStatus:{
//                 type:Boolean,
//                 required:true,
//                 default:false
//             }
//         }]
// })


// const genCoachSchema=new mongoose.Schema({
//     trainInfo:{
//             type:mongoose.SchemaTypes.ObjectId,
//             ref:"rail",
//             required:true
//     },
//     block:{
//         type:Number,
//         required:true,
//         //min:1,
//         unique:true,
//         max:3
//     },
//     seats:[{
        
//             seatId:{
//                 type:String,
//                 required:true,
//                 unique:true
//             },
//             seatNo:{
//                 type:Number,
//                 required:true,
//                 //min:1,
//                 max:100
//             },
//             bookingStatus:{
//                 type:Boolean,
//                 required:true,
//                 default:false
//             }
//         }]
// })


// const superCoachSchema=new mongoose.Schema({
//     trainInfo:{
//             type:mongoose.SchemaTypes.ObjectId,
//             ref:"rail",
//             required:true
//     },
//     block:{
//         type:Number,
//         required:true,
//        // min:1,
//         max:6
//     },
//     seats:[{
        
//             seatId:{
//                 type:String,
//                 required:true,
//                 unique:true
//             },
//             seatNo:{
//                 type:Number,
//                 required:true,
//                // min:1,
//                 max:24
//             },
//             bookingStatus:{
//                 type:Boolean,
//                 required:true,
//                 default:false
//             }
//         }]
// })

// const blockSchema =new mongoose.Schema({
//     block:{
//         type:
//     }
// })

// const sleepCoach=mongoose.model('sleep',sleepCoachSchema);
// const genCoach=mongoose.model('gen',genCoachSchema);
// const superCoach=mongoose.model('super',superCoachSchema);

// module.exports={sleepCoach,genCoach,superCoach};