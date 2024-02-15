let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("your choice = ", userChoice);
        playGame(userChoice);
    })
})

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let rndIdx = Math.floor(Math.random()*3);
    return options[rndIdx];
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice) {
        drawgame();
    }
    else {
        let userWin = true;
        if(userChoice ==="rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            userWin = compChoice === "rock" ? true : false;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }

}

const drawgame = () => {
    
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin) => {
    if(userWin) {
        userScore++;
        user_score.innerText = userScore;
        msg.innerText = "You Win 🥳!!";
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        comp_score.innerText = compScore; 
        msg.innerText = "You Lose 🥺."
        msg.style.backgroundColor = "red";
    }
}





