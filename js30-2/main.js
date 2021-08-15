const deg = 6;
const hr = document.querySelector('#hr');
const sec = document.querySelector('#sec');

setInterval(() => {
	let date = new Date();
	let hh = date.getHours() * 30;
	let mm = date.getMinutes() * deg;
	let ss = date.getSeconds() *deg;

	hr.style.transform = `rotateZ(${hh + (mm/12)}deg)`;
	min.style.transform = `rotateZ(${mm}deg)`;
	sec.style.transform = `rotate(${ss}deg)`;
	
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();

	const clock = hours + ":" + minutes + ":" + seconds;
	document.querySelector(".electronic__clock").innerHTML = clock;
})