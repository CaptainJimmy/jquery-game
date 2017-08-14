$(document).ready(function(){

var goalScore = 0;
var gameScore = 0;
var wins = 0;
var losses = 0;
var modifier = [5,7,9,14];
var charachter = {
	squanchy: {
		value: 0,
		message: "I'd love to squanch with you!",
		},
	jellyBeanKing: {
		value: 0,
		message: "Just be quiet and take it.",
		},
	meseeks: {
		value: 0,
		message: "Existence is pain!!!",
		},
	snowball: {
		value: 0,
		message: "Where are my testicles Summer?",
		} ,
}
//var valueModifier = Math.floor(Math.random() * modifier);



// display the scores
function displayScores(){
	$("#goalScore").html(goalScore);
	$("#gameScore").html(gameScore);
	$("#wins").html(wins);
	$("#losses").html(losses);

	// document.querySelector("#goalScore").innerHTML = goalScore;
	// document.querySelector("#gameScore").innerHTML = gameScore;
	// document.querySelector("#wins").innerHTML = wins;
	// document.querySelector("#losses").innerHTML = losses;
};


// assign the values to the charachters and randomize the goalScore
function startGame(){
	goalScore = Math.floor(Math.random()*50);
	gameScore = 0;
	charachter.squanchy.value = Math.floor(Math.random() * modifier[0]);
	charachter.jellyBeanKing.value = Math.floor(Math.random() * modifier[1]);
	charachter.meseeks.value = Math.floor(Math.random() * modifier[2]);
	charachter.snowball.value = Math.floor(Math.random() * modifier[3]);
	console.log (charachter.squanchy.value + charachter.jellyBeanKing.value + charachter.meseeks.value + charachter.snowball.value )
};

function checkGameOver(){
	if (gameScore === goalScore){
		wins++;
		displayScores();
		alert("You Win. Click OK to Play Again");
		startGame();
		displayScores();
	}
	else if (gameScore > goalScore) {
		losses++;
		displayScores();
		alert("Oh Fsck Son, You Done Lost");
		startGame();
		displayScores();

	}
};
// on click events for the charachter

// squanchy on click

startGame();
displayScores();

$(".charachters").on("click", function(){
	var id = this.id;
	if (id === "squanchy") {
		gameScore += charachter.squanchy.value;
		$("#gameScore").html(gameScore);
		$("#message").html(charachter.squanchy.message)
		checkGameOver();
	} 	
	else if (id === "jellyBeanKing"){
		gameScore += charachter.jellyBeanKing.value;
		$("#gameScore").html(gameScore);
		$("#message").html(charachter.jellyBeanKing.message)
		checkGameOver();
	}
	else if (id === "meseeks"){
		gameScore += charachter.meseeks.value;
		$("#gameScore").html(gameScore);
		$("#message").html(charachter.meseeks.message)
		checkGameOver();
	}
	else if ( id === "snowball"){
		gameScore += charachter.snowball.value;
		$("#gameScore").html(gameScore);
		$("#message").html(charachter.snowball.message)
		checkGameOver();
	}
	else { 
		alert("ERROR");
		console.log(id + this.id)
	}
	// increment the gameScore
	// displayScores();
	// gameOver();
});

// $("#jellyBeanKing").on("click", function(){
// 	// increment the gameScore
// 	// displayScores();
// 	// gameOver();
// });

// $("#meseeks").on("click", function(){
// 	// increment the gameScore
// 	// displayScores();
// 	// gameOver();
// });

// $("#snowball").on("click", function(){
// 	// increment the gameScore
// 	// displayScores();
// 	// gameOver();
// });
// // 
});