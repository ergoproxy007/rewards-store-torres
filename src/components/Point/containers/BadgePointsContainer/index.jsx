import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import config from 'config/config';
import { numberWithCommas } from 'config/numbers.util';

const StyledBadge = withStyles((theme) => ({
    badge: {
      minWidth: '95px',
      right: -22,
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
    const coins = numberWithCommas(points).concat(config.MONEY);
    return (
        <StyledBadge focusColor={badgeProps.focusColor} color={colorType} badgeContent={coins} max={maximum} >
            { children }
        </StyledBadge>
    );
}

export default BadgePointsContainer;
