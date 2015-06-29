// wait for the DOM to finish loading
window.addEventListener('DOMContentLoaded', function(event) {
  // all code goes here
 event.preventDefault();
 alert("Welcome to Tic Tac Toe!");
 console.log("Hello");

 var boxes = document.querySelectorAll(".box");
 console.log("boxes")
 // Grabs all boxes 
var playerTurn = "X";
//Has the game start with first player as X
function switchTurn(){
	if (playerTurn === "x"){
		playerTurn = "O"
	}
	else {playerTurn = "X";
		}
};
// This above function allows the ongoing click to be either x or o 
var counter =0;
//This variable is starting the x's and o's at 0


var playerTurn = "X"; {
 for  (var i = 0; i < boxes.length; i++ ) {
   boxes[i].addEventListener("click", function(event) {	
     console.log("it works") 
     this.innerText = "x";
     counter ++
     console.log("counter",counter)
   })
 };
};

var playerOMove = function (){
	for (var i = 0; i< boxes.length; i++) {
 		boxes[i].addEventListener("click", function(event) {
 	    this.innerText = "o";
 	    counter ++

 	   	}
 )};
};
function XorO() {
	if (playerTurn === "X"){
		console.log("player's turn", playerTurn)
		this.innerText = "X";
		Xmoves.push(parseInt(this.getAttribute("id")));
		switchTurn();
		console.log("Xmoves ", Xmoves);
		checkWinning(Xmoves, "X Player");
		counter++;
		console.log("counter ", counter)
		checkCounter();
	}
 else {
	console.log("player's turn ", playerTurn)
	this.innerText = "O"
	Omoves.push(parseInt(this.getAttribute("id")));
	switchTurn();
	console.log("Omoves ", Omoves);
	checkWinning(Omoves, " Oplayer");
	counter++;
	console.log("counter ", counter)
	checkCounter();
}
};
var listenerXorO = function(){
	for (var i = 0; i < boxes.length; i++){
		boxes[i].addEventListener("click", XorO);
	}
}
function checkWinning(movesArray, name){
	for (var i = 0; i < winningComboes[i].length; i++){
		var winCounter = 0;
		for (var j=0; j<winningCombos[i].length; j++){
			if(movesArray.indexof(winningCombos[i][j])!==-1) {
				winCounter ++
				console.log("win ", winCounter)
			}
		};
		if(winCounter ===3) {
			alert("You win !")
		}
	};
}
function checkCounter(){
	if (counter === 9){
		alert("Draw")
	}
}
function clearBoard(){
	resetButton.addEventListener("click ", function(){
		for (var i = 0; i < boxes.length; i++){
			boxes[i].innerText = "";
		};
		counter = 0;
	})
}
function gameStarts(){
	listenerXorO();
	clearBoard();


}
gameStarts();

});