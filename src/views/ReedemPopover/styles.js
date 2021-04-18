import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 450,
    },
    image: {
      width: 450,
      height: 320,
      [theme.breakpoints.only('xs')]: {
        width: '110%',
        height: 200,
      },
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },  
    typography: {
        padding: theme.spacing(2),
        textAlign: 'center'
    },
    textAlignCenter: {
      textAlign: 'center'
    },
    itemsCenter: {
      display: 'flex',
      justifyContent: 'center'
    },
  }));
  