import { OpenAI } from "openai";
import dotenv from "dotenv";
import * as fs from "fs";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function analyzeTestResults() {
  try {
    const testResults = fs.readFileSync("test-results.json", "utf-8");

    const prompt = `
      Analyze the following test results and identify patterns, common failures, and potential improvements.
      Provide actionable insights based on the failures.
      Test Results:
      ${testResults}
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    console.log("Analysis of Test Results:");
    console.log(response.choices[0]?.message?.content?.trim());
  } catch (error) {
    console.error("Error analyzing test results:", error);
  }
}

analyzeTestResults();
