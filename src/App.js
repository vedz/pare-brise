import React from 'react';
import './App.css';
import Reservation from './containers/reservation/Reservation';
import ClientHistory from './containers/reservation/Administration/ClientHistory/ClientHistory'

function App() {
    console.log('[App component]');
    return (
        <div className="App">
            <ClientHistory />
        </div>
    );
}

export default App;
