import Paper from "@material-ui/core/Paper";
import Popover from "@material-ui/core/Popover";
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useStyles } from './styles';
import { Typography } from "@material-ui/core";

/**
 * Component "PopUp" for add points
 * @param open: [component props] obligatory data for Popover, boolean for know if should be open or close
 * @param handleClose:  [component props] close the Popover
 */
export const AddPointPopover = (props) => {
    const { id, open, anchorEl, handleClose } = props;
    const classes = useStyles();
    return (
        <div>
        <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography className={classes.typography}>The content of the Popover.</Typography>
        </Popover>
        </div>
    );
}