import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { RedimirButton } from '../RedimirButton';
import { makeStyles } from '@material-ui/core/styles';

export const ProductCard = (props) => {
    const classes = useStyles();
    return (
      <Card className={classes.card}>
        <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
              Laptops
          </Typography>
          <Typography>
              Macbook Pro
          </Typography>
        </CardContent>
        <RedimirButton />
      </Card>
    );
}

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));
