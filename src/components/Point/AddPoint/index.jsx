import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import CircularProgress from '@material-ui/core/CircularProgress';

export const AddPoint = (props) => {
    const { text, update, loading } = props;
    const ButtonAddIcon = () => <Tooltip title={text} aria-label="add">
                                    <Fab color="secondary" onClick={() => { update(); }}><AddIcon /></Fab>
                                </Tooltip>
    return (
        <>
            { loading ? <CircularProgress color="secondary" /> : <ButtonAddIcon /> }
        </>
    );
}
