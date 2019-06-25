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


class SignUp extends Component {
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
    //console.log("test");
    //this.setState({completed: true});
    //console.log(form);
    let data = {
      firstname: form["firstname"].value,
      lastname: form["lastname"].value,
      email: form["email"].value,
      password: form["password"].value
    }
    // //console.log(data);
    axios
     .post('/signUp', data)
     .then(() => {
       this.setState({completed: true});
       console.log('Created!');
     })
     .catch(err => {
       console.error(err);
       //alert(err);
       this.setState({err: "An account with that email already exists"});
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
            id="firstname"
            label="First Name"
            className={classes.textField}
            InputProps={{
              className: classes.input
            }}
            name="firstname"
            margin="normal"
            variant="filled"
            required
          />
          <TextField
            id="lastname"
            label="Last Name"
            className={classes.textField}
            InputProps={{
              className: classes.input
            }}
            name="lastname"
            margin="normal"
            variant="filled"
            required
          />
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
            required
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
            required
          />
          <Button
            className={classes.submitButton}
            variant="contained"
            type="submit"
          >
          Sign Up
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


SignUp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignUp);
