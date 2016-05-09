var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello Wowsrld!';

var temp1;
var temp2;
var temp3;

temp1 = "This is a temp variable";
temp2 = 420;
temp1 = "Jk THIS is a temp variable";
temp3 = true;
var tempArray = [1, temp1, temp2, temp3];

//myHeading.textContent = tempArray[1] + temp1;
if (temp1 === temp2) {
	myHeading.textContent = "temp 1 niggas";
} else {
	myHeading.textContent = "temp 2 fagets" + multiply(5,4);
}

var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');    
  // alert makes a little pop-up, cool
} else {
  alert('Awwww, but chocolate is my favorite...');    
}

/* comment city bitch */

// comment city 2.0


// FUNCTION STUFF

function multiply(x, y) {
	var result = x * y;
	return result;
}

// EVENTS, real important (make shit happen when you do something)
document.querySelector('h3').onclick = function() {
	alert('Ouch! Stop!');
	// makes a pop-up when you click anywhere on the h3
}

var myButton = document.querySelector('button');
myButton.onclick = function() {
	buttonButts();
}

function buttonButts() {
	var newContent = prompt('Enter garbage');
	localStorage.setItem('shit', newContent);
	myHeading.textContent = "new shit is:" + newContent;
	if (!localStorage.getItem('shit')) {
		myHeading.textContent = "ass";
	}
}


// above selects the FIRST instance of h1 query