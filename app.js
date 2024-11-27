require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
app.get("/", (req,res) =>{
    res.send("hii i am live");
})
const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products");

app.use("/api/products",products_routes);

const start = async ()=> {
    try {
        await connectDB(process.env.MONGODB_URL);
        // app.listen(PORT, hostname, backlog)
        app.listen(PORT, () => {
           console.log(`${PORT} yes I am Connected`);
        });

    } catch (error) {
        console.log(error);
        
    }
}

start();