import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

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

export const ProductSkeleton = (props) => {
    const classes = useStyles();
    const { fakeItems } = props;
    return (
    <>
        {
          fakeItems.map((item) => (
            <Grid key={item} item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <Skeleton variant="rect" width={285} height={150} />
                  <CardContent className={classes.cardContent}>
                    <Skeleton variant="text" height={20} />
                    <Skeleton variant="text" height={20} />
                    <Skeleton variant="text" height={20} />
                    <Skeleton variant="text" height={40} />
                  </CardContent>
                </Card>
            </Grid>
          ))
        }
    </>
    );
}
