const computerScoreEl = document.querySelector('.computerScore span');
const playerScoreEl = document.querySelector('.playerScore span');
const actionEl = document.querySelectorAll('.action');
const footerEl = document.querySelector('.footer');
const playerPickedEl = document.querySelector('.playerPicked span');
const computerPickedEl = document.querySelector('.computerPicked span');
const resultEl = document.querySelector('.result');
const resetEl = document.querySelector('.reset u');

const actionArray = ["rock", "paper", "scissors"];

for( i = 0; i < actionEl.length; i++){
    actionEl[i].addEventListener("click", actionClick);
}
function actionClick(e) {
    const selected = e.currentTarget.id;

    console.log("user selected: " + selected)

    computerRandom();

}

function computerRandom(){
    const random = Math.floor((Math.random() * 3));
    
    const computerSelected = actionArray[random];
    console.log("computer selected: " + computerSelected);

    return computerSelected;
}
