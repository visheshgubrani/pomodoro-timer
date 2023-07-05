const timerDisplay = document.querySelector('h1');
const buttons = document.querySelectorAll('button');
let timeRemaining = 0;
let timeInterval;

function startTimer() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timeRemaining--;


}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;
        // console.log(buttonValue);
        if (buttonValue === 'Start') {
            timeRemaining = 1500
            if (!timeInterval) {
                timeInterval = setInterval(startTimer, 1000);
            }
        }
    })
})
