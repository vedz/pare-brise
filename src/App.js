import React from 'react';
import './App.css';
import Reservation from './containers/Reservation/Reservation';
import ClientHistory from './containers/Reservation/Administration/ClientHistory/ClientHistory'

//@@@Clean
function App() {
    console.log('[App component]');
    return (
        <div className="App">
            <Reservation />
        </div>
    );
}

export default App;
