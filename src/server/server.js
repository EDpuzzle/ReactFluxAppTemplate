"use strict";

var express = require("express");
var app = express();

var compression = require("compression"),
		path = require("path"),
		methodOverride = require("method-override"),
		morgan = require("morgan"),
		bodyParser = require("body-parser"),
		cookieParser = require("cookie-parser"),
		errorhandler = require("errorhandler"),
		serveStatic = require("serve-static"),
		hbs = require("hbs"),
		parallel = require("when/parallel");

app.set("case sensitive routing", false);
app.set("port", 3000);
app.set("views", path.join(__dirname, "views"));
app.engine("html", hbs.__express);
app.set("view engine", "html");
app.use(compression());
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb",extended: true}));
// app.use(methodOverride( function (req) {
// 	if (req.body && typeof req.body === "object" && "_method" in req.body) {
// 		// look for urlencoded POST bodies and delete it
// 		var method = req.body._method;
// 		delete req.body._method;
// 		return method.toLowerCase();
// 	}
// }));
app.use(serveStatic("dist"));
// app.use(cookieParser());

app.get("/", function (req, res) {
	res.render("index");
});

app.listen(3000);