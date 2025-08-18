const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const register =async (req, res)=>{
    const {email, password, name} = req.body
    
    try{
        const hashedPassword = await bcrypt.hash(password, 5)
        const createUser = new User({
            name,
            email,
            password : hashedPassword
        })
        res.status(201).json(await createUser.save())

    }catch(err){
        res.status(500).json({message: "Server Error, some stuff is wrong from backend"})
    }
}

const login = async (req, res)=>{
    const {email, password} = req.body

    try{
        const checkUser = await User.findOne({email})
        if(!checkUser) return res.status(404).json({message: 'User not found'})

        const matchPassword = await bcrypt.compare(password, checkUser.password)
        if(!matchPassword) return res.status(400).json({message: "Invalid Password"})

        const token = jwt.sign({ id:checkUser._id}, process.env.JWT_SECRET, {expiresIn: "1h"})
        res.status(200).json({message: "Login Successful", token})

    }catch(err){
        res.status(500).json({message: 'Server Error, some stuff went bad at the backend'})
        console.log('there was this error:',err)
    }
}

module.exports = {register, login}