// Question.js
import React from 'react';

const Question = ({ number, text }) => {
  return (
    <div className="mb-4">
      <p className="text-lg font-semibold">{`Question ${number}: ${text}`}</p>
    </div>
  );
};

export default Question;
