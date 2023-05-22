const mongoose = require ('mongoose');
const depositSchema=mongoose.Schema(
{
    publicKey:{
        type:String,
        required:[true,'Please enter a valid public key']
    },
    
    network:{
        type:String,
        required:[true,'Please enter a valid Network']
    },
    
    amount:{
        type:Number,
        required:[true,'please enter a valid ammount']
    },
    
    
    token:{
        type:Boolean,
        required:[true,'Please Give me a valid token']
    }

},
{
    timestamps:true,
}
)
module.exports=mongoose.model('Deposits',depositSchema)