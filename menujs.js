function addli() {

	var li = document.createElement("li")
	var ul = document.getElementsByTagName('ul') [0];	
	li.innerText = "Developer";
	ul.appendChild(li);
}

addli();