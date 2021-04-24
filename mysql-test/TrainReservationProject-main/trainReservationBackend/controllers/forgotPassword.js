const user=require('../models/railUser');
const bcrypt=require('bcrypt');
const nodemailer=require('nodemailer');
const { IdentityPoolClient } = require('google-auth-library');

const sendEmail= async (receiverEmailAddress,password)=>{

    
    //console.log(password);
    let transporter = await nodemailer.createTransport({
     
     service:"gmail",
      
      auth: {
        user: 'ajaybedre64@gmail.com', // generated ethereal user
        pass: 'bqzyofgnrxmjwueb', // generated ethereal password
     }
    })
    
  let info = await transporter.sendMail({
      
      from: '"BookMyTicket" <ajaybedre64@gmail.com>', // sender address
      to: receiverEmailAddress, // list of receivers
      subject: "Password Update", // Subject line
      text: password // plain text body
      
  },(err,data)=>{
    if(err){
      return res.status(500).json({errorMessage:"Something went wrong,Please try again!"})
    }
    //console.log("Message sent: ", data.messageId);
  })

  
};

exports.forgotPassword=async(req,res)=>{
    const email=req.body.email;
    const _user=await user.findOne({email});
        if(_user){
          const password=Math.random().toString(16).substr(2,8);
          //console.log(password)
          const hash_password=bcrypt.hashSync(password,10);
          const response= await user.findByIdAndUpdate(_user._id,{hash_password})
          if(response){
              
              sendEmail(email,password);

              return res.status(200).json({successMessage:"New password is sent on email"})

              
          }
          else{
              return res.status(500).json({failureMessage:'Unable to update Password!please try again!!'})
          }
        }
        else{
            return res.status(400).json({failureMessage:"Email is not registered with us! Please check your email !"})
        }
}
