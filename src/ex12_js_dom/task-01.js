const arrayOfImages = ['url("assets/img1.jpg")','url("assets/img2.jpg")','url("assets/img3.png")','url("assets/img4.jpg")'];
const slider = document.getElementsByClassName('slider__img')[0];
let i = 2;
const btnNext = document.getElementsByClassName("button_next")[0];
const btnNextClick = function() {
	if (i >= arrayOfImages.length) {
		i = 0;
	}
	i++;
	slider.style.backgroundImage = arrayOfImages[i-1];
}
const btnPrev = document.getElementsByClassName("button_prev")[0];
const btnPrevClick = function() {
	if (i <= 1) {
		i = arrayOfImages.length + 1;
	}
	i--;
	slider.style.backgroundImage = arrayOfImages[i-1];
}
btnNext.addEventListener('click', btnNextClick);
btnPrev.addEventListener('click', btnPrevClick);
