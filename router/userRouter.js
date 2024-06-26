const {createUser, getoneuser, updateuser}=require("../controller/usercontroller")

const router=require("express").Router()
const validator = require("../controller/validator")

router.post("/newuser",validator, createUser)
router.get("/getoneuser/:id", getoneuser )
router.put("/update/:id", validator, updateuser)

module.exports=router