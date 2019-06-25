import React from 'react';
import './App.css';
import Routes from './Routes';
import PropTypes from "prop-types";
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Material helpers
import { withStyles } from '@material-ui/core';
// Material icons
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
//import WithTheme from '../themes/WithTheme';

const theme = createMuiTheme({
    "palette": {
        type: "light",
        "primary1Color": "#607d8b",
        "primary2Color": "#90a4ae",
        "accent1Color": "#ff7043",
        "accent2Color": "#fafafa",
        "canvasColor": "rgba(255, 255, 255, 0.87)",
        "pickerHeaderColor": "#607d8b"
    }
});

const styles = {
  textField: {
    //background: "white"
    text: "#ffffff"
  },
  input: {
    color: "#ffffff"
  }
};

const browserHistory = createBrowserHistory();

// Component styles
//import styles from './styles';


function App(props) {
  const { classes } = props;

  return (
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
