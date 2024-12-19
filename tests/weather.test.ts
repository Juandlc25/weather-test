import { test, expect, APIRequestContext } from "@playwright/test";

const apiKey = "1692f7248bd41122202b0c11fcd425b0";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

test.describe("OpenWeatherMap API Tests", () => {
  let request: APIRequestContext;

  test.beforeAll(async ({ playwright }) => {
    request = await playwright.request.newContext();
  });

  test("Get weather by city name - Valid input", async () => {
    const response = await request.get(`${baseUrl}?q=London&appid=${apiKey}`);
    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data.name).toBe("London");
  });

  test("Get weather by geographic coordinates - Valid input", async () => {
    const lon = -0.1278;
    const lat = 51.5074;
    const response = await request.get(
      `${baseUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );
    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data.coord).toMatchObject({ lat, lon });
  });

  test("Error handling - Invalid city name", async () => {
    const response = await request.get(
      `${baseUrl}?q=InvalidCity&appid=${apiKey}`
    );
    expect(response.status()).toBe(404);
    const data = await response.json();
    expect(data.message).toBe("city not found");
  });

  test("Error handling - Invalid geographic coordinates", async () => {
    const response = await request.get(
      `${baseUrl}?lat=200&lon=200&appid=${apiKey}`
    );
    expect(response.status()).toBe(400);
    const data = await response.json();
    expect(data.message).toContain("wrong latitude or longitude");
  });

  test("Error handling - Missing API key", async () => {
    const response = await request.get(`${baseUrl}?q=London`);
    expect(response.status()).toBe(401);
    const data = await response.json();
    expect(data.message).toBe(
      "Invalid API key. Please see https://openweathermap.org/faq#error401 for more info."
    );
  });
});
