import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  questionNumber: Number,
  question: String,
  answer: String,
  category: String,
  difficulty: String,
});

const Question = mongoose.model("Question", questionSchema);

export default Question;
