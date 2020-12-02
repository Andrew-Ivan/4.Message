let btn = document.querySelector('.btn');
let inpMsg = document.querySelector('input');
let outMsg = document.querySelector('.entered_value');

btn.addEventListener('click', sendMessage);

document.addEventListener('keydown', sendEnter);

function sendEnter(e) {
	if (e.code == 'Enter') {
		sendMessage();
	}
}

let count = 0;

function sendMessage() {
	if (inpMsg.value != '') {
		outMsg.innerHTML = inpMsg.value;
		count = 0;
	} else {
		sendError();
	}

}

let errorBox = document.querySelector('.errorBox');

function sendError() {
	if (count < 1) {
		let errorMessage = document.createElement('span');
		errorBox.appendChild(errorMessage);
		outMsg.innerHTML = '???';
		errorMessage.innerHTML = 'ERROR(value is empty)'
		let timer = setTimeout(function () {
			errorMessage.remove();
			count = 0;
		}, 2000)
	}
	count++;
}