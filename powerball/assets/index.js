// Maximum possible number for the red Powerball
const RED_MAX = 26;

// Maximum possible number for the white balls
const WHITE_MAX = 69;

// Function to generate a random ball number between 1 and maxValue (inclusive)
function getBall(maxValue) {
  // Math.random() generates a decimal from 0 up to (but not including) 1
  // Multiplying by maxValue scales it up, and Math.ceil() rounds up to get 1–maxValue
  return Math.ceil(Math.random() * maxValue);
}

// Main function to generate and display Powerball numbers
function getPowerball() {
  // Generate the red ball number
  var redBall = getBall(RED_MAX);

  // Create an empty array to hold the 5 white ball numbers
  var whiteBalls = [];

  // Loop 5 times to get 5 random white ball numbers
  for (let i = 0; i < 5; i++) {
    var whiteBall = getBall(WHITE_MAX); // Generate a white ball
    whiteBalls.push(whiteBall);         // Add it to the array
  }

  // Debugging: log the number of white balls generated
  console.log(whiteBalls.length);

  // Debugging: log the first white ball generated
  console.log(whiteBalls[0]);

  // Display the red ball number in the HTML element with id "redball"
  document.getElementById("redball").innerHTML = "Your Powerball: " + redBall;

  // Display the list of white ball numbers in the HTML element with id "whiteball-one"
  // Currently, this shows them all together as a comma-separated string
  document.getElementById("whiteball-one").innerHTML =
    "Your Powerball: " + whiteBalls;
}
