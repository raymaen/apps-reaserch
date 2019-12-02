import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(2)
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3)
  }
}));

const AddGamesDialog = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Tooltip title="Add New Mada flippin games" aria-label="add">
        <Fab color="secondary" className={classes.absolute}>
          <AddIcon onClick={handleClickOpen} />
        </Fab>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Add new game/games</DialogTitle>
        <DialogContent>
          <DialogContentText color="textPrimary">
            <strong>
              Enter comma seperated game id's from google play. Example:
            </strong>
          </DialogContentText>
          <DialogContentText color="textSecondary">
            com.king.candycrushjellysaga, com.king.candycrushsodasaga
          </DialogContentText>
          <TextField
            id="standard-name"
            label="Enter game id's"
            multiline
            fullWidth
            rows={5}
            value={value}
            onChange={event => setValue(event.target.value)}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Close
          </Button>
          <Button
            onClick={handleClose}
            color="primary"
            variant="contained"
            autoFocus
          >
            Add Games
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default AddGamesDialog;
