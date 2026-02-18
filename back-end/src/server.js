require("dotenv").config()
const  app = require("./app.js")
const port = 3000;

app.listen(port,()=>{
        console.log(`Server rodando, http://localhost:${port}`)
})