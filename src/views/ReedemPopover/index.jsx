import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 450,
  },
  image: {
    width: 450,
    height: 320,
    [theme.breakpoints.only('xs')]: {
      width: '110%',
      height: 200,
    },
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },  
  typography: {
      padding: theme.spacing(2),
      textAlign: 'center'
  },
  textAlignCenter: {
    textAlign: 'center'
  },
  itemsCenter: {
    display: 'flex',
    justifyContent: 'center'
  },
}));
  
export const ReedemPopover = (props) => {
    const { card, open, id, anchorEl, handleClose } = props;
    const classes = useStyles();  
    return (
      <div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={card.imgHd} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={1}>
                    <Grid item className={classes.textAlignCenter}>
                     <Typography gutterBottom variant="h6" component="h2">
                        {card.name}
                      </Typography>
                      <Typography gutterBottom variant="subtitle1" component="h2">
                        You are going to redeem {card.price} points.
                      </Typography>
                    </Grid>
                    <Grid item className={classes.itemsCenter}>
                      <Button size="large" color="secondary" onClick={handleClose}>cancel</Button>
                      <Button size="large" color="primary" onClick={handleClose}>reedem now</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Popover>
      </div>
    );
}
  