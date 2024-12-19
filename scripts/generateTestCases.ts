import { OpenAI } from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateTestCases() {
  try {
    const prompt = `
      Generate test cases for the OpenWeatherMap API 'Current Weather Data'.
      Include:
      - Scenarios for getting weather by city name.
      - Scenarios for invalid inputs (e.g., invalid city name, missing API key).
      - A balance of edge cases and happy path tests.
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 100,
    });

    console.log("Generated Test Cases:");
    console.log(response.choices[0]?.message?.content?.trim());
  } catch (error) {
    console.error("Error generating test cases:", error);
  }
}

generateTestCases();
