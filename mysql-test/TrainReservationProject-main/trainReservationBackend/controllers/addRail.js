const rail=require('../models/railInfo');
const {genCoach,acCoach,sleepCoach}=require('../models/seatArrangement');
const station=require('../models/stationInfo');
const jwt=require('jsonwebtoken');
const {DateTime}=require('luxon');
const fair =require('../models/fair')

exports.addRail=async (req,res)=>{
    try{
    //adding train
    console.log(req.body)
    var sblocks=[];
    var ablocks=[];
    var gblocks=[];
    var sseats=[];
    var aseats=[];
    var gseats=[];
    var midStations=[];
    // var priceArray=[];
    var newPriceArray=[];
    const adminToken=req.cookies.adminToken;
    //console.log(adminToken)
    if(adminToken){
        const admin=jwt.verify(adminToken,process.env.jwtKey);
        // priceArray=req.body.priceArray;
        const fromStation=(await station.findOne({name:req.body.fromStation}))._id;
        const fromStationName=req.body.fromStation;
        const toStation=(await station.findOne({name:req.body.toStation}))._id;
        const toStationName=req.body.toStation;
        const tArrTime=req.body.tArrTime;
        const tArrDate=req.body.tArrDate;
        const fDeptTime=req.body.fDeptTime;
        const fDeptDate=req.body.fDeptDate;
        const fDate=`${fDeptDate}T${fDeptTime}`;
        const tDate=`${tArrDate}T${tArrTime}`;
        const from={
            station:fromStation,
            stationName:fromStationName,
            deptDate:fDate
        }
      
        const to={
            station:toStation,
            stationName:toStationName,
            arrDate:tDate
        }
        
        const tempMidStations=await (req.body.midStations).filter((midStation)=>(midStation.endStationName!=toStationName));
        
        for(const midStation of tempMidStations){
            const stationId=(await station.findOne({name:midStation.endStationName}))._id;
               const midStationName=midStation.endStationName;
               const arrTime=midStation.arrTime;
               const arrDate=midStation.arrDate;
               const deptTime=midStation.deptTime;
               const deptDate=midStation.deptDate;
               midStations.push({
                    station:{
                        stationId,
                        stationName:midStationName,
                        arrDate:`${arrDate}T${arrTime}`,
                        deptDate:`${deptDate}T${deptTime}`
                    }
                    
                });
        }
        
        const railway=new rail({
            name:req.body.name,
            number:req.body.number,
            addedBy:admin._id,
            from,
            midStations,
            to
        });

        await railway.save(async (err,train)=>{
        if(err){
            console.log(err);
            return res.status(500).json({errorMessae:"Error in Saving data,Please check again!"})
        }
        //adding fair
            for(const price of req.body.midStations){
                console.log(midStations);
                console.log(price);
                var endStationName=price.endStationName;
                var endStationId=(await station.findOne({name:endStationName}))._id;
                var genCoachFair=price.genCoachFair;
                var acCoachFair=price.acCoachFair;
                var sleepCoachFair=price.sleepCoachFair;
                newPriceArray.push({
                 endStation:{
                  endStationId,
                  genCoachFair,
                  acCoachFair,
                  sleepCoachFair
                 }
                })
            }
            const ticket=new fair({
                trainName:train._id,
                fairToEndStation:newPriceArray
            });
            await ticket.save((err,data)=>{
                if(err){
                   console.log(err);
                   return res.status(500).json({errorMessage:"something Went wrong,Please try again!"})
                }
            })


        //adding seats

        const sleepCoachCount=req.body.sleepCoachCount;
        const genCoachCount=req.body.genCoachCount;
        const acCoachCount=req.body.acCoachCount;

        if(sleepCoachCount>0){
            for(var i=1;i<=72;i++){
                sseats.push({
                    seatNo:i
                })
            }
            for(var j=1;j<=sleepCoachCount;j++){
                sblocks.push({
                    blockId:`S${j}`,
                    seats:sseats
                })
             }
             const sleep=new sleepCoach({
                trainInfo:train._id,
                blocks:sblocks
            })
            sleep.save((err,sleep)=>{
                if(err){
                    console.log(err);
                    return res.status(500).json({errorMessage:"Error in Saving data,Please check again!"})
                }
            })
        }

        if(acCoachCount>0){
            for(var i=1;i<=40;i++){
                aseats.push({
                    seatNo:i
                })
            }
            for(var j=1;j<=acCoachCount;j++){
                ablocks.push({
                    blockId:`a${j}`,
                    seats:aseats
                })
             }
             const ac=new acCoach({
                trainInfo:train._id,
                blocks:ablocks
            })
            ac.save((err,ac)=>{
                if(err){
                    console.log(err);
                    return res.status(500).json({errorMessage:"Error in Saving data,Please check again!"})
                }
            })
        }

        if(genCoachCount>0){
            for(var i=1;i<=200;i++){
                gseats.push({
                    seatNo:i
                })
            }
            for(var k=1;k<=genCoachCount;k++){
                gblocks.push({
                    blockId:`G${k}`,
                    seats:gseats
                })
             }

             const gen=new genCoach({
                trainInfo:train._id,
                blocks:gblocks
            })
            gen.save((err,gen)=>{
                if(err){
                    console.log(err);
                    return res.status(500).json({errorMessage:"Error in Saving data,Please check again!"})
                }
            })
        }

            return res.status(200).json({successMessage:'Data added successfully!'})
        })
        }else{
            return res.status(400).json({errorMessage:'Please login as admin!'})
        }
    }catch{
        res.status(500).json({errorMessage:"Something went wrong,Please try again!!"})
    }
    
    
}