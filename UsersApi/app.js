const express = require("express")
const app = express()
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")





app.use(cors());
app.use(express.json());
app.use(helmet())
app.use(morgan("dev"))




app.listen(process.env.APP_PORT || 9000, () => {
    console.log("Users Api Server Is Running...");
})