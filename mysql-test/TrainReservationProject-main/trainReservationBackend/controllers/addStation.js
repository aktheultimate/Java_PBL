
const station =require('../models/stationInfo');
const jwt =require('jsonwebtoken');

exports.addStation=async (req,res)=>{
    console.log(req.body)
    const name=req.body.name;
    const code=req.body.code;
    const adminToken=req.cookies.adminToken;
    console.log(req.cookies.adminToken)
    if(!adminToken){
        return res.status(400).json({errorMessage:"Please login as admin to access this Page!"})
    }
    const admin=jwt.verify(adminToken,process.env.jwtKey);
    //console.log(admin);
    const newStation=new station({
        name,
        code,
        addedBy:admin._id
    })

    await newStation.save((err,newStation)=>{
        if(err){
            //console.log(err);
            return res.status(500).json({errorMessage:"Something went wrong,Please try again!!"})
        }
        return res.status(200).json({successMessage:"Station added Successfully!"})
    });
}