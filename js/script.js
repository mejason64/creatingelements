var list = document.getElementById('list'),
	myItem = document.getElementById('myItem'),
	addItem = document.getElementById('addItem');

addItem.addEventListener('click', function(){

	var li = document.createElement('LI');
	var input = document.getElementById('myItem').value;
	var text = document.createTextNode(input);

	li.appendChild(text);
	list.appendChild(li);


});




