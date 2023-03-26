import React from 'react';
import './App.css';
import Header from './components/Header';
import {ThemeProvider} from '@mui/material/styles';
import theme from './components/theme';

/**
 * @return {JSX.Element}
 * @description
 * This is the main component of the application.
 * It is the entry point of the application.
 */
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;
