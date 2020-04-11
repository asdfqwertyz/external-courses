const objectImages = {
	'first':'url("assets/img1.jpg")',
	2:'url("assets/img2.jpg")',
	3:'url("assets/img3.png")',
	'last':'url("assets/img4.jpg")'
};
let elem = document.getElementsByClassName('slider__img');
elem[0].style.backgroundSize = "100% 100%";
let i = 0;
let arrImgs = [];
for (let el in objectImages) {
	arrImgs.push(el);
}
let btnNext = document.getElementsByClassName("button_next");
btnNext[0].onclick = function() {
	if (i >= arrImgs.length) {
		i = 0;
	}
	i++;
	elem[0].style.backgroundImage = "none";
	elem[0].style.backgroundImage = objectImages[arrImgs[i-1]];
}
let btnPrev = document.getElementsByClassName("button_prev");
btnPrev[0].onclick = function() {
	if (i <= 1) {
		i = arrImgs.length + 1;
	}
	i--;
	elem[0].style.backgroundImage = "none";
	elem[0].style.backgroundImage = objectImages[arrImgs[i-1]];
}