const ticket=require('../models/railTicket');
const station=require('../models/stationInfo');
const rail=require('../models/railInfo')
const jwt=require('jsonwebtoken');
const {acCoach,genCoach,sleepCoach} =require('../models/seatArrangement');

exports.bookTicket=async(req,res)=>{
    try{
        const userToken=await req.cookies.token;;
    console.log(userToken)
    if(!userToken){
        return res.status(400).json({errorMessage:"Please Login to Account!"})
    }
    const _user=jwt.verify(userToken,process.env.jwtKey);
    if(_user){
        var leaveLoop=0;
        var blockId=null;
        var seatNo=null;
        const bookedBy=_user.userId;
        const firstName=req.body.firstName;
        const midName=req.body.midName;
        const lastName=req.body.lastName;
        const gender=req.body.gender;
        const age=req.body.age;
        const coachType=req.body.coachType;
        const trainName=req.body.trainName;
        const trainInfo=await (await rail.findOne({name:trainName}))._id;
        const fromName=req.body.fromName;
        const from=(await station.findOne({name:fromName}))._id;
        const toName=req.body.toName;
        const to=(await station.findOne({name:toName}))._id;
        const totalFair=req.body.totalFair;
        if(coachType=="gen"){
            const genBlocks=await genCoach.findOne({trainInfo}).then(async (coach)=>{
                  for(block of coach.blocks){
                      if(leaveLoop){
                          break;
                      }
                      blockId=block.blockId;
                      for(seat of block.seats){
                          if(seat.bookingStatus==false){
                              seat.bookingStatus=true;
                              seatNo=seat.seatNo;
                              coach.save().then(async()=>{
                                  const _ticket=new ticket({
                                    bookedBy,
                                    firstName,
                                    lastName,
                                    midName,
                                    fromName,
                                    from,
                                    to,
                                    toName,
                                    gender,
                                    trainName,
                                    trainInfo,
                                    blockId,
                                    seatNo,
                                    totalFair,
                                    age
                                })
                                await _ticket.save((err,data)=>{
                                    if(err){
                                        console.log("Error:"+err);
                                        return res.status(500).json({errorMessage:"Something went wrong,Please try again"});
                                    }
                                        return res.status(200).json({successMessage:"Ticked Booked Successfully!!"});
                                })
                              })
                              leaveLoop=1;
                              break;
                          }
                      }
                  }
            });
        }
        if(coachType=="sleep"){
            const sleepBlocks=await sleepCoach.findOne({trainInfo}).then(async(coach)=>{
                  for(block of coach.blocks){
                      if(leaveLoop){
                          break;
                      }
                      blockId=block.blockId;
                      for(seat of block.seats){
                          if(seat.bookingStatus==false){
                              seat.bookingStatus=true;
                              seatNo=seat.seatNo;
                              coach.save().then(async()=>{
                                  const _ticket=new ticket({
                                    bookedBy,
                                    firstName,
                                    lastName,
                                    midName,
                                    fromName,
                                    from,
                                    to,
                                    toName,
                                    gender,
                                    trainName,
                                    trainInfo,
                                    blockId,
                                    seatNo,
                                    totalFair,
                                    age
                                })
                                await _ticket.save((err,data)=>{
                                    if(err){
                                        console.log("Error:"+err);
                                        return res.status(500).json({errorMessage:"Something went wrong,Please try again"});
                                    }
                                        return res.status(200).json({successMessage:"Ticked Booked Successfully!!"});
                                })
                              })
                              leaveLoop=1;
                              break;
                          }
                      }
                  }
            });
        }
        if(coachType=="ac"){
            var leaveLoop=0;
            const acBlocks=await acCoach.findOne({trainInfo}).then(async(coach)=>{
                  for(block of coach.blocks){
                      if(leaveLoop){
                          break;
                      }
                      blockId=block.blockId;
                      for(seat of block.seats){
                          if(seat.bookingStatus==false){
                              seat.bookingStatus=true;
                              seatNo=seat.seatNo;
                              coach.save().then(async()=>{
                                  const _ticket=new ticket({
                                        bookedBy,
                                        firstName,
                                        lastName,
                                        midName,
                                        fromName,
                                        from,
                                        to,
                                        toName,
                                        gender,
                                        trainName,
                                        trainInfo,
                                        blockId,
                                        seatNo,
                                        totalFair,
                                        age
                                    })
                                    await _ticket.save((err,data)=>{
                                        if(err){
                                            console.log("Error:"+err);
                                            return res.status(500).json({errorMessage:"Something went wrong,Please try again"});
                                        }
                                            return res.status(200).json({successMessage:"Ticked Booked Successfully!!"});
                                    })
                                })
                              leaveLoop=1;
                              break;
                          }
                      }
                  }
            });
        }
            
    }
 }catch{
     return res.status(400).json({errorMessage:"Something went wrong!"})
 }
}


// exports.getTickets=async(req,res)=>{
//     const userToken=req.cookies.token;
//     const _user=jwt.verify(userToken,process.env.jwtKey);
//     if(_user){
//         const userId=_user.userId;
//         const myAllTickets=await ticket.find({bookedBy:userId})
//         if(myAllTickets){
//            return res.status(200).json({myAllTickets});
//         }else{
//             return res.status(200).json({message:"No tickets Available"})
//         }
//     }else{
//         return res.status(400).json({errorMessage:"Please login to your account"})
//     }
// }

exports.cancelTicket=async(req,res)=>{
    const blockId=req.body.blockId;
    const seatNo=req.body.seatNo;
    const name=req.body.name;
    // var trainInfo;
    await rail.findOne({name:name}).then(async(train)=>{
        //trainInfo=train._id;
        if(new Date(train.from.deptDate)<Date.now()){
            return res.status(400).json({errorMessage:"Sorry,ticket can not be cancelled once train depatured from Source Station."})
        }
    //
    await ticket.findOneAndUpdate({blockId,seatNo},{
        ticketStatus:"Cancelled"
    })
    if(blockId[0]=="G"){
        await genCoach.findOne({trainInfo:train._id}).then(async(coach)=>{
            for(block of coach.blocks){
                for(seat of block.seats){
                    if(seat.seatNo==seatNo){
                        seat.bookingStatus=false;
                        break;
                    }
                }
            }
            // console.log(coach)
            // const block=coach.blocks.id(blockId);
            // // console.log(block)
            // const seat=block.seats.id(seatNo);
            // seat.bookingStatus=true;
            coach.save().then(()=>{
                return res.status(200).json({successMessage:"Ticket Cancelled Successfully"})
            })
        })
    }else if(blockId[0]=="A"){
        await acCoach.findOne({trainInfo:train._id}).then(async(coach)=>{
            for(block of coach.blocks){
                for(seat of block.seats){
                    if(seat.seatNo==seatNo){
                        seat.bookingStatus=false;
                        break;
                    }
                }
            }
            // console.log(coach)
            // const block=coach.blocks.id(blockId);
            // // console.log(block)
            // const seat=block.seats.id(seatNo);
            // seat.bookingStatus=true;
            coach.save().then(()=>{
                return res.status(200).json({successMessage:"Ticket Cancelled Successfully"})
            })
        })
    }else{
        await genCoach.findOne({trainInfo:train._id}).then(async(coach)=>{
            for(block of coach.blocks){
                for(seat of block.seats){
                    if(seat.seatNo==seatNo){
                        seat.bookingStatus=false;
                        break;
                    }
                }
            }
            // console.log(coach)
            // const block=coach.blocks.id(blockId);
            // // console.log(block)
            // const seat=block.seats.id(seatNo);
            // seat.bookingStatus=true;
            coach.save().then(()=>{
                return res.status(200).json({successMessage:"Ticket Cancelled Successfully"})
            })
        })
    }
})}

    


