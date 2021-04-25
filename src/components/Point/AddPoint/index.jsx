import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

export const AddPoint = (props) => {
    const { title, text, theme, update, loading } = props;
    const ButtonAddIcon = () => <Tooltip title={title} aria-label="add">
                                    <Fab color={theme} onClick={() => { update(); }}>
                                        <Typography>{text}</Typography>
                                    </Fab>
                                </Tooltip>
    return (
        <>
            { loading ? <CircularProgress color={theme} /> : <ButtonAddIcon /> }
        </>
    );
}
