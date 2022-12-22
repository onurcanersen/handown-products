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

app.post("/search", (req, res) => {
	const product_name = req.body.product_name;
	const sql =
		"SELECT * FROM products WHERE product_name LIKE '%" + product_name + "%'";
	con.query(sql, [product_name], (err, rows, fields) => {
		if (!err) res.status(200).send(rows);
	});
});

app.post("/add", (req, res) => {
	const product_name = req.body.product_name;
	const product_price = req.body.product_price;
	const product_rating = req.body.product_rating;
	const seller_id = req.body.seller_id;

	const sql =
		"INSERT INTO products (product_name, product_price, product_rating, seller_id, product_status) VALUES (?, ?, ?, ?, 'unsold')";
	con.query(
		sql,
		[product_name, product_price, product_rating, seller_id],
		(err, rows, fields) => {
			if (!err) res.status(200).send("successfull");
		}
	);
});

app.post("/orders", (req, res) => {
	const order = req.body;
	const customer_id = order.customer_id;
	const product_id = order.product_id;
	const sql =
		"INSERT INTO orders(customer_id, product_id, status) values (?, ?, 'purchase')";
	con.query(sql, [customer_id, product_id], (err, rows, fields) => {
		if (!err) res.status(200).send("Order received successfully");
		else res.status(500).send(err);
	});
});

app.get("/orders", (req, res) => {
	const sql = "SELECT * FROM orders";
	con.query(sql, (err, rows, fields) => {
		if (!err) res.status(200).send(rows);
		else res.status(500).send(err);
	});
});

app.get("/", (req, res) => {
	const sql = "SELECT * FROM products";
	con.query(sql, (err, rows, fields) => {
		if (!err) res.status(200).send(rows);
		else res.status(500).send(err);
	});
});

//app.listen(8080, () => console.log(`Listening on port 8080!`));

exports.products = app;
