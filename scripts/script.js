/* Adding an event listener to the submit button that will call the function rating once i click it */

sub_button.addEventListener("click", rating);

/* Declaring my variables; since i'm gonna use selectedIndex on the thank you page, i need to make sure that the variable is declared globally in order to access it */

let scores = document.getElementsByName("score");

let ratingPage = document.querySelector(".rating");
let thankyou = document.querySelector(".thankyou");

let selectedIndex;

/* The function verify is a loop that will check which of the invisible radio buttons is selected. The +1 is necessary because the index starts counting at zero and not 1 */

function verify() {
  scores.forEach((score, index) => {
    if (score.checked) {
      selectedIndex = index + 1;
    }
  });
}

/* Every time that i press the submit button, the function verify is called to make sure selectedIndex is always updated. If I don't do this, it will only register the index of the first radio that I select even if I change it later. */

function rating() {
  result.innerHTML = `You selected ${selectedIndex} out of 5`;
  ratingPage.style.display = "none";
  thankyou.style.display = "grid";
}
