
const admin  =require('../models/admin')
const bcrypt=require('bcrypt');
const nodemailer=require('nodemailer');
const jwt=require('jsonwebtoken');


const sendEmail= async (receiverEmailAddress,password)=>{

    // create reusable transporter object using the default SMTP transport

    let transporter = await nodemailer.createTransport({
      service: "gmail",
      //port: 587,
      //secure: false, // true for 465, false for other ports
      auth: {
        user: 'ajaybedre64@gmail.com', // generated ethereal user
        pass: 'bqzyofgnrxmjwueb', // generated ethereal password
     }
    })
    // send mail with defined transport object
    let info = await transporter.sendMail({
    from: '"BookMyTicket" <ajaybedre64@gmail.com>', // sender address
    to: receiverEmailAddress, // list of receivers
    subject: "Password Update", // Subject line
    text: password, // plain text body
    //html: "<b>Hello world?</b>", // html body
  })

  console.log("Message sent: ", info.messageId);
};

exports.adminRegister = async(req,res)=>{
    try{
        var isAdminAlreadyExists=false;
        var isErrorInFindingAdmin=false;
        if(req.body.password !== req.body.confirmPassword){
            return res.status(400).json({errorMessage:'Confirm password is not matching'});
        }
        await admin.findOne({email:req.body.email},(error,data)=>{
            if(data){
             isAdminAlreadyExists=true;
            }
            if(error){
             isErrorInFindingAdmin=true;
            }
        })
    
        if(isAdminAlreadyExists){
           return  res.status(400).json({
                errorMessage:'This email is already registered'
            })
        }
        if(isErrorInFindingAdmin){
           return res.status(500).json({
                errorMessage:'Something went wrong!Please try again!'
            })
        }
    
        const _admin=new admin({
            firstName:req.body.firstName,
            midName:req.body.midName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:req.body.password
        })
    
        await _admin.save((err,data)=>{
          if(data){
             return res.status(200).json({
                  successMessage:'Admin Registered Successfully!!',
                })
          }
          if(err){
            //   console.log(err)
              return res.status(500).json({
                 errorMessage:'Something went wrong!Please try again!!'
              })
          }
        })
    }catch(err){
        return res.status(500).json({errorMessage:'Something went wrong!Please try again!!!'})
    }
}

exports.adminLogin=async(req,res)=>{
    try{
        const {email,password}=req.body;
        
        const _admin=await admin.findOne({email:email});
        // console.log("hey");
        if(_admin){
            // console.log("heyy");
            if(_admin.Authenticate(password)){
               var token = await jwt.sign({_id:_admin._id, firstName:_admin.firstName, lastName:_admin.lastName, email:_admin.email,midName:_admin.midName}, process.env.jwtKey,{expiresIn:'365d'});
               if(token){
                //  console.log("token")
                res.cookie('adminToken', token,{httpOnly:true} );
               }
               
               const {_id,email} =_admin;
               //return res.json({"mes":"hel"})
              return res.status(200).json({token,admin:{_id,email}})
    
            }else{
                return res.status(400).json({errorMessage:'Incorrect Email or Password!'})
            }
        }
        else{
            return res.status(400).json({errorMessage:'Admin dont exists! Please register to login.'})
        }
    }catch(err){
        return res.status(500).json({errorMessage:'Something went wrong! Please try again!'})
    }
}

exports.adminLogout=async(req,res)=>{
    res.clearCookie("adminToken");
    res.status(200).json({successMessage:'Logged out successfully'})
}

exports.forgotPassword=async(req,res)=>{
    console.log(req.body)
    const email=req.body.email;
    const _admin=await admin.findOne({email});
        if(_admin){
          const password=Math.random().toString(16).substr(2,8);
          const hashPassword=bcrypt.hashSync(password,10);
          const response= await admin.findByIdAndUpdate(_admin._id,{hashPassword})
          if(response){
              //semding email to user
              sendEmail(email,password);
              return res.status(200).json({successMessage:"New password is sent on email"});
              
          }
          else{
              return res.status(500).json({errorMessage:'Unable to update Password!please try again!!'})
          }
        }
        else{
            return res.status(400).json({errorMessage:"Email is not registered with us! Please check your email !"})
        }
}

exports.updatePassword = async(req,res)=>{

    const {email,oldPassword,newPassword,confirmNewPassword}=req.body;
    if(newPassword!=confirmNewPassword){
        return res.status(300).json({errorMessage:"Confirm Password is not matching with Password!!"})
    }
 //    const hashPassword=await bcrypt.compareSync(oldPassword,10);
 //    const newHashPassword=await bcrypt.hashSync(newPassword,10);
    const _admin=await admin.findOne({email});
    if(_admin){
 
       if(_admin.Authenticate(oldPassword)){
           const hashPassword=await bcrypt.hashSync(newPassword,10);
           const response=await admin.findByIdAndUpdate(_admin._id,{hashPassword})
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

