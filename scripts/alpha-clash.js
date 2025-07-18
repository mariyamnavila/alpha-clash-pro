// function play() {
//     const homeSection =document.getElementById('home-screen').classList.add('hidden');
//     const playgroundSection = document.getElementById('play-ground').classList.remove('hidden');

// }

function continueGame() {
    const alphabet = getARandomAlphabet()
    console.log(alphabet);
    
}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}