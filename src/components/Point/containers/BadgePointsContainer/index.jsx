import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -8,
      top: 16,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      fontSize: '1rem',
      color: props => props.focusColor
    },
}))(Badge);

/* applying pattern container  */
const BadgePointsContainer = (props) => {
    const {colorType, points, maximum, badgeProps, children} = props;
    return (
        <StyledBadge focusColor={badgeProps.focusColor} color={colorType} badgeContent={points} max={maximum} >
            { children }
        </StyledBadge>
    );
}

export default BadgePointsContainer;
