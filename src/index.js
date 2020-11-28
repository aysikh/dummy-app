import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
  typography: {
    h3: {
      color: '#757575',
      textAlign: "center",
      fontFamily: "Roboto"
    },
  },
  palette: {
    primary: {
      main: '#2a7f48',
    },
    secondary: {
      main: '#757575',
    },
  }
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);