# OpenWeatherMap API Tests with TypeScript

## Setup Instructions

### Prerequisites

- Node.js and npm installed.
- A valid OpenWeatherMap API key.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Juandlc25/weather-test.git
   cd weather-test
   ```

## AI Integration

### Test Case Generation

We use OpenAI API to generate test cases for the OpenWeatherMap API. The AI generates both happy path and edge cases based on the prompt provided. This reduces manual effort in creating exhaustive test cases.

### Test Results Analysis

The AI analyzes test results to identify common patterns, failures, and areas of improvement. This helps prioritize fixes and improve the quality of tests.

### Steps to Run

1. **Generate Test Cases**:
   ```bash
   npx ts-node scripts/generateTestCases.ts
   ```
