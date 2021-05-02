import React, { useContext } from 'react'; 
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { ListRowItemsContainer } from 'views/ListRowItems/container';
import { HistoryContext } from 'pages/History/context/HistoryContext';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialogHistory(props) {
  const {
    data: { products }
  } = useContext(HistoryContext);
  const history = useHistory();
  const classes = useStyles();
  const handleClose = () => {
    history.push("/landing");
  };
  const { open } = props;
  return (
    <div>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>Reedem Products History</Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>start</Button>
          </Toolbar>
        </AppBar>
        <ListRowItemsContainer products={products.data} />
      </Dialog>
    </div>
  );
}
