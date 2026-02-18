const prisma = require("../connection/prisma.js")

class Estoque {
     static async getProductsAll (req,res) {
        try{
             const produtos = await prisma.estoque.findMany()

            res.send(produtos).status(200)

        }catch(error){
            res.send(error).status(500)

        }
    }
    static async getProduct (req,res){
        const { id } = req.params

        try{
            const produto = await prisma.estoque.findUnique({
                where:{
                    id: Number(id)
                }
            })

            res.send(produto)

        }catch(error){
            res.send(error).status(500)
        }

    }
    static async createNewProduct (req,res){
        try{
                    const { nome, quantidade, categoria } = req.body
        const produto = await  prisma.estoque.create({
        data:{
            nome,
            quantidade:Number(quantidade),
            categoria,
            ultima_modificao:new Date(),
            data_criacao:new Date(),
            status:true,
        }
    })
     return res.status(201).json(produto)

        }catch(error){
            res.send(error).status(500)
        }

    }
    static async editProduct(req,res){

        try{
            const {id}  = req.params
        const {nome,quantidade} = req.body

        const produto = await prisma.estoque.update({
            where:{
                id: Number(id)
            },
            data:{
                nome,
                quantidade:  Number(quantidade),
                ultima_modificao: new Date(),
            }
        })
        res.status(200).send(produto)
            
        }catch(error){
            res.send(error).status(404)
        }
        
    }

    static async deleteProduct (req,res){
        try{
            const { id } = req.params

                await prisma.estoque.delete({
                    where: {
                        id: Number(id)
                    }
                })

                return res.status(200).json({
                    message: "Produto removido com sucesso"
                })


        }catch(error){
            res.send("Erro ao deletar! ").status(500)
        }
    }
}

module.exports =Estoque;