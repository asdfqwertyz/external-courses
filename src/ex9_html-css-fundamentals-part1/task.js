let submit = document.getElementsByClassName('submit')[0];
let formFieldHint = document.getElementsByClassName('formFieldHint');
let formFieldHintTriangle = document.getElementsByClassName('formFieldHint-triangle');
webSite.onchange = function() {
	if (webSite.value != '') {
		formFieldHint[1].style.backgroundColor = 'green';
		formFieldHint[1].style.color = 'white'
		formFieldHintTriangle[1].style.borderRightColor = 'green';
		console.log('sdaw')
	} else {
		formFieldHint[1].style.backgroundColor = '#d45252';
		formFieldHint[1].style.color = '#fccfcc'
		formFieldHintTriangle[1].style.borderRightColor = '#d45252';
	}
}
email.onchange = function() {
	if (email.value != '') {
		formFieldHint[0].style.backgroundColor = 'green';
		formFieldHint[0].style.color = 'white'
		formFieldHintTriangle[0].style.borderRightColor = 'green';
		console.log('sdaw')
	} else {
		formFieldHint[0].style.backgroundColor = '#d45252';
		formFieldHint[0].style.color = '#fccfcc'
		formFieldHintTriangle[0].style.borderRightColor = '#d45252';
	}
}