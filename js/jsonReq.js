var myCat = {
	"name":"Meowsalot",
	"species":"cat",
	"favFood":"tuna"
	}
 var excessOpject = document.getElementById("animal-info");
 
 
 /*excess from Array */
 var myFavColors = ["blue","green","purple"];
excessOpject.innerHTML ="<h1 >axcess from opject </h1>"+ myCat.name +"<br>"+myCat.species+"<br>"+myCat.favFood	+"<hr>"+"<h1> axcess from Array  "+"</h1> "+"<br>"+
myFavColors[0]+"<br>"+myFavColors[1]+"<br>"+myFavColors[2];
