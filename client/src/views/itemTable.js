import React, { Component } from 'react';
//import './App.css';
// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';

//<Hidden xsUp>

const styles = theme => ({
  table:{
    margin: 'auto',
    width: '70%',
  },
  row:{
    width:'100%'
  },
  item: {
    height: '100%'
  },
  cell: {
    width: '20%',
    height: '50px'
  },
  margin: {
      margin: theme.spacing(1),
    }
});


class ItemTable extends Component {
  constructor(){
    super();
    this.state = {
      hover: false
    };
    //this.handleHover = this.handleHover.bind(this);
    //this.handleHoverOut = this.handleHoverOut.bind(this);
  }


  render(){
    const { classes } = this.props;

    return (
      <Table
        className={classes.table}
        size='medium'
      >
      <TableHead>
        <TableRow className={classes.row}>
          <TableCell>Purchased?</TableCell>
          <TableCell align= "left">Item</TableCell>
          <TableCell align= "left" className={classes.cell}>Cost</TableCell>
          <TableCell align= "left"className={classes.cell}>Purchased by Who</TableCell>
          <TableCell align= "left" className={classes.cell}>Date of Purchase</TableCell>
          <TableCell align= "left" className={classes.cell}></TableCell>
        </TableRow>
      </TableHead>
        <TableBody>
          {
            this.props.data.map((row, index) => {

              return (
                <TableRow
                  hover
                  className={classes.row}
                  //onMouseOver = {(e) => this.handleHover(e, row.id)}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      onChange={(e) => this.props.handleItemClick(e,row.id)}

                      checked={row.purchased}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row" padding="none">
                    {row.item}
                  </TableCell>
                  <TableCell align="left">{row.cost}</TableCell>
                  <TableCell align="left">{row.userName}</TableCell>
                  <TableCell align="left">{row.purchaseDate}</TableCell>
                  <TableCell align = "left">
                    <IconButton aria-label="Delete" className={classes.margin}>
                      <DeleteOutlinedIcon onClick={(e) => this.props.handleDelete(e, row.id)}/>
                    </IconButton>
                  </TableCell>
                </TableRow>
              );

            })}
        </TableBody>
      </Table>
    )
  }
}

ItemTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ItemTable);
