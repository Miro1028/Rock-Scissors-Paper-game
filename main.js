let rock = document.getElementById('rock'),
paper = document.getElementById('paper'),
scissors = document.getElementById('scissors'),
playerOne = document.getElementById('player__one'),
playerTwo = document.getElementById('player__two');
let choice = 0;

rock.addEventListener('click', () => {
    playerOne.style.backgroundImage = "url('./img/icons8-hand-rock-skin-type-2-100.png')";
    console.log('rock');
    choice = 0;
    bot();
})
scissors.addEventListener('click', () => {
    playerOne.style.backgroundImage = "url('./img/icons8-hand-scissors-100.png')";
    console.log('scissors');
    choice = 1;
    bot();
})
paper.addEventListener('click', () => {
    playerOne.style.backgroundImage = "url('./img/icons8-so-so-100.png')";
    console.log('paper');
    choice = 2;
    bot();
})

const bot = () => {
    let botChoice = 0,
    result = document.getElementById('result');
    botChoice = Math.floor(Math.random() * 3);
    console.log(botChoice);
    if (choice === botChoice) {
        result.innerHTML = 'Draw';
        if (choice === 0) {
            playerTwo.style.backgroundImage = "url('./img/icons8-hand-rock-skin-type-2-100.png')";
        }
        if (choice === 1) {
            playerTwo.style.backgroundImage = "url('./img/icons8-hand-scissors-100.png')";
        }
        if (choice === 2) {
            playerTwo.style.backgroundImage = "url('./img/icons8-so-so-100.png')";
        }
    }
    if (choice === 0 && botChoice === 2) {
        result.innerHTML = 'You Lost';
        playerTwo.style.backgroundImage = "url('./img/icons8-so-so-100.png')";
    }
    if (choice === 0 && botChoice === 1) {
        result.innerHTML = 'You Win'
        playerTwo.style.backgroundImage = "url('./img/icons8-hand-scissors-100.png')";
    }
    if (choice === 1 && botChoice === 0) {
        result.innerHTML = 'You Lost';
        playerTwo.style.backgroundImage = "url('./img/icons8-hand-rock-skin-type-2-100.png')";
    }
    if (choice === 1 && botChoice === 2) {
        result.innerHTML = 'You Win'
        playerTwo.style.backgroundImage = "url('./img/icons8-so-so-100.png')";
    }
    if (choice === 2 && botChoice === 0) {
        result.innerHTML = 'You Win'
        playerTwo.style.backgroundImage = "url('./img/icons8-hand-rock-skin-type-2-100.png')";
    }
    if (choice === 2 && botChoice === 1) {
        result.innerHTML = 'You Lost'
        playerTwo.style.backgroundImage = "url('./img/icons8-hand-scissors-100.png')";
    }
}