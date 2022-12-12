const yourScore = document.getElementById("yourScore");
const computerScore = document.getElementById("computerScore");
const reset = document.getElementById("reset");
const result = document.getElementById("result");

//choose
const youChoose = document.getElementById("youChoose");
const computerChoose = document.getElementById("computerChoose");

let value;

function userSelect(choose) {
  let compValue;
  function compSelect() {
    value = Math.floor(Math.random() * 3);
    if (value === 0) {
      compValue = "rock";
    } else if (value === 1) {
      compValue = "paper";
    } else if (value === 2) {
      compValue = "scissor";
    }
  }
  compSelect();
  if (choose === compValue) {
    console.log("Tie");
    youChoose.textContent = choose;
    computerChoose.textContent = compValue;
    result.textContent = "Tie";
  } else if (choose === "rock" && compValue === "scissor") {
    console.log("user Win");
    youChoose.textContent = choose;
    computerChoose.textContent = compValue;
    result.textContent = "You Win 🏆";
  } else if (choose === "rock" && compValue === "paper") {
    console.log("Computer win");
    youChoose.textContent = choose;
    computerChoose.textContent = compValue;
    result.textContent = "Computer Win 🏆";
  } else if (choose === "paper" && compValue === "rock") {
    console.log("user win");
    result.textContent = "You Win 🏆";

    computerChoose.textContent = compValue;
  } else if (choose === "paper" && compValue === "scissor") {
    youChoose.textContent = choose;
    computerChoose.textContent = compValue;
    result.textContent = "Computer Win 🏆";
  } else if (choose === "scissor" && compValue === "paper") {
    youChoose.textContent = choose;
    computerChoose.textContent = compValue;
    result.textContent = "You Win 🏆";
  } else if (choose === "scissor" && compValue === "rock") {
    youChoose.textContent = choose;
    computerChoose.textContent = compValue;
    result.textContent = "Computer Win 🏆";
  } else if (compValue === "scissor" && choose === "paper") {
    result.textContent = "Computer Win 🏆";
  } else if (compValue === "paper" && choose === "rock") {
    result.textContent = "Computer Win 🏆";
  } else if (compValue === "rock" && choose === "scissor") {
    result.textContent = "Computer Win 🏆";
  } else if (compValue === "scissor" && choose === "scissor") {
    result.textContent = "Draw";
  } else if (compValue === "rock" && choose === "rock") {
    result.textContent = "Draw";
  } else if (compValue === "paper" && choose === "paper") {
    result.textContent = "Draw";
  }
}

function refresh() {
  location.reload();
}
