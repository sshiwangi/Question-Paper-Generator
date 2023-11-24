// QuestionPaper.js
import React, { useState } from 'react';
import Question from './Question';

const QuestionPaper = () => {
  const [questions, setQuestions] = useState([]);
  const [totalMarks, setTotalMarks] = useState(0);

  const handleAddQuestion = () => {
    // For simplicity, let's assume the question text is hard-coded.
    const newQuestion = "Sample question text";
    setQuestions([...questions, newQuestion]);

    // Update total marks (you may have a separate input for this in your actual application).
    setTotalMarks((prevTotalMarks) => prevTotalMarks + 1);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Question Paper</h1>

      {/* Display total marks */}
      <p className="mb-4">Total Marks: {totalMarks}</p>

      {/* Button to add a new question */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleAddQuestion}
      >
        Add Question
      </button>

      {/* Display added questions */}
      {questions.map((question, index) => (
        <Question key={index} number={index + 1} text={question} />
      ))}
    </div>
  );
};

export default QuestionPaper;
