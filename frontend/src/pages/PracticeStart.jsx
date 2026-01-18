// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const categoryMap = {
//   DSA: "Data Structures",
//   OOPS: "General Programming",
//   Java: "General Programming",
//   "System Design": "System Design",
//   ML: "Machine Learning"
// };

// export default function PracticeStart() {
//   const [category, setCategory] = useState("");
//   const [difficulty, setDifficulty] = useState("");
//   const navigate = useNavigate();

//   const startPractice = () => {
//     if (!category || !difficulty) return alert("Select all fields");

//     navigate(
//       `/practice?category=${categoryMap[category]}&difficulty=${difficulty}`
//     );
//   };

//   return (
//     <div className="start-container">
//       <h2>Start Interview Practice</h2>

//       <select onChange={e => setCategory(e.target.value)}>
//         <option value="">Select Category</option>
//         <option>DSA</option>
//         <option>OOPS</option>
//         <option>Java</option>
//         <option>System Design</option>
//         <option>ML</option>
//       </select>

//       <select onChange={e => setDifficulty(e.target.value)}>
//         <option value="">Select Difficulty</option>
//         <option>Easy</option>
//         <option>Medium</option>
//         <option>Hard</option>
//       </select>

//       <button onClick={startPractice}>Start Practice</button>
//     </div>
//   );
// }

// import { useState } from "react";
// import axios from "axios";

// const categoryMap = {
//   DSA: "Data Structures",
//   OOPS: "General Programming",
//   Java: "General Programming",
//   "System Design": "System Design",
//   ML: "Machine Learning"
// };

// export default function PracticeStart() {
//   const [category, setCategory] = useState("");
//   const [difficulty, setDifficulty] = useState("");
//   const [question, setQuestion] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const startPractice = async () => {
//     if (!category || !difficulty) {
//       alert("Select all fields");
//       return;
//     }

//     setLoading(true);

//     try {
//       const res = await axios.get("http://localhost:5000/api/questions", {
//         params: {
//           category: categoryMap[category],
//           difficulty
//         }
//       });

//       // pick one random question
//       const randomQuestion =
//         res.data[Math.floor(Math.random() * res.data.length)];

//       setQuestion(randomQuestion);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to load question");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="start-container">
//       <h2>Start Interview Practice</h2>

//       <select onChange={e => setCategory(e.target.value)}>
//         <option value="">Select Category</option>
//         <option>DSA</option>
//         <option>OOPS</option>
//         <option>Java</option>
//         <option>System Design</option>
//         <option>ML</option>
//       </select>

//       <select onChange={e => setDifficulty(e.target.value)}>
//         <option value="">Select Difficulty</option>
//         <option>Easy</option>
//         <option>Medium</option>
//         <option>Hard</option>
//       </select>

//       <button onClick={startPractice}>
//         {loading ? "Loading..." : "Start Practice"}
//       </button>

//       {/* 🔥 QUESTION DISPLAY */}
//       {question && (
//         <div className="question-box">
//           <h3>Question</h3>
//           <p>{question.question}</p>

//           <details>
//             <summary>Show Answer</summary>
//             <p>{question.answer}</p>
//           </details>
//         </div>
//       )}
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import axios from "axios";

export default function PracticeStart() {
  const [category, setCategory] = useState("Data Structures");
  const [difficulty, setDifficulty] = useState("Medium");
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchQuestion = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/api/practice", {
        params: { category, difficulty }
      });
      setQuestion(res.data);
    } catch (err) {
      alert("Failed to load question");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Technical Practice</h2>

      <div className="flex gap-4">
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option>Data Structures</option>
          <option>OOPS</option>
          <option>Java</option>
          <option>DBMS</option>
        </select>

        <select value={difficulty} onChange={e => setDifficulty(e.target.value)}>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <button onClick={fetchQuestion} className="bg-blue-600 text-white px-4 py-1 rounded">
          Start / Next
        </button>
      </div>

      {loading && <p>Loading...</p>}

      {question && (
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold">Q.</h3>
          <p>{question.question}</p>
        </div>
      )}
    </div>
  );
}
