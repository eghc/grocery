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

import LogIn from './LogIn.js';
import SignUp from './SignUp.js';

import axios from 'axios';

const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  },
  item: {
    height: '100%'
  },
  textField: {
    //background: "white"
    text: "#ffffff"
  },
  input: {
    color: "#ffffff"
  },
  submitButton:{
    margin: theme.spacing(2)
  }
});


class Home extends Component {
  constructor(){
    super();
    this.state = {
      newUser: false,
      returningUser: false,
      loggedIn: false
    };
    this.changeToNewUser = this.changeToNewUser.bind(this);
    this.changeToReturningUser = this.changeToReturningUser.bind(this);
  }

  changeToNewUser(event){
    this.setState({newUser: true});
  }

  changeToReturningUser(event){
    this.setState({returningUser: true});
  }

  componentDidMount(){
    axios
     .get('/isAuth')
     .then((response) => {
       //console.log(response);
       // if(response.status !== 200){
       //
       //   console.log('Not Authorized!');
       // }else{
       console.log('Authorized!');
        this.setState({loggedIn: true});

      // }
     })
     .catch(err => {
       console.log('Not Authorized!');
       this.setState({loggedIn: false});
     });
  }


  render() {
    const { classes } = this.props;

    if(this.state.loggedIn){
      return <Redirect to="/dashboard" />
    }
    else{

    if(this.state.returningUser === true){
      //if(this.state.newUser === true || ){
        return (
          <div className="App">
            <header className="App-header">
              <img
                alt="logo"
                src="/shoppingcart.jpg"
                width="100px"
              />
              <LogIn />
            </header>
          </div>

        );
    }
    else if(this.state.newUser === true){
      return (
        <div className="App">
          <header className="App-header">
            <img
              alt="logo"
              src="/shoppingcart.jpg"
              width="100px"
            />
            <SignUp />
          </header>
        </div>

      );

    } else{
        return (
          <div className="App">
            <header className="App-header">
              <img
                alt="logo"
                src="/shoppingcart.jpg"
                width="100px"
              />
              <FormControl>

                <Button
                  className={classes.submitButton}
                  variant="contained"
                  onClick = {this.changeToReturningUser}
                >
                  Log In
                </Button>
                <Button
                  className={classes.submitButton}
                  variant="contained"
                  onClick = {this.changeToNewUser}
                >
                  Sign Up
                </Button>
              </FormControl>
            </header>
          </div>
        );
      }
    };
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
