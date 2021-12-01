let audio = document.getElementById("song");
let banner = document.querySelector(".banner");
let userAgent = navigator.userAgent;
let heartCount = 100;

if (/android/i.test(userAgent) || /iphone/i.test(userAgent)) {
  heartCount = 50;
}

function playMusic() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function heartFall() {
  let heart = document.createElement("span");

  heart.innerHTML = "❤";
  heart.classList.add("heartFall");
  document.body.appendChild(heart);

  heart.style.fontSize = (Math.random() * 1 + 0.8) + "rem";
  heart.style.left = (Math.random() * 100) + "vw";
  heart.style.top = -(Math.random() * 10 + 5) + "vh";
  heart.style.animationDuration = Math.random() * 4 + 2 + "s";
}

document.addEventListener("DOMContentLoaded", function (e) {
  playMusic();

  window.setTimeout(function (e) {
    banner.style.display = "none";

    for (i = 0; i < heartCount; i++) {
      heartFall();
    }
  }, 5000)
})
