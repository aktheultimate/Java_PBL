const user=require('../models/railUser')
const bcrypt=require('bcrypt');

exports.updatePassword = async(req,res)=>{

   const {email,oldPassword,newPassword,confirmNewPassword}=req.body;
   if(newPassword!=confirmNewPassword){
       return res.status(300).json({errorMessage:"Confirm Password is not matching with Password!!"})
   }
//    const hashPassword=await bcrypt.compareSync(oldPassword,10);
//    const newHashPassword=await bcrypt.hashSync(newPassword,10);
   const _user=await user.findOne({email});
   if(_user){

      if(_user.Authenticate(oldPassword)){
          const hash_password=await bcrypt.hashSync(newPassword,10);
          const response=await user.findByIdAndUpdate(_user._id,{hash_password})
          if(response){
              return res.status(200).json({successMessage:"Password updated successfully!!"})
          }else{
              return res.status(500).json({errorMessage:"Something wrong! Please try again!"})
          }
      }else{
          return res.status(300).json({errorMessage:"wrong Password!!"})
      }
      
    }
    
}