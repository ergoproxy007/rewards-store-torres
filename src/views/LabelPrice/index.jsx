import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AttachMoney from '@material-ui/icons/AttachMoney';
import { useStyles } from './styles';

export const LabelPrice = ({ price }) => {
    const classes = useStyles();
    return (
        <Button disabled size="small" color="primary" startIcon={<AttachMoney className={classes.money} />}>
            <Typography className={classes.cost} variant="h5" >{ price }</Typography>
        </Button>
    );
  }
  