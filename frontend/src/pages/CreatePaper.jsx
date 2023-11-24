import React, { useState } from "react";
import Input from "../components/Input";
// import Select from '../components/Select'

function CreatePaper() {
  const initialState = {
    totalMarks: 0,
    easy: 0,
    medium: 0,
    hard: 0,
    // basis: "",
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
        console.log(data.message);
        setSelectedQuestions(data.data.questions);
      } else {
        console.error(data.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Create Paper
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Craft personalized question papers effortlessly by providing these
            details.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              {/* <Select onBasisChange={(basis) => handleInputChange('basis', basis)}/> */}
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

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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

      <div className="mt-6 flex items-center justify-start gap-x-6">
        {/* <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button> */}
        <button
          type="submit"
          className="rounded-md bg-reelobg px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-reelobg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-reelobg"
        >
          Generate
        </button>
      </div>
       {/* Display the picked questions */}
      {selectedQuestions.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Picked Questions</h2>
          <ul>
            {selectedQuestions.map((question) => (
              <li>{question.question}</li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
}

export default CreatePaper;
