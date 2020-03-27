var XLSX = require('xlsx')
const fs = require('fs')
var workbook = XLSX.readFile('Covid19Quiz.xlsx');
var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

const questions = xlData.map(question => {
  question['answers'] = [
    question.option_1,
    question.option_2,
    question.option_3,
  ]
  delete question.option_1
  delete question.option_2
  delete question.option_3
  question.correctAnswer = question.correctAnswer.toString()
  return question
})

const quizObject = {
  "quizTitle": "How much do you know about COVID-19? Let’s find out!",
  "quizSynopsis": `With this deadly pandemic affecting thousands of people and taking hundreds of lives every day across the globe, it becomes all the more important to know most about it.Because, the more you know, the easier it gets to tackle it.`,
  "questions": questions
}

try {
  fs.writeFileSync('./src/api/quiz.json', JSON.stringify(quizObject))
} catch (err) {
  console.error(err)
}


