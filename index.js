// const https = require("https");
const express = require("express");

var PORT = process.env.PORT || 4000;

const app = express();

const server = require("http").createServer(app);

server.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});

app.use(express.json()); // to support JSON-encoded bodies

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Hello World",
  });
});

app.post("/new-account", (req,res) => {
    console.log(req.body);


    // database 
    // push details to database

    return res.status(200).json({
        message: "New Account Created"

    });
})

app.delete("/delete-account", (req,res) => {
    console.log(req.body);  

    // database
})

app.put("/update-account", (req,res) => {
    console.log(req.body);  

    // database
}
)
