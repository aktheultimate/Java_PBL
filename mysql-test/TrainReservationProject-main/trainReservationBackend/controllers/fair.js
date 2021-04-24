// const rail=require('../models/railInfo');
// const fair=require('../models/fair');
// const station =require('../models/stationInfo');
// const jwt=require('jsonwebtoken');

//  exports.getStationNames=async(req,res)=>{
//     try{
//         const trainName=req.body.trainName;
//         const adminToken=req.cookies.adminToken;
//         const admin=jwt.verify(adminToken,process.env.jwtKey);
//         if(admin){
//             const train=await rail.findOne({name:trainName});
//                 if(train){
//                     if(train.addedBy==admin._id){
//                         const {name,number,from,to,midStations}=train;
//                         const fromStation=await (await station.findById(from.station)).name;
//                         const toStation=await (await station.findById(to.station)).name;
//                         var midStationsNames=[];
//                         for(midStation of midStations){
//                            const midStationName=await (await station.findById(midStation.station.stationId)).name;
//                            midStationsNames.push(midStationName);
//                         }
//                         return res.status(200).json({name,number,fromStation,toStation,midStationsNames});
//                     }else{
//                         return res.status(400).json({errorMessage:"Only respected admin is allowed to add or edit fair prices"});
//                     }
//                 }else{
//                     return res.status(400).json({errorMessage:"No train is availabel With this name"});
//                 }
//         }else{
//             return res.status(400).json({errorMessage:"This is accessible to authorised admins only"})
//         }
//     }catch{
//         return res.status(500).json({errorMessage:"Something went wrong,Please try again!"})
//     }
    
// }


// exports.addFair=async(req,res)=>{
//     try{
//         var priceArray=[];
//         var newPriceArray=[];
//         const trainName=req.body.trainName;
//         const adminToken=req.cookies.adminToken;
//         const admin=await jwt.verify(adminToken,process.env.jwtKey);
        
//         if(admin){
//             const train=await rail.findOne({name:trainName});
//             if(train){
//                 const trainId=train._id;
//                 priceArray=req.body.priceArray;
//                 for(const price of priceArray){
                    
//                     var endStationName=price.endStationName;
                    
//                     var endStationId=(await station.findOne({name:endStationName}))._id;
                    
//                     var genCoachFair=price.genCoachFair;
//                     var acCoachFair=price.acCoachFair;
//                     var sleepCoachFair=price.sleepCoachFair;
//                     newPriceArray.push({
//                         endStation:{
//                             endStationId,
//                             genCoachFair,
//                             acCoachFair,
//                             sleepCoachFair
//                         }
//                     })
//                 }
//                 const ticket=new fair({
//                     trainName:trainId,
//                     fairToEndStation:newPriceArray
//                 });
//                 await ticket.save((err,data)=>{
//                 if(err){
//                     console.log(err);
//                     return res.status(500).json({errorMessage:"something Went wrong,Please try again!"})
//                 }
//                 return res.status(200).json({successMessage:"Records added successfully!!"});
//             })
//             }else{
//                return res.status(400).json({errorMessage:"No train is availabel with this name"})
//             }
//         }else{
//             return res.status(400).json({errorMessage:"This is accessible to admins only"});
//         }
//     }catch{
//         return res.status(500).json({errorMessages:"Smething went wrong,Please try again!"})
//     }
    
// }