
// vinyl animation toggle

var animationRunning = true;
var animatedElement = document.querySelector('.vinyl');

function toggleAnimation() {
    if (animationRunning) {
        animatedElement.style.animationPlayState = 'paused';
    } else {
        animatedElement.style.animationPlayState = 'running';
    }
    animationRunning = !animationRunning;
}

// music note animation toggle



// song toggle

var x = document.getElementById("song");
var playing = false;

function toggleAudio() {
    if (playing) {
        x.pause() }
    else {
        x.play();
    }
};

x.onplaying = function() {
    playing = true;
};

x.onpause = function() {
    playing = false;
};



