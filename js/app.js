

/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/

const htmlBtn = document.querySelector("#html-button")
const cssBtn = document.querySelector("#css-button")
const javascriptBtn = document.querySelector("#javascript-button")
const createBtn = document.querySelector("#create-button")
const resetBtn = document.querySelector("#reset-button")

const quizContainer = document.querySelector("#quiz-container")


/*----------------------------- Event Listeners -----------------------------*/

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
  console.log('Reset button works!')
})



/*-------------------------------- Functions --------------------------------*/