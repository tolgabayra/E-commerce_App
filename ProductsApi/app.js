const express = require("express")
const app = express()
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")
const dotenv = require("dotenv")
const mongoose = require("mongoose")




const productRoute = require("./routes/product")
const shoesRoute = require("./routes/shoes")
const watchesRoute = require("./routes/watches")

dotenv.config()

dotenv.config()
mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("MongoDB Connection Is Successfull!");
    })
    .catch((err) => {
        console.log(err);
    })

app.use(cors());
app.use(express.json());
app.use(helmet())
app.use(morgan("dev"))
app.use(express.static('public')); 
app.use('/uploads', express.static('uploads'));

app.use("/api/v1/products", productRoute)
app.use("/api/v1/shoes", shoesRoute)
app.use("/api/v1/watches", watchesRoute)



app.listen(process.env.APP_PORT || 8000, () => {
    console.log("Products Api Server Is Running...");
})