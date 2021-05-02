import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => 
    createStyles({
     icon: {
      marginRight: theme.spacing(2),
     },
     heroContent: {
      backgroundColor: '#F4F4F4',
      padding: theme.spacing(3, 0, 2),
     },
     heroButtons: {
      marginTop: theme.spacing(4),
     },
     cardGrid: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
     },
     card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
     },
     cardMedia: {
      paddingTop: '56.25%', // 16:9
     },
     cardContent: {
      flexGrow: 1,
     },
     title: {
      [theme.breakpoints.only('xs')]: {
        fontSize: '1.9rem',
      },
    },
  })
);
