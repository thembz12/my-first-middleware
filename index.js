// const express=require(`express`);

// const app=express();

// const mongoose=require(`mongoose`);

// const port=2121

// app.use(express.json());

// const user=new mongoose.Schema({
//     names:{type:String,required:[true,`required`]},
//     stack:{type:String,required:[true,`stack is required`]},
//     sex:{type:String,required:[true],Enum:["male" ,"female"]}
// });

// mongoose.connect("mongodb+srv://chigbatapaskilo:U7EGYE2an3fSDkEG@cluster0.68kt8vo.mongodb.net/").then(()=>{
// console.log(`connection to db successful`)
// }).catch((error)=>{
// console.log(error`error connecting to database` );
// })

// const userModel=mongoose.model("secondMongoCodebase",user)
// app.get("/",(req,res)=>{
//     res.status(200).json("app is running")
// })



// app.post("/createuser",async(req,res)=>{
//     try {
//       const  {names,stack,sex}=req.body

//       const data={names,stack,sex}

//        if (sex !="male" && sex !="female") {
//         return res.status(400).json(`invalid sex`)
//        } 
//       const createdUser=await userModel.create(data)
//       res.status(201).json({message:`new user created`,data:createdUser})

//     } catch (error) {
//         res.status(500).json(error.message)
//     }
// })

// app.listen(port,()=>{
//     console.log(`app is listening to port${port}`)
//})