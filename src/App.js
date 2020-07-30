import React from 'react';
import './App.css';

const api = {
    key: "73bbca9d4c12b5ab2462b9569a56b2d5",
    base: "http://api.openweathermap.org/data/2.5/"
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
            </main>
        </div>
    );
}

export default App;
