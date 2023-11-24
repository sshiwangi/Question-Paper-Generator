import React, { useState } from "react";
import Input from "../components/Input";
import Question from "../components/Question";
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function CreatePaper() {
  const initialState = {
    totalMarks: 0,
    easy: 0,
    medium: 0,
    hard: 0,
  };
  const [formData, setFormData] = useState(initialState);
const [selectedQuestions, setSelectedQuestions] = useState([]);

  const handleInputChange = (fieldName, value) => {
    const numericValue = parseFloat(value);
    setFormData({
      ...formData,
      [fieldName]: numericValue,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/generate-paper", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        // console.log(data.message);
        setSelectedQuestions(data.data.questions);
      } else {
        console.error(data.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e5e0e2] to-[#c2edef] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Create Paper</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
           Craft personalized question papers effortlessly by providing these
            details.
        </p>
      </div>
    <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10">
            <div className="sm:col-span-4">
              <Input
                for="total-marks"
                label="Total Marks"
                type="number"
                name="total-marks"
                id="total-marks"
                placeholder="Enter Total Marks"
                value={formData.totalMarks}
                onChange={(e) =>
                  handleInputChange("totalMarks", e.target.value)
                }
              />
            </div>
          </div>
          <div className="mt-10">
            <div className="sm:col-span-4">
              <Input
                for="easy"
                label="Easy"
                type="number"
                name="easy"
                id="easy"
                placeholder="Enter Easy Percentage"
                value={formData.easy}
                onChange={(e) =>
                  handleInputChange("easy", e.target.value)
                }
              />
            </div>
          </div>

          <div className="mt-10">
            <div className="sm:col-span-4">
              <Input
                for="medium"
                label="Medium"
                type="number"
                name="medium"
                id="medium"
                placeholder="Enter Medium Percentage"
                value={formData.medium}
                onChange={(e) =>
                  handleInputChange("medium", e.target.value)
                }
              />
            </div>
          </div>
          <div className="mt-10">
            <div className="sm:col-span-4">
              <Input
                for="hard"
                label="Hard"
                type="number"
                name="hard"
                id="hard"
                placeholder="Enter hard Percentage"
                value={formData.hard}
                onChange={(e) =>
                  handleInputChange("hard", e.target.value)
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-x-6">
        <button
          type="submit"
          className="w-full rounded-md bg-reelobg px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-reelobg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-reelobg"
        >
          Generate
        </button>
      </div>
      {selectedQuestions.length > 0 && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Picked Questions</h2>
            <div className="rounded-md overflow-hidden border border-gray-300">
              {selectedQuestions.map((question, index) => (
                <Question
                  key={index}
                  number={`Q${index + 1}`}
                  text={question.question}
                  isLast={index === selectedQuestions.length - 1}
                />
              ))}
            </div>
          </div>
        )}
    </form>
    </div>
  );
}

export default CreatePaper;
