const tasksLists = document.getElementsByClassName('task-list');
const btnAddCard = document.getElementsByClassName('add-card')[0];
const btnSelectCardfromBacklog = document.getElementsByClassName('add-card')[1];
const btnSelectCardfromReady = document.getElementsByClassName('add-card')[2];
const btnSelectCardfromInProgress = document.getElementsByClassName('add-card')[3];
const inputNewCard = document.getElementsByClassName('inputNewCard')[0];
const selectListCardfromBacklog = document.getElementsByClassName('task-list-select')[0];
const selectListCardfromReady = document.getElementsByClassName('task-list-select')[1];
const selectListCardfromInProgress = document.getElementsByClassName('task-list-select')[2];
const selectListItem = document.getElementsByClassName('task-list-select__item');
const htmlTasksFinished = document.getElementsByClassName('tasks_finished')[0];
const htmlTasksActive = document.getElementsByClassName('tasks_active')[0];
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
		issues: getTasks(tasksLists[0].children)
	},
	{
		title: 'ready',
		issues: getTasks(tasksLists[1].children)
	},
	{
		title: 'inProgress',
		issues: getTasks(tasksLists[2].children)
	},
	{
		title: 'finished',
		issues: getTasks(tasksLists[3].children)
	}
]
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
		title: 'inProgress',
		issues: []
	},
	{
		title: 'finished',
		issues: []
	}
]
let isEmptyTaskName = false;
let isOpenDropDownList = false;
let finishedTasks = tasksLists[3].childElementCount
let activeTasks = tasksLists[0].childElementCount + tasksLists[1].childElementCount + tasksLists[2].childElementCount
htmlTasksFinished.innerText += ` ${finishedTasks}`
htmlTasksActive.innerText += ` ${activeTasks}`
const createOptionsList = function(currentList) {
	let currentIndexList;
	switch(currentList.firstElementChild.innerHTML) {
		case 'Ready':
		currentIndexList = 0;
		break;
		case 'In Progress':
		currentIndexList = 1;
		break;
		case 'Finished':
		currentIndexList = 2;
		break;
	}
	let selectListLength = currentList.children[1].children[1].children[0].childElementCount
	for (let j = 0; j < selectListLength; j++) {
		currentList.children[1].children[1].children[0].children[0].remove()
	}
	for (let i = 0; i < tasksLists[currentIndexList].childElementCount; i++) {
		currentList.children[1].children[1].children[0].appendChild(document.createElement('li')).setAttribute('class', 'task-list-select__item');
		currentList.children[1].children[1].children[0].children[i].innerText = tasksLists[currentIndexList].children[i].innerText
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
	switch(this.offsetParent.children[0].innerText) {
		case 'Ready':
			this.offsetParent.children[1].scrollTo(0, tasksLists[1].childElementCount*100);
			break;
		case 'In Progress':
			this.offsetParent.children[1].scrollTo(0, tasksLists[2].childElementCount*100);
			break;
		case 'Finished':
			this.offsetParent.children[1].scrollTo(0, tasksLists[3].childElementCount*100);
		break;
	}
}
const openDropDownList = function(list) {
	for (let i = 0; i < list.childElementCount; i++) {
		list.children[i].style.display = 'block'
	}
	isOpenDropDownList = true;
	switch(list.offsetParent.offsetParent.children[0].innerText) {
		case 'Ready':
			list.offsetParent.offsetParent.children[1].scrollTo(0, tasksLists[1].childElementCount*1000);
			break;
		case 'In Progress':
			list.offsetParent.offsetParent.children[1].scrollTo(0, tasksLists[2].childElementCount*1000);
			break;
		case 'Finished':
			list.offsetParent.offsetParent.children[1].scrollTo(0, tasksLists[3].childElementCount*1000);
		break;
	}
}
const closeDropDownList = function() {
	for (let i = 0; i < selectListItem.length; i++) {
		selectListItem[i].style.display = 'none'
	}
	isOpenDropDownList = false;
}
const selectCard = function(event) {
	if (event.target === selectListCardfromBacklog && !isOpenDropDownList || event.target === selectListCardfromReady
	 && !isOpenDropDownList || event.target === selectListCardfromInProgress && !isOpenDropDownList) {
		openDropDownList(event.target.children[0])
	} else {
		closeDropDownList()
		if (event.target.className === selectListItem[0].className) {
			event.path[3].children[0].appendChild(document.createElement('li')).setAttribute('class', 'task-list__item');
			switch(this.offsetParent.children[0].innerText) {
				case 'Ready':
					event.path[3].children[0].children[tasksLists[1].childElementCount-1].innerText = event.target.innerText
					selectListCardfromBacklog.style.display = 'none'
					btnSelectCardfromReady.classList.remove('add-card_nohover', 'add-card_noactive')
					btnSelectCardfromReady.disabled = false;
				break;
				case 'In Progress':
					event.path[3].children[0].children[tasksLists[2].childElementCount-1].innerText = event.target.innerText
					selectListCardfromReady.style.display = 'none'
					btnSelectCardfromInProgress.classList.remove('add-card_nohover', 'add-card_noactive')
					btnSelectCardfromInProgress.disabled = false;
				break;
				case 'Finished':
					event.path[3].children[0].children[tasksLists[3].childElementCount-1].innerText = event.target.innerText
					selectListCardfromInProgress.style.display = 'none'
					htmlTasksFinished.innerText = `Finished tasks: ${++finishedTasks}`
				break;
			}
			removeOptionsList(event.path[3])
		}
	}
	switch(event.path[4].children[0].innerText) {
		case 'Ready':
		outerReady:	for (let i = 0; i < tasksLists[0].childElementCount; i++) {
				if (tasksLists[0].children[i].innerText === event.target.innerText) {
					tasksLists[0].children[i].remove()
					for (let j = 0; j < dataMock[0].issues.length; j++) {
						if (dataMock[0].issues[j].name === event.target.innerText) {
							dataMock[0].issues.splice(j,1)
							dataMock[1].issues.push(getTasks(tasksLists[1].children)[localStorage[1].issues.length + dataMock[1].issues.length]);
							break outerReady;
						}
					}
					for (let j = 0; j < localStorage[0].issues.length; j++) {
						if (localStorage[0].issues[j].name === event.target.innerText) {
							localStorage[0].issues.splice(j,1)
							localStorage[1].issues.push(getTasks(tasksLists[1].children)[localStorage[1].issues.length + dataMock[1].issues.length]);
							break outerReady;
						}
					}
				}
			}
			if (tasksLists[0].childElementCount === 0) {
				btnSelectCardfromBacklog.classList.add('add-card_nohover', 'add-card_noactive');
				btnSelectCardfromBacklog.disabled = true;
			} else {
				btnSelectCardfromBacklog.classList.remove('add-card_nohover', 'add-card_noactive');
				btnSelectCardfromBacklog.disabled = false;
			}
		break;
		case 'In Progress':
		outerInProgress:	for (let i = 0; i < tasksLists[1].childElementCount; i++) {
				if (tasksLists[1].children[i].innerText === event.target.innerText) {
					tasksLists[1].children[i].remove()
					for (let j = 0; j < dataMock[1].issues.length; j++) {
						if (dataMock[1].issues[j].name === event.target.innerText) {
							dataMock[1].issues.splice(j,1)
							dataMock[2].issues.push(getTasks(tasksLists[2].children)[localStorage[2].issues.length + dataMock[2].issues.length]);
							break outerInProgress;
						}
					}
					for (let j = 0; j < localStorage[1].issues.length; j++) {
						if (localStorage[1].issues[j].name === event.target.innerText) {
							localStorage[1].issues.splice(j,1)
							localStorage[2].issues.push(getTasks(tasksLists[2].children)[localStorage[2].issues.length + dataMock[2].issues.length]);
							break outerInProgress;
						}
					}
				}
			}
			if (tasksLists[1].childElementCount === 0) {
				btnSelectCardfromReady.classList.add('add-card_nohover', 'add-card_noactive')
				btnSelectCardfromReady.disabled = true;
			} else {
				btnSelectCardfromReady.classList.remove('add-card_nohover', 'add-card_noactive')
				btnSelectCardfromReady.disabled = false;
			}
		break;
		case 'Finished':
		outerFinished:	for (let i = 0; i < tasksLists[2].childElementCount; i++) {
				if (tasksLists[2].children[i].innerText === event.target.innerText) {
					tasksLists[2].children[i].remove()
					for (let j = 0; j < dataMock[2].issues.length; j++) {
						if (dataMock[2].issues[j].name === event.target.innerText) {
							dataMock[2].issues.splice(j,1)
							dataMock[3].issues.push(getTasks(tasksLists[3].children)[localStorage[3].issues.length + dataMock[3].issues.length]);
							break outerFinished;
						}
					}
					for (let j = 0; j < localStorage[2].issues.length; j++) {
						if (localStorage[2].issues[j].name === event.target.innerText) {
							localStorage[2].issues.splice(j,1)
							localStorage[3].issues.push(getTasks(tasksLists[3].children)[localStorage[3].issues.length + dataMock[3].issues.length]);
							break outerFinished;
						}
					}
				}
			}
			if (tasksLists[2].childElementCount === 0) {
				btnSelectCardfromInProgress.classList.add('add-card_nohover', 'add-card_noactive')
				btnSelectCardfromInProgress.disabled = true;
			} else {
				btnSelectCardfromInProgress.classList.remove('add-card_nohover', 'add-card_noactive')
				btnSelectCardfromInProgress.disabled = false;
			}
			htmlTasksActive.innerText = `Active tasks: ${--activeTasks}`
		break;
	}
}
const btnAddCardClick = function() {
	if (isEmptyTaskName === true) {
		return
	}
	isEmptyTaskName = false;
	inputNewCard.classList.remove('inputNewCard-invalid')
	canChoiceAction = true;
	tasksLists[0].appendChild(document.createElement('li')).setAttribute('class', 'task-list__item')
	this.offsetParent.children[1].scrollTo(0, tasksLists[0].childElementCount*100);
	inputNewCard.style.display = 'block';
	inputNewCard.focus();
}
const keyPressEnter = function(event) {
	if (event.code === 'Enter' && canChoiceAction) {
		if (inputNewCard.value === '') {
			inputNewCard.classList.add('inputNewCard-invalid');
			isEmptyTaskName = true;
			return
		}
		isEmptyTaskName = false;
		inputNewCard.classList.remove('inputNewCard-invalid')
		tasksLists[0].children[tasksLists[0].childElementCount-1].innerText = inputNewCard.value;
		localStorage[0].issues.push(getTasks(tasksLists[0].children)[tasksLists[0].children.length-1])
		inputNewCard.style.display = 'none';
		inputNewCard.value = '';
		canChoiceAction = false;
		btnSelectCardfromBacklog.classList.remove('add-card_nohover', 'add-card_noactive')
		htmlTasksActive.innerText = `Active tasks: ${++activeTasks}`
	}
}
const inputFocusOut = function() {
	if (canChoiceAction) {
		if (inputNewCard.value === '') {
			inputNewCard.classList.add('inputNewCard-invalid')
			isEmptyTaskName = true;
			return
		} 
		isEmptyTaskName = false;
		inputNewCard.classList.remove('inputNewCard-invalid')
		tasksLists[0].children[tasksLists[0].childElementCount-1].innerText = inputNewCard.value;
		localStorage[0].issues.push(getTasks(tasksLists[0].children)[tasksLists[0].childElementCount-1])
		inputNewCard.style.display = 'none';
		inputNewCard.value = '';
		canChoiceAction = false;
		btnSelectCardfromBacklog.classList.remove('add-card_nohover', 'add-card_noactive')
		btnSelectCardfromBacklog.disabled = false;
		console.log(activeTasks)
		htmlTasksActive.innerText = `Active tasks: ${++activeTasks}`
	}
}
const inputChangeValue = function() {
	if (inputNewCard.value === '') {
		inputNewCard.classList.add('inputNewCard-invalid')
	} else {
		inputNewCard.classList.remove('inputNewCard-invalid')
	}
}
selectListCardfromBacklog.addEventListener('click', selectCard)
selectListCardfromReady.addEventListener('click', selectCard)
selectListCardfromInProgress.addEventListener('click', selectCard)
btnAddCard.addEventListener('click', btnAddCardClick)
btnSelectCardfromBacklog.addEventListener('click', btnSelectCardClick)
btnSelectCardfromReady.addEventListener('click', btnSelectCardClick)
btnSelectCardfromInProgress.addEventListener('click', btnSelectCardClick)
inputNewCard.addEventListener('keypress', keyPressEnter)
inputNewCard.addEventListener('focusout', inputFocusOut)
inputNewCard.addEventListener('input', inputChangeValue)