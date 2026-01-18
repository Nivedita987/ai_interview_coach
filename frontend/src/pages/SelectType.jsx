import { useNavigate } from "react-router-dom";

export default function SelectType() {
  const navigate = useNavigate();

  return (
    <div className="grid place-items-center mt-20">
      <h1 className="text-3xl font-bold mb-6">Choose Interview Type</h1>

      <div className="grid grid-cols-2 gap-6">
        <button
          className="bg-blue-600 text-white px-6 py-4 rounded-xl"
          // onClick={() => navigate("/PracticeStart")}
          onClick={() => navigate("/PracticeStart")}
        >
          Technical Interview
        </button>

        <button
          className="bg-green-600 text-white px-6 py-4 rounded-xl"
          onClick={() => navigate("/PracticeStart")}
        >
          HR Interview
        </button>
      </div>
    </div>
  );
}
