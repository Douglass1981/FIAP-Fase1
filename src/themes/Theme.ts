
import { createTheme } from '@mui/material/styles';

export const Theme = createTheme();

palette: {
    mode: 'dark',
    primary: {
      main: '#5893df',
    },
    secondary: {
      main: '#2ec5d3',
    },
    background: {
      paper: '#002952',
      default: '#002952',
    },
  },
  typography: {
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 200,
  },
};