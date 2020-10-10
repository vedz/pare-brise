import React from 'react';
import './App.css';
import Reservation from './containers/Reservation/Reservation';

function App() {
    console.log('[App component]');
    return (
        <div className="App">
            <Reservation />
        </div>
    );
}

export default App;
