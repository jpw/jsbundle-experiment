
import a from "./a.js"; // import local module
import answer from 'the-answer'; // import from node_modules

const list = document.getElementById('status');
const updateStatus = function (message) {
	var entry = document.createElement('li');
	entry.appendChild(document.createTextNode(message));
	list.appendChild(entry);
}

updateStatus('index.js ran');
updateStatus(a());
updateStatus('The answer is: '+ answer.toString());
