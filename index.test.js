const axios = require("axios");

function search_product_test() {
	axios
		.post("https://us-central1-handown.cloudfunctions.net/products/search", {
			product_name: "tshirt",
		})
		.then((res) => {
			console.log("Test successful");
		})
		.catch((err) => {
			console.log("Test failed");
		});
}

function add_product_test() {
	axios
		.post("https://us-central1-handown.cloudfunctions.net/products/add", {
			product_name: "phone",
			product_price: "499",
			product_rating: "4",
			selled_id: 5,
		})
		.then((res) => {
			console.log("Test successful");
		})
		.catch((err) => {
			console.log("Test failed");
		});
}

function buy_product_test() {
	axios
		.post("https://us-central1-handown.cloudfunctions.net/products/orders", {
			customer_id: 3,
			product_id: 5,
		})
		.then((res) => {
			console.log("Test successful");
		})
		.catch((err) => {
			console.log("Test failed");
		});
}

function get_orders_test() {
	axios
		.get("https://us-central1-handown.cloudfunctions.net/products/orders")
		.then((res) => {
			console.log("Test successful");
		})
		.catch((err) => {
			console.log("Test failed");
		});
}

function get_products_test() {
	axios
		.get("https://us-central1-handown.cloudfunctions.net/products/")
		.then((res) => {
			console.log("Test successful");
		})
		.catch((err) => {
			console.log("Test failed");
		});
}

search_product_test();
add_product_test();
buy_product_test();
get_orders_test();
get_products_test();
