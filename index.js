const mysql = require("mysql");
const express = require("express");
const bodyparser = require("body-parser");

var app = express();
app.use(bodyparser.json());

var con = mysql.createConnection({
	host: "34.123.29.215",
	user: "root",
	password: "Pf1pVU2/|54x&j^+",
	database: "handown",
});

con.connect((err) => {
	if (!err) console.log("Database connection established successfully");
	else console.log("Database connection failed");
});

app.get("/", (req, res) => {
	const sql = "SELECT * FROM products";
	con.query(sql, (err, rows, fields) => {
		if (!err) res.status(200).send(rows);
		else res.status(500).send(err);
	});
});

exports.products = app;
