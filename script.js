let firstCard = getRandomNumber()
let secondCard = getRandomNumber()
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard
let statusText = document.querySelector("#status-el")
let cardsText = document.querySelector("#listOfCards")
let sumText = document.querySelector("#sumOfCards")

function getRandomNumber(){
    return Math.floor(Math.random() * (10-1) + 1) + 1
}

function renderGame(){
    cardsText.textContent = cards
    sumText.textContent = sum
    if(sum === 21){
        statusText.textContent = "You won!"
    }
    else if(sum < 21){
        statusText.textContent = "Do you want to draw another card?"
    }else{
        statusText.textContent = "You lost!"
    }
}
function addCard(theNewCard){
    cards+=theNewCard
}

function newCard(){
    let theNewCard = getRandomNumber()
    addCard(theNewCard)
    sum += theNewCard
    renderGame()
}