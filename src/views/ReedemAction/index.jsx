import React from 'react';
import { StoreContext } from 'context/StoreContext';
import Button from '@material-ui/core/Button';
import { RightContainer } from 'views/RightContainer';
import { ReedemPopover } from '../ReedemPopover';

/**
 * Button Reedem Component for reedem products
 * @param card: has the product data
 */
export default function ReedemAction(props) {
    const {
        data: { amount, reedemMessage },
        mutations: { reedem }
    } = React.useContext(StoreContext);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { card } = props;
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'product-popover' : undefined;
    return (
        <RightContainer>
            <Button aria-describedby={id} size="small" variant="outlined" color="primary"
                    onClick={handleClick}>reedem</Button>
            <ReedemPopover id={id} open={open} anchorEl={anchorEl}
                           card={card}
                           amount={amount}
                           handleClose={handleClose}
                           reedem={reedem}
                           reedemMessage={reedemMessage}
            />
        </RightContainer>
    );
}
