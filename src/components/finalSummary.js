import PropTypes from "prop-types"
import React from "react"



const QuestionSummary = (props) => {
  return (
    <div className='question-summary'>
      <div className=''>
        <label>Question: </label>
        <span>{props.question}</span>
      </div>
      <div className=''>
        <label>Correct Answer: </label>
        <span>{props.correctAnswer}</span>
      </div>
      <div>
        <label>Your Answer: </label>
        <span className={props.correctAnswer === props.yourAnswer ? 'correct-answer' : 'red'}> {props.yourAnswer}</span>
      </div>
    </div>
  )
}
const makeSummary = (questions, userInput) => {
  return questions.map((questionRow, i) => {
    return (
      <QuestionSummary
        question={questionRow.question}
        correctAnswer={questionRow.answers[parseInt(questionRow.correctAnswer, 10) - 1]}
        yourAnswer={questionRow.answers[userInput[i] - 1]}
      >
      </QuestionSummary>
    )
  })
}
const FinalSummary = (props) => {
  const { questions, userInput } = props
  return (
    <div>
      <h4>Check your answers</h4>
      <div>
        {makeSummary(questions, userInput)}
      </div>
    </div>
  )
}

export default FinalSummary