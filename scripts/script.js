let audio = document.querySelector("#song");
let banner = document.querySelector(".banner");
let enter = document.querySelector(".banner-enter");
let userAgent = navigator.userAgent;
let fallCount = 100;
let blinkCount = 10;
let heartBlinks = [];
let blinkInterval = null;
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

if (/android/i.test(userAgent) || /iphone/i.test(userAgent)) {
  fallCount = 50;
  blinkCount = 6;
}

enter.addEventListener("click", playMusic);

function playMusic() {
  banner.classList.add("bannerAnimation");

  heartBlinks.forEach(function (heart) {
    document.body.removeChild(heart);
  })

  clearInterval(blinkInterval);

  window.setTimeout(function (e) {
    banner.style.display = "none";
    audio.play();

    for (i = 0; i < fallCount; i++) {
      heartFall();
    }
  }, 1000)
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

function heartBlink() {
  let heart = document.createElement("span");

  heart.innerHTML = "❤";
  heart.classList.add("heartBlink");
  document.body.appendChild(heart);

  heart.style.fontSize = (Math.random() * 1 + 5) + "rem";
  heart.style.animationDuration = Math.random() * 4 + 2 + "s";
  setPos(heart);

  heartBlinks.push(heart);
}

function setPos(heart) {
  let left = Math.round(Math.random() * vw);
  let top = Math.round(Math.random() * vh);

  heart.style.left = left + "px";
  heart.style.top = top + "px";
  
  if (heart.offsetLeft + heart.offsetWidth > vw) {
    heart.style.left = vw - heart.offsetWidth - 1;
  }
  if (heart.offsetTop + heart.offsetHeight > vh) {
    heart.style.top = vh - heart.offsetHeight - 1;
  }
}

function blink() {
  for (i = 0; i < blinkCount; i++) {
    heartBlink();
  }

  blinkInterval = setInterval(function () {
    heartBlinks.forEach(
      function (heart) {
        setPos(heart);
      })
  }, 64000);
}

blink();