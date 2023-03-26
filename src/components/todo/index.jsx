import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

/**
 *
 * @return {JSX.Element}
 * @description
 * This returns a todo card which contains the details of the todo.
 */
function Todo({title, content, id}) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Card sx={{width: '275px', mt: 8}}>
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">
              Card ID: {id}
            <br />
            <br/>
            {content}
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
  );
};

Todo.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.number,
};

export default Todo;
