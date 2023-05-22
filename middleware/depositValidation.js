const yup = require('yup')
const depositorsSchema=yup.object({
    publicKey:yup.string(),
    network:yup.string().oneOf(['solana','polygon','etherium','tron','btc']),    
    amount:yup.number(),       
    token:yup.boolean(),

}).required()

module.exports={depositorsSchema}