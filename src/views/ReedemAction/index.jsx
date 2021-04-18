import React from 'react';
import Button from '@material-ui/core/Button';
import { RightContainer } from 'views/RightContainer';
import { ReedemPopover } from '../ReedemPopover';

/**
 * Button Reedem Component for reedem products
 * @param card: has the product data
 */
export default function ReedemAction(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <RightContainer>
            <Button aria-describedby={id} size="small" variant="outlined" color="primary"
                    onClick={handleClick}>reedem</Button>
            <ReedemPopover card={props.card} id={id} open={open} anchorEl={anchorEl} handleClose={handleClose} />
        </RightContainer>
    );
}
