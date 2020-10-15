import React from 'react';
import './App.css';
import ClientHistory from './containers/Administration/ClientHistory/ClientHistory';
import Reservation from './containers/Reservation/Reservation';

function App() {
    console.log('[App component]');
    return (
        <div className="App">
            <Reservation />
            {/* <ClientHistory /> */}
        </div>
    );
}

export default App;
