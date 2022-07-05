const scoreDisplay = document.getElementById("score-display")
const questionDisplay = document.getElementById("question-display")

const questions = [
    {
        quiz: ["value", "estimate", "evaluate"],
        options: ["jury", "assess"],
        correct: 1,
    },
    {
        quiz: ["coffee", "tea", "beer"],
        options: ["food", "beverage"],
        correct: 1,
    },
    {
        quiz: ["car", "bike", "truck"],
        options: ["vehicle", "people"],
        correct: 0,
    },
    {
        quiz: ["flower", "dirt", "water"],
        options: ["earth", "city"],
        correct: 0,
    },
]

let score = 0
let clicked = []

scoreDisplay.textContent = score

function populateQuestions() {
    questions.forEach((question) => {
        let n = 1

        const questionBox = document.createElement("div")
        questionBox.classList.add("question-box")

        // Logo
        // Display logo and level header. Level header should change in each question box to corresponding level.
        const logoDisplay = document.createElement("h1")
        logoDisplay.textContent = `➢ Level ${n}`
        questionBox.append(logoDisplay)

        question.quiz.forEach((tip) => {
            const tipText = document.createElement("p")
            tipText.textContent = tip
            questionBox.append(tipText)
        })

        // Buttons
        const questionButtons = document.createElement("div")
        questionButtons.classList.add("question-buttons")
        questionBox.append(questionButtons)

        question.options.forEach((option, optionIndex) => {
            const questionButton = document.createElement("button")
            questionButton.classList.add("question-button")
            questionButton.textContent = option

            questionButton.addEventListener("click", () =>
                checkAnswer(
                    questionButton,
                    answerDisplay,
                    option,
                    optionIndex,
                    question.correct
                )
            )

            questionButtons.append(questionButton)
        })

        const answerDisplay = document.createElement("div")
        answerDisplay.classList.add("answer-display")
        questionBox.append(answerDisplay)

        questionDisplay.append(questionBox)
    })
}

populateQuestions()

function checkAnswer(
    questionButton,
    answerDisplay,
    option,
    optionIndex,
    correctAnswer
) {
    console.log("option", option)
    console.log("index", optionIndex)

    if (optionIndex == correctAnswer) {
        console.log("Correct!")
        score++
        scoreDisplay.textContent = score
        addResult(answerDisplay, "Correct!")
    } else {
        console.log("Incorrect")
        score--
        scoreDisplay.textContent = score
        addResult(answerDisplay, "Incorrect")
    }
    clicked.push(option)
    questionButton.disabled = clicked.includes(option)

    // When you click on one of the answer pairs, it should disable both answers. You don't get to guess again.
}

function addResult(answerDisplay, answer) {
    answerDisplay.textContent = ""
    answerDisplay.textContent = answer
}
