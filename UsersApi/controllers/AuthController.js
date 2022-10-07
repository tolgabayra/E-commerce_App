const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const crypto = require("crypto")
const jwt = require("jsonwebtoken")

const register = async (req,res) => {
    const hash = crypto.createHash('sha256').update(req.body.password).digest('base64');


    const username = req.body.username
    const email = req.body.email
    const password = hash

    try {
        newUser = await prisma.user.create({
            data: {username: username, email: email, password: password}
        })
        if(newUser !== null){
            res.status(201).json(newUser)
        }else{
            res.status(403).json("Check your credantials")
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }


}


const login = async (req,res) => {
  const email = req.body.email
  const password = req.body.password

  try {
    const user = await prisma.user.findFirst({
        where: {
            email: email
        }
    })
    console.log(user);
    if (!user) {
        res.status(401).json("Email not found !!!")
    } 
    const dbPassword = crypto.createHash('sha256').update(password).digest('base64');
    if(user.password === dbPassword){
        const accessToken = jwt.sign({ email }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" })
        const refreshToken = jwt.sign({ email }, process.env.JWT_SECRET_KEY)
        res.cookie('access_token', accessToken, {
            origin: '*',
            httpOnly: true
          })
          res.cookie('refresh_token', refreshToken, {
            origin: '*',
            httpOnly: true
          })
          res.status(200).json(user)
    }else{
        res.status(401).json("Password is wrong!")
    }
  } catch (err) {
    res.status(500).json(err)
  }
}


const logout = (req,res) => {
    res.clearCookie('access_token');
    res.clearCookie('refresh_token');
    res.status(200).json('Logout success');
}
  

module.exports = {
    register,
    login,
    logout
}