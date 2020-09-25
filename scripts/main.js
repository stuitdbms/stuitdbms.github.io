var myHeading = document.querySelector('h1');
var myImg = document.querySelector('img');
var myButton = document.querySelector('button');

myImg.onclick = function(){
	let mySrc = myImg.getAttribute('src');
	if(mySrc === 'images/firefox-icon.png'){
		myImg.setAttribute('src', 'images/firefox-icon_2.png');
	} else {
		myImg.setAttribute('src', 'images/firefox-icon.png');
	}
}

function setUserName(){
	let myName = prompt('Enter User');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Hello ' + myName;
}

myButton.onclick = function(){
	setUserName();
}

myHeading.textContent = 'Hello world!';
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello ' + storedName;
}