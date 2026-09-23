const computerScoreEl = document.querySelector('.computerScore span');
const playerScoreEl = document.querySelector('.playerScore span');
const actionEl = document.querySelectorAll('.action');
const footerEl = document.querySelector('.footer');
const playerPickedEl = document.querySelector('.playerPicked span');
const computerPickedEl = document.querySelector('.computerPicked span');
const resultEl = document.querySelector('.result');
const resetEl = document.querySelector('.reset u');


for( i = 0; i < actionEl.length; i++){
    actionEl[i].addEventListener("click", actionClick);
}
function actionClick(e) {
    const actionEl = e.currentTarget.id;

    console.log(actionEl)
}
