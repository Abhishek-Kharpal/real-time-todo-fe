import React from 'react';
import './App.css';
import Header from './components/Header';
import {ThemeProvider} from '@mui/material/styles';
import theme from './components/theme';
import {Fab, Box} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Todo from './components/todo';
/**
 * @return {JSX.Element}
 * @description
 * This is the main component of the application.
 * It is the entry point of the application.
 */
function App() {
  return (
    <Box className="App" sx={{backgroundColor: '#f5f5f5', height: '100vh'}}>
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
        <Box sx={{display: 'flex', justifyContent: 'center', mt: 5}}>
          <Box sx={{maxWidth: '720px'}}>
            <Todo />
          </Box>
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default App;
