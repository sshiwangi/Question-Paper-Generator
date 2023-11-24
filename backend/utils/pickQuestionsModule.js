// yourAlgorithmModule.js
function pickQuestions(
  questionStore,
  totalMarks,
  easyPercentage,
  mediumPercentage,
  hardPercentage
) {
  // Calculate the number of questions based on percentages
  const easyMarks = Math.round((easyPercentage / 100) * totalMarks);
  const mediumMarks = Math.round((mediumPercentage / 100) * totalMarks);
  const hardMarks = Math.round((hardPercentage / 100) * totalMarks);

  let questions = [];
  let easyQuestionsList = [];
  let mediumQuestionsList = [];
  let hardQuestionsList = [];

  for (const question of questionStore) {
    if (question.difficulty === "Easy") {
      easyQuestionsList.push(question);
    } else if (question.difficulty === "Medium") {
      mediumQuestionsList.push(question);
    } else if (question.difficulty === "Hard") {
      hardQuestionsList.push(question);
    }
  }
  // console.log(easyQuestionsList);
  // if (
  //   easyMarks % easyQuestionsList[0].marks !== 0 ||
  //   mediumMarks % mediumQuestionsList[0].length !== 0 ||
  //   hardMarks % hardQuestionsList[0].length !== 0
  // ){
  //   throw new Error(
  //     "Choose other percentage for easy, medium or hard questions"
  //   );
  // }
  if (
    easyQuestionsList.length === 0 ||
    mediumQuestionsList.length === 0 ||
    hardQuestionsList.length === 0
  ) {
    throw new Error(
      "No questions available for one or more difficulty levels."
    );
  }

  let easyQuestions = Math.floor(easyMarks / easyQuestionsList[0].marks);
  let mediumQuestions = Math.floor(mediumMarks / mediumQuestionsList[0].marks);
  let hardQuestions = Math.floor(hardMarks / hardQuestionsList[0].marks);
  console.log({ easyQuestions, mediumQuestions, hardQuestions });

  let easyCount = 0;
  let mediumCount = 0;
  let hardCount = 0;

  for (const question of easyQuestionsList) {
    if (easyCount !== easyQuestions) {
      questions.push(question);
      easyCount++;
    }
  }

  for (const question of mediumQuestionsList) {
    if (mediumCount !== mediumQuestions) {
      questions.push(question);
      mediumQuestions--;
    }
  }

  for (const question of hardQuestionsList) {
    if (hardCount !== hardQuestions) {
      questions.push(question);
      hardQuestions--;
    }
  }

  // Check if the number of questions formed is greater than the number of questions in the dataset
  const totalQuestions = easyQuestions + mediumQuestions + hardQuestions;
  if (totalQuestions > questionStore.length) {
    throw new Error(
      "Not enough questions in the dataset. Please choose other percentages."
    );
  }

  // Check if there are enough questions for each difficulty level
  if (
    easyQuestionsList.length >
      questionStore.filter((q) => q.difficulty === "Easy").length ||
    mediumQuestionsList.length >
      questionStore.filter((q) => q.difficulty === "Medium").length ||
    hardQuestionsList.length >
      questionStore.filter((q) => q.difficulty === "Hard").length
  ) {
    throw new Error(
      "Not enough questions for the selected percentages. Please choose other percentages."
    );
  }
  // console.log(questions);
  return questions;
}

module.exports = { pickQuestions };
