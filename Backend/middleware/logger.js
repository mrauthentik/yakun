const jwt = require('jsonwebtoken')

const auth = (req,res,next) => {
    const token = req.headers.authorization?.split(' ')[1]
    if(!token) return res.status(401).json({message: "No token found"})

    try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
    }catch(err){
        return res.status(500).json({message: "Server Error, something is wrong with the jwt"})
    }
}

module.exports = auth

