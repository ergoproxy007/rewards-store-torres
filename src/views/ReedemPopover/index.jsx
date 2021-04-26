import { useState } from 'react';
import Popover from '@material-ui/core/Popover';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from './styles';
import { AlertDialog } from 'views/AlertDialog';
import config from 'config/config';
import { numberWithCommas } from 'config/numbers.util';

const ProductDescriptionGrid = ({ clazzName, id, name, price, reedemMessage }) => {
  const missing = reedemMessage.missing && reedemMessage.id === id;
  return (
    <Grid item className={clazzName}>
      <Typography gutterBottom variant="h6" component="h2">
        {name}
      </Typography>
      <Typography gutterBottom variant="subtitle1" component="h2">
        You are going to redeem {price} points.
      </Typography>
      {
        missing
        ? <Typography gutterBottom variant="h6" color="error">{reedemMessage.message}</Typography>
        : null
      }
    </Grid>
  );
}

const ReedemButtonsGrid = ({ clazzName, handleClose, handleClickOpen, amount, card, reedem, reedemMessage }) => {
  return (
    <Grid item className={clazzName}>
      {
        reedemMessage.loading
        ? <CircularProgress color="primary" />
        : <>
           <Button size="large" color="secondary" onClick={handleClose}>cancel</Button>
           <Button size="large" color="primary" onClick={() => reedem(amount, card, handleClose, handleClickOpen)} >reedem now</Button>
          </>
      }
    </Grid>
  );
}

/**
 * Component "PopUp" for reedem products
 * @param card: has the product data
 * @param open: [component props] obligatory data for Popover, boolean for know if should be open or close
 * @param id: [component props]  obligatory data for Popover
 * @param anchorEl:  [component props, hooks] determine the type of anchorReference (position)
 * @param handleClose:  [component props] close the Popover
 */
export const ReedemPopover = (props) => {
    const { amount, card, open, id, anchorEl, handleClose, reedem, reedemMessage } = props;
    const textMoney = `The product has been successfully redeemed.`;
    const footerText = `${config.MONEY} ${numberWithCommas(amount.points)} is your actual poinst's budget.`;
    const classes = useStyles();
    const [openDialog, setOpenDialog] = useState(false);
    const handleOpenDialog = () => {
      setOpenDialog(true);
    };
    const handleCloseDialog = () => {
      setOpenDialog(false);
    };
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
                    <ProductDescriptionGrid
                      clazzName={classes.textAlignCenter}
                      id={card.id}
                      name={card.name}
                      price={card.price}
                      reedemMessage={reedemMessage}
                    />
                    <ReedemButtonsGrid
                      clazzName={classes.itemsCenter}
                      card={card}
                      amount={amount}
                      handleClose={handleClose}
                      handleClickOpen={handleOpenDialog}
                      reedem={reedem}
                      reedemMessage={reedemMessage}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
          <AlertDialog
            open={openDialog}
            closePopover={handleClose}
            handleClickClose={handleCloseDialog}
            text={textMoney}
            footerText={footerText}
          />
        </Popover>
      </div>
    );
}
  