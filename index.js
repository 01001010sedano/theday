const audio = new Audio('pictures/Soft spot.mp3');
const toggleButton = document.getElementById('toggleMusic');

// Toggle Play/Pause Button
let isPlaying = false;

toggleButton.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    toggleButton.innerText = 'Play';
  } else {
    audio.play();
    toggleButton.innerText = 'Pause';
  }
  isPlaying = !isPlaying;
});
