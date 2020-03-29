import React from "react"
// import { Link } from "gatsby"
import Quiz from 'react-quiz-component';
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import CustomResultPage from '../components/result'
import QuizData from "../api/quiz.json"
const renderCustomResultPage = (obj) => {
  return (
    <CustomResultPage result={obj}></CustomResultPage>
  )
}
const quizData = JSON.parse(JSON.stringify(QuizData));
quizData.questions = quizData.questions.sort(() => 0.5 - Math.random());
quizData.questions = quizData.questions.slice(0, 10);
const IndexPage = () => (
  <Layout >
    <SEO title="Covid-19 Quiz" />
    <Quiz quiz={quizData} className="quiz-100" showDefaultResult={false} customResultPage={renderCustomResultPage} />
  </Layout>
)

export default IndexPage
