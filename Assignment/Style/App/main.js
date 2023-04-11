const endTime = new Date("2023-04-14 00:00:00").getTime();
const countdown = setInterval(() => {
	const now = new Date().getTime();
	const distance = endTime - now;
	const hours = Math.floor(distance / (1000 * 60 * 60));
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);
	document.getElementById(
		"countdown"
	).innerHTML = `Flash Sale: ${hours} gio ${minutes} phut ${seconds} giay`;
	if (distance < 0) {
		clearInterval(countdown);
		document.getElementById("countdown").innerHTML =
			"Flash sale da ket thuc!";
	}
}, 1000);
///
var count_1 = 0;
var count_2 = 0;
var count_3 = 0;
var bill = [];

function addProduct(x) {
	if (x == 1) {
		var quantity_1 = document.getElementById("quantity-1");
		var total_product_1 = document.getElementById("total-product-1");
		count_1 += 1;
		quantity_1.innerHTML = count_1;
		var price_1 = 17490000 * count_1;
		bill.push(17490000);
		total_product_1.innerHTML =
			price_1.toLocaleString("vi-VN", {
				useGrouping: true,
				maximumFractionDigits: 0,
			}) + " VND";
	} else if (x == 2) {
		var quantity_2 = document.getElementById("quantity-2");
		var total_product_2 = document.getElementById("total-product-2");
		count_2 += 1;
		quantity_2.innerHTML = count_2;
		var price_2 = 30190000 * count_2;
		bill.push(30190000);
		total_product_2.innerHTML =
			price_2.toLocaleString("vi-VN", {
				useGrouping: true,
				maximumFractionDigits: 0,
			}) + " VND";
	} else {
		var quantity_3 = document.getElementById("quantity-3");
		var total_product_3 = document.getElementById("total-product-3");
		count_3 += 1;
		quantity_3.innerHTML = count_3;
		var price_3 = 62990000 * count_3;
		bill.push(62990000);
		total_product_3.innerHTML =
			price_3.toLocaleString("vi-VN", {
				useGrouping: true,
				maximumFractionDigits: 0,
			}) + " VND";
	}
}
function removeProduct(x) {
	if (x == 1) {
		var index = bill.indexOf(17490000);
		if (index !== -1) {
			bill.splice(index, 1);
			var quantity_1 = document.getElementById("quantity-1");
			var total_product_1 = document.getElementById("total-product-1");
			count_1 -= 1;
			quantity_1.innerHTML = count_1;
			///fix
			var result_1 = [];
			for (var i = 0; i < bill.length; i++) {
				if (bill[i] === 17490000) {
					result_1.push(bill[i]);
				}
			}
			var sum = 0;
			for (var i = 0; i < result_1.length; i++) {
				sum += result_1[i];
			}
			var price_1 = sum;
			total_product_1.innerHTML =
				price_1.toLocaleString("vi-VN", {
					useGrouping: true,
					maximumFractionDigits: 0,
				}) + " VND";
			//fix
		}
	} else if (x == 2) {
		var index = bill.indexOf(30190000);
		if (index !== -1) {
			bill.splice(index, 1);
			var quantity_2 = document.getElementById("quantity-2");
			var total_product_2 = document.getElementById("total-product-2");
			count_2 -= 1;
			quantity_2.innerHTML = count_2;
			var result_2 = [];
			for (var i = 0; i < bill.length; i++) {
				if (bill[i] === 30190000) {
					result_2.push(bill[i]);
				}
			}
			var sum = 0;
			for (var i = 0; i < result_2.length; i++) {
				sum += result_2[i];
			}
			var price_2 = sum;
			total_product_2.innerHTML =
				price_2.toLocaleString("vi-VN", {
					useGrouping: true,
					maximumFractionDigits: 0,
				}) + " VND";
		}
	} else {
		var index = bill.indexOf(62990000);
		if (index !== -1) {
			bill.splice(index, 1);
			var quantity_3 = document.getElementById("quantity-3");
			var total_product_3 = document.getElementById("total-product-3");
			count_3 -= 1;
			quantity_3.innerHTML = count_3;
			var result_3 = [];
			for (var i = 0; i < bill.length; i++) {
				if (bill[i] === 62990000) {
					result_3.push(bill[i]);
				}
			}
			var sum = 0;
			for (var i = 0; i < result_3.length; i++) {
				sum += result_3[i];
			}
			var price_3 = sum;
			total_product_3.innerHTML =
				price_3.toLocaleString("vi-VN", {
					useGrouping: true,
					maximumFractionDigits: 0,
				}) + " VND";
		}
	}
}
function total() {
	var sum = 0;
	for (var i = 0; i < bill.length; i++) {
		sum += bill[i];
	}
	var total_money = document.getElementById("total-money");
	total_money.innerHTML =
		sum.toLocaleString("vi-VN", {
			useGrouping: true,
			maximumFractionDigits: 0,
		}) + " VND";
}

setInterval(total, 100);
const form = document.getElementById("customerForm");
const fullName = document.getElementById("fullName");
const gmail = document.getElementById("gmail");
const phoneNumber = document.getElementById("numberPhone");
const checkName = document.getElementById("error-name");
const checkPhone = document.getElementById("error-numberPhone");
const checkMail = document.getElementById("error-email");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	if (fullName.value === "") {
		checkName.innerHTML = "Vui long nhap ten!";
	} else {
		checkName.innerHTML = "";
	}
	if (gmail.value === "") {
		checkMail.innerHTML = "Vui long nhap email!";
	} else {
		checkMail.innerHTML = "";
	}
	if (phoneNumber.value === "") {
		checkPhone.innerText = "Vui long nhap so dien thoai!";
	} else {
		checkPhone.innerText = "";
	}
	if (
		fullName.value !== "" &&
		gmail.value !== "" &&
		phoneNumber.value !== ""
	) {
		alert("Gui thanh cong!");
	}
});
