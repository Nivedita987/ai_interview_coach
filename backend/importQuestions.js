import fs from "fs";
import csv from "csv-parser";
import mongoose from "mongoose";
import Question from "./models/Question.js";

mongoose.connect("mongodb://127.0.0.1:27017/ai_interview_coach");

const results = [];

fs.createReadStream("./data/Software Questions.csv")
  .pipe(csv())
  .on("data", (row) => {
    results.push({
      questionNumber: row["Question Number"],
      question: row["Question"],
      answer: row["Answer"],
      category: row["Category"],
      difficulty: row["Difficulty"]
    });
  })
  .on("end", async () => {
    await Question.insertMany(results);
    console.log("✅ Questions imported successfully");
    mongoose.connection.close();
  });
