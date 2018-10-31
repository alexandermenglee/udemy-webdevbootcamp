var h1 = "0 To 0"; 
var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");

var p1Score = 0;
var p2Score = 0;
var score1 = document.getElementById("score1");
var score2 = document.getElementById("score2");
var rounds = document.querySelector("input")
var paragraph = document.querySelector("p");
var winningScore = 5;
var winScoreDisplay = document.querySelector("#winScoreDisplay");
var gameOver = false;


//Player one button

p1Button.addEventListener("click", function(){
	if(!gameOver){
	p1Score++;
	score1.textContent = p1Score;
	if(p1Score === winningScore){
		gameOver = true;
		score1.classList.add("winner");
		alert("Player 1 wins!");
		}
	}	
});	

//Player two button 
p2Button.addEventListener("click", function(){
	if(!gameOver){
	p2Score++;
	score2.textContent = p2Score;
	if(p2Score === winningScore){
		gameOver = true;
		score2.classList.add("winner");
		alert("Player 2 wins!");
		}
	}	
});	

//Update rounds
rounds.addEventListener("change", function(){
	winScoreDisplay.textContent = Number(rounds.value);
	winningScore = winScoreDisplay; 
});

/*Reset button function*/
resetButton.addEventListener("click", function(){
	p1Score = 0;
	score1.textContent = p1Score;
	p2Score = 0;
	score2.textContent = p2Score;
	score1.classList.remove("winner");
	score2.classList.remove("winner");	
	gameOver = false;
});

















