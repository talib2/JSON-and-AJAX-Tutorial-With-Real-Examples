/*Requast from json */
var excessOpject = document.getElementById("animal-info");
var btn = document.getElementById("btn");
var pageCounter = 1;
btn.addEventListener('click', function() {


var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-' + pageCounter +'.json');
ourRequest.onload = function() {
	var ourData = JSON.parse(ourRequest.responseText);
	renderHTML(ourData);
	};
	ourRequest.send();
 	pageCounter ++;
 	if (pageCounter > 3) {btn.classList.add('hide-me');}
	});

function renderHTML(data){
	var htmlString = '';
	
	for(var i=0;i<data.length;i++){
		htmlString += "<p>"+data[i].name + " is a "+ data[i].species +' that likes to eat ';
		
		for (var j=0;j<data[i].foods.likes.length; j++){
			htmlString += data[i].foods.likes[j];
			}
			htmlString +='</p>';
		}
	
	excessOpject.insertAdjacentHTML('beforeend',htmlString);
	}
 
 
 
 

