 const express =require("express");
const app = express();

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/frontend");
//app.use(express.static(__dirname + "/frontend"));

});
app.listen(3000, function () {
    console.log("Server is running on port 3000");

});
    