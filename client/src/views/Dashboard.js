import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
//import './App.css';
// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

import Navbar from './Navbar.js';
import ItemTable from './itemTable.js';
import AddItem from './AddItem.js';



import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';



import axios from 'axios';

const styles = theme => ({
  root: {
    textalign: 'center',
    width: '100%',
    paddingTop: theme.spacing(10),
    flexGrow: 1,
  },
  textField: {
    //background: "white"
    text: "#ffffff"
  },
  input: {
    color: "#ffffff"
  },
  paper:{
    width: '100%'
  }
});




class Dashboard extends Component {

  constructor(){
    super();
    this.state = {
      loggedIn: true,
      data: null,
      addOpen: false
    }
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleAddOpen = this.handleAddOpen.bind(this);
    this.handleAddClose = this.handleAddClose.bind(this);
    this.handleAddCancel = this.handleAddCancel.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    axios
     .get('/isAuth')
     .then((response) => {

         console.log('Authorized!');


         axios
          .get('/getItems')
          .then((response) => {
            //console.log(response.data);
            let tempData = response.data.map(i =>
              this.createData(i.id, i.cost, i.item, i.purchaseDate, i.purchased, i.userId, i.userName, null));
            //onsole.log(tempData);
            this.setState({data: tempData});
            console.log(tempData);

            setInterval(async () => {
              axios
               .get('/getNewItems')
               .then((response) => {
                 //if the data is not null, then update user's current view
                 if(response.data){
                   //console.log(response.data);
                   //let newDataIds = [];
                   let tempData = response.data.map(i =>
                     this.createData(i.id, i.cost, i.item, i.purchaseDate, i.purchased, i.userId, i.userName, i.deleted)
                   );

                   //update the new items
                   let finalData = [...this.state.data];
                   for(let i = 0; i < tempData.length; i++){
                     //console.log(i);
                     //find in current data
                     let found  = false;
                     for(let n = 0; n < this.state.data.length; n++){
                       if(finalData[n].id === tempData[i].id){
                         found = true;
                         if(tempData[i].deleted){
                           finalData.splice(n,1);
                           n = n-1;
                           break;
                         }else{
                           //if not deleted, just set updates
                           finalData[n] = tempData[i];
                           break;
                         }
                       }
                     }
                     //if not in current data, append to finalData
                     if(!found && !tempData[i].deleted){
                       finalData.push(tempData[i]);
                     }
                   }
                   this.setState({data: finalData});
                 }
               }).catch(err => {
                 console.log('Error getting items');
               });
            }, 30000);

          })
          .catch(err => {
            console.log('Error getting items');
          });
     })
     .catch(err => {
       console.log('Not Authorized!');
       this.setState({loggedIn: false});
     });
  }

  createData( id, cost, item, purchaseDate, purchased, userId, userName, deleted){
    let obj = {
      id: id,
      cost: cost === null? null:cost.toFixed(2).toString(),
      item: item,
      purchaseDate: purchaseDate === null? null:purchaseDate.substring(0,10),
      purchased: purchased === true? true: false,
      userId: userId,
      userName: userName,
      deleted: deleted === true? true: false
    };
    return obj;
  }


  handleItemClick(event, itemId){
    //console.log('test');
    console.log(itemId);

    //let itemId = event.target.id;
    let itemPurchased = event.target.checked;
    let index = 0;
    //console.log("front-end 1");
    if(itemId !== undefined && itemId !== null){
      for(let i = 0; i < this.state.data.length; i++){
        if(this.state.data[i].id == itemId){
          index = i;
        }
      }


      axios
       .post('/item/update/'+itemId, {id: itemId, purchased: itemPurchased})
       .then((response) => {
         //console.log(response.data);
         let tempData = this.state.data;
         if(index >= 0){
           console.log(tempData);
           tempData[index] = this.createData(response.data.id, response.data.cost, response.data.item, response.data.purchaseDate, response.data.purchased, response.data.userId, response.data.userName, null);
           this.setState({data: tempData});
         }

       })
       .catch(err => {
         console.log('Error updating item');
       });
    }
  }

  handleAddOpen(){
    //need to pass this to the navbar to when it changes, the state updates here
    this.setState({addOpen: true});
    //then update the
  }
  handleAddClose(e){
    e.preventDefault();
    let body = {
      item: e.target["item"].value,
      cost:e.target["cost"].value
    }
    console.log(body);
    axios
     .post('/item/add', body)
     .then((response) => {
       //console.log(response.data);
       let tempData = this.state.data;
       tempData.push(this.createData(response.data.id, response.data.cost, response.data.item, response.data.purchaseDate, response.data.purchased, response.data.userId, response.data.userName, null));
       this.setState({data: tempData});
     })
     .catch(err => {
       console.log('Error adding item');
     });
    this.setState({addOpen: false});

  }

  handleAddCancel(){
    this.setState({addOpen: false});
  }

  handleDelete(e, itemId){
    //console.log(rowId);
    //console.log("delete");

    if(itemId){
      //let tempData = this.state.data;
      let index = -1;
      for(let i = 0; i < this.state.data.length; i++){
        if(this.state.data[i].id == itemId){
          //console.log("front-end 2");
          index = i;
          break;
        }
      }

      axios
       .post('/item/delete/'+itemId)
       .then((response) => {
         //console.log(response.data);
         //let tempData = this.state.data;
         //console.log("1");

         let tempData = this.state.data;
         tempData.splice(index, 1);
         //console.log(tempData);

         this.setState({data: tempData});

       })
       .catch(err => {
         console.log('Error deleting item');
       });
      //this.setState({addOpen: false});
    }

  }

  render() {
    const { classes } = this.props;
    let tempData = [this.createData(null,null,null,null,null,null, null, null)];

    if(this.state.loggedIn){
      return(
        <div className={classes.root}>
          <Navbar handleAddOpen = {()=>this.handleAddOpen()} />
          <Paper className={classes.paper}>
            <AddItem open={this.state.addOpen} handleAddCancel={() => this.handleAddCancel()} handleAddClose ={(e) => this.handleAddClose(e)} />
            <ItemTable
              data={ this.state.data === null? tempData : this.state.data}
              handleItemClick={this.handleItemClick}
              handleDelete={this.handleDelete}
            />
          </Paper>
      </div>
      );
    }else{
      return <Redirect to="/" />
    }
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
