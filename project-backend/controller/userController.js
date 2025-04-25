const User = require("../model/userModel");
const jwt = require('jsonwebtoken')
const registerUser = async(req, res)=>{
    try{
        const {name, email, password} = req.body;
        console.log(req.body)
        const user = await User(req.body);
        await user.save();
        res.json("user registered successfully")
        


    }catch(err){
        console.log(err)
        res.json("error registering user")
    }
}

const loginUser =async (req,res)=>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email})
        if(user){
            if(user.password == password){
                const token = jwt.sign({id: user._id},"jwtsecretkey")
                res.json({msg: "user login successful - backend", status: 200, token})
            }else{
                res.json({msg: "invalid password", status: 500})
            }

        }else{
            res.json({msg: "invalid user email", status: 404})
        }
 
    }catch(err){
        console.log(err)
    }
}

module.exports = {registerUser,loginUser};