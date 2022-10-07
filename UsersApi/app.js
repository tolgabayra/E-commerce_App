const express = require("express")
const app = express()
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")

const AuthRoute = require("./routes/auth")






app.use(cors({origin: true, credentials: true}));
app.use(express.json());
app.use(helmet())
app.use(morgan("dev"))


app.use("/api/v1/auth", AuthRoute)




app.listen(process.env.APP_PORT || 9000, () => {
    console.log("Users Api Server Is Running...");
})