# 🌤️ Weather App

A simple and responsive **Weather Application** built with **React + Vite**, using a public **Weather API** to fetch real-time weather data for any city.

---

## 🚀 Features

* 🌍 Search weather by city name
* 🌡️ Displays temperature, humidity, wind speed, and conditions
* ⚡ Fast development with Vite
* 📱 Responsive UI (works on desktop & mobile)
* 🔄 Real-time API data

---

## 🛠️ Tech Stack

* **React** – UI library
* **Vite** – Build tool for fast development
* **Weather API** – For real-time weather data
* **CSS** – Styling

---

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```

2. **Navigate to the project folder**

   ```bash
   cd weather-app
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and add your Weather API key:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

> Make sure the variable starts with `VITE_` so Vite can access it.

---

## ▶️ Run the Project

Start the development server:

```bash
npm run dev
```

The app will run at:

```
http://localhost:5173
```

---

## 🧪 Build for Production

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

---

## 📁 Project Structure

```
weather-app/
├── public/
├── src/
│   ├── assets/        # Images, icons, static files
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page-level components
│   ├── App.css        # App-level styles
│   ├── App.jsx        # Root component
│   ├── index.css      # Global styles
│   └── main.jsx       # Entry point
├── .env               # Environment variables
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```
---

## 🌐 API Used

This project uses a **Weather API** to fetch real-time weather data.
You can use providers like:

* WeatherAPI

---
