
var express = require("express");
var jquery = require("jquery");
var router = require("./router.js");
var app = new express();

app.get("/",function (req,res) {
	res.send("caoni da ye");
})

app.use(express.static("public"));
app.use(express.static("views"));
router(app);

console.log(router);

app.listen(3000,function () {
	console.log("sever is running at port 3000");
});