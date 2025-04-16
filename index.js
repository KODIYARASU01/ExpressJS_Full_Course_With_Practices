import express from "express";
import dotenv from "dotenv";

//Configure dotenv data
dotenv.config();

//Initialize Server
let app = express();

let PORT = process.env.PORT || 3002;

//Home route - Get Method
app.get("/", (req, res) => {
  res.send("Server is Running!");
});

//App Listening :
app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
