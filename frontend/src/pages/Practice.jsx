// import { useState } from "react";

// const Practice = () => {
//   const [questionData, setQuestionData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchQuestion = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch("http://localhost:5000/api/questions/random");
//       const data = await res.json();
//       setQuestionData(data);
//     } catch (err) {
//       console.error("Error fetching question", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-16">
//       <h1 className="text-3xl font-bold mb-6">Interview Practice</h1>

//       <button
//         onClick={fetchQuestion}
//         className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition mb-8"
//       >
//         {loading ? "Loading..." : "Generate Question"}
//       </button>

//       {questionData && (
//         <div className="bg-white w-[600px] p-6 rounded-xl shadow-md">
//           <h2 className="text-xl font-semibold mb-4">
//             {questionData.question}
//           </h2>

//           <div className="flex justify-between text-sm text-gray-600">
//             <span>
//               <strong>Category:</strong> {questionData.category}
//             </span>
//             <span>
//               <strong>Difficulty:</strong> {questionData.difficulty}
//             </span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Practice;

import { useEffect, useState } from "react";

export default function Practice() {
  const [category, setCategory] = useState("Choose Category");
  const [difficulty, setDifficulty] = useState("Hard");
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchQuestion = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:5000/api/questions/random?category=${category}&difficulty=${difficulty}`
      );
      const data = await res.json();
      setQuestion(data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Technical Interview Practice</h1>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          <option>Machine Learning</option>
          <option>System Design</option>
          <option>Software Testing</option>
          <option>Algorithms</option>
          <option>Data Structures</option>
        </select>

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <button
          onClick={fetchQuestion}
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          {question ? "Next Question" : "Start Practice"}
        </button>
      </div>

      {/* Question Card */}
      {loading && <p>Loading...</p>}

      {question && (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
          <p className="text-sm text-gray-500 mb-2">
            {question.category} • {question.difficulty}
          </p>

          <h2 className="text-xl font-semibold mb-4">
            {question.question}
          </h2>

          <details className="mt-4">
            <summary className="cursor-pointer text-blue-600">
              Show Answer
            </summary>
            <p className="mt-2 text-gray-700">
              {question.answer}
            </p>
          </details>
        </div>
      )}
    </div>
  );
}
