let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let updatedUserScore = document.querySelector("#usereScore");
let updatedCompScore = document.querySelector("#compScore");

// computer choice genration function
let computerChoice = () => {
  const options = ["rock", "paper", "scissor"];
  let idx = Math.floor(Math.random() * 3);
  return options[idx];
};

// main execution of the logic
let playGame = userChoice => {
  const compchoice = computerChoice();
  console.log("comp choice: ", compchoice);
  console.log("user choice: ", userChoice);
  if (userChoice === compchoice) {
    document.querySelector(".Wintext").innerHTML = `<p>It's a Draw!</p>`;

    document.querySelector(".Wintext p").style.backgroundColor = "gray";
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compchoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compchoice === "scissor" ? false : true;
    } else if (userChoice === "scissor") {
      userWin = compchoice === "rock" ? false : true;
    }

    if (userWin === true) {
      userScore++;
      document.querySelector(
        ".Wintext"
      ).innerHTML = `<p>You Won! ${userChoice} beats ${compchoice} </p>`;

      document.querySelector(".Wintext p").style.backgroundColor = "green";

      updatedUserScore.innerText = userScore;
    } else {
      compScore++;
      document.querySelector(
        ".Wintext"
      ).innerHTML = `<p>comp Won!  ${compchoice} beats ${userChoice} </p>`;

      document.querySelector(".Wintext p").style.backgroundColor = "red";

      updatedCompScore.innerText = compScore;
    }
  }
};

// user choice selection and handling function
choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
