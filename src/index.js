document.addEventListener('DOMContentLoaded', ()=>{
    //cards option
  
    const cardsArray = [
    {
        name:'fries',
        img:'src/IMAGES/FRIES.JPG'
    },
    {
      name:'BURGER',
      img:'src/IMAGES/HAMBURGER.JPG'
    },
    {
      name:'HOTDOG',
      img:'src/IMAGES/HOT DOG.JPG'
    },
    {
      name:'ICECREAM',
      img:'src/IMAGES/ICE CREAM.jpg'
    },
    {
      name:'MILKSHAKE',
      img:'src/IMAGES/MILKSHAKE.JPG'
    },
    {
      name:'PIZZA',
      img:'src/IMAGES/pizza.JPG'
    },
    {
      name:'fries',
      img:'src/IMAGES/FRIES.JPG'
    },
    {
      name:'BURGER',
      img:'src/IMAGES/HAMBURGER.JPG'
    },
    {
      name:'HOTDOG',
      img:'src/IMAGES/HOT DOG.JPG'
    },
    {
      name:'ICECREAM',
      img:'src/IMAGES/ICE CREAM.jpg'
    },
    {
      name:'MILKSHAKE',
      img:'src/IMAGES/MILKSHAKE.JPG'
    },
    {
      name:'PIZZA',
      img:'src/IMAGES/pizza.JPG'
    },  
    ]

    
  cardsArray.sort(() => 0.5 - Math.random())
  console.log(cardsArray)
  

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenIds = []
  let cardsWon = []

  function createBoard(){
    for ( let i=0; i<cardsArray.length; i++){
    const card = document.createElement('img')
    card.setAttribute('src','src/IMAGES/BLANK2.jpg')
    card.setAttribute('data-id',i)
    card.addEventListener('click', flipCard)
    grid.appendChild(card)
    }
  }

  

  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardsArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardsArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(CheckForMatch, 500)
    } 
    console.log(cardsChosenIds)

  }


  function CheckForMatch () {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if (optionOneId == optionTwoId) {
        alert ('You have clicked the same card!')
        cards[optionOneId].setAttribute('src','src/images/blank2.jpg')
        cards[optionTwoId].setAttribute('src','src/images/blank2.jpg')
    } else if (cardsChosen[0] === cardsChosen[1]) {
        //alert ('You have found a match!')
        cards[optionOneId].setAttribute('src','src/images/white.jpg')
        cards[optionTwoId].setAttribute('src','src/images/white.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src','src/images/blank2.jpg')
        cards[optionTwoId].setAttribute('src','src/images/blank2.jpg')
        //alert ('Sorry, try again')

    }
    cardsChosen=[]
    cardsChosenIds=[]
    
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardsArray.length/2){
        resultDisplay.textContent = 'Congratulations! You have won!'
    }

  }

createBoard()

  })
  
  