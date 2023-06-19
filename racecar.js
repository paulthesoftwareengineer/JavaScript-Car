var raceCar = document.getElementById("raceCar");

var speed = 0;
var position = 0;
var interval;

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 39) {
        // Right arrow key down
        speed = 2;
        if (!interval) {
            interval = setInterval(moveCar, 20); // 20ms
        }
    }
});

document.addEventListener('keyup', function(event) {
    if(event.keyCode == 39) {
        // Right arrow key up
        speed = 0;
        if (interval) {
            clearInterval(interval);
            interval = null;
        }
    }
});

function moveCar() {
    position += speed;
    raceCar.style.left = position + 'px';

    // Check if car has crossed the finish line
    if (position >= window.innerWidth - raceCar.offsetWidth) {
        alert("You have finished the race!");
        clearInterval(interval);
        interval = null;
        speed = 0;
        position = 0;
        raceCar.style.left = position + 'px';
    }
}
