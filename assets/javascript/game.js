// alert("welcome!");


// global variables 


// character variables 

var characters = {
	cersie:
	{
		value: 0
	},
	dany:
	{
		value: 0
	},
	snow:
	{
		value: 0
	},
	nightKing:
	{
		value: 0
	},
};



// target score & your score 
var currentScore = 0;
var targetScore   = 0;

// win count & loss count 
var winCount 	= 0;
var lossCount 	= 0;



// functions 

// get random numbers function  - works for both the target score and for each of the characters 
var getRandomNumber = function (min,max){
	return Math.floor(Math.random() * (max - min +1)) + min;

}

// function to start & restart the game 
var startGame = function() {


// reset current score
var currentScore = 0;

// The random number shown at the start of the game should be between 19 - 120
targetScore = getRandomNumber(19, 120)

// Each crystal should have a random hidden value between 1 - 12.
characters.cersie.value 		= getRandomNumber(1,12);
characters.dany.value			= getRandomNumber(1,12);
characters.snow.value			= getRandomNumber(1,12);
characters.nightKing.value 		= getRandomNumber(1,12);

// change the HTML to reflect the changes 
$("#yourScore").html(currentScore);
$("#targetScore").html(targetScore);

// test if it characters are working 
console.log("=======================")
console.log("Target Score: " + targetScore);
console.log("cersie: " + characters.cersie.value + " | dany: " + characters.dany.value + " | snow: " + characters.snow.value + " | nightKing: " + characters.nightKing.value);
console.log("=======================")

}

// current score changes every time characters are clicked 
var addScore = function(characters) {

	// changes the current score 
	currentScore = currentScore + characters.value;
	

	// testing
	console.log("Your Score: " + currentScore);
}



// main process 
// onclick functions 
$("#cersie").click(function() {
	addScore(characters.cersie);
});

$("#dany").click(function() {
	addScore(characters.dany);
});

$("#snow").click(function() {
	addScore(characters.snow);
});

$("#nightKing").click(function() {
	addScore(characters.nightKing);
});


startGame();


// if player wins 

// if player losses 

// start game 

// restart game 


