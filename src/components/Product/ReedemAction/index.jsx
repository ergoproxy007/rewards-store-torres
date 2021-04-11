import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    reedem: {
        width: '100%',
        display: "flex",
        justifyContent: "flex-end"
    }
}));
  
export const ReedemAction = (props) => {
    const classes = useStyles();
    const {clazzMoney, clazzCost, price} = props;
    return (
        <CardActions>
            <Button disabled size="small" color="primary" startIcon={<AttachMoney className={clazzMoney} />}>
                <Typography className={clazzCost} variant="h5" >{ price }</Typography>
            </Button>
            <div className={classes.reedem}>
                <Button size="small" variant="outlined" color="primary">
                    reedem
                </Button>
            </div>
        </CardActions>
    );
}
