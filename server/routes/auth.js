const express = require('express')
const router = express.Router()
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

router.get('/', (req, res) => res.send("ROUTER USE"))

//@route POST api/auth/register
//@des Register user
//@access Public

router.post('/register', async (req, res) => {
    const { username, password } = req.body

    if (!username || !password)
        return res.status(400).json({ sucess: false, message: 'missing username or password' })
    try {
        //check user
        const user = await User.findOne({ username })
        if (user)
            return res.status(400).json({ sucess: false, message: 'Username already taken' })

        //All good
        const hashedPassword = await argon2.hash(password)
        const newUser = new User({ username, password: hashedPassword })
        await newUser.save()

        //Return token
        const accessToken = jwt.sign({ UserId: newUser._id }, process.env.ACCESS_TOKEN_SECRET)

        res.json({ sucess: true, message: "user  create sucessfuly", accessToken })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ sucess: false, message: 'check server' })
    }
})

//@route POST api/auth/register
//@des Register user
//@access Public

router.post('/login', async (req, res) => {
    const { username, password } = req.body

    if (!username || !password)
        return res.status(400).json({ sucess: false, message: 'missing username or password' })

    try {
        //check user
        const user = await User.findOne({ username })
        if (!user)
            return res.status(400).json({ sucess: false, message: 'incorrect username or password' })

        //user found
        const passWordValid = await argon2.verify(user.password, password)
        if (!passWordValid)
            return res.status(400).json({ sucess: false, message: 'incorrect username or password' })

        //all good
        //Return token
        const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET)
        res.json({ sucess: true, message: "Login sucess", accessToken })

    }
    catch (error) {
        console.log(error.message)
        res.status(500).json({ sucess: false, message: 'check server' })
    }


})

module.exports = router