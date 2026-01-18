import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function SelectOptions() {
  const navigate = useNavigate();
  const search = new URLSearchParams(useLocation().search);
  const type = search.get("type");

  const [topics, setTopics] = useState([]);
  const [role, setRole] = useState("");

  const availableTopics = ["DSA", "DBMS", "OOP", "Java", "OS", "CN"];
  const roles = ["Software Engineer", "Data Analyst", "Frontend Developer"];

  const handleNext = () => {
    navigate("/practice/start", {
      state: { type, topics, role },
    });
  };

  return (
    <div className="mt-10 max-w-xl mx-auto bg-white p-6 shadow rounded-xl">
      <h1 className="text-2xl font-bold mb-4">
        {type === "technical" ? "Select Technical Topics" : "Select HR Role"}
      </h1>

      {type === "technical" && (
        <div className="grid grid-cols-2 gap-3 mb-6">
          {availableTopics.map((t) => (
            <label key={t} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={t}
                onChange={(e) =>
                  e.target.checked
                    ? setTopics([...topics, t])
                    : setTopics(topics.filter((x) => x !== t))
                }
              />
              {t}
            </label>
          ))}
        </div>
      )}

      {type === "hr" && (
        <select
          className="border p-3 w-full rounded mb-6"
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Select Role</option>
          {roles.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      )}

      <button
        onClick={handleNext}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full"
      >
        Let's Practice
      </button>
    </div>
  );
}
