import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

export const ReedemButton = (props) => {
    return (
        <CardActions>
            <Button variant="outlined" color="primary">
                reedem now
            </Button>
        </CardActions>
    );
}
