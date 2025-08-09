// Maximum number possible for the red Powerball (1 to 26)
const MAX_RED_VALUE = 26;

// Maximum number possible for the white balls (1 to 69)
const MAX_WHITE_VALUE = 69;

// Function to generate a random integer ball number between 1 and maxValue (inclusive)
function getBall(maxValue) {
  // Math.random() returns a decimal >=0 and <1
  // Multiply by maxValue to scale range to >=0 and <maxValue
  // Math.ceil() rounds up to give integer from 1 to maxValue
  return Math.ceil(Math.random() * maxValue);
}

// Main function to generate and display the Powerball numbers
function getPowerball() {
  // Generate the red ball number randomly between 1 and MAX_RED_VALUE
  var redBall = getBall(MAX_RED_VALUE);

  // Initialize an empty array to store the unique white balls
  var whiteBalls = [];

  // Original method (commented out) that generated 5 white balls, allowing duplicates
  // for (let i = 0; i < 5; i++) {
  //   var whiteBall = getBall(MAX_WHITE_VALUE);
  //   whiteBalls.push(whiteBall);
  // }

  // New method: keep generating random white balls until there are 5 unique numbers
  while (whiteBalls.length < 5) {
    var whiteBall = getBall(MAX_WHITE_VALUE);
    // Add whiteBall only if it isn't already in the array (to ensure uniqueness)
    if (!whiteBalls.includes(whiteBall)) {
      whiteBalls.push(whiteBall);
    }
  }

  // Debug output: log how many white balls were generated (should be 5)
  console.log(whiteBalls.length);

  // Debug output: log the first white ball number generated
  console.log(whiteBalls[0]);

  // Update the HTML element with id "redball" to show the red ball number
  document.getElementById("redball").innerHTML = "Your Redball: " + redBall;

  // Update the HTML element with id "whiteballs" to show all white balls as a comma-separated list
  document.getElementById("whiteballs").innerHTML =
    "Your Whiteballs: " + whiteBalls;
}
