import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export const AlertDialog = (props) => {
  const { open, closePopover, handleClickClose, text, footerText} = props
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClickClose}
        disableBackdropClick={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Message"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{text}</DialogContentText>
          { footerText ? <DialogContentText id="alert-dialog-description">{footerText}</DialogContentText> : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {
            handleClickClose();
            closePopover();
          }} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
