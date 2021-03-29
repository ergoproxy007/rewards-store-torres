import AppBar from '@material-ui/core/AppBar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import { IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const TextOnlyTooltip = withStyles({
    tooltip: {
      color: "black",
      backgroundColor: "transparent",
      hoveredStyle: "pointer"
    }
})(Tooltip);

const UserName = ({user}) => {
    const styles = {fontSize: "1.5rem", color: "white", backgroundColor: "transparent", cursor: "pointer"};
    const name = user ? user.fullName : '';
    return <span style={styles}>{name}</span>
}

const AvatarLetters = ({user}) => {
    const fullName = user ? user.fullName : '';
    const acronym = fullName.length > 2 ? fullName.split(" ").map(l=>l[0]).join("") : '?';
    return <Avatar alt={fullName}>{acronym}</Avatar>
}

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -8,
      top: 16,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      fontSize: '1rem',
      color: 'white'
    },
}))(Badge);

const ShoppingCartIconBadge = ({points}) => {
    return (
        <StyledBadge color="error" badgeContent={points} max={99999} >
            <ShoppingCartIcon style={{ fontSize: 35, color: "#FFD700" }} />
        </StyledBadge>
    );
}

export const HeaderShop = ({ user }) => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <IconButton aria-label="cart">
                    {
                        user?.points > 0 
                        ? <ShoppingCartIconBadge points={user.points} />
                        : <ShoppingCartIcon style={{ fontSize: 35, color: "#FFD700" }} />
                    }
                </IconButton>
                <TextOnlyTooltip title={<UserName user={user} />} placement="right">
                    <IconButton style={{ marginLeft: '23px' }}>
                        <AvatarLetters user={user} />
                    </IconButton>
                </TextOnlyTooltip>
            </Toolbar>
        </AppBar>
    );
}