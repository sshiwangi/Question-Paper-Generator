import React from 'react';

function Question({ number, text, isLast }) {
  return (
    <div className={`border-b ${isLast ? 'border-none' : 'border-gray-300'} px-4 py-3`}>
      <div className="flex items-center mb-2">
        <span className="font-bold text-sm mr-2">{number}:</span>
        <span className="text-sm">{text}</span>
      </div>
    </div>
  );
}

export default Question;

