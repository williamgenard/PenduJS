function createHiddenWord(word) { // "maison" -> "******"

    let result = ""
    for (let ch of word) {
        result += "*"
    }
    return result

}

console.log(createHiddenWord("maison"))

function checkIfInWord(letter, word) {
    //return word.includes(letter)
    for (let ch of word) {
        if (letter == ch) {
            return true
        }
    }
    return false
}

console.log(checkIfInWord("z", "maison"))

function generateHiddenWord(hiddenWord, secretWord, letter) { // "*a****", "maison", "i" -> "*ai***"
    let result = ""
    for (let i = 0; i < hiddenWord.length; i++) {
        if (letter === secretWord.charAt(i)) {
            result += letter
        }
        else {
            result += hiddenWord.charAt(i)
        }
    }
    return result
}

console.log(generateHiddenWord("*a****", "maison", "s"))

function reset() {
    const randomIndice = Math.floor(Math.random()*mots.length)
    secretWord = mots[randomIndice]
    hiddenWord = createHiddenWord(secretWord)
    tries = 0
    maxTries = 6
    hiddenWordHTML.innerText = hiddenWord
}

function testChar() {
    const letter = inputHTML.value.charAt(0)

    if (checkIfInWord(letter, secretWord)) {
        hiddenWord = generateHiddenWord(hiddenWord, secretWord, letter)
        hiddenWordHTML.innerText = hiddenWord
    }
    else {
        tries++
    }

    if (secretWord === hiddenWord) {
        reset()
    }
    else if (tries >= maxTries) {
        reset()
    }

    inputHTML.value = ""
    inputHTML.focus()
}

const hiddenWordHTML = document.querySelector("h3")
const inputHTML = document.querySelector("input")
const buttonHTML = document.querySelector("button")

const mots = ["maison", "appartement", "chèvre"]

let hiddenWord
let secretWord
let tries
let maxTries

reset()

buttonHTML.addEventListener("click", () => {
    testChar()
})

buttonHTML.addEventListener("mouseover", () => {
    console.log("over !")
})

inputHTML.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
       testChar()
    }
})