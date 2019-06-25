import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';


const styles = theme => ({
});

class AddItem extends Component {

  render(){
    return (
      <div>
        <Dialog open={this.props.open} aria-labelledby="form-dialog-title">
          <form onSubmit ={this.props.handleAddClose} noValidate>
          <DialogTitle id="form-dialog-title">Add an Item</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="item"
              label="Item description"
              defaultValue ="Item"
              required
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="cost"
              label="Cost of item"
              defaultValue ="0.00"
              type ="number"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleAddCancel} id="cancel" color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Add
            </Button>
          </DialogActions>
          </form>
        </Dialog>

      </div>
    );
  }
}

AddItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddItem);
