const cors = require("cors")
const express = require('express');
const  router = require('./router/router');
const app = express();


const corsOptions = {
    origin: ["http://localhost:5174","http://172.18.0.3:5174","http://localhost:5173"]
}

app.use(cors(corsOptions))

app.use(express.json())
app.use(router);

module.exports = app;