const openWeatherApiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your OpenWeatherMap API key
const pexelsApiKey = 'YOUR_PEXELS_API_KEY'; // Replace with your Pexels API key
const city = 'London'; // Change this to your desired city

document.addEventListener('DOMContentLoaded', () => {
    fetchWeatherData();
    document.getElementById('changeWallpaper').addEventListener('click', changeWallpaper);
});

async function fetchWeatherData() {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherApiKey}&units=metric`;

    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();

        const location = data.name;
        const weather = data.weather[0].main.toLowerCase();

        document.getElementById('location').textContent = `Location: ${location}`;
        document.getElementById('weather').textContent = `Weather: ${weather.charAt(0).toUpperCase() + weather.slice(1)}`;

        changeWallpaper(weather);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

async function fetchWallpaper(query) {
    const pexelsUrl = `https://api.pexels.com/v1/search?query=${query}&per_page=1&page=1`;
    const response = await fetch(pexelsUrl, {
        headers: {
            Authorization: pexelsApiKey
        }
    });
    const data = await response.json();
    return data.photos[0].src.large; // Fetch large wallpaper image URL
}

async function changeWallpaper(weatherCondition) {
    let query = weatherCondition || 'nature'; // Default to nature if no weather condition found

    try {
        const wallpaperUrl = await fetchWallpaper(query);
        document.body.style.backgroundImage = `url('${wallpaperUrl}')`;
    } catch (error) {
        console.error('Error fetching wallpaper:', error);
        document.body.style.backgroundImage = `url('fallback.jpg')`; // Fallback image
    }
}
