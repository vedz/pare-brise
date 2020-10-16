import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import ClientHistory from './containers/reservation/Administration/ClientHistory/ClientHistory'
import { Box, CssBaseline } from '@material-ui/core'
import  BodyHapp from './components/Body/Body'
 
//@@@Clean
function App() {
    console.log('[App component]');
    return (
        <Box display="flex" flexDirection="column" style={{  position:'fixed', width:'100%', height:'100%' }}>
        <CssBaseline />
        <BrowserRouter>
          <Header/>
          <BodyHapp/>
        </BrowserRouter>
      </Box>
    );
}

export default App;
