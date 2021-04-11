import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => 
    createStyles({
     container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end'
     }
  })
);

export const RightContainer = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            { props.children }
        </div>
    );
}
