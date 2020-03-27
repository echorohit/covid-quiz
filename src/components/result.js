import PropTypes from "prop-types"
import React from "react"

const CustomResultPage = (props) => {
  const { result } = props
  return (
    <div>
      <div>
        <p><h4>Thank you for playing the quiz! Here is your score</h4></p>
      </div>
      <div>
        <h4>Total Questions: {result.numberOfQuestions}</h4>
      </div>
      <div>
        <h4>Number of Correct Answer: {result.numberOfCorrectAnswers}</h4>
      </div>
      <div>
        <h4>Number of Incorrect Answer: {result.numberOfIncorrectAnswers}</h4>
      </div>
      <div>
        <h4>Total Points: {result.totalPoints}</h4>
      </div>
      <div>
        <h4>Your score: {result.correctPoints}</h4>
      </div>
    </div>
  )
}

export default CustomResultPage