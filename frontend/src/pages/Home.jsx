// export default function Home() {
//   return (
//     <div className="text-center">
//       <h1 className="text-4xl font-bold mb-4">Welcome to AI Interview Coach</h1>
//       <p className="text-gray-600 text-lg mb-8">
//         Practice interviews, get instant AI feedback, and track your progress.
//       </p>

//       <div className="flex justify-center gap-6">
//         <a href="/practice" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
//           Start Practicing
//         </a>
//         <a href="/dashboard" className="px-6 py-3 bg-gray-200 rounded-lg shadow hover:bg-gray-300 transition">
//           View Dashboard
//         </a>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { Link } from "react-router-dom";

function Feature({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-4">
      <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg">
        <span className="text-blue-600 text-xl">{icon}</span>
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero */}
      <section className="bg-gray-50 rounded-xl p-10 mt-6">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              AI Interview Coach — Practice Smarter, Perform Better
            </h1>
            <p className="mt-4 text-gray-600 max-w-xl">
              Record answers to common interview questions, get instant feedback
              on fillers, speed and sentiment, and track your progress over time.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/practice"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
              >
                Start Practicing
              </Link>
              <Link
                to="/dashboard"
                className="inline-block px-6 py-3 bg-white text-gray-800 border border-gray-200 rounded-lg shadow hover:bg-gray-50 transition"
              >
                View Dashboard
              </Link>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              <strong>Tip:</strong> Click <em>Start Practicing</em> and speak into
              your mic to try a demo answer.
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            {/* Simple illustration box */}
            <div className="w-full max-w-md p-6 bg-linear-to-tr from-white to-blue-50 rounded-2xl shadow-md">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-center mb-3">Live Demo</h4>
                <div className="h-28 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-gray-400">Waveform / Illustration</div>
                </div>
                <p className="text-xs text-gray-500 mt-3 text-center">
                  Live audio analysis & emotion detection demo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Feature
          icon={"🎤"}
          title="Speech Analysis"
          desc="Analyze speech speed, filler words and clarity."
        />
        <Feature
          icon={"🤖"}
          title="AI Feedback"
          desc="Sentiment and confidence suggestions powered by NLP."
        />
        <Feature
          icon={"📈"}
          title="Progress Tracking"
          desc="Charts and history to visualize improvement over time."
        />
      </section>

      {/* Footer-like CTA */}
      <section className="bg-white rounded-xl p-6 shadow-sm mb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold">Ready to improve?</h3>
            <p className="text-sm text-gray-600">Try a practice session now.</p>
          </div>
          <div>
            <Link
              to="/practice"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Start Practicing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
