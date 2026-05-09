const fetchWeather = async (latitude = 49.20, longitude = 18.10) => {
  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Błąd HTTP: ${response.status}`);
    }

    const weatherData = await response.json();
    const temperature = weatherData.current.temperature_2m;
    const windSpeed = weatherData.current.wind_speed_10m;
    const temperatureUnit = weatherData.current_units.temperature_2m;
    const windUnit = weatherData.current_units.wind_speed_10m;

    console.log(`Pogoda dla ${latitude}, ${longitude}`);
    console.log(`Temperatura: ${temperature} ${temperatureUnit}`);
    console.log(`Prędkość wiatru: ${windSpeed} ${windUnit}`);
    console.log(`Czas wykonanego pomiaru: ${weatherData.current.time}`);
    return { temperature, windSpeed, time: weatherData.current.time };
  } catch (error) {
    console.log(`Nie udało się pobrać danych: ${error.message}`);
    return null;
  }
}

fetchWeather(50.29, 19.10).then((result) => {
  console.log("Zwrócone dane:", result);
});

// działa struktura async/await, fetch i try...catch.
// funkcja przyjmuje współrzędne jako parametry.
// dodano parametr czasu wykonanego pomiaru.
// należało sprawdzić jakie pola w ogóle znajdują się w zwrotce z api żeby dodać dodatkowe pole.
