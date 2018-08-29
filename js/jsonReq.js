var thePets =[
 {
	"name":"Meowsalot",
	"species":"cat",
	"favFood":"tuna"
	},
	{
	"name":"Barky",
	"species":"dog",
	"favFood":"carrots"
	}
	]
 var excessOpject = document.getElementById("animal-info");
 
 
 /*excess from Array and object */
 
excessOpject.innerHTML ="<h1 >axcess from opject and Array </h1><br>"+thePets[0].name+"<br>" +thePets[0].species+"<br>"+thePets[0].favFood +"<hr>"+thePets[1].name+"<br>" +thePets[1].species+"<br>"+thePets[1].favFood ;
