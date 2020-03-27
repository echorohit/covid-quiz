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
    question.option_4
  ]
  delete question.option_1
  delete question.option_2
  delete question.option_3
  delete question.option_4
  question.correctAnswer = question.correctAnswer.toString()
  return question
})

const quizObject = {
  "quizTitle": "Let's see how much you know about Covid19(Corona Virus)",
  "quizSynopsis": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
  "questions": questions
}

try {
  fs.writeFileSync('./src/api/quiz.json', JSON.stringify(quizObject))
} catch (err) {
  console.error(err)
}


