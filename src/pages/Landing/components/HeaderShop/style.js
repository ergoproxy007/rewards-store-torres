import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => 
    createStyles({
     containerAddpoint: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end'
     }
  })
);
