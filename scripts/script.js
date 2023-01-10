sub_button.addEventListener("click", rating);

let scores = document.getElementsByName("score");

let selectedIndex;

function verify() {
  scores.forEach((score, index) => {
    if (score.checked) {
      selectedIndex = index + 1;
    }
  });
}

function rating() {
  verify();
  alert(selectedIndex);
}
