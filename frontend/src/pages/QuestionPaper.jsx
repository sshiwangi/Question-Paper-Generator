// // QuestionPaper.js
// import React, { useState } from 'react';
// // import Question from './Question';

// const QuestionPaper = (props) => {
//   const [questions, setQuestions] = useSTA
//   // const [questions, setQuestions] = useState([]);
//   // const [totalMarks, setTotalMarks] = useState(0);

//   // const handleAddQuestion = () => {
//   //   // For simplicity, let's assume the question text is hard-coded.
//   //   const newQuestion = "Sample question text";
//   //   setQuestions([...questions, newQuestion]);

//   //   // Update total marks (you may have a separate input for this in your actual application).
//   //   setTotalMarks((prevTotalMarks) => prevTotalMarks + 1);
//   // };

//   return (
//     <div>
//     <div className="flex items-center justify-center h-screen">
//       <h1 className="text-4xl font-bold mb-6">Your Question Paper</h1>

//       <div className="flex items-center">
//         <p className="text-lg">Total Marks: {props.totalMarks}</p>
//         <p className="text-lg">Easy: {props.easy}</p>
//         <p className="text-lg">Medium: {props.medium}</p>
//         <p className="text-lg">Hard: {props.hard}</p>
//       </div>
//     </div>
//     <div className="border p-4 mb-4">
//       {/* Question Number */}
//       <div className="text-xl font-bold mb-2">Question 1</div>

//       {/* Question Text */}
//       props.questions.map(question => {

//       })
//       <div className="mb-4">{props.questions[0]}</div>

//       {/* Difficulty Buttons */}
//       <div className="flex mb-2">
//         <button> difficulty={props.questions[0].difficulty}</button>
//       </div>

//       {/* Topic */}
//       <div className="font-semibold">Topic: {props.questions[0].topic}</div>
//     </div>
//     </div>
//   );
// };

// export default QuestionPaper;
