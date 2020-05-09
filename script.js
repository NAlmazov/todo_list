var buttonEnter = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = ul.querySelectorAll("li");
var buttonDelete = document.getElementsByClassName("delete");

function init() {
	for (var i = 0; i < buttonDelete.length; i++){
		buttonDelete[i].addEventListener("click", removeListAfterClick);
	}

	for (var i = 0; i < list.length; i++){
		list[i].addEventListener('click', crossItem);
	}
}

function inputLength() {
	return input.value.length;
}

function removeListAfterClick(){
	this.parentNode.remove();
}

function crossItem() {
	this.classList.toggle("done");
}

function createListElement() {
	var li = document.createElement("li");
	var buttonNew = document.createElement('BUTTON');
	var text = document.createTextNode("Delete");
	li.appendChild(document.createTextNode(input.value));
	buttonNew.appendChild(text);
	li.appendChild(buttonNew);
	buttonNew.addEventListener("click", removeListAfterClick);
	ul.appendChild(li);
	input.value = "";
	li.addEventListener("click", crossItem);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}


function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

buttonEnter.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);