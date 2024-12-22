// Music Play Button
const music = document.getElementById("music");
const playButton = document.getElementById("playMusic");

playButton.addEventListener("click", function () {
    if (music.paused) {
        music.play();
        playButton.textContent = "Pause";
    } else {
        music.pause();
        playButton.textContent = "Play";
    }
});

// Event listeners for the buttons
document.getElementById("yesButton").addEventListener("click", function () {
});

document.getElementById("yesButton2").addEventListener("click", function () {

});
