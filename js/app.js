

/*-------------------------------- Constants --------------------------------*/
let randomQuestions, currentQuestionIndex
const questions = [
  {
    question: 'What does HTML stand for?',
    answers: [
      {text: 'Hypertext Markup Language', correct: true},
      {text: 'Hot Tomatoes', correct: false},
      {text: 'Hypertext Made Language', correct: false},
      {text: 'Hot Text Mail Language', correct: false}

    ]
  },

  {
    question: 'What is HTML responsible for?',
    answers: [
      {text: 'Creating webpages', correct: true},
      {text: 'Creating tomatoes', correct: false},
      {text: 'Creating Stylesheets', correct: false},
      {text: 'Creating functions', correct: false}

    ]
  },

  {
    question: 'What is HTML responsible for?',
    answers: [
      {text: 'Creating webpages', correct: true},
      {text: 'Creating tomatoes', correct: false},
      {text: 'Creating Stylesheets', correct: false},
      {text: 'Creating functions', correct: false}

    ]
  },
  {
    question: 'What is HTML responsible for?',
    answers: [
      {text: 'Creating webpages', correct: true},
      {text: 'Creating tomatoes', correct: false},
      {text: 'Creating Stylesheets', correct: false},
      {text: 'Creating functions', correct: false}

    ]
  },
  {
    question: 'What is HTML responsible for?',
    answers: [
      {text: 'Creating webpages', correct: true},
      {text: 'Creating tomatoes', correct: false},
      {text: 'Creating Stylesheets', correct: false},
      {text: 'Creating functions', correct: false}

    ]
  },
  {
    question: 'What is HTML responsible for?',
    answers: [
      {text: 'Creating webpages', correct: true},
      {text: 'Creating tomatoes', correct: false},
      {text: 'Creating Stylesheets', correct: false},
      {text: 'Creating functions', correct: false}

    ]
  },
  {
    question: 'What is HTML responsible for?',
    answers: [
      {text: 'Creating webpages', correct: true},
      {text: 'Creating tomatoes', correct: false},
      {text: 'Creating Stylesheets', correct: false},
      {text: 'Creating functions', correct: false}

    ]
  }
]

/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
const mainEl = document.getElementById('answerStatus')
//control buttons
const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-button')
//question buttons
const htmlBtn = document.querySelector("#html-button")
const cssBtn = document.querySelector("#css-button")
const javascriptBtn = document.querySelector("#javascript-button")
const createBtn = document.querySelector("#create-button")
const resetBtn = document.querySelector("#reset-button")
const questionContainer = document.querySelector("#question-container")

//containers
const quizContainer = document.querySelector("#quiz-container")
const answerButtons = document.querySelector("#answer-buttons")
const questionEl = document.getElementById('question')
const answerEl = document.querySelectorAll('.answer')


//ANSWER BUTTONS
const ans1 = document.querySelector("#answer-1")
const ans2 = document.querySelector("#answer-2")
const ans3 = document.querySelector("#answer-3")
const ans4 = document.querySelector("#answer-4")


/*----------------------------- Event Listeners -----------------------------*/

// REGULAR BUTTONS

htmlBtn.addEventListener('click', () => {
  console.log('HTML button works!')
})

cssBtn.addEventListener('click', () => {
  console.log('CSS button works!')
})

javascriptBtn.addEventListener('click', () => {
  console.log('JavaScript button works!')
})

createBtn.addEventListener('click', () => {
  console.log('Create button works!')
})

resetBtn.addEventListener('click', () => {
})

//ANSWER BUTTONS


ans1.addEventListener('click', () => {
  console.log('answer 1 button works!')
})

ans2.addEventListener('click', () => {
  console.log('answer 2 button works!')
})

ans3.addEventListener('click', () => {
  console.log('answer 3 button works!')
})

ans4.addEventListener('click', () => {
  console.log('answer 4 button works!')
})

//CONTROL
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex = currentQuestionIndex +1
  setNextQuestion()
})
resetBtn.addEventListener('click', resetGame) 






/*-------------------------------- Functions --------------------------------*/
function resetGame(){
  startButton.classList.remove('hide')
  questionContainer.classList.add('hide')
  answerButtons.classList.add('hide')
  resetBtn.classList.add('hide')
  nextButton.classList.add('hide')
  mainEl.style.backgroundColor = 'cornflowerblue'

}
function startGame(){
  startButton.classList.add('hide')
  questionContainer.classList.remove('hide')
  answerButtons.classList.remove('hide')
  randomQuestions = questions.sort(() => Math.random() - .5) // takes the question array and sort it, if it is a negative number it will sort one way and math random will make it sort another way.
  currentQuestionIndex = 0

  setNextQuestion()
}

function setNextQuestion(){
  resetState()
  showQuestion(randomQuestions[currentQuestionIndex])
}

function showQuestion(question){
  questionEl.innerText = question.question
  question.answers.forEach(answer => {
    let button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('answer') 
    button.classList.add('btn') 
    if (answer.correct){
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtons.appendChild(button)
  });





}

function resetState(){
  nextButton.classList.add('hide')
  while (answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild)
  }
}

function selectAnswer(event){
  let selectedBtn = event.target
  let correct = selectedBtn.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtons.children).forEach(button =>{
    setStatusClass(button, button.dataset.correct)
  })
  if(randomQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
  }


  
  resetBtn.classList.remove('hide')
}

function setStatusClass(el, correct){
  clearStatusClass(el)

  if(correct){
    el.classList.add('correct')
    mainEl.style.backgroundColor = 'green'
  }
  else if(!correct){
    el.classList.add('wrong')
    mainEl.style.backgroundColor = '#f47174'
  }
}

function clearStatusClass(element){
  element.classList.remove('wrong')
  mainEl.style.backgroundColor = 'blue'
  element.classList.remove('correct')

}

