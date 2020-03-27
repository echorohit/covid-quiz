import React from "react"
import { Link } from "gatsby"
import Quiz from 'react-quiz-component';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import CustomResultPage from '../components/result'
import QuizData from "../api/quiz.json"
const renderCustomResultPage = (obj) => {
  return (
    <CustomResultPage result={obj}></CustomResultPage>
  )
}
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Quiz quiz={QuizData} className="quiz-100" showDefaultResult={false} customResultPage={renderCustomResultPage} />
  </Layout>
)

export default IndexPage
