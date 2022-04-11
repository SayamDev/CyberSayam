//declaring elements
let diceButton = document.getElementById("dice_btn");
let btnRestart = document.querySelector(".btn_restart");
let diceImage = document.getElementById("diceImage");
let featuresImage = document.getElementById("featuresImg");
let urScore = document.getElementById("your_score");
let h1 = document.querySelector(".title")
let wrapper = document.getElementById("dice_game")
let reload = document.getElementById("restart")
const diceSound = document.getElementById("diceSound")
const loserSound = document.getElementById("loser")
let displayText = document.querySelector(".dog-text")
const buttonPlay = document.querySelector("#play")
const buttonFeed = document.querySelector("#feed")
const buttonDrink = document.querySelector("#drink")
const buttonSleep = document.querySelector("#sleep")
const buttonWalk = document.querySelector("#walk")
const buttonSpeak = document.querySelector("#speak")
const textPlay = document.querySelector(".text-play")
const textFeed = document.querySelector(".text-feed")
const textDrink = document.querySelector(".text-drink")
const textSleep = document.querySelector(".text-sleep")
const textWalk = document.querySelector(".text-walk")
const textSpeak = document.querySelector(".text-speak")
const soundWoof = document.getElementById("woof_Sound")
const hungryEl = document.querySelector(".hungry")
const sleepyEl = document.querySelector(".sleepy")
const happyEl = document.querySelector(".happy")
const thirstyEl = document.querySelector(".thirsty")
const boredEl = document.querySelector(".bored")
var diceRoll = 0
let isFeed = false
let isPlay = false
let isDrink = false

diceButton.style.display = "none"

reload.addEventListener("click", () => {
    window.location.reload()
})

//////////////// dice game above ///////////////////

class CyberPet {
    constructor(name) {
        this._name = name
        this._hungry = 50
        this._thirsty = 50
        this._happy = 50
        this._sleepy = 50
        this._bored = 50
    }
    get name() {
        return this._name
    }
    get hungry() {
        return this._hungry
    }
    
    get thirsty() {
        return this._thirsty
    }

    get happy() {
        return this._happy
    }

    get sleepy() {
        return this._sleepy
    }

    get bored() {
        return this._bored
    }

    feed() {
        isDrink = false
        isPlay = false
        isFeed = true
        diceButton.style.display = "block"
        featuresImage.src = "images/sc.png"
        displayText.innerHTML = "Roll the dice to get food"
        diceButton.innerHTML = "Feed"
    }

    drink() {
        isPlay = false
        isFeed = false
        isDrink = true
        diceButton.style.display = "block"
        featuresImage.src = "images/sc.png"
        displayText.innerHTML = "Roll the dice to play"
        diceButton.innerHTML = "Drink"
    }

    play() {
        isDrink = false
        isFeed = false
        isPlay = true
        diceButton.style.display = "block"
        featuresImage.src = "images/sc.png"
        displayText.innerHTML = "Roll the dice to play"
        diceButton.innerHTML = "Play"
    }

    sleep() {
        if (this._sleepy >= 100) {
            displayText.innerHTML = `${this._name} has fully rested, current sleep level is: ${this._sleepy}`
        } else if (this._sleepy >= 80) {
            this._sleepy += 10
            displayText.innerHTML = `${this._name} is still sleepy, current sleep level is: ${this._sleepy}`
        } else if (this._sleepy >= 60) {
            this._sleepy += 10
            displayText.innerHTML = `${this._name} is still sleepy, current sleep level is: ${this._sleepy}`
        } else if (this._sleepy >= 40) {
            this._sleepy += 10
            displayText.innerHTML = `${this._name} is still sleepy, current sleep level is: ${this._sleepy}`
        } else if (this._sleepy >= 20) {
            this._sleepy += 10
            displayText.innerHTML = `${this._name} is still sleepy, current sleep level is: ${this._sleepy}`
        } else if (this._sleepy >= 0) {
            this._sleepy += 10
            displayText.innerHTML = `${this._name} is still sleepy, current sleep level is: ${this._sleepy}`
        }
    }
}

// const pet1 = new CyberPet("pet 1")

class Dog extends CyberPet {
    constructor(name) {
        super(name)
        this._bark = "Woof"
        this._walk = 0
    }
    
    get bark() {
        return this._bark
    }

    get walk() {
        return this._walk
    }

    speak() {
        displayText.innerHTML = `${this._bark}`
    }

    walkies() {

        if (this._walk >= 100) {
            displayText.innerHTML = `${this._name} has been walked but is tired, current energy level is: ${this._walk}. ${this._name} needs to rest`
        } else if (this._walk >= 80) {
            this._walk += 10
            displayText.innerHTML = `${this._name} has been walked but is still restless, current energy level is: ${this._walk}`
        } else if (this._walk >= 60) {
            this._walk += 10
            displayText.innerHTML = `${this._name} has been walked but is still restless, current energy level is: ${this._walk}`
        } else if (this._walk >= 40) {
            this._walk += 10
            displayText.innerHTML = `${this._name} has been walked but is still restless, current energy level is: ${this._walk}`
        } else if (this._walk >= 20) {
            this._walk += 10
            displayText.innerHTML = `${this._name} has been walked but is still restless, current energy level is: ${this._walk}`
        } else if (this._walk >= 0) {
            this._walk += 10
            displayText.innerHTML = `${this._name} has been walked but is still restless, current energy level is: ${this._walk}`
        }
    }
}


let pet2 = new Dog("pet 2")

//  6 images stored inside the sixImgs object with the assgined number properties (object initializer)
const sixImgs = {
    1:"images/dice1.png",
    2:"images/dice2.png",
    3:"images/dice3.png",
    4:"images/dice4.png",
    5:"images/dice5.png",
    6:"images/dice6.png",
};

const gameOver = () => {
    // sleepyEl.innerHTML = `Sleepy: ${pet2._sleepy} Your pet has died`
    hungryEl.style.display = "none"
    sleepyEl.style.display = "none"
    happyEl.style.display = "none"
    thirstyEl.style.display = "none"
    boredEl.style.display = "none"
    buttonPlay.style.display = "none"
    buttonFeed.style.display = "none"
    buttonDrink.style.display = "none" 
    buttonSleep.style.display = "none" 
    buttonWalk.style.display = "none"
    buttonSpeak.style.display = "none" 
    textPlay.style.display = "none" 
    textFeed.style.display = "none" 
    textDrink.style.display = "none" 
    textSleep.style.display = "none" 
    textWalk.style.display = "none" 
    textSpeak.style.display = "none" 
    featuresImage.src = "images/sc.png"
    displayText.innerHTML = "YOU DIED, CLICK PLAY AGAIN TO RESTART"
    diceButton.style.display = "none"
    btnRestart.style.display = "block"
    btnRestart.style.color = "black"
    btnRestart.style.backgroundColor = "red"
    btnRestart.style.fontFamily = " Press Start 2P', cursive";
    btnRestart.style.fontWeight = "900"
    btnRestart.style.fontSize = "1.2rem"

}

const diceGameFunc = () => {
    diceRoll = Math.floor(Math.random() *6 + 1); //will generate random numbers between 1-6
    diceImage.src = sixImgs[diceRoll]; //targeted "diceImage" src attribute , allowing me to return the value src attributes of the images inside the id = diceImage & then assigning diceRoll to the object sixImgs

    urScore.innerHTML = diceRoll
    urScore.style.marginLeft = "20px";//style element
    urScore.style.paddingLeft = "100px";//style element
    urScore.style.fontSize = "1.9rem";//style element
    diceSound.src = "sound/roll.wav";//dice sound

    // console.log(diceRoll)
    if (isFeed == true) {
        if (diceRoll == 1) {
            let chicken = 15
            pet2._hungry += chicken
            pet2._thirsty += 5
            featuresImage.src= 'images/chicken.png'
            displayText.innerHTML = `You rolled a ${diceRoll} Have some chicken. Chicken is worth ${chicken} points. Current hunger level ${pet2._hungry}`
        } else if (diceRoll == 2) {
            let bone = 5
            pet2._hungry += bone
            pet2._thirsty += 5
            featuresImage.src= 'images/bone.png'
            displayText.innerHTML = `You rolled a ${diceRoll} Have a bone. Bone is worth ${bone} points. Current hunger level ${pet2._hungry}`
        } else if (diceRoll == 3) {
            let pizza = 10
            pet2._hungry += pizza
            pet2._thirsty += 5
            featuresImage.src= 'images/pizza.png'
            displayText.innerHTML = `You rolled a ${diceRoll} Have some pizza. Pizza is worth ${pizza} points. Current hunger level ${pet2._hungry}` 
        } else if (diceRoll == 4) {
            let pumpkin = 5
            pet2._hungry = pumpkin
            pet2._thirsty += 5
            featuresImage.src= 'images/pumpkin.png'
            displayText.innerHTML = `You rolled a ${diceRoll} Have some pumpkin. Pumpkin is worth ${pumpkin} points. Current hunger level ${pet2._hungry}`
        } else if (diceRoll == 5) {
            let sushi = 15
            pet2._hungry += sushi
            pet2._thirsty += 5
            featuresImage.src= 'images/sushi.png'
            displayText.innerHTML = `You rolled a ${diceRoll} Have some sushi. Sushi is worth ${sushi} points. Current hunger level ${pet2._hungry}`
        } else if (diceRoll == 6) {
            let cake = 25
            pet2._hungry += cake
            pet2._thirsty += 5
            featuresImage.src= './images/cake.png'
            displayText.innerHTML = `You rolled a ${diceRoll} Have some cake. Cake is worth ${cake} points. Current hunger level ${pet2._hungry}`
        }
    } else if (isPlay == true) {
        if (diceRoll == 1) {
            let fetchTheBall = 15
            pet2._sleepy -= 5
            pet2._happy += 5
            pet2._thirsty -= 5
            pet2._hungry -= 5
            pet2._bored += fetchTheBall
            featuresImage.src= 'images/tennis.png'
            displayText.innerHTML = `You rolled a ${diceRoll} You play with the ball. Playing with the ball is worth ${fetchTheBall} points. Current bordedom level ${pet2._bored}`
        } else if (diceRoll == 2) {
            let frisbee = 5
            pet2._sleepy -= 5
            pet2._happy += 5
            pet2._thirsty -= 5
            pet2._hungry -= 5
            pet2._bored += frisbee
            featuresImage.src= 'images/frisbee.png'
            displayText.innerHTML = `You rolled a ${diceRoll} You play with the frisbee. Playing with the frisbee is worth ${frisbee} points. Current bordedom level ${pet2._bored}`
        } else if (diceRoll == 3) {
            let chewToy = 10
            pet2._sleepy -= 5
            pet2._happy += 5
            pet2._thirsty -= 5
            pet2._hungry -= 5
            pet2._bored += chewToy
            featuresImage.src= 'images/bone.png'
            displayText.innerHTML = `You rolled a ${diceRoll} You play with the chewToy. Playing with the chewToy is worth ${chewToy} points. Current bordedom level ${pet2._bored}` 
        } else if (diceRoll == 4) {
            let playWithOtherDog = 5
            pet2._sleepy -= 5
            pet2._happy += 5
            pet2._thirsty -= 5
            pet2._hungry -= 5
            pet2._bored = playWithOtherDog
            featuresImage.src= 'images/dog.png'
            displayText.innerHTML = `You rolled a ${diceRoll} You play with the other dog. Playing with the dog is worth ${playWithOtherDog} points. Current bordedom level ${pet2._bored}`
        } else if (diceRoll == 5) {
            let hideAndSeek = 15
            pet2._sleepy -= 5
            pet2._happy += 5
            pet2._thirsty -= 5
            pet2._hungry -= 5
            pet2._bored += hideAndSeek
            featuresImage.src= './images/hidenseek.png'
            displayText.innerHTML = `You rolled a ${diceRoll} You play hide and seek. Playing hide and seek is worth ${hideAndSeek} points. Current bordedom level ${pet2._bored}`
        } else if (diceRoll == 6) {
            let tugOfWar = 25
            pet2._sleepy -= 5
            pet2._happy += 5
            pet2._thirsty -= 5
            pet2._hungry -= 5
            pet2._bored += tugOfWar
            featuresImage.src= 'images/tugofwar.png'
            displayText.innerHTML = `You rolled a ${diceRoll} You play with the tug of war. Playing tug of war is worth ${tugOfWar} points. Current bordedom level ${pet2._bored}`
        }
        
    } else if (isDrink == true) {
        if (diceRoll == 1) {
            let appleJuice = 10            
            pet2._thirsty += appleJuice
            featuresImage.src= 'images/apple.png'
            displayText.innerHTML = `You rolled a ${diceRoll} You drink apple juice. Drinking apple juice is worth ${appleJuice} points. Current thirst level ${pet2._thirsty}`
        } else if (diceRoll == 2) {
            let orangeJuice = 15
            pet2._thirsty += orangeJuice
            featuresImage.src= 'images/orange.png'
            displayText.innerHTML = `You rolled a ${diceRoll} You drink orange juice. Drinking orange juice is worth ${orangeJuice} points. Current thirst level ${pet2._thirsty}`
        } else if (diceRoll == 3) {
            let cocktail = 5
            pet2._sleepy += 5
            pet2._thirsty += cocktail
            featuresImage.src= 'images/cocktail.png'
            displayText.innerHTML = `You rolled a ${diceRoll} You drink a cocktail. Drinking a cocktail is worth ${cocktail} points. Current thirst level ${pet2._thirsty}` 
        } else if (diceRoll == 4) {
            let coke = 5
            pet2._thirsty = coke
            featuresImage.src= 'images/coke.png'
            displayText.innerHTML = `You rolled a ${diceRoll} You drink a coke. Drinking a coke is worth ${coke} points. Current thirst level ${pet2._thirsty}`
        } else if (diceRoll == 5) {
            let water = 15
            pet2._thirsty += water
            featuresImage.src= 'images/water.png'
            displayText.innerHTML = `You rolled a ${diceRoll} You drink a water. Drinking a water is worth ${water} points. Current thirst level ${pet2._thirsty}`
        } else if (diceRoll == 6) {
            let smoothie = 25
            pet2._thirsty += smoothie
            featuresImage.src= 'images/smoothie.png'
            displayText.innerHTML = `You rolled a ${diceRoll} You drink a smoothie. Drinking a smoothie is worth ${smoothie} points. Current thirst level ${pet2._thirsty}`
        }
      
    }
    hungryEl.innerHTML = `Hungry: ${pet2._hungry}`
    sleepyEl.innerHTML = `Sleepy: ${pet2._sleepy}`
    happyEl.innerHTML = `Happy: ${pet2._happy}`
    thirstyEl.innerHTML = `Thirsty: ${pet2._thirsty}`
    boredEl.innerHTML = `Bored: ${pet2._bored}`

    if (pet2._sleepy <= 0) {
        gameOver()
    } else if (pet2._bored <= 0) {
        gameOver()
    } else if (pet2._thirsty <= 0) {
        gameOver()
    } else if (pet2._happy <= 0) {
        gameOver()
    } else if (pet2._hungry <= 0) {
        gameOver()
    }
}



diceButton.addEventListener("click", () => { //added click event to button
    diceGameFunc()
});

//eventlistener
buttonPlay.addEventListener("click", () => {
    pet2.play()
})

buttonFeed.addEventListener("click", () => {
    pet2.feed()
})

buttonDrink.addEventListener("click", () => {
    pet2.drink()
})

buttonSleep.addEventListener("click", () => {
    pet2.sleep()
    diceButton.style.display = "none"
    featuresImage.src= 'images/sc.png'
})

buttonWalk.addEventListener("click", () => {
    pet2.walkies()
    featuresImage.src= 'images/sc.png'
    diceButton.style.display = "none"
})

buttonSpeak.addEventListener("click", () => {
    pet2.speak()
    featuresImage.src= 'images/sc.png'
    diceButton.style.display = "none"
    soundWoof.src = "sound/single-dog-woof-sound.mp3"
})