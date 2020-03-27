import PropTypes from "prop-types"
import React from "react"


const CustomResultPage = (props) => {
  const { result } = props
  return (
    <div className="custom-result">
      <div>
        <h3>Thank you!</h3>
      </div>
      <div>
        <h3 className="score total-color">{result.numberOfQuestions}</h3>
      </div>
      <div>
        <h4>Total Questions</h4>
      </div>
      <div>
        <h3 className="score correct-answer">{result.numberOfCorrectAnswers}</h3>
      </div>
      <div>
        <h4>Correct Answers</h4>
      </div>
      <div>
        <h3 className="score red">{result.numberOfIncorrectAnswers}</h3>
      </div>
      <div>
        <h4>Incorrect Answers</h4>
      </div>
      {/* <div>
        <h3 className="score total">{result.totalPoints}</h3>
      </div>
       <div>
        <h4>Total Points</h4>
      </div>
      <div>
        <h3 className="score game-score">{result.correctPoints}</h3>
      </div>
      <div>
        <h4>Your score</h4>
      </div> */}

    </div>
  )
}

export default CustomResultPage