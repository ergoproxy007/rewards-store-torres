import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import AttachMoney from '@material-ui/icons/AttachMoney';
import { ReedemButton } from '../ReedemButton';
import { makeStyles } from '@material-ui/core/styles';
import { numberWithCommas } from 'config/numbers.util';

export const ProductCard = (props) => {
    const classes = useStyles();
    const { product } = props;
    const card = {
        img: product.img.url,
        imgHd: product.img.hdUrl,
        name: product.name,
        cost: product.cost,
        price: numberWithCommas(product.cost),
        type: product.category
      };
    return (
      <Card className={classes.card}>
        <CardMedia
                    className={classes.cardMedia}
                    image={card.img}
                    title={card.name}
        />
        <CardContent className={classes.cardContent}>
          <Button disabled size="small" color="primary" startIcon={<AttachMoney className={classes.money} />}>
            <Typography className={classes.cost} variant="h5" >{ card.price }</Typography>
          </Button>
          <Typography color="textSecondary" component="h2">{ card.type }</Typography>
          <Typography gutterBottom variant="h5" component="h2">{ card.name }</Typography>
          <ReedemButton />
        </CardContent>
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
  money: {
    color: '#e6c300 !important'
  },
  cost: {
    color: '#ffd700 !important',
    fontWeight: 'bold',
  }
}));
