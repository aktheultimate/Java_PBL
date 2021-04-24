const user=require('../models/railUser')

const userRegister= async (req,res)=>{

try{
    // console.log(req.body)
    var isUserAlreadyExists=false;
    var isErrorInFindingUser=false;
    // console.log(password)
    // console.log(confirmPassword)
    if(req.body.password != req.body.confirmPassword){
        return res.status(400).json({errorMessage:'Confirm password is not matching'});
    }
    await user.findOne({email:req.body.email},(error,data)=>{
        if(data){
         isUserAlreadyExists=true;
        }
        if(error){
         isErrorInFindingUser=true;
        }
    })

    if(isUserAlreadyExists){
       return  res.status(400).json({
            errorMessage:'This email is already registered'
        })
    }
    if(isErrorInFindingUser){
       return res.status(500).json({
            errorMessage:'Something went wrong!Please try again!'
        })
    }

    const _user=new user({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password
    })

    await _user.save((err,data)=>{
      if(data){
         return res.status(200).json({
              successMessage:'User Registered Successfully!!',
            })
      }
      if(err){
          return res.status(500).json({
             errorMessage:'Something went wrong!Please try again!!'
          })
      }
    })
}catch(err){
    console.log(err)
    return res.status(500).json({errorMessage:'Something went wrong!Please try again!'})
}
    
}

module.exports=userRegister;