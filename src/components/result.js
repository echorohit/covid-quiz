import PropTypes from "prop-types"
import React from "react"
import FinalSummary from './finalSummary'

const CustomResultPage = (props) => {
  const { result } = props
  const { questions, userInput } = result
  return (
    <div>
      <div>
        <h3>Thank you! Here's the result</h3>
      </div>
      <div className="custom-result">

        <div>
          <h3 className="score total-color">{result.numberOfQuestions}</h3>
        </div>
        <div>
          <h4>Questions</h4>
        </div>
        <div>
          <h3 className="score correct-answer">{result.numberOfCorrectAnswers}</h3>
        </div>
        <div>
          <h4>Correct</h4>
        </div>
        <div>
          <h3 className="score red">{result.numberOfIncorrectAnswers}</h3>
        </div>
        <div>
          <h4>Incorrect</h4>
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
      <div>
        <div>
          <FinalSummary questions={questions} userInput={userInput}></FinalSummary>
        </div>
      </div>
    </div>
  )
}

export default CustomResultPage