import { useState, useEffect } from 'react'
import WeatherCard from '../components/WeatherCard'

export default function Home() {
    const [city, setCity] = useState('Bangkok')
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

    const fetchWeather = async () => {
        if (!city) return
        setLoading(true)
        setError('')

        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
            )

            if (!res.ok) throw new Error('City not found')

            const data = await res.json()
            setWeather(data)
        } catch {
            setError('City not found ❌')
            setWeather(null)
        }

        setLoading(false)
    }

    useEffect(() => {
        fetchWeather()
    }, [])

    return (
        <div className="flex flex-col items-center justify-center py-16 px-4">
            <h1 className="text-3xl font-bold text-white mb-6">
                🌦️ Weather Application
            </h1>

            <div className="flex gap-2 mb-6">
                <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city"
                    className="px-4 py-2 rounded-md outline-none"
                />
                <button
                    onClick={fetchWeather}
                    className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold"
                >
                    Search
                </button>
            </div>

            {loading && <p className="text-white">Loading...</p>}
            {error && <p className="text-red-200">{error}</p>}
            {weather && <WeatherCard weather={weather} />}
        </div>
    )
}
