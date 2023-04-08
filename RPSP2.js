let hands = ["rock", "paper", "scissors"];

function getHand() {
    return hands[parseInt(Math.random() * 10) % 3]; // Updated to directly access the hand using the generated index //OMG THIS WAS AWFUL I WANNA CRY I wish I'd known I made my code wrong right here yesterday :'( 

}

// info about the players who will play
let playerObjectOne = {name: "Player 1", method: getHand};
let playerObjectTwo = {name: "Player 2", method: getHand};
let playerObjectThree = {name: "Player 3", method: getHand};
let playerObjectFour = {name: "Player 4", method: getHand};

function playRound(playerObjectOne, playerObjectTwo) {
    //player1hand and player2hand keep track of the hands during the round throughout the function
    let player1hand = playerObjectOne.method(); 
    let player2hand = playerObjectTwo.method();


//Logs what the hands are, moved to top of function from below if/else statement
    console.log(playerObjectOne.name + "'s hand: " + player1hand);
    console.log(playerObjectTwo.name + "'s hand: " + player2hand);

    if (player1hand === player2hand) {
        console.log("It's a tie!");
        return null; // figured out null is supposed to go here
    } else if (player1hand === "rock" && player2hand === "scissors") {
        console.log(playerObjectOne.name + " wins.");
        return playerObjectOne;//returns the object of player 1
    } else if (player1hand === "scissors" && player2hand === "paper") {
        console.log(playerObjectOne.name + " wins.");
        return playerObjectOne;
    } else if (player1hand === "paper" && player2hand === "rock") {
        console.log(playerObjectOne.name + " wins.");
        return playerObjectOne;
    } else if (player1hand === "paper" && player2hand === "scissors") {
        console.log(playerObjectTwo.name + " wins.");
        return playerObjectTwo; //returns the object of player2
    } else if (player1hand === "scissors" && player2hand === "rock") {
        console.log(playerObjectTwo.name + " wins.");
        return playerObjectTwo;
    } else if (player1hand === "rock" && player2hand === "paper") {
        console.log(playerObjectTwo.name + " wins.");
        return playerObjectTwo;
    }// took out else statement because it wasn't necessary and the return null I originally made it do should go at the top with tie so that function playGame actually can read a reason not to give a point
}

playRound(playerObjectOne, playerObjectTwo);

function playGame(playerObjectOne, playerObjectTwo, playUntil) {
    let player1Wins = 0;
    let player2Wins = 0;



    while (player1Wins < playUntil && player2Wins < playUntil) {
        let resultWinner = playRound(playerObjectOne, playerObjectTwo); //resultWinner pulls the return from playRound. The return is the object of the winner's info of name and hand
        if (resultWinner === null) {}
        else if (resultWinner.name === playerObjectOne.name) {player1Wins += 1;} // gives the winner a point to be stored in a local variable
        else if (resultWinner.name === playerObjectTwo.name) {player2Wins += 1;}
    }


    //anounces who wins when either player2wins or player1wins reaches the playuntil amount. after the while loop is done. the while loop is only exited once the playUntil number is reached by one of the players, so this only checks who got the wins
    if (player1Wins === playUntil) {
        return playerObjectOne;
    } else {
        return playerObjectTwo; 
    }
}


//why is this hard
function playTournament(playerObjectOne, playerObjectTwo, playerObjectThree, playerObjectFour, playUntil) {
    let round1Winner = playGame(playerObjectOne, playerObjectTwo, playUntil); //round1Winner holds who wins round 1
    let round2Winner = playGame(playerObjectThree, playerObjectFour, playUntil);//round2Winner holds who wins round 2
    let tournamentWinner = playGame(round1Winner, round2Winner, playUntil); //takes the previous 2 winners and pits them in a game
    return tournamentWinner;
}

let tournamentWinner = playTournament(playerObjectOne, playerObjectTwo, playerObjectThree, playerObjectFour, 3);  // 2. playUntil 3 wins per game
console.log(tournamentWinner.name + " is the world champion!");
