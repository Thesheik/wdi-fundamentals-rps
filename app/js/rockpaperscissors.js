////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var move =
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    var move =
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
   // Maybe I should run it with a switch statement or maybe (condition)? playermove : computermove. For example//

    if(playerMove === "rock") {
         if(computerMove === "rock") {
            winner = "tie"
        } else if(computerMove === "paper"){
            winner ="computer"

    } else {
        winner = "player";
    }
 if(playerMove == "paper") {
    if (computerMove === "rock") {
        winner = "player";
        }
    }
    else if (computerMove === "paper" {
        winner = "It's a tie!";
    } else {
        winner = "computer";
    }
    }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < 5 && computerWins < 5) {
            var playerMove = getPlayerMove();
            var computerMove = getComputerMove();
            var winner = getWinner(playerMove, computerMove);

    if (winner === "player") {
        playerWins = 1;
    }
    else if (winner === "computer") {
        computerWins = 1;
    }
    while (playerWins < 5) || (computerWins < 5) {

    }
    return [playerWins, computerWins];
}
