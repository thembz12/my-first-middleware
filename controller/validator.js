const joiValidator = require ("@hapi/joi")


const validator = async (req,res,next)=>{
const schema = joiValidator.object({

    studentName: joiValidator.string().required().min(3).regex(/^[A-Za-z]+(?: [A-Za-z]+)*$/)

    .trim()
    .message({
        "string.pattern.base":"name must only contains lettera and space",
        "string.empty":"name cannot be empty",
        "string.min":"student name must be at least three characters long"
    }),
    address:joiValidator.string().required(),
    age:joiValidator.number().required().min(18).integer().message({
        "number.min":"user cannot be below 18 years"
    }),
    phoneNumber:joiValidator.string().regex(/^\d{11}$/).message('phone number must be exactly 11 digits'),
    gender:joiValidator.string().required().valid("male","female"),
    state:joiValidator.string().required().regex(/^[A-Za-z]+$/)
})
    const {error} = await schema.validate(req.body)
    return error? res.status(400).json(error.details):next() 


}

module.exports= validator