// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import questionsRoutes from "./routes/questions.js";

// const app = express();

// app.use(cors());
// app.use(express.json());

// mongoose
//   .connect("mongodb://127.0.0.1:27017/ai_interview_coach")
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error(err));

// app.use("/api/questions", questionsRoutes);

// const PORT = 5000;
// app.listen(PORT, () =>
//   console.log(`Server running on port ${PORT}`)
// );

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import questionRoutes from "./routes/questions.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/ai_coach");

app.use("/api", questionRoutes);

app.listen(5000, () =>
  console.log("🚀 Server running on port 5000")
);
