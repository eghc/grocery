import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
//import './App.css';
// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

import {
  ShoppingCartOutlined as ShoppingCartIcon
} from '@material-ui/icons';


import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';

import axios from 'axios';

const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  }
});


class LogIn extends Component {
  constructor(){
    super();
    this.state = {
      completed: false,
      err: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (event){
    event.preventDefault();
    const form = event.target;
    console.log("test");

    //console.log(form);
    let data = {
      email: form["email"].value,
      password: form["password"].value
    }
    // //console.log(data);
    axios
     .post('/logIn', data)
     .then(() => {
       this.setState({completed: true});
       console.log('Logged In!');
     })
     .catch((err) => {
       console.error(err);
       //alert(err);
       this.setState({err: "Incorrect email and/or password."});
     });

    // fetch('/addPatientToEmr', {
    //   method: 'POST',
    //   body: data,
    // }).then(function(response){
    //   return response.json()
    // });

  }

  render() {
    const { classes } = this.props;

    if(this.state.completed  === true){
      return <Redirect to="/dashboard" />
    }else {
      return (
        <form onSubmit = {this.handleSubmit}>
        <FormControl>
          <TextField
            id="email"
            label="Email"
            className={classes.textField}
            InputProps={{
              className: classes.input
            }}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="filled"
          />
          <TextField
            id="password"
            label="Password"
            className={classes.textField}
            InputProps={{
              className: classes.input
            }}
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="filled"
          />
          <Button
            className={classes.submitButton}
            variant="contained"
            type="submit"
          >
          Log In
          </Button>
        </FormControl>
        <FormHelperText>
        {this.state.err ===null? null:this.state.err}
        </FormHelperText>
        </form>
      );
    }
  }
}


LogIn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LogIn);
