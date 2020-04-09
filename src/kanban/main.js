let userMenu = document.getElementsByClassName('user-menu')[0];
let header = document.querySelector('.header');
let arrow = document.querySelector('.arrow')
let scrollMenu = document.createElement('div');
let firstLink = document.createElement('a')
let secondLink = document.createElement('a')
let thirdLink = document.createElement('a')
firstLink.append('My account');
secondLink.append('My tasks');
thirdLink.append('Log out');
let countClickMenu = 1;
	userMenu.onclick = function() {
	arrow.style.transform = "rotate(180deg)"
	countClickMenu++;
	header.append(scrollMenu);
	if (countClickMenu % 2 === 1) {
		scrollMenu.remove()
		secondLink.style.boxShadow = '0 0 0px black'
		firstLink.style.boxShadow = '0 0 0px black';
		thirdLink.style.boxShadow = '0 0 0px black';
		arrow.style.transform = "rotate(0deg)"
	}
	scrollMenu.className = "scroll-menu";
	scrollMenu.style.boxSizing = 'border-box';
	scrollMenu.style.width = '152px';
	scrollMenu.style.height = '200px';
	scrollMenu.style.backgroundColor = '#0067A3';
	scrollMenu.style.position = 'absolute';
	scrollMenu.style.left = '1000px';
	scrollMenu.style.top = '56px';
	scrollMenu.style.fontSize = '18px';
	scrollMenu.style.fontFamily = 'Roboto';
	scrollMenu.style.fontWeight = 'normal';
	scrollMenu.style.fontStyle = 'normal';
	firstLink.style.color = 'white';
	firstLink.style.textDecoration = "none";
	firstLink.style.display = 'block';
	firstLink.style.paddingTop = '11%';
	scrollMenu.append(firstLink)
	firstLink.href = '#';
	firstLink.style.height = '50px';
	firstLink.style.paddingLeft = '10px';
	firstLink.style.opacity = '0.8';
	firstLink.onclick = function() {
		firstLink.style.boxShadow = '0 0 5px black';
		secondLink.style.boxShadow = '0 0 0px black';
		thirdLink.style.boxShadow = '0 0 0px black';
	}
	firstLink.onmouseover = function() {
		firstLink.style.backgroundColor = '#04476E';
		firstLink.style.opacity = '1'
	}
	firstLink.onmouseout = function() {
		firstLink.style.backgroundColor = 'transparent';
		firstLink.style.opacity = '0.8'
	}
	secondLink.style.color = 'white';
	secondLink.style.paddingTop = '11%';
	scrollMenu.append(secondLink)
	secondLink.style.display = 'block';
	secondLink.href = '#';
	secondLink.style.height = '50px';
	secondLink.style.paddingLeft = '10px';
	secondLink.style.textDecoration = "none";
	secondLink.onclick = function() {
		secondLink.style.boxShadow = '0 0 5px black'
		firstLink.style.boxShadow = '0 0 0px black';
		thirdLink.style.boxShadow = '0 0 0px black';
	}
	secondLink.onmouseover = function() {
		secondLink.style.backgroundColor = '#04476E';
		secondLink.style.opacity = '1'
	}
	secondLink.onmouseout = function() {
		secondLink.style.backgroundColor = 'transparent';
		secondLink.style.opacity = '0.8'
	}
	thirdLink.style.color = 'white';
	scrollMenu.append(thirdLink)
	thirdLink.style.display = 'block';
	thirdLink.href = '#';
	thirdLink.style.paddingLeft = '10px';
	thirdLink.style.height = '50px';
	thirdLink.style.paddingTop = '11%';
	thirdLink.style.textDecoration = "none";
	thirdLink.onclick = function() {
		secondLink.style.boxShadow = '0 0 0px black'
		firstLink.style.boxShadow = '0 0 0px black';
		thirdLink.style.boxShadow = '0 0 5px black';
	}
	thirdLink.onmouseover = function() {
		thirdLink.style.backgroundColor = '#04476E';
		thirdLink.style.opacity = '1'
	}
	thirdLink.onmouseout = function() {
		thirdLink.style.backgroundColor = 'transparent';
		thirdLink.style.opacity = '0.8'
	}
	isOpenMenu = true;
}
module.exports = userMenu.onclick