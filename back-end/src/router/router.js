const express = require('express')
const Estoque = require("../controller/estoque.js")
const User = require("../controller/user.js")
const router = express.Router();
const prisma = require("../connection/prisma.js")

router.get("/",(req,res)=>{
    res.send("Hello World");
});

router.get("/estoque",Estoque.getProductsAll)
router.get("/estoque/:id",Estoque.getProduct)
router.post("/adicionar/produto",Estoque.createNewProduct)
router.put("/editar/produto/:id",Estoque.editProduct)
router.delete("/deletar/produto/:id",Estoque.deleteProduct)


router.post("/user",User.postLogin)
module.exports = router;