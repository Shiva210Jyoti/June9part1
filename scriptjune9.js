const apiKey = 'fe7cd202d5a6222eb78855125dff1885';

function getWeather() {
  const cityInput = document.getElementById("cityInput").value.trim();

  if (!cityInput) {
    alert("Please enter a city name.");
    return;
  }

  const city = `${cityInput},IN`; // Add country code for better accuracy

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data); // Debug response

      if (data.cod !== 200) {
        alert(`Error: ${data.message}`);
        return;
      }

      const date = new Date();

      document.getElementById("location").innerText = data.name;
      document.getElementById("date").innerText = date.getDate();
      document.getElementById("time").innerText = `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')} ${date.toLocaleDateString('en-US', { weekday: 'long' })}`;
      document.getElementById("condition").innerText = `${data.weather[0].main}, ${data.main.temp}°C`;
    })
    .catch(error => {
      console.error("Fetch error:", error);
      alert("Unable to fetch weather data.");
    });
}
