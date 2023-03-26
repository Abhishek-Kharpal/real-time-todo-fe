import React from 'react';
import './App.css';
import Header from './components/Header';
import {ThemeProvider} from '@mui/material/styles';
import theme from './components/theme';
import {Fab} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

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
        <Fab
          variant='extended'
          size="large"
          color="primary"
          aria-label="add"
          sx={{position: 'absolute', bottom: 16, right: 16}}
        >
          <AddIcon />
        </Fab>
      </ThemeProvider>
    </div>
  );
}

export default App;
