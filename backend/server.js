const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const { pickQuestions } = require("./utils/pickQuestionsModule");

const app = express();

app.use(cors());
app.use(express.json());
app.options("/api/generate-paper", cors()); // Respond to OPTIONS requests for the specific route

app.post("/api/generate-paper", (req, res) => {
  const { totalMarks, easy, medium, hard } = req.body;
  const questionStorePath = path.join(__dirname, "data", "questionstore.json");

  try {
    const questionStore = JSON.parse(
      fs.readFileSync(questionStorePath, "utf-8")
    );

    const selectedQuestions = pickQuestions(
      questionStore,
      totalMarks,
      easy,
      medium,
      hard
    );
    console.log("Selected Questions:", selectedQuestions);

    res.json({
      message: "Paper generated successfully",
      data: {
        totalMarks,
        easy,
        medium,
        hard,
        questions: selectedQuestions,
      },
    });
  } catch (err) {
    console.error(err); // Log the error to the console
    res
      .status(500)
      .json({ error: "Internal Server Error", message: err.message });
  }
});

app.get("/", (req, res) => {
  res.send("Its working");
});

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `Server is running on http://localhost:${process.env.PORT || 5000}`
  );
});
