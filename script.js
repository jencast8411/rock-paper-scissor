// Set global variables where functions can pull values from. For homework, I think we will have to input all the characters we need (numbers, letters, special characters)
var pcOptions = ['R', 'P', 'S'];
var playerScore = 0;
var computerScore = 0;

// First step: Prompt player to make selection
// prompt allows player to input answer
function getPlayerAnswer() {
    return prompt("Enter R for Rock, P for Paper, S for Scissors").toUpperCase();
}

// Second step: Computer generates random choice
function getPcAnswer() {
    return pcOptions[Math.floor(Math.random() * pcOptions.length)];
}

//Third step: Compare answers with if/else 
function compareAnswers(playerAnswer, pcAnswer) {
    if (playerAnswer === pcAnswer) {
        alert("It's a Tie!");
    } else if (playerAnswer === 'R' && pcAnswer === 'S') {
        playerScore++;
        alert('You win!');
    } else if (playerAnswer === 'S' && pcAnswer === 'P') {
        playerScore++;
        alert('You win!');
    } else if (playerAnswer === 'P' && pcAnswer === 'R') {
        playerScore++;
        alert('You win!');
    } else {
        computerScore++;
        alert('Computer wins!');
    }
}

// Fourth step: tally scores
function displayScore() {
    alert("Player score: " + playerScore + " Computer score: " + computerScore);
}

// So THIS part.... I got from Google so NOOO idea, but it's to compare scores. It looks like a nested function with new vars? 
while (true) {
    var pcAnswer = getPcAnswer();
    var playerAnswer = getPlayerAnswer();
    compareAnswers(playerAnswer, pcAnswer);
    displayScore();

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            alert("Player wins the game!");
        } else {
            alert("Computer wins the game!");
        }
        break;
    }
}
