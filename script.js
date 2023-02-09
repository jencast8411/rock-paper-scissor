var pcOptions = ['R', 'P', 'S'];
var playerScore = 0;
var computerScore = 0;

function getPcAnswer() {
    return pcOptions[Math.floor(Math.random() * pcOptions.length)];
}

// prompt allows player to input answer
function getPlayerAnswer() {
    return prompt("Enter R for Rock, P for Paper, S for Scissors").toUpperCase();
}

// alert is only a pop-up; not interactive
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

function displayScore() {
    alert("Player score: " + playerScore + " Computer score: " + computerScore);
}

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
