const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const leftSlide = document.querySelector('.left-slide');
const rightSlide = document.querySelector('.right-slide');
const sliderContainer = document.querySelector('.slider-container');
const slidesCount = rightSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

leftSlide.style.top = `-${(slidesCount - 1) * 100}vh`;

upButton.addEventListener('click', () => {
	changeSlide('up');
});

downButton.addEventListener('click', () => {
	changeSlide('down');
});

function changeSlide(direction) {
	if (direction === 'up') {
		activeSlideIndex++
		if (activeSlideIndex === slidesCount) {
			activeSlideIndex = 0;
		}
	} else if (direction === 'down') {
		activeSlideIndex--
		if (activeSlideIndex < 0) {
			activeSlideIndex = slidesCount - 1;
		}
	}

	const height = sliderContainer.clientHeight;

	rightSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;

	leftSlide.style.transform = `translateY(${activeSlideIndex * height}px)`;
}