import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { ReedemAction } from '../ReedemAction';
import { numberWithCommas } from 'config/numbers.util';
import { useStyles } from './styles';

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
          <ReedemAction clazzCost={classes.cost} clazzMoney={classes.money} price={card.price} />
          <Typography color="textSecondary" component="h2">{ card.type }</Typography>
          <Typography gutterBottom variant="h5" component="h2">{ card.name }</Typography>
        </CardContent>
      </Card>
    );
}
