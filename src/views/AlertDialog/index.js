import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Alert } from 'views/Alert';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitleCustom = withStyles(styles)((props) => {
  const { children, classes, onClose, closePopover, ...other } = props;
  return (
    <DialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton}
          onClick={() => {
            onClose();
            closePopover();
          }}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
});

/**
 * @returns Component "Dialog" for reedem products
 * @param open: [component props, hooks] obligatory data for Dialog, boolean for know if should be open or close
 * @param closePopover: close all windows dependecies
 * @param handleClickClose: [component props] obligatory data for Dialog, close the dialog
 * @param text: main text for the Dialog
 * @param footerText: auxiliar text
 */
export const AlertDialog = (props) => {
  const { open, closePopover, handleClickClose, text, footerText } = props
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClickClose}
        disableBackdropClick={true}
        aria-labelledby="customized-dialog-title"
      >
        <DialogTitleCustom id="customized-dialog-title" onClose={handleClickClose} closePopover={closePopover}>{"Message"}</DialogTitleCustom>
        <DialogContent dividers>
          <DialogContentText id="alert-dialog-description">
          <Alert severity="success">
            <Typography gutterBottom variant="body1">{text}</Typography>
          </Alert>
          </DialogContentText>
          { footerText ? <DialogContentText id="alert-dialog-description"><Alert severity="info">{footerText}</Alert></DialogContentText> : null}
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
