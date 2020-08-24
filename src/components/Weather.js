import React, { useState } from 'react';
const api = {
    key: "8d8ba82a141cf4f47989412c8893e6b4",
    base: "http://api.openweathermap.org/data/2.5/"
}


export default () => {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = (e) => {
        if(e.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
            .then((res) => res.json())
            .then((result) => {
                setWeather(result);
                setQuery('');
            });
        }
    }


  return (
      // Search bar
    <div className="container">
        <div className="search-box">
            <input
                type="text"
                className="search-bar"
                placeholder="Search..."
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
            />
             <h1 className="heading">Welcome to the Weather App! Find the temperature of over 200,000 locations! Search your location now!</h1>
        </div> 
        {( typeof weather.main != "undefined") ? (  
        <div>
           
            <div className="location-box">
                <div className="location">
                    {weather.name}, {weather.sys.country}
                </div>
                <div className="date">{new Date().toDateString()}</div>
            </div>
            <div className="weather-box">
                <div className="temp">
                    {Math.round(weather.main.temp)}°C
                </div>
                <div className="weather">
                    {weather.weather[0].main}
                </div>
            </div>
        </div>
        ) : ('')} 
    </div>
  )
}
