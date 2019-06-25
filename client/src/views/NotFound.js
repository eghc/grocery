import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  item: {
    height: '100%'
  }
});


class NotFound extends Component {
  render() {
    const { classes } = this.props;

    return (
      <p> Testing </p>
    );
  }
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NotFound);
