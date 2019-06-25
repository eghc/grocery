import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
//import './App.css';
// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {
  AddCircle as AddIcon
}from '@material-ui/icons';

import axios from 'axios';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
});

class Navbar extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: true
    }
    this.handleLogOut = this.handleLogOut.bind(this);
    //this.handleTest = this.handleTest.bind(this);
  }

  handleLogOut(event){
    axios
     .post('/logOut', {})
     .then((response) => {
       //console.log(response);
       if(response.status === 200){
         this.setState({loggedIn: false});
         console.log('Logged Out!');
       }
     })
     .catch(err => {
       console.error(err);
     });
  }

  // handleTest(){
  //   console.log("Open 1");
  // }

  render(){
    const { classes } = this.props;

    if(this.state.loggedIn){
      return(
        <div className={classes.root}>
          <AppBar position="fixed">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                <AddIcon onClick={this.props.handleAddOpen}/>
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Grocery List
              </Typography>
              <Button color="inherit" onClick = {this.handleLogOut}>Log Out</Button>
            </Toolbar>
          </AppBar>
        </div>
      );
    }else{
      return <Redirect to="/" />
    }
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
