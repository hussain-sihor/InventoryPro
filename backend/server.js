const express = require("express");
const connectDB = require("./db");
const dotenv = require("dotenv").config() // TO ACCESS .ENV FILE
const bodyParser = require("body-parser") // TO ACCESS REQUEST BODY
const cors = require("cors");
const errorHandler = require("./middleware/errorMiddleware");
const cookieParser = require("cookie-parser") // TO STORE TOKENS IN COOKIES

const app = express();
const PORT = process.env.PORT || 5000;

// CONNECTING TO MONGODB
connectDB()



// MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());


// ROUTES
app.use("/api/users",require("./routes/userRoute"));
app.use("/api/products",require("./routes/productRoute"));
app.use("/api/categories",require("./routes/categoryRoute"));
app.use("/api/orders",require("./routes/orderRoute"));
app.use("/api/reminders",require("./routes/reminderRoute"));
app.get("/",(req,res)=>{
  res.status(200).send("Hello...");
})



// CUSTOM ERROR MSG
app.use(errorHandler)

app.listen(PORT,()=>{
  console.log(`Server listening on ${PORT}`)
})
