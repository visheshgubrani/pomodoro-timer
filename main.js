const timerDisplay = document.querySelector('h1');
const buttons = document.querySelectorAll('button');
let initialTime = 1500;
let timeRemaining = initialTime
let timeInterval;
let timerStart = false;

function startTimer() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timeRemaining--;
}
function pauseTimer() {
    clearInterval(timeInterval);
    timeInterval = null;
}

function resetTimer() {
    timerDisplay.textContent = "25:00"
    initialTime = 1500;
    timeRemaining = initialTime;
    clearInterval(timeInterval)
    timeInterval = null;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;
        if (buttonValue === 'Start') {
            if (!timeInterval) {
                timeInterval = setInterval(startTimer, 1000);
            }
        } else if (buttonValue === 'Pause') {
            pauseTimer()
        } else if (buttonValue === 'Reset') {
            resetTimer()
        }
    })
})

