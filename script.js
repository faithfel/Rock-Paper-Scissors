const computerScoreEl = document.querySelector('.computerScore span');
const playerScoreEl = document.querySelector('.playerScore span');
const actionEl = document.querySelectorAll('.action');
const footerEl = document.querySelector('.footer');
const computerPickedEl = document.querySelector('.computerPicked span');
const playerPickedEl = document.querySelector('.playerPicked span');
const resultEl = document.querySelector('.result');
const resetEl = document.querySelector('.reset u');
const resultWrapper = document.querySelector(".result-wrapper")

const actionArray = ["rock", "paper", "scissors"];
const winningArray = ["paperrock", "paperscissors", "rockscissors" ]

let computerScore = 0;
let userScore = 0;

for( i = 0; i < actionEl.length; i++){
    actionEl[i].addEventListener("click", actionClick);
}

function actionClick(e) {
    const userSelected = e.currentTarget.id;

    resultEl.classList.remove("winner", "lose");

    const random = Math.floor((Math.random() * actionArray.length));
    const computerSelected = actionArray[random];

    footerEl.classList.add('hide');
    resultWrapper.classList.remove('hide')

    playerPickedEl.textContent = userSelected.toUpperCase();
    computerPickedEl.textContent = computerSelected.toUpperCase(); 

    if (userSelected === computerSelected){
        resultEl.textContent = "TIE";
        return;
    }
    if(winningArray.includes(userSelected + computerSelected)){
        resultEl.textContent = "YOU WON";
        resultEl.classList.add("winner")
        userScore++;

    }else {
        resultEl.textContent = "YOU LOST";
        resultEl.classList.add("lose");
        computerScore++;
    }

    computerScoreEl.textContent = computerScore;
    playerScoreEl.textContent = userScore;
}

resetEl.addEventListener("click" , () => {
    computerScore = 0;
    userScore = 0;

    footerEl.classList.remove('hide');
    resultWrapper.classList.add('hide');

    computerScoreEl.textContent = computerScore;
    playerScoreEl.textContent = userScore;
})