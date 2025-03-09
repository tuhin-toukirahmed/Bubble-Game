let time = 30;
let score = 0;
let randomNum = Math.floor(Math.random() * 10);

document.getElementById("start").addEventListener("click", () => {
  document.getElementById("start").style.display = "none";
  document.getElementById("pbtm").style.flexDirection = "row";
  makeBubble();
  timer();
  getHit();
});

function makeBubble() {
  for (let i = 1; i < 144; i++) {
    let x = Math.floor(Math.random() * 10);
    document.getElementById(
      "pbtm"
    ).innerHTML += `<div id="bubbles"> ${x}</div>`;
  }
}

function timer() {
  let timer = setInterval(() => {
    if (time > 0) {
      time--;
      document.getElementById("timer").innerHTML = time;
    } else {
      document.getElementById("pbtm").innerHTML = `<h1>Game Over</h1> 
       <h2>Score: ${score}</h2>
       <h>Reload to play again</h2>`;
      clearInterval(timer);
      document.getElementById("pbtm").style.flexDirection = "column";
    }
  }, 1000);
}

function getHit() {
  randomNum = Math.floor(Math.random() * 10);
  document.getElementById("hit").innerHTML = randomNum;
}

function scoreCount() {
  score += 1;
  document.getElementById("score").innerText = score;
}

document.getElementById("pbtm").addEventListener("click", (dets) => {
  let hit = Number(document.getElementById("hit").innerText);
  let bubbles = Number(dets.target.innerText);

  if (hit === bubbles) {
    scoreCount();
    getHit();
    document.getElementById("pbtm").innerHTML = ""; // Clear existing bubbles
    makeBubble(); // Generate a new set of bubbles
  }
});
