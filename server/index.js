const express = require('express');
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const cookieParser = require("cookie-parser");
const database = require("./config/database");


const userRoutes = require("./routes/User");
const bookRoute = require("./routes/Books");

const cors = require("cors");

app.use(cors({
    origin: 'http://localhost:3000'
}));

// middlewares
app.use(express.json());
app.use(cookieParser());


app.get("/", (req, res) => {
    return res.send({
        success: true,
        message: "Your server is up and running....."
    })
})


app.use("/auth", userRoutes);
app.use("/books", bookRoute);


// db connect
database.connect();

app.listen(PORT, () => {
    console.log(`app is running at ${PORT}`);
})

