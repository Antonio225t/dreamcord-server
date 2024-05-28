import express from "express";
import helmet from "helmet";

const app = express();

// Modules
app.use(helmet());


app.get("/", (req, res) => {
    res.send("<h1>HEY PAESANOS</h1><h2>IT'S THE SUPER MARIO BROTHERS SUPER SHOW!</h2>")
})

// Listen
app.listen(2251, () => {
    console.log("DreamCord server started at http://localhost:2251 !")
})