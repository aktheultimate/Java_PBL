const jwt=require('jsonwebtoken')
const station=require('../models/stationInfo');

exports.addStation =async(req,res)=>{
    try{
    const {name,code}=req.body;
    const adminToken=req.cookies.adminToken;
    if(adminToken){
        const admin=jwt.verify(adminToken,process.env.jwtKey);
        const addedBy=admin._id;
        const stationAlreadyAvailabel=station.findOne($or[{code},{name}]);
        if(stationAlreadyAvailabel){
            return res.status(400).json({errorMessage:"Station Already availabel with this code or name!"})
        }

        const _station=new station({
            name,
            code,
            addedBy
        });

        await _station.save((err,data)=>{
            if(err){
                console.log(err);
                return res.status(500).json({errorMessage:"Error in saving Data"});
            }
            if(data){
                return res.status(200).json({successMessage:"Data added successfully"});
            }
        })

    }else{
        return res.status(400).json({successMessage:"You need Admin account login to access this page!"})
    }
}catch{
    return res.status(500).json({errorMessage:"Something went wrong!Please try again!!"})
}
}