const jwt = require("jsonwebtoken");
const prisma = require("../connection/prisma");
require('dotenv').config();

class User {

    static async postLogin (req,res){
        try{
            const user  = await prisma.usuarios.findUnique({
                where:{
                    userdeacess: req.body.user,
                }
            })

            console.log(user)

    
          
            res.json({ message: 'Login successful', token });

        }catch(error){
            console.log(error)
        }
    }
}

module.exports = User