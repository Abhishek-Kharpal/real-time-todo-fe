import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './components/Header';
import {ThemeProvider} from '@mui/material/styles';
import theme from './components/theme';
import {
  Fab,
  Box,
  Typography,
  Dialog,
  IconButton,
  TextField,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import io from 'socket.io-client';
import Todo from './components/todo';
import BACKEND_URL from './config';
import './App.css';

const socket = io('http://localhost:3001');
/**
 * @return {JSX.Element}
 * @description
 * This is the main component of the application.
 * This would call the api to fetch the data and pass it to the child components
 */
function App() {
  const [todos, setTodos] = useState([]);
  const [addTodo, setAddTodo] = useState(false);
  const [todo, setTodo] = useState({
    title: '',
    content: '',
  });

  useEffect(() => {
    try {
      axios.get(`${BACKEND_URL}/api/todos`).then((response) => {
        setTodos(response.data);
      });
    } catch (error) {
      setTodos([]);
    }
  }, []);

  socket.on('addTodo', (todo)=>{
    setTodos([...todos, todo]);
  });

  const handleAddTodo = () => {
    try {
      axios.post(`${BACKEND_URL}/api/todos`, todo).then((response) => {
        setTodos([...todos, response.data]);
        setAddTodo(false);
      });
    } catch (error) {
      console.err(error);
      setAddTodo(false);
    }
  };


  return (todos)?(
    <Box className="App" sx={{height: '100vh'}}>
      <ThemeProvider theme={theme}>
        <Header />
        <Fab
          variant='extended'
          size="large"
          color="primary"
          aria-label="add"
          sx={{position: 'absolute', bottom: 16, right: 16}}
          onClick={() => setAddTodo(true)}
        >
          <AddIcon />
        </Fab>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 5,
          }}
        >
          <Box
            sx={{
              maxWidth: '880px',
              flexGrow: 1,
              backgroundColor: '#f5f5f5',
              padding: '16px',
            }}
          >
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
        {
          (addTodo)&&(
            <Dialog
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
              open={addTodo}
              onClose={() => setAddTodo(false)}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  p: 2,
                  width: 'max(25vw, 340px)',
                  flexGrow: 1,
                }}
              >
                <Box
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography variant='h6'>Add Todo</Typography>
                  <IconButton onClick={() => setAddTodo(false)}>
                    <CloseIcon />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  <TextField
                    sx={{mt: 2}}
                    label="Title"
                    variant="outlined"
                    value={todo.title}
                    onChange={(e) => setTodo({
                      ...todo,
                      title: e.target.value,
                    })}
                  />
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  <TextField
                    sx={{mt: 2}}
                    label="Content"
                    variant="outlined"
                    value={todo.content}
                    onChange={(e) => setTodo({
                      ...todo,
                      content: e.target.value,
                    })}
                  />
                </Box>
                <Button
                  sx={{mt: 2}}
                  variant="contained"
                  onClick={handleAddTodo}
                >
                  POST
                </Button>
              </Box>
            </Dialog>
          )
        }
      </ThemeProvider>
    </Box>
  ):(
    <Box>
      <Typography>Loading...</Typography>
    </Box>
  );
}

export default App;
