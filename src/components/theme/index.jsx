import {createTheme} from '@mui/material/styles';
import '@fontsource/roboto/400.css';


const theme = createTheme({
  palette: {
    primary: {
      main: '#2258F5',
      light: '#E6EEF2',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#3D3D3D',
      light: '#F5F5F5',
      contrastText: '#FFFFFF',
    },
  },
});

export default theme;
