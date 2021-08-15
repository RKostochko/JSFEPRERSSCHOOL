// Clock
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

	const days = date.getDay();
	const dayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const dayToday = dayArr[days];
	document.querySelector(".day").innerHTML = dayToday;

	const month = date.getMonth();
	const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
	const monthToday = monthArr[month];
	document.querySelector(".month").innerHTML = monthToday;

	const dateMonth = date.getDate();
	document.querySelector(".date__month").innerHTML = dateMonth;

	const year = date.getFullYear();
	document.querySelector(".year").innerHTML = year;
})

// Themes
document.querySelector('.radio__container').addEventListener('change', (event) => {
	if (event.target.nodeName === 'INPUT') {
		document.querySelector('.clock__container').classList.remove('dark', 'light');
		document.querySelector('.clock__container').classList.add(event.target.value);
	}
})