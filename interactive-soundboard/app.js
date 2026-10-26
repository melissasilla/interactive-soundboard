// buttons

const buttons = document.querySelectorAll(".sound-button");
const colors = [
  "#4287f5",
  "#48f542",
  "#e942f5",
  "#f54257",
  "#eff542",
  "#f54242",
  "#57ffe3",
  "#7415a1",
  "#a11577",
  "#1543a1",
];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const soundId = button.dataset.sound;

    const audioTrack = document.querySelector(`#${soundId}`);

    if (audioTrack) {
      audioTrack.currentTime = 0;
      audioTrack.play();
    }

    const randomIndex = Math.floor(Math.random() * colors.length);
    const selectedColor = colors[randomIndex];

    document.body.style.backgroundColor = selectedColor;
  });
});
