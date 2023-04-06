let hands = ["rock", "paper", "scissors"];

function getHand(myArray) {
    //needs to return a hand from the array of hands
   let hand = (parseInt(Math.random()*10)%3);
    if (hand === 0) {
        return myArray[0];
    }
    else if (hand === 1) {
        return myArray[1];
    }
    else {
        return myArray[2];
    }
}

//each player is assigned a name and a hand
//define two objects for two players: each player has name and getHand() properties
playerOne = {name : "Player 1", method : getHand(hands)};
playerTwo = {name :"Player 2", method : getHand(hands)};


function playRound(playerObjectOne, playerObjectTwo) {
    let player1hand = playerObjectOne.method;  //saves hands for use throughout function
    let player2hand = playerObjectTwo.method;

    let winner;
    if (player1hand === player2hand) {return "It's a tie!";}
    else if (player1hand === "rock" && player2hand === "scissors") {
        winner = playerObjectOne.name;}
    else if (player1hand=== "scissors" && player2hand === "paper") {
        winner = playerObjectOne.name;}
    else if (player1hand === "paper" && player2hand === "rock") {
        winner = playerObjectOne.name;}

    else if (player1hand === "paper" && player2hand === "scissors") {
        winner = playerObjectTwo.name;}
    else if (player1hand === "scissors" && player2hand === "rock") {
        winner = playerObjectTwo.name;}
    else if (player1hand === "rock" && player2hand === "paper") {
        winner = playerObjectTwo.name;}
 
    else {null;}
    
    return console.log("The winner is " + winner + ". " + "Hand played by " + playerObjectOne.name + " was " + player1hand + " and " 
        + " the hand played by " + playerObjectTwo.name + " was " + player2hand + ".");
}

playRound(playerOne, playerTwo);