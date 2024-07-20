let score = 0;

document.getElementById('game-button').addEventListener('click', function() {
    score++;
    document.getElementById('score').innerText = 'Score: ' + score;
});
