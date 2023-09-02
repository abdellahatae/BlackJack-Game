let firstCard = getRandem()
let secondCard = getRandem()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
//document.querySelector("#tst").textContent=thirdCard
//store the message-el paragraph in a var called messageEl
let messageEl = document.getElementById("message-el")
//let sumEl= document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el") // # for select id ("#id") , . for class (".class"), or balise ("balise")
let cardsEl = document.getElementById("cards-el")

function renderGame(){
    
    cardsEl.textContent = "Cards :  "
    for(let i = 0;i < cards.length;i++){
        cardsEl.textContent += cards[i] + "   "
    }
    sumEl.textContent = "Sum :  " + sum
    if(sum <= 20){
      message = "Do you want to draw a new card ?"
    } else if(sum === 21){
        message = "You've got Blackjack !"
        hasBlackJack = true 
        alert("YOU WIN !!")
    } else {
        message = "You are out of the game ! "
        isAlive= false
        alert("YOU LOSE !!")
    }
    //Display the mesage in the messageEl using messageEl.textContent
    messageEl.textContent = message
}
function startGame(){
    renderGame();
}
function newCard(){
    if(isAlive){
        if((!hasBlackJack) ){
    let Card = getRandem()
    sum = sum + Card
    cards.push(Card)
   
    renderGame()
        }
    }   
}
function getRandem(){
    return Math.floor(Math.random()*11)+1
}
