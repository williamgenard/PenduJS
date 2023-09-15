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

const hiddenWordHTML = document.querySelector("h3")
const inputHTML = document.querySelector("input")
const buttonHTML = document.querySelector("button")

buttonHTML.addEventListener("click", () => {
    console.log("click")
    console.log(inputHTML.value)
})

buttonHTML.addEventListener("mouseover", () => {
    console.log("over !")
})

inputHTML.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        console.log("Enter !")
    }
})