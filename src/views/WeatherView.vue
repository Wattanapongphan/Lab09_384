<template>
  <meta charset="UTF-8">
  <div class="weather-forecast">
    <h1 class="title">5-Day Weather Forecast</h1>
    <div v-if="loading">
      Loading...
    </div>
    <div v-else-if="forecast && forecast.list && forecast.list.length > 0">
      <div v-if="forecast.city" class="location-info">
        Location: {{ forecast.city.name }}, {{ forecast.city.country }}
      </div>
      <div v-else class="location-info">
        Location information not available.
      </div>
      <div class="forecast-grid">
    <div
      v-for="(day, index) in forecast.list"
      :key="index"
      class="forecast-item"
    >
      <div class="day">{{ index + 1 }}</div>
      <div class="date">Date: {{ new Date(day.dt * 1000).toLocaleDateString() }}</div>
      <div class="temperature">Temperature: {{ day.main.temp }} °C</div>
      <div class="weather">Weather: {{ day.weather[0].description }}</div>
      <img :src="getIconUrl(day.weather[0].icon)" alt="Weather Icon" class="weather-icon" />
    </div>
  </div>
    </div>
    <div v-else class="loading">
      No data available.
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const forecast = ref(null);
const loading = ref(true);

const lat = "18.894814795134394";
const lon = "99.01086696030049";
const apikey = "7d4d57795da6d3beb5fca9e8ed426559";
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;

function fetchForecast() {
  axios
    .get(url)
    .then((response) => {
      forecast.value = response.data;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      loading.value = false;
      console.log('forecast:', forecast.value);
      console.log('loading:', loading.value);
    });
}

// Define the getIconUrl function
const getIconUrl = (iconCode) => {
  // Assuming that OpenWeatherMap provides weather icons like "10d"
  // Adjust the URL structure based on the actual format of icon codes
  return `https://openweathermap.org/img/w/${iconCode}.png`;
}

onMounted(fetchForecast);
</script>



<style scoped>
.weather-forecast {
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.location-info {
  font-size: 18px;
  margin-bottom: 10px;
}

.forecast-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.day {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
  color: black; /* Set text color to black */
}

.date, .temperature, .weather {
  font-size: 14px;
  margin-bottom: 5px;
  color: black; /* Set text color to black */
}

.weather-icon {
  width: 50px;
  height: 50px;
}

.loading {
  text-align: center;
  font-size: 16px;
  margin-top: 20px;
  background-color: white;
  color: black; /* Set text color to black */
}
.forecast-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 columns, each taking 1 fraction of the available space */
  gap: 20px; /* Adjust the gap between items as needed */
}

</style>
