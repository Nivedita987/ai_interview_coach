import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function StartPractice() {
  const { state } = useLocation();
  const { topic, difficulty } = state || {};

  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchQuestion = async () => {
    setLoading(true);

    const res = await fetch("http://localhost:5000/api/questions/generate-questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic, difficulty })
    });

    const data = await res.json();
    setQuestion(data.question);
    setLoading(false);
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Your AI Question</h2>

      {loading ? (
        <p>Generating question...</p>
      ) : (
        <p>{question}</p>
      )}

      <button onClick={fetchQuestion} style={{ marginTop: "20px" }}>
        Next Question
      </button>
    </div>
  );
}
