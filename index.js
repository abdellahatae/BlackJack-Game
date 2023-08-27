let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let r=""
//store the message-el paragraph in a var called messageEl
let messageEl = document.getElementById("message-el")
//let sumEl= document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el") // # for select a id ("#id") , .for class (".class"), or balise ("balise")
let cardsEl = document.getElementById("cards-el")

function renderGame(){
    sumEl.textContent = "Sum :  " + sum
    cardsEl.textContent = "Cards :  " +firstCard+" AND "+secondCard
    if(sum <= 20){
      message = "Do you want to draw a new card ?"
    } else if(sum === 21){
        message = "You've got Blackjack !"
        hasBlackJack = true 
    } else {
        message = "You are out of the game ! "
        isAlive= false
    }
    //Display the mesage in the messageEl using messageEl.textContent
    messageEl.textContent = message
}
function startGame(){
    renderGame();
}
function newCard(){
    if(isAlive){
    let thirdCard = 4
    sum = sum + thirdCard
    //r = " AND "+ thirdCard
    renderGame()
    }   
}