import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export const SkeletonProduct = () => {
    const classes = useStyles();
    return (
      <Card className={classes.card}>
        <Skeleton variant="rect" width={285} height={150} />
        <CardContent className={classes.cardContent}>
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={40} />
        </CardContent>
      </Card>
    );
}
