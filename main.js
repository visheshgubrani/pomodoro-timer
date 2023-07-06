const timerDisplay = document.querySelector('h1');
const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');
let initialTime = 1499;
let timeRemaining = initialTime
let timeInterval;


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
    initialTime = 1499;
    timeRemaining = initialTime;
    clearInterval(timeInterval)
    timeInterval = null;
}

function shortBreak() {
    initialTime = 300
    timeRemaining = initialTime
    clearInterval(timeInterval)
    timeInterval = setInterval(startTimer, 1000);
}

function longBreak() {
    initialTime = 600
    timeRemaining = initialTime;
    clearInterval(timeInterval);
    timeInterval = setInterval(startTimer, 1000);
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;
        if (buttonValue === 'Start') {
            body.style.backgroundColor = 'green'
            if (!timeInterval) {
                timeInterval = setInterval(startTimer, 1000);
            }
        } else if (buttonValue === 'Pause') {
            if (!timeInterval) {
                body.style.backgroundColor = '#068FFF'
            } else {
                body.style.backgroundColor = 'red'
            }

            pauseTimer()
        } else if (buttonValue === 'Reset') {
            body.style.backgroundColor = '#068FFF'
            resetTimer()
        } else if (buttonValue === 'Short Break') {
            body.style.backgroundColor = 'crimson'
            // clearInterval(timeInterval);
            shortBreak()
        } else if (buttonValue === 'Long Break') {
            body.style.backgroundColor = 'crimson'
            longBreak()
        }
    })
})

