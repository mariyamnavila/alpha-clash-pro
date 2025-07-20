// function play() {
//     const homeSection =document.getElementById('home-screen').classList.add('hidden');
//     const playgroundSection = document.getElementById('play-ground').classList.remove('hidden');

// }

function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    const currentAlphabet = document.getElementById('current-alphabet').innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    if (playerPressed === expectedAlphabet) {
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScore = parseInt(currentScoreElement.innerText);
        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1

        setTextElementValueById('current-score', updatedScore)
        continueGame()
        removeBackgroundColorById(expectedAlphabet)
    } else {
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife)

        if (updatedLife === 0) {
            gameOver()
        } else {

        }

        // const currentLifeElement = document.getElementById('current-life');
        // const currentLife = parseInt(currentLifeElement.innerText);
        // const newLife = currentLife - 1;
        // currentLifeElement.innerHTML = newLife
    }
}


document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function continueGame() {
    const alphabet = getARandomAlphabet()
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}

function play() {
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0)
    continueGame()
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score')
}