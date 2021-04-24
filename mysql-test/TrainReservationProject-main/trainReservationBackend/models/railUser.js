const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const railUserSchema=new mongoose.Schema({

    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    hash_password:{
        type:String,
        required:true
    }
},
{
    timestamps:true
});

railUserSchema.virtual("password")
.set(function(password){
    this.hash_password=bcrypt.hashSync(password,10);
});

railUserSchema.methods={
    Authenticate:function(password){
        return bcrypt.compareSync(password,this.hash_password);
    }
}


const railUser=mongoose.model('railUser',railUserSchema);

module.exports=railUser;