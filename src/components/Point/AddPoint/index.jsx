import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

export const AddPoint = (props) => {
    const { title, points, update, handleAddPoints } = props;
    return (
        <Tooltip title={title + ': ' + points + ' puntos'} aria-label="add">
            <Fab color="secondary" onClick={() => {
                handleAddPoints();
                update();
                }}>
                <AddIcon />
            </Fab>
        </Tooltip>
    );
}
