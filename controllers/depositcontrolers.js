const Deposits=require('../models/depositmodel')
const {ValidationError}=require('yup')
const {depositersSchema}=require('../middleware/depositValidation')
const deposits=async(req,res)=>{
       const depositOn=await (Deposits.create({
        publicKey:req.body.publicKey,
        network:req.body.network,
        amount:req.body.amount,
        token:req.body.token
   
   
        
        
     
}))
        res.status(200).json(depositOn)
        console.log(depositOn)
try {
       const data =depositersSchema.validateSync(depositOn,{abortEarly:false,stripUnknown:true})
        return res.status(200).json({data,message:"Sucess"})
} catch (e) {
        e=ValidationError
       const error = e
res.status(422).json({message:error})

}}

module.exports={deposits}

