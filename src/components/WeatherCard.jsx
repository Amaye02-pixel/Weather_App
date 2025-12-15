export default function WeatherCard({ weather }) {
    const icon = weather.weather[0].icon

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 w-72 text-center">
            <h2 className="text-xl font-bold mb-2">{weather.name}</h2>

            <img
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="weather icon"
                className="mx-auto"
            />

            <p className="text-3xl font-bold">
                {Math.round(weather.main.temp)}°C
            </p>

            <p className="capitalize text-gray-600">
                {weather.weather[0].description}
            </p>

            <div className="mt-4 text-sm text-gray-500">
                <p>Humidity: {weather.main.humidity}%</p>
                <p>Wind: {weather.wind.speed} m/s</p>
            </div>
        </div>
    )
}
