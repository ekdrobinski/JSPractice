let hands = ["rock", "paper", "scissors"];

function getHand() {
    return hands[parseInt(Math.random() * 10) % 3]; // Updated to directly access the hand using the generated index //OMG THIS WAS AWFUL I WANNA CRY I wish I'd known I made my code wrong yesterday :'( 

}

let playerObjectOne = {name: "Player 1", method: getHand};
let playerObjectTwo = {name: "Player 2", method: getHand};
let playerObjectThree = {name: "Player 3", method: getHand};
let playerObjectFour = {name: "Player 4", method: getHand};

function playRound(playerObjectOne, playerObjectTwo) {
    let player1hand = playerObjectOne.method();
    let player2hand = playerObjectTwo.method();

    console.log(playerObjectOne.name + "'s hand: " + player1hand);
    console.log(playerObjectTwo.name + "'s hand: " + player2hand);

    if (player1hand === player2hand) {
        console.log("It's a tie!");
        return null;
    } else if (player1hand === "rock" && player2hand === "scissors") {
        console.log(playerObjectOne.name + " wins.");
        return playerObjectOne;
    } else if (player1hand === "scissors" && player2hand === "paper") {
        console.log(playerObjectOne.name + " wins.");
        return playerObjectOne;
    } else if (player1hand === "paper" && player2hand === "rock") {
        console.log(playerObjectOne.name + " wins.");
        return playerObjectOne;
    } else if (player1hand === "paper" && player2hand === "scissors") {
        console.log(playerObjectTwo.name + " wins.");
        return playerObjectTwo;
    } else if (player1hand === "scissors" && player2hand === "rock") {
        console.log(playerObjectTwo.name + " wins.");
        return playerObjectTwo;
    } else if (player1hand === "rock" && player2hand === "paper") {
        console.log(playerObjectTwo.name + " wins.");
        return playerObjectTwo;
    }
}

playRound(playerObjectOne, playerObjectTwo);

function playGame(playerObjectOne, playerObjectTwo, playUntil) {
    let player1Wins = 0;
    let player2Wins = 0;

    while (player1Wins < playUntil && player2Wins < playUntil) {
        let resultWinner = playRound(playerObjectOne, playerObjectTwo);
        if (resultWinner === null) {}
        else if (resultWinner.name === playerObjectOne.name) {player1Wins += 1;} 
        else if (resultWinner.name === playerObjectTwo.name) {player2Wins += 1;}
    }

    if (player1Wins === playUntil) {
        return playerObjectOne;
    } else {
        return playerObjectTwo; 
    }
}

function playTournament(playerObjectOne, playerObjectTwo, playerObjectThree, playerObjectFour, playUntil) {
    let round1Winner = playGame(playerObjectOne, playerObjectTwo, playUntil);
    let round2Winner = playGame(playerObjectThree, playerObjectFour, playUntil);
    let tournamentWinner = playGame(round1Winner, round2Winner, playUntil);
    return tournamentWinner;
}

let tournamentWinner = playTournament(playerObjectOne, playerObjectTwo, playerObjectThree, playerObjectFour, 5); 
console.log(tournamentWinner.name + " is the world champion!");
