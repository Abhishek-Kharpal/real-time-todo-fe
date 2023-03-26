import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

/**
 *
 * @return {JSX.Element}
 * @description
 * This returns a todo card which contains the details of the todo.
 */
function Todo() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box sx={{maxWidth: '720px'}}>
        <Card sx={{minWidth: 275}}>
          <CardContent>
            <Typography variant="h5" component="div">
              Title
            </Typography>
            <Typography variant="body2">
              Card ID
              <br />
              <br/>
              {'content'}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between'}}
          >
            <Button size="small">Edit</Button>
            <Button size="small">Delete</Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default Todo;
