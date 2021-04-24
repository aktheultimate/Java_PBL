const mongoose=require('mongoose')
const bcrypt=require('bcrypt');

const adminSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    midName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    hashPassword:{
        type:String,
        required:true
    }
},
   {
       timestamps:true
   }  
)

adminSchema.virtual('password')
.set(function(password){
  this.hashPassword = bcrypt.hashSync(password,10);
})

adminSchema.methods={
    Authenticate:function(password){
        return bcrypt.compareSync(password,this.hashPassword);
    }
}

module.exports=mongoose.model('admin',adminSchema);
