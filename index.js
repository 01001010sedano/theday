// Music Player
const audio = new Audio('pictures/Soft spot.mp3');
const playButton = document.getElementById('playButton');
let isPlaying = false;

playButton.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playButton.innerText = 'Play';
    } else {
        audio.play();
        playButton.innerText = 'Pause';
    }
    isPlaying = !isPlaying;
});

// Redirect to Google Form
function redirectToForm() {
    window.location.href = "https://forms.gle/ZnaM2t88P6WEzyEr9";
}
