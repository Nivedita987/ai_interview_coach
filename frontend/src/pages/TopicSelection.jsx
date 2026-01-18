import React from "react";
import { useNavigate } from "react-router-dom";

export default function TopicSelection() {
  const navigate = useNavigate();

  const topics = [
    { id: "technical", title: "Technical Interview", desc: "Coding, CS concepts, problem solving" },
    { id: "hr", title: "HR Interview", desc: "Personality, strengths, weaknesses, goals" },
    { id: "behavioral", title: "Behavioral Round", desc: "STAR method, situations, leadership" }
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        Choose Your Interview Type
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {topics.map(t => (
          <div
            key={t.id}
            onClick={() => navigate(`/practice?topic=${t.id}`)}
            className="cursor-pointer bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{t.title}</h2>
            <p className="text-gray-600 mt-2">{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
