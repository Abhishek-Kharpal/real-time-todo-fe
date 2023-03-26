import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './components/Header';
import {ThemeProvider} from '@mui/material/styles';
import theme from './components/theme';
import {Fab, Box, Typography} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Todo from './components/todo';
import BACKEND_URL from './config';
import './App.css';
/**
 * @return {JSX.Element}
 * @description
 * This is the main component of the application.
 * This would call the api to fetch the data and pass it to the child components
 */
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    try {
      axios.get(`${BACKEND_URL}/api/todos`).then((response) => {
        setTodos(response.data);
      });
    } catch (error) {
      setTodos([]);
    }
  }, []);

  return (todos)?(
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
            {
              todos.map((todo) => {
                return <Todo
                  key={todo.id}
                  content={todo.content}
                  title={todo.title}
                  id={todo.id} />;
              })
            }
          </Box>
        </Box>
      </ThemeProvider>
    </Box>
  ):(
    <Box>
      <Typography>Loading...</Typography>
    </Box>
  );
}

export default App;
