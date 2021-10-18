

/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
//question buttons
const htmlBtn = document.querySelector("#html-button")
const cssBtn = document.querySelector("#css-button")
const javascriptBtn = document.querySelector("#javascript-button")
const createBtn = document.querySelector("#create-button")
const resetBtn = document.querySelector("#reset-button")

const quizContainer = document.querySelector("#quiz-container")

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
  console.log('Reset button works!')
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



/*-------------------------------- Functions --------------------------------*/