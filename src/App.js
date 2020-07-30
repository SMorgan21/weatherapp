import React from 'react';
import './App.css';

const api = {
    key: "73bbca9d4c12b5ab2462b9569a56b2d5",
    base: "http://api.openweathermap.org/data/2.5/"
}

const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
}

function App() {
    return (
        <div className="app">
            <main>
                <div className="searchBox">
                    <input
                        type="text"
                        className="searchBar"
                        placeholder="Search..."
                    />
                </div>
                <div className="locationContainer">
                    <div className="location">
                        New York City, US
                    </div>
                    <div className="date">
                        {dateBuilder(new Date())}
                    </div>
                    <div className="weatherBox">
                        <div className="temp">
                            15c
                        </div>
                        <div className="weather">
                            Sunny
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
