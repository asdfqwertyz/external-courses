const tasksLists = document.getElementsByClassName('task-list');
const selectListItem = document.getElementsByClassName('task-list-select__item');
const getTasks = function(list) {
	const array = [];
	for (let i = 0; i < list.length; i++) {
		const obj = {};
		Object.defineProperties(obj, {
			'id': {
				value: `task${i+1}`
			},
			'name': {
				value: list[i].innerText
			}
		}
		)
			array.push(obj)
			delete obj
	}
	return array
}
const dataMock = [
	{
		title: 'backlog',
		issues: []
	},
	{
		title: 'ready',
		issues: []
	},
	{
		title: 'in Progress',
		issues: []
	},
	{
		title: 'finished',
		issues: []
	}
]
for (let indexList = 0; indexList < dataMock.length; indexList++) {
	dataMock[indexList].issues = getTasks(tasksLists[indexList].children)
}
const localStorage = [
	{
		title: 'backlog',
		issues: []
	},
	{
		title: 'ready',
		issues: []
	},
	{
		title: 'in Progress',
		issues: []
	},
	{
		title: 'finished',
		issues: []
	}
]
let isEmptyTaskName = false;
let isOpenDropDownList = false;
const createOptionsList = function(currentList) {
	for (let indexList = 1; indexList < dataMock.length; indexList++) {
		if (currentList.firstElementChild.innerHTML === dataMock[indexList].title[0].toUpperCase() + dataMock[indexList].title.slice(1)) {
			let selectListLength = currentList.children[1].children[1].children[0].childElementCount
			for (let j = 0; j < selectListLength; j++) {
				currentList.children[1].children[1].children[0].children[0].remove()
			}
			for (let i = 0; i < tasksLists[indexList-1].childElementCount; i++) {
				currentList.children[1].children[1].children[0].appendChild(document.createElement('li')).setAttribute('class', 'task-list-select__item');
				currentList.children[1].children[1].children[0].children[i].innerText = tasksLists[indexList-1].children[i].innerText
			}
		}
	}
}
const removeOptionsList = function(currentList) {
	let countListElement;
	countListElement = currentList.children[1].children[0].childElementCount;
	for (let i = 0; i < countListElement; i++) {
		currentList.children[1].children[0].children[0].remove()
	}
}
const btnSelectCardClick = function() {
	canChoiceAction = true;
	this.offsetParent.children[1].children[1].style.display = 'block';
	createOptionsList(this.offsetParent)
	for (let indexList = 1; indexList < dataMock.length; indexList++) {
		if (this.offsetParent.children[0].innerText === dataMock[indexList].title[0].toUpperCase() + dataMock[indexList].title.slice(1)) {
			this.offsetParent.children[1].scrollTo(0, tasksLists[indexList].childElementCount*100);	
		}
	}
}
const openDropDownList = function(list) {
	createOptionsList(list.offsetParent);
	for (let i = 0; i < list.offsetParent.children[1].children[1].children[0].childElementCount; i++) {
		list.offsetParent.children[1].children[1].children[0].children[i].style.display = 'block'	
	}
	isOpenDropDownList = true;
	for (let indexList = 1; indexList < dataMock.length; indexList++) {
		if (list.innerText === dataMock[indexList].title[0].toUpperCase() + dataMock[indexList].title.slice(1)) {
			list.offsetParent.children[1].scrollTo(0, tasksLists[1].childElementCount*1000);
		}
	}
}
const closeDropDownList = function() {
	for (let i = 0; i < selectListItem.length; i++) {
		selectListItem[i].style.display = 'none'
	}
	isOpenDropDownList = false;
}
const selectCard = function(event) {
	if (event.target === document.getElementsByClassName('task-list-select')[0] && !isOpenDropDownList 
		|| event.target === document.getElementsByClassName('task-list-select')[1] && !isOpenDropDownList
		|| event.target === document.getElementsByClassName('task-list-select')[2] && !isOpenDropDownList) {
		openDropDownList(event.target.offsetParent.children[0])
	} else {
		closeDropDownList()
		if (event.target.className === selectListItem[0].className) {
			event.path[3].children[0].appendChild(document.createElement('li')).setAttribute('class', 'task-list__item');
			for (let indexList = 1; indexList < dataMock.length; indexList++) {
				if (this.offsetParent.children[0].innerText === dataMock[indexList].title[0].toUpperCase() + dataMock[indexList].title.slice(1)) {	
					event.path[3].children[0].children[tasksLists[indexList].childElementCount-1].innerText = event.target.innerText
					document.getElementsByClassName('task-list-select')[indexList-1].style.display = 'none'
					if (indexList < 3) {
						document.getElementsByClassName('add-card')[indexList+1].classList.remove('add-card_nohover', 'add-card_noactive')
						document.getElementsByClassName('add-card')[indexList+1].disabled = false;	
					}
					break;
				}
			}
			removeOptionsList(event.path[3])
		}
	}
	for (let indexList = 1; indexList < dataMock.length; indexList++) {
		if (event.path[4].children[0].innerText === dataMock[indexList].title[0].toUpperCase() + dataMock[indexList].title.slice(1)) {
				outer:	for (let i = 0; i < tasksLists[indexList-1].childElementCount; i++) {
				if (tasksLists[indexList-1].children[i].innerText === event.target.innerText) {
					tasksLists[indexList-1].children[i].remove()
					for (let j = 0; j < dataMock[indexList-1].issues.length; j++) {
						if (dataMock[indexList-1].issues[j].name === event.target.innerText) {
							dataMock[indexList-1].issues.splice(j,1)
							dataMock[indexList].issues.push(getTasks(tasksLists[indexList].children)[localStorage[indexList].issues.length + dataMock[indexList].issues.length]);
							break outer;
						}
					}
					for (let j = 0; j < localStorage[indexList-1].issues.length; j++) {
						if (localStorage[indexList-1].issues[j].name === event.target.innerText) {
							localStorage[indexList-1].issues.splice(j,1)
							localStorage[indexList].issues.push(getTasks(tasksLists[indexList].children)[localStorage[indexList].issues.length + dataMock[indexList].issues.length]);
							break outer;
						}
					}
				}
			}
			if (tasksLists[indexList-1].childElementCount === 0) {
				document.getElementsByClassName('add-card')[indexList].classList.add('add-card_nohover', 'add-card_noactive');
				document.getElementsByClassName('add-card')[indexList].disabled = true;
			} else {
				document.getElementsByClassName('add-card')[indexList].classList.remove('add-card_nohover', 'add-card_noactive');
				document.getElementsByClassName('add-card')[indexList].disabled = false;
			}
		}
	}
}
const btnAddCardClick = function() {
	if (isEmptyTaskName === true) {
		return
	}
	isEmptyTaskName = false;
	document.getElementsByClassName('inputNewCard')[0].classList.remove('inputNewCard-invalid')
	canChoiceAction = true;
	tasksLists[0].appendChild(document.createElement('li')).setAttribute('class', 'task-list__item')
	this.offsetParent.children[1].scrollTo(0, tasksLists[0].childElementCount*100);
	document.getElementsByClassName('inputNewCard')[0].style.display = 'block';
	document.getElementsByClassName('inputNewCard')[0].focus();
}

const inputValidTask = function() {
	if (document.getElementsByClassName('inputNewCard')[0].value === '') {
		document.getElementsByClassName('inputNewCard')[0].classList.add('inputNewCard-invalid')
		isEmptyTaskName = true;
		return
	} 
	isEmptyTaskName = false;
	document.getElementsByClassName('inputNewCard')[0].classList.remove('inputNewCard-invalid')
	tasksLists[0].children[tasksLists[0].childElementCount-1].innerText = document.getElementsByClassName('inputNewCard')[0].value;
	localStorage[0].issues.push(getTasks(tasksLists[0].children)[tasksLists[0].children.length-1])
	document.getElementsByClassName('inputNewCard')[0].style.display = 'none';
	document.getElementsByClassName('inputNewCard')[0].value = '';
	canChoiceAction = false;
	document.getElementsByClassName('add-card')[1].classList.remove('add-card_nohover', 'add-card_noactive')
	document.getElementsByClassName('add-card')[1].disabled = false;
}
const keyPressEnter = function(event) {
	if (event.code === 'Enter' && canChoiceAction) {
		inputValidTask();
	}
}
const inputFocusOut = function() {
	if (canChoiceAction) {
		inputValidTask();
	}
}
const inputChangeValue = function() {
	if (document.getElementsByClassName('inputNewCard')[0].value === '') {
		document.getElementsByClassName('inputNewCard')[0].classList.add('inputNewCard-invalid')
	} else {
		document.getElementsByClassName('inputNewCard')[0].classList.remove('inputNewCard-invalid')
	}
}
for (let indexList = 0; indexList < dataMock.length; indexList++) {
	if (indexList === 0) {
		document.getElementsByClassName('inputNewCard')[indexList].addEventListener('keypress', keyPressEnter);
		document.getElementsByClassName('inputNewCard')[indexList].addEventListener('focusout', inputFocusOut);
		document.getElementsByClassName('inputNewCard')[indexList].addEventListener('input', inputChangeValue);
		document.getElementsByClassName('add-card')[indexList].addEventListener('click', btnAddCardClick)
	} else {
		document.getElementsByClassName('add-card')[indexList].addEventListener('click', btnSelectCardClick)
		document.getElementsByClassName('task-list-select')[indexList-1].addEventListener('click', selectCard)
	}
}
