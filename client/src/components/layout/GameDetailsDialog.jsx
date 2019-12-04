import React, { useState, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';

const GameDetailsDialog = ({ game }) => {
  const [open, setOpen] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Tooltip title="More Details">
        <IconButton aria-label="more details" onClick={handleClickOpen}>
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{game.title}</DialogTitle>
        <DialogContent>
          <FormControlLabel
            control={
              <Checkbox
                checked={deleteConfirm}
                onChange={event => setDeleteConfirm(event.target.checked)}
                value="I want to delete this game data"
              />
            }
            label="I want to delete this game"
          />
          {Object.entries(game).map(data => (
            <Fragment>
              <DialogContentText id="alert-dialog-description">
                <strong>{data[0]}</strong>
              </DialogContentText>
              <DialogContentText id="alert-dialog-description">
                {data[1]}
              </DialogContentText>
            </Fragment>
          ))}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="secondary"
            disabled={!deleteConfirm}
            variant="contained"
          >
            Delete Game
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

GameDetailsDialog.propTypes = { game: PropTypes.any.isRequired };

export default GameDetailsDialog;
