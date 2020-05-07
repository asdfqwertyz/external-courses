const images = ["assets/img1.jpg", "assets/img2.jpg", "assets/img3.png", "assets/img4.jpg"];
const bgImage = document.getElementsByClassName('bgImage')[0];
const leftArrow = 37;
const rightArrow = 39;
let index = 1;
const btnNext = document.getElementsByClassName("button_next")[0];
const btnPrev = document.getElementsByClassName("button_prev")[0];
const btnNextClick = () => {
	if (index >= images.length) {
		index = 0;
	}
	index++;
	bgImage.src = `${images[index-1]}`;
	bgImage.classList.add('bgImage-animation')
	setTimeout(() => bgImage.classList.remove('bgImage-animation'),1000)
}
const btnPrevClick = () => {
	if (index <= 1) {
		index = images.length + 1;
	}
	index--;
	bgImage.src = `${images[index-1]}`;
	bgImage.classList.add('bgImage-animation')
	setTimeout(() => bgImage.classList.remove('bgImage-animation'),1000)
}
const keyBtnClick = function(event) {
	if (event.keyCode === leftArrow) {
		btnPrevClick()
	}	
	if (event.keyCode === rightArrow) {
		btnNextClick()
	}
}
btnNext.addEventListener('click', btnNextClick);
document.addEventListener('keydown', keyBtnClick);
btnPrev.addEventListener('click', btnPrevClick);
document.addEventListener('keydown', keyBtnClick);
