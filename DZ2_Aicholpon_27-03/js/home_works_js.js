
// GMAIL BLOCK


const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const input = document.querySelector('input');
function isEmailValid (value){
    return EMAIL_REGEXP.test(value);
}
function onInput(){
  if (isEmailValid(input.value)) {
    input.style.borderColor = 'blue';
  }
    else{
    input.style.borderColor = 'red';
}
}
input.addEventListener('input', onInput);

// MOVE BLOCK

const child_block = document.querySelector('.child_block')
console.log(child_block)

let positionX = 0
let positionY = 0

const moveBlock = () => {
    if (positionX < 445 && positionY === 0) {
        positionX+=2
        child_block.style.left = `${positionX}px`
        setTimeout(moveBlock, 5)

    } else if (positionX >= 445 && positionY < 445) {
        positionY+=2
        child_block.style.top = `${positionY}px`
        setTimeout(moveBlock, 5)
    }else if (positionX > 0) {
        positionX-=2
        child_block.style.left = `${positionX}px`
        setTimeout(moveBlock, 5)
    } else if (positionX === 0 && positionY > 0) {
        positionY-=2
        child_block.style.top = `${positionY}px`
        setTimeout(moveBlock, 5)
    }

}
moveBlock()


// TIME BLOCK


const minutesBlock = document.querySelector('#minutes');
    secondsBlock = document.querySelector('#seconds');
    ml_secondsBlock = document.querySelector('#ml_seconds');
    btnStart = document.querySelector('#start');
    btnStop = document.querySelector('#stop');
    btnReset = document.querySelector('#reset');

    let interval;
    let minutes = 0;
    let seconds = 0;
    let milliseconds = 0;

    const startTimer = () => {
        milliseconds++;
        // milliseconds += 1000;


        if (milliseconds <=99){
            ml_secondsBlock.innerHTML = milliseconds;
        }
        if (milliseconds == 100) {
            ml_secondsBlock.innerHTML = '00';
        }
        if (milliseconds > 99) {
            seconds++;
            secondsBlock.innerHTML = '0' + seconds;

            milliseconds = 0
        }
        if (seconds > 9){
            secondsBlock.innerHTML = seconds;
        }
        if (seconds > 59) {
            minutes++;
            minutesBlock.innerHTML = '0' + minutes;

            seconds = 0;
            secondsBlock.innerHTML = '0' + seconds;
        }
        if (minutes > 9) {
            minutesBlock.innerHTML = minutes;

        }
    };
btnStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});
btnStop.addEventListener('click', () =>{
        clearInterval(interval);
});
btnReset.addEventListener('click', () =>{
        clearInterval(interval);
        minutes = 0;
        seconds = 0;
        milliseconds = 0;

        minutesBlock.innerHTML = '00';
        secondsBlock.innerHTML = '00';
        ml_secondsBlock.innerHTML = '00';

});

