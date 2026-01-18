export async function generateQuestions_Gemini(type, topic) {
  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Generate 5 interview questions for ${type}. Topic: ${topic}.
              Format as a JSON array of questions only.`
            }]
          }]
        }),
      }
    );

    const data = await response.json();

    if (!data?.candidates?.[0]?.content?.parts?.[0]?.text)
      throw new Error("Invalid response");

    return JSON.parse(data.candidates[0].content.parts[0].text);
  } catch (err) {
    console.error(err);
    return ["Error generating questions"];
  }
}
