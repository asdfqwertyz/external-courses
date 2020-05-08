const images = ["assets/img1.jpg", "assets/img2.jpg", "assets/img3.png", "assets/img4.jpg"];
const bgImage = document.getElementsByClassName('bgImage')[0];
const LEFT_ARROW_KEY = 37;
const RIGHT_ARROW_KEY = 39;
let currentIndexImage = 1;
const btnNext = document.querySelector('.button_next')
const btnPrev = document.querySelector('.button_prev')
const btnNextClick = () => {
	if (currentIndexImage >= images.length) {
		currentIndexImage = 0;
	}
	currentIndexImage++;
	bgImage.src = `${images[currentIndexImage-1]}`;
	bgImage.classList.add('bgImage-animation')
	setTimeout(() => bgImage.classList.remove('bgImage-animation'),500)
}
const btnPrevClick = () => {
	if (currentIndexImage <= 1) {
		currentIndexImage = images.length + 1;
	}
	currentIndexImage--;
	bgImage.src = `${images[currentIndexImage-1]}`;
	bgImage.classList.add('bgImage-animation')
	setTimeout(() => bgImage.classList.remove('bgImage-animation'),500)
}
const keyBtnClick = event => {
	if (event.keyCode === LEFT_ARROW_KEY) {
		btnPrevClick()
	}	
	if (event.keyCode === RIGHT_ARROW_KEY) {
		btnNextClick()
	}
}
btnNext.addEventListener('click', btnNextClick);

document.addEventListener('keydown', keyBtnClick);

btnPrev.addEventListener('click', btnPrevClick);

document.addEventListener('keydown', keyBtnClick);
