const user=require('../models/railUser');
const jwt=require('jsonwebtoken');
//require('dotenv').config();
//const cookieParser = require('cookie-parser');
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client('39201974300-gdd9d519fe0n27hrl7di0ls5nqik4hej.apps.googleusercontent.com/');


exports.userlogin=async (req,res)=>{
    try{
        const {email,password}=req.body;
        
        const _user=await user.findOne({email:email})
        if(_user){
            if(_user.Authenticate(password)){
               var token =await jwt.sign({userId:_user._id, firstName:_user.firstName, lastName:_user.lastName, email:_user.email}, process.env.jwtKey,{expiresIn:'365d'});
               if(token){
                 console.log(token)
                 res.cookie('token',token,{httpOnly:true} );
               }
               
               const {_id,email} =_user;
               return res.status(200).json({token,user:{_id,email}})
    
            }else{
                return res.status(400).json({errorMessage:'Incorrect Email or Password!'})
            }
        }
        else{
            return res.status(400).json({errorMessage:'User dont exists! Please register to login.'})
        }
    }catch(err){
        return res.status(500).json({errorMessage:'Something went wrong! Please try again!'})
    }
}

exports.usergooglelogin= async(req,res)=>{
   
async function verify() {
  var isErrorInFindingUser=false;
  var isUserAlreadyExists=false;
  const ticket = await client.verifyIdToken({
      idToken:req.body.token,
      audience:'nl518oep6vlcfbejvs1uu3807954536fa0kirb0kcl.apps.googleusercontent.com', 
  });


  const payload = ticket.getPayload();
  if(payload.email_varified){
    await user.findOne({email:payload.email},(error,_user)=>{
        if(_user){
         isUserAlreadyExists=true;
        }
        if(error){
         isErrorInFindingUser=true;
        }
    })
    if(isUserAlreadyExists){
        
        var token = jwt.sign({userId:_user._id, firstName:_user.firstName, lastName:_user.lastName, email:_user.email}, process.env.jwtKey,{expiresIn:'365d'});
        res.cookie('token',token,{ maxAge: 365*24*36000 } );
        const {_id,email} =_user;
        return res.status(200).json({token,user:{_id,email}})
        
    }
    if(isErrorInFindingUser){
        res.status(500).json({
            errorMessage:'Something went wrong!Please try again!'
        })
    }

}
const newUser=new user({
    firstName:payload.given_name,
    lastName:payload.family_name,
    email:payload.email,
    password:payload.email
})

await newUser.save((err,data)=>{
  if(data){
    var token = jwt.sign({userId:_user._id, firstName:_user.firstName, lastName:_user.lastName, email:_user.email}, process.env.jwtKey,{expiresIn:'365d'});
    res.cookie('token',token,{ maxAge: 365*24*36000 } );
    const {_id,email} =_user;
    return res.status(200).json({token,user:{_id,email}})
  }
  if(err){
      res.status(500).json({
         errorMessage:'Something went wrong!Please try again!'
      })
  }
})
  
}
verify()
.catch((err)=>{
    return res.status(500).json({errorMessage:'Error in Email verification!Please try again!'});
});

}
