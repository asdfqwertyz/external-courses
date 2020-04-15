const images = ["assets/img1.jpg", "assets/img2.jpg", "assets/img3.png", "assets/img4.jpg"];
const slider = document.getElementById('slider__img');
slider.setAttribute("style", `background-image: url('${images[0]}')`);
let index = 2;
const btnNext = document.getElementsByClassName("button_next")[0];
const btnPrev = document.getElementsByClassName("button_prev")[0];
const btnNextClick = function() {
	if (index >= images.length) {
		index = 0;
	}
	index++;
	slider.style.backgroundImage = `url('${images[index-1]}')`;
}
const btnPrevClick = function() {
	if (index <= 1) {
		index = images.length + 1;
	}
	index--;
	slider.style.backgroundImage = `url('${images[index-1]}')`;
}
btnNext.addEventListener('click', btnNextClick);
btnPrev.addEventListener('click', btnPrevClick);
