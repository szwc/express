

module.exports = function (app) {
	app.get("/process_get",function (req,res) {
		var response = {
			"name":req.query.username,
			"mima":req.query.pwd
		}
		res.end(JSON.stringify(response));
	})
}