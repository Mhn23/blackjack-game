let playerData = {
    name: "Test",
    chips: 100,
    addChips: function(){
        this.chips += 10
    },
    removeChips: function(){
        this.chips -= 10
    }
}
let firstCard = getRandomNumber()
let secondCard = getRandomNumber()
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard
let statusText = document.querySelector("#status-el")
let cardsText = document.querySelector("#listOfCards")
let sumText = document.querySelector("#sumOfCards")
let hasLost = false
let playerName = document.querySelector("#player-el")
let chipsNumber = document.querySelector("#chips-el")


function updateChips(){
    chipsNumber.textContent = playerData.chips
}

function getRandomNumber(){
    return Math.floor(Math.random() * (10-1) + 1) + 1
}

function cardsAndSumContent(){
    cardsText.textContent = cards
    sumText.textContent = sum
}

function renderGame(){
    cardsAndSumContent()
    playerName.textContent = playerData.name
    updateChips()
    if(sum === 21){
        statusText.textContent = "You won!"
        playerData.addChips()
        updateChips()
    }
    else if(sum < 21){
        statusText.textContent = "Do you want to draw another card?"
    }else{
        statusText.textContent = "You lost!"
        hasLost = true
        playerData.removeChips()
        updateChips()
    }
}

function youLostMessage(){
    statusText.textContent = "You can't draw another card, reset the game !"
}

function addCard(theNewCard){
    if(hasLost){
        youLostMessage()
    }
    else{
        cards.push(theNewCard)
    }
}

function newCard(){
    if(hasLost){
        youLostMessage()
    }
    else{
    let theNewCard = getRandomNumber()
    addCard(theNewCard)
    sum += theNewCard
    renderGame()
    }
}

function resetGame(){
    hasLost = false
    firstCard = getRandomNumber()
    secondCard = getRandomNumber()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}