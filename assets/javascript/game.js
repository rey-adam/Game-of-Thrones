// alert("welcome!");


// global variables 


// character variables 

var cersie 		= 0;
var dany 		= 0;
var snow 		= 0; 
var nightKing 	= 0;



// target score & your score 
var currentScore = 0;
var tagetScore   = 0;

// win count & loss count 
var winCount 	= 0;
var lossCount 	= 0;



// functions 

var getRandomNumber = function (min,max){
	return Math.floor(Math.random() * (max - min +1)) + min;

}

var startGame = function() {


// reset current score
var currentScore = 0;

// The random number shown at the start of the game should be between 19 - 120
targetScore = getRandomNumber(19, 120)

// Each crystal should have a random hidden value between 1 - 12.
cersie 		= getRandomNumber(1,12);
dany		= getRandomNumber(1,12);
snow		= getRandomNumber(1,12);
nightKing 	= getRandomNumber(1,12);

// change the HTML to reflect the changes 


// test if it characters are working 
console.log("=======================")
console.log("Target Score: " + targetScore);
console.log("cersie: " + cersie + " | dany: " + dany + " | snow: " + snow + " | nightking: " + nightKing);
console.log("=======================")

}





// main process 
// onclick functions 
$("#cersie").click(function() {
	alert("test");
});

$("#dany").click(function() {
	alert("test");
});

$("#snow").click(function() {
	alert("test");
});

$("#nightking").click(function() {
	alert("test");
});


startGame();


// if player wins 

// if player losses 

// start game 

// restart game 


