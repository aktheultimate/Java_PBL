const railTickets=require('../models/railTicket');
const rail=require('../models/railInfo');
const jwt=require('jsonwebtoken');

exports.getAllTickets=async(req,res)=>{
    const userToken=req.cookies.token;
    const _user=await jwt.verify(userToken,process.env.jwtKey);
    if(_user){
        const bookedBy=_user.userId;
        const allTickets=await railTickets.find({bookedBy:bookedBy});
        var tickets=[];
        for(ticket of allTickets){
            var deptDate=null;
            var arrDate=null;
            var status="Cancelled";
            await rail.findById({_id:ticket.trainInfo}).then(async (res)=>{
                if(JSON.stringify(res.from.station)==JSON.stringify(ticket.from)){
                    deptDate=await res.from.deptDate;
                }
                if(JSON.stringify(res.to.station)==JSON.stringify(ticket.to)){
                    arrDate=await res.to.arrDate;
                }
                if(!deptDate){
                    for(station of res.midStations){
                        if(JSON.stringify(station.stationId)==JSON.stringify(ticket.from)){
                            deptDate=await station.deptDate;
                            break;
                        }
                    }
                }
                if(!arrDate){
                    for(station of res.midStations){
                        if(JSON.stringify(station.stationId)==JSON.stringify(ticket.to)){
                            arrDate=await station.arrDate;
                            break;
                        }
                    }
                }
                
                if(ticket.ticketStatus=="Active"){
                    // console.log(arrDate)
                    // console.log(new Date())
                    if(arrDate<new Date()){
                        // console.log('hello')
                        status="Journey Ended"
                    }else{
                        // console.log('hey')
                        status="Active"
                    }
                }
                const obj={
                    firstName:ticket.firstName,
                    midName:ticket.midName,
                    lastname:ticket.lastName,
                    gender:ticket.gender,
                    age:ticket.age,
                    trainName:ticket.trainName,
                    from:ticket.fromName,
                    deptDate,
                    to:ticket.toName,
                    arrDate,
                    blockId:ticket.blockId,
                    seatNo:ticket.seatNo,
                    totalFair:ticket.totalFair,
                    status
                }
                tickets.push(obj);
            })

        }
        //console.log(tickets);
        return res.status(200).json({allTickets:tickets});
    }else{
        return res.status(400).json({errorMessage:"Please login to your account first!"})
    }
}


//active only
exports.getActiveTickets=async(req,res)=>{
    const userToken=req.cookies.token;
    const _user=await jwt.verify(userToken,process.env.jwtKey);
    if(_user){
        const bookedBy=_user.userId;
        const allTickets=await railTickets.find({bookedBy:bookedBy,ticketStatus:"Active"});
        var tickets=[];
        for(ticket of allTickets){
            var deptDate=null;
            var arrDate=null;
            await rail.findById({_id:ticket.trainInfo}).then((res)=>{
                if(JSON.stringify(res.from.station)==JSON.stringify(ticket.from)){
                    deptDate=res.from.deptDate;
                }
                if(JSON.stringify(res.to.station)==JSON.stringify(ticket.to)){
                    arrDate=res.to.arrDate;
                }
                if(!deptDate){
                    for(station of res.midStations){
                        if(JSON.stringify(station.stationId)==JSON.stringify(ticket.from)){
                            deptDate=station.deptDate;
                            break;
                        }
                    }
                }
                if(!arrDate){
                    for(station of res.midStations){
                        if(JSON.stringify(station.stationId)==JSON.stringify(ticket.to)){
                            arrDate=station.arrDate;
                            break;
                        }
                    }
                }
                const obj={
                    firstName:ticket.firstName,
                    midName:ticket.midName,
                    lastname:ticket.lastName,
                    gender:ticket.gender,
                    age:ticket.age,
                    trainName:ticket.trainName,
                    from:ticket.fromName,
                    deptDate,
                    to:ticket.toName,
                    arrDate,
                    blockId:ticket.blockId,
                    seatNo:ticket.seatNo,
                    totalFair:ticket.totalFair,
                    status:ticket.ticketStatus
                }
                tickets.push(obj);
            })

        }
        console.log(tickets);
        return res.status(200).json({allTickets:tickets});
    }else{
        return res.status(400).json({errorMessage:"Please login to your account first!"})
    }
}

//Cancelled only
exports.getCancelledTickets=async(req,res)=>{
    const userToken=req.cookies.token;
    const _user=await jwt.verify(userToken,process.env.jwtKey);
    if(_user){
        const bookedBy=_user.userId;
        const allTickets=await railTickets.find({bookedBy:bookedBy,ticketStatus:"Cancelled"});
        var tickets=[];
        for(ticket of allTickets){
            var deptDate=null;
            var arrDate=null;
            await rail.findById({_id:ticket.trainInfo}).then((res)=>{
                if(JSON.stringify(res.from.station)==JSON.stringify(ticket.from)){
                    deptDate=res.from.deptDate;
                }
                if(JSON.stringify(res.to.station)==JSON.stringify(ticket.to)){
                    arrDate=res.to.arrDate;
                }
                if(!deptDate){
                    for(station of res.midStations){
                        if(JSON.stringify(station.stationId)==JSON.stringify(ticket.from)){
                            deptDate=station.deptDate;
                            break;
                        }
                    }
                }
                if(!arrDate){
                    for(station of res.midStations){
                        if(JSON.stringify(station.stationId)==JSON.stringify(ticket.to)){
                            arrDate=station.arrDate;
                            break;
                        }
                    }
                }
                const obj={
                    firstName:ticket.firstName,
                    midName:ticket.midName,
                    lastname:ticket.lastName,
                    gender:ticket.gender,
                    age:ticket.age,
                    trainName:ticket.trainName,
                    from:ticket.fromName,
                    deptDate,
                    to:ticket.toName,
                    arrDate,
                    blockId:ticket.blockId,
                    seatNo:ticket.seatNo,
                    totalFair:ticket.totalFair,
                    status:ticket.ticketStatus
                }
                tickets.push(obj);
            })

        }
        // console.log(tickets);
        if(allTickets.length>0){
            return res.status(200).json({allTickets:tickets});
        }
        return res.status(200).json({successMessage:"You don,t have any cancelled ticket"})
    }else{
        return res.status(400).json({errorMessage:"Please login to your account first!"})
    }
}