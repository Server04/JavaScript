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
// var myTable = document.querySelector("#title-order-x table");
// console.log(myTable);
