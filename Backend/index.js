const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const route = require('./routes/route')
const middleware = require('./middleware/logger')
require('dotenv').config();

const app = express()
app.use(cors()) // allows the frontend to connect
app.use(express.json()) //this allows to parse json bodies

app.use('/api/auth/', route)

//Protected Route for our dashboard with a auth middleware

app.get('/dashboard', middleware, (req,res)=> {
    res.json({Message:"Welcome to your dashboard", user: req.user})
})

//Connect to our MongoDB

mongoose.connect(process.env.MONGOOSE_URI)
.then(()=> {console.log('MongoDB connected ✅✅')
    app.listen(process.env.PORT, ()=>{
        console.log(`Server running on port http://localhost:${process.env.PORT} 🚀`)
    })
})
.catch(err => console.error('MongoDB connection error:', err))