import AppBar from '@material-ui/core/AppBar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export const HeaderShop = (props) => {
    return (
        <AppBar position="relative">
            <Toolbar>
            <ShoppingCartIcon style={{ marginRight: '16px' }} />
            <Typography variant="h6" color="inherit" noWrap>
                Landing Layout
            </Typography>
            </Toolbar>
        </AppBar>
    );
}
