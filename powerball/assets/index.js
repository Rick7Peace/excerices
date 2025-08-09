const RED_MAX = 26;
const WHITE_MAX = 69;

function getBall(maxValue) {
  return Math.ceil(Math.random()*maxValue);
}

function getPowerball() {
  var redBall = getBall(RED_MAX);
  var whiteBalls = [];
  for (let i = 0; i < 5; i++) {
    var whiteBall = getBall(WHITE_MAX);
    whiteBalls.push(whiteBall);
  }

    console.log(whiteBalls.length);
    console.log(whiteBalls[0]);

  document.getElementById("redball").innerHTML = "Your Powerball: " + redBall;
  document.getElementById("whiteball-one").innerHTML =
    "Your Powerball:" + whiteBalls;
}

