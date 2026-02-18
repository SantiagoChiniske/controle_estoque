const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const prisma = require("../connection/prisma");
require('dotenv').config();

class User {


    static async createUser(req,res){
        try {

            const {namecompleto,firstname,userdeacess,password,role} = req.body
            const hashedPassword = await bcrypt.hash(password,10)
            const newUser = await prisma.usuarios.create({
                data:{
                    namecompleto,
                    firstname,
                    userdeacess,
                    passwordacess: hashedPassword,
                    tipodeacesso:role
                }
            })

            res.status(201).json(newUser)


        }catch(error){
            res.json({message:`ERROR: ${error}`}).status(500)
        }
    }
    static async postLogin (req,res){
        try{
            const {user,password} = req.body

            
            const userFound  = await prisma.usuarios.findFirst({
                where:{
                    userdeacess: user
                }
            })
             if(!userFound){
                res.send("Usuario invalido").status(500);
                return
            }

            const passwordValid = await bcrypt.compare(
            password,
            userFound.passwordacess
        )
         if(!passwordValid){
            return res.status(401).json({ message: "Senha inválida" })
        }   

        const token = jwt.sign(
            {id: userFound.id, firstname: userFound.firstname, role: userFound.tipodeacesso},
            process.env.JWT_SECRET,
            {expiresIn: "1h"}
        )
           

            res.json(token).status(201)

        }catch(error){
            console.log(error)
        }
    }

    static async validation(req,res,next){
        const authHeader = req.headers.authorization
    
        if(authHeader.includes(null)){
            return res.send("Sem token").status(500)
        }

        const token = authHeader.split(" ")[1]

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = decoded
            res.json(decoded)
            next()
        } catch (err) {
            return res.status(401).json({ message: "Token inválido" })
        }
    }
}

module.exports = User