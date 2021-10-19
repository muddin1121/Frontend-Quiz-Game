

/*-------------------------------- Constants --------------------------------*/
let randomHTMLQuestions, currentQuestionIndex, randomCSSQuestions, randomJSQuestions


const htmlQuiz = [
  {
    question: 'What does HTML stand for?',
    answers: [
      
      {text: 'HyperText and links Markup Language', correct: false},
      {text: 'Hypertext Markup Language', correct: true},
      {text: 'Hypertext Made Language', correct: false},
      {text: 'HighText Machine Language', correct: false}

    ]
  },

  {
    question: 'The correct sequence of HTML tags for starting a webpage is -',
    answers: [
      {text: 'HTML, Body, Title, Head', correct: false},
      {text: 'Head, Title, HTML, body', correct: false},
      {text: 'Body, Head, Title, HTML', correct: false},
      {text: 'HTML, Head, Title, Body', correct: true}

    ]
  },

  {
    question: 'Which of the following element is responsible for making the text bold in HTML?',
    answers: [
      {text: '<br>', correct: false},
      {text: '<b>', correct: true},
      {text: '<a>', correct: false},
      {text: '<pre>', correct: false}

    ]
  },
  {
    question: 'Which of the following tag is used for inserting the largest heading in HTML?',
    answers: [
      {text: '<h1>', correct: true},
      {text: '<h3>', correct: false},
      {text: '<h6>', correct: false},
      {text: '<h4>', correct: false}

    ]
  },
  {
    question: 'Which of the following tag is used to insert a line-break in HTML?',
    answers: [
      {text: '<p>', correct: false},
      {text: '<b>', correct: false},
      {text: '<br>', correct: true},
      {text: '<pre>', correct: false}

    ]
  },
  {
    question: 'How to create a hyperlink in HTML?',
    answers: [
      {text: '<a href = "www.javatpoint.com"> javaTpoint.com </a>', correct: true},
      {text: '<a link = "www.javatpoint.com"> javaTpoint.com </a>', correct: false},
      {text: '<a url = "www.javatpoint.com" javaTpoint.com /a>', correct: false},
      {text: '<a> www.javatpoint.com <javaTpoint.com /a>', correct: false}

    ]
  },
  {
    question: 'How to insert an image in HTML?',
    answers: [
      {text: '<img link = "jtp.png" />', correct: false},
      {text: '<img url = "jtp.png" />', correct: false},
      {text: '<img href = "jtp.png" />', correct: false},
      {text: '<img src = "jtp.png" />', correct: true}

    ]
  },
  {
    question: 'How to add a background color in HTML?',
    answers: [
      {text: 'Creating webpages', correct: false},
      {text: 'Creating tomatoes', correct: true},
      {text: 'Creating Stylesheets', correct: false},
      {text: 'Creating functions', correct: false}

    ]
  },
  {
    question: 'Which of the following tag is used to define options in a drop-down selection list?',
    answers: [
      {text: '<select>', correct: false},
      {text: '<list>', correct: false},
      {text: '<dropdown>', correct: false},
      {text: '<option', correct: true}

    ]
  },
  {
    question: 'Which of the following tag is used to add rows in the table?',
    answers: [
      {text: '<td> and </td>', correct: false},
      {text: '<th> and <td>', correct: false},
      {text: '<tr> and </tr>', correct: true},
      {text: '<th> and </th>', correct: false}

    ]
  }
]



// css quiz
const cssQuiz = [
{
  question: 'What does CSS stand for?',
  answers: [
    
    {text: 'Color and Style system', correct: false},
    {text: 'Color and style sheets', correct: false},
    {text: 'Cascade style sheets', correct: false},
    {text: 'Cascading style sheets', correct: true}

  ]
},

{
  question: 'Which of the following is the correct syntax for referring the external style sheet?',
  answers: [
    {text: '<stylesheet> example.css </stylesheet>', correct: false},
    {text: '<link rel="stylesheet" type="text/css" href="example.css">', correct: true},
    {text: '<style src = "example.css">', correct: false},
    {text: '<style src = example.css>', correct: false}

  ]
},

{
  question: 'Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow?',
  answers: [
    {text: 'p {background-color : yellow;}', correct: true},
    {text: 'all {background-color : yellow;}', correct: false},
    {text: 'p {background-color : #yellow;}', correct: false},
    {text: 'all p {background-color : #yellow;}', correct: false}

  ]
},
{
  question: 'Which of the following is the correct syntax to display the hyperlinks without any underline?',
  answers: [
    {text: 'a {text-decoration : underline;}', correct: false},
    {text: 'a {decoration : no-underline;}', correct: false},
    {text: 'a {text-decoration : no-underline;}', correct: false},
    {text: 'a {text-decoration : none;}', correct: true}

  ]
},
{
  question: 'The CSS property used to make the text bold is -',
  answers: [
    {text: 'weight: bold', correct: false},
    {text: 'font: bold', correct: false},
    {text: 'font-weight: bold', correct: true},
    {text: 'style: bold', correct: false}

  ]
},
{
  question: 'Which of the following CSS property is used to specify the space between every letter inside an element?',
  answers: [
    {text: 'alpha-spacing', correct: false},
    {text: 'character-spacing', correct: false},
    {text: 'letter-spacing', correct: true},
    {text: 'alphabet-spacing', correct: false}

  ]
},
{
  question: 'Which of the following syntax is correct in CSS to make each word of a sentence start with a capital letter?',
  answers: [
    {text: 'text-style : capital;', correct: false},
    {text: 'transform : capitalize;', correct: false},
    {text: 'text-transform : capitalize;', correct: true},
    {text: '<text-transform : capital;', correct: false}

  ]
},
{
  question: 'How to select the elements with the class name "example"?',
  answers: [
    {text: 'example', correct: false},
    {text: '.example', correct: true},
    {text: '#example', correct: false},
    {text: 'Class example', correct: false}

  ]
},
{
  question: 'How to select the elements with the ID name "example"?',
  answers: [
    {text: '#example', correct: true},
    {text: '.example', correct: false},
    {text: 'example', correct: false},
    {text: 'class example', correct: false}

  ]
},
{
  question: 'The CSS property used to set the maximum width of the elements content box is -',
  answers: [
    {text: 'height property', correct: false},
    {text: 'max-height property', correct: false},
    {text: 'position property', correct: false},
    {text: 'max-width property', correct: true}

  ]
}
]

//Javascript quiz
const javascriptQuiz = [
  {
    question: 'Which type of language is JavaScript?',
    answers: [
      
      {text: 'Object-Oriented', correct: false},
      {text: 'Object-Based', correct: true},
      {text: 'Assembly-language', correct: false},
      {text: 'High-level', correct: false}
  
    ]
  },
  
  {
    question: 'Which one of the following also known as Conditional Expression:',
    answers: [
      {text: 'If-then-else statement', correct: false},
      {text: 'immediate if', correct: true},
      {text: 'Switch statement', correct: false},
      {text: 'Alternative to if-else', correct: false}
  
    ]
  },
  
  {
    question: 'When interpreter encounters an empty statements, what it will do:',
    answers: [
      {text: 'Prompts to complete the statement', correct: false},
      {text: 'Throws an error', correct: false},
      {text: 'Shows a warning', correct: false},
      {text: 'Ignores the statements', correct: true}
  
    ]
  },
  {
    question: 'The "function" and " var" are known as:',
    answers: [
      {text: 'Declaration statements', correct: true},
      {text: 'Keywords', correct: false},
      {text: 'Data types', correct: false},
      {text: 'Prototypes', correct: false}
  
    ]
  },
  {
    question: 'Which of the following option is used as hexadecimal literal beginning?',
    answers: [
      {text: 'OO', correct: false},
      {text: 'Ox', correct: false},
      {text: '0X', correct: false},
      {text: 'Both 0x and 0X', correct: true}
  
    ]
  },
  {
    question: 'In the JavaScript, which one of the following is not considered as an error',
    answers: [
      {text: 'Division by 0', correct: true},
      {text: 'Missing bracket', correct: false},
      {text: 'Missing semicolons', correct: false},
      {text: 'Syntax error', correct: false}
  
    ]
  },
  {
    question: 'Which of the following number object function returns the value of the number?',
    answers: [
      {text: 'toLocaleString()', correct: false},
      {text: 'toPrecision()', correct: false},
      {text: 'valueOf()', correct: true},
      {text: 'toString()', correct: false}
  
    ]
  },
  {
    question: 'In JavaScript the x===y statement implies that:',
    answers: [
      {text: 'Both x and y are equal in value, type and reference address as well.', correct: false},
      {text: 'Both are x and y are equal in value only.', correct: false},
      {text: 'Both are not same at all.', correct: false},
      {text: 'Both are equal in the value and data type.', correct: true}
  
    ]
  },
  {
    question: 'Choose the correct snippet from the following to check if the variable "a" is not equal the "NULL":',
    answers: [
      {text: 'if(a!=null)', correct: false},
      {text: 'if(a!null)', correct: false},
      {text: 'if (a!)', correct: false},
      {text: 'if(a!==null)', correct: true}
  
    ]
  },
  {
    question: 'In JavaScript, what will be used for calling the function definition expression:',
    answers: [
      {text: 'Function literal', correct: true},
      {text: 'Function prototype', correct: false},
      {text: 'Function calling', correct: false},
      {text: 'Function declaration', correct: false}
  
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

//SIDEBAR

//CONTROL
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex = currentQuestionIndex +1
  mainEl.style.backgroundColor = 'cornflowerblue'
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
  randomCSSQuestions = cssQuiz.sort(() => Math.random() - .5) // takes the question array and sort it, if it is a negative number it will sort one way and math random will make it sort another way.
  currentQuestionIndex = 0

  setNextQuestion()
}

function setNextQuestion(){
  resetState()
  showQuestion(randomCSSQuestions[currentQuestionIndex])
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
  if(randomCSSQuestions.length > currentQuestionIndex + 1){
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

