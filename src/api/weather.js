import axios from "axios";

const API_KEY = "636b37ffc617caa52acf12ab49ae23cd"; 
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city = "Kramatorsk") => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
        lang: "ua"
      }
    });
    return response.data;
  } catch (error) {
    console.error("❌ Помилка запиту до погоди:", error.message);
    return null;
  }
};
