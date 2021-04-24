const fair=require('../models/fair');
const rail=require('../models/railInfo');
const station=require('../models/stationInfo');
const {acCoach, sleepCoach, genCoach}=require('../models/seatArrangement');
const { json } = require('body-parser');

exports.searchTrain=async(req,res)=>{
   //console.log(req.body)
   const sourceStation=req.body.sourceStation;
   const sourceStationId=await (await station.findOne({name:sourceStation}))._id;
   const journeyDate=new Date(req.body.journeyDate);
   
   const destinationStation=req.body.destinationStation;
   const destinationStationId=await (await station.findOne({name:destinationStation}))._id;
   
   const month=journeyDate.getMonth();
   const date=journeyDate.getDate()+1;
   const year=journeyDate.getFullYear();
   const nextToJourneydate=new Date(year,month,date);
   
   var allTrains=await rail.find({$and:[
      {$or:[{"from.station":sourceStationId,"from.deptDate":{$gte:new Date(journeyDate),$lte:new Date(nextToJourneydate)}},{"midStations.station.stationId":sourceStationId,"midStations.station.deptDate":{$gte:new Date(journeyDate),$lte:new Date(nextToJourneydate)}}]},
   {$or:[{"to.station":destinationStationId},{"midStations.station.stationId":destinationStationId}]}
   ]});
   
   
   var finalTrains=[];

  
   for(train of allTrains){
      if((JSON.stringify(train.from.station)==JSON.stringify(sourceStationId))&&(JSON.stringify(destinationStationId)!=JSON.stringify(sourceStationId))){
         finalTrains.push(train);
         continue;
      }
      
      for(midStation of train.midStations){
         if(JSON.stringify(midStation.station.stationId)==JSON.stringify(sourceStationId)){
            arrDateAtSourceStation=midStation.station.arrDate;
         }
         if(JSON.stringify(midStation.station.stationId)==JSON.stringify(destinationStationId)){
            arrDateAtDestinationStation=midStation.station.arrDate;
         }
      }
      if(arrDateAtDestinationStation&&arrDateAtSourceStation){
         if(JSON.stringify(arrDateAtSourceStation)<=JSON.stringify(arrDateAtDestinationStation)){
            finalTrains.push(train);
         }
      }
   }
   
   
   if(finalTrains.length>0){
     return res.status(200).json({availabelTrains:finalTrains})
   }else{
      return res.status(200).json({message:"No train is available,Please search for another Day!"})
   }
   
}

//check seat availability

exports.checkSeatAvailability=async(req,res)=>{
   var acSeats=0;
   var genSeats=0;
   var sleepSeats=0;
   const trainName=req.body.trainName;
   const trainId=await (await rail.findOne({name:trainName}))._id;
   const acBlocks =await acCoach.findOne({trainInfo:trainId});
   const sleepBlocks =await sleepCoach.findOne({trainInfo:trainId});
   const genBlocks =await genCoach.findOne({trainInfo:trainId});
   if(genBlocks){
      var blocks=genBlocks.blocks;
      for(block of blocks){
         for(seat of block.seats){
            if(seat.bookingStatus==false){
               genSeats+=1;
            }
         }
      }
   }
   if(acBlocks){
      var blocks=acBlocks.blocks;
      for(block of blocks){
         for(seat of block.seats){
            if(seat.bookingStatus==false){
               acSeats+=1;
            }
         }
      }
   }
   if(sleepBlocks){
      var blocks=sleepBlocks.blocks;
      for(block of blocks){
         for(seat of block.seats){
            if(seat.bookingStatus==false){
               sleepSeats+=1;
            }
         }
      }
   }
   return res.status(200).json({
      sleepSeats,
      genSeats,
      acSeats
   })
}


exports.calculateFair=async(req,res)=>{
   // console.log(req.body)
   const trainName=req.body.trainName;
   const trainId=await (await rail.findOne({name:trainName}))._id;
   const sourceStationId=await (await rail.findOne({name:trainName})).from.station;
   const fromStation=req.body.fromStation;
   const toStation=req.body.toStation;
   const fromStationId=await (await station.findOne({name:fromStation}))._id;
   const toStationId=await (await station.findOne({name:toStation}))._id;
   var acFair=0;
   var genFair=0;
   var sleepFair=0;
   const fairObj=await fair.findOne({trainName:trainId});
   if(JSON.stringify(sourceStationId)==JSON.stringify(fromStationId)){
      for(fairs of fairObj.fairToEndStation){
        if(JSON.stringify(fairs.endStation.endStationId)==JSON.stringify(toStationId)){
           acFair=fairs.endStation.acCoachFair;
           genFair=fairs.endStation.genCoachFair;
           sleepFair=fairs.endStation.sleepCoachFair;
           return res.status(200).json({genFair,sleepFair,acFair})
        }
      }
   }else{
   for(fairs of fairObj.fairToEndStation){
      if(JSON.stringify(fairs.endStation.endStationId)==JSON.stringify(fromStationId)){
         acFairForSource=fairs.endStation.acCoachFair;
         genFairForSource=fairs.endStation.genCoachFair;
         sleepFairForSource=fairs.endStation.sleepCoachFair;
         continue;
      }
      if(JSON.stringify(fairs.endStation.endStationId)==JSON.stringify(toStationId)){
         acFairForDestination=fairs.endStation.acCoachFair;
         genFairForDestination=fairs.endStation.genCoachFair;
         sleepFairForDestination=fairs.endStation.sleepCoachFair;
         break;
      }
   }
   acFair=acFairForDestination-acFairForSource;
   genFair=genFairForDestination-genFairForSource;
   sleepFair=sleepFairForDestination-sleepFairForSource;
   return res.status(200).json({
      genFair,
      sleepFair,
      acFair
   })
  }
}
