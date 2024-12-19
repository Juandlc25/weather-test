# Test Plan: OpenWeatherMap API

## Objective

To ensure the `Current Weather Data` API endpoint from OpenWeatherMap functions correctly under various scenarios, including valid inputs, edge cases, and error handling.

## Tools and Frameworks

- **Postman**: Manual testing.
- **Playwright**: API automation testing.
- **Jest**: Assertions and reporting.
- **GitHub Actions**: CI/CD pipeline integration.

## Test Scenarios

### Happy Paths

1. **Get Weather by City Name**

   - Input: `London`
   - Expected Output: HTTP 200, `name` = "London".

2. **Get Weather by Geographic Coordinates**
   - Input: `lat=51.5074`, `lon=-0.1278`
   - Expected Output: HTTP 200, `coord` matches input.

### Edge Cases

1. **Invalid City Name**

   - Input: `q=InvalidCity`
   - Expected Output: HTTP 404, error message "city not found".

2. **Invalid Geographic Coordinates**

   - Input: `lat=200`, `lon=200`
   - Expected Output: HTTP 400, error message for invalid coordinates.

3. **Missing API Key**
   - Input: Request without `appid`
   - Expected Output: HTTP 401, error message "Invalid API key".

## CI/CD Integration

- Automate tests using **GitHub Actions**.
- Set up workflows to trigger tests on every pull request and commit.
- Generate test reports for visibility.

## Test Data

- API Key: `YOUR_API_KEY`
- Sample Coordinates: `51.5074, -0.1278`
