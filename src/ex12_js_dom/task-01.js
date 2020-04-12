const arrayOfImages = ['url("assets/img1.jpg")','url("assets/img2.jpg")','url("assets/img3.png")','url("assets/img4.jpg")'];
let slider = document.getElementsByClassName('slider__img')[0];
slider.style.backgroundImage = 'url(assets/img2.jpg)'
slider.style.backgroundSize = "100% 100%";
let i = 2;
let btnNext = document.getElementsByClassName("button_next")[0];
btnNext.onclick = function() {
	if (i >= arrayOfImages.length) {
		i = 0;
	}
	i++;
	slider.style.backgroundImage = "none";
	slider.style.backgroundImage = arrayOfImages[i-1];
}
let btnPrev = document.getElementsByClassName("button_prev")[0];
btnPrev.onclick = function() {
	if (i <= 1) {
		i = arrayOfImages.length + 1;
	}
	i--;
	slider.style.backgroundImage = "none";
	slider.style.backgroundImage = arrayOfImages[i-1];
}
