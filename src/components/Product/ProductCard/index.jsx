import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import AttachMoney from '@material-ui/icons/AttachMoney';
import ReedemAction from 'views/ReedemAction';
import { numberWithCommas } from 'config/numbers.util';
import { useStyles } from './styles';

const Price = ({ clazzMoney, clazzCost, price, action }) => {
  const value = <Button disabled size="small" color="primary" startIcon={<AttachMoney className={clazzMoney} />}>
                 <Typography className={clazzCost} variant="h5" >{ price }</Typography>
                </Button>
  return (
    <CardActions>
      { value }
      { action }
    </CardActions>
  );
}

export const ProductCard = (props) => {
    const classes = useStyles();
    const { product } = props;
    const card = {
        id: product._id,
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
          <Price
            clazzCost={classes.cost}
            clazzMoney={classes.money}
            price={card.price}
            action={<ReedemAction card={card} clazzCost={classes.cost} clazzMoney={classes.money} price={card.price} />}
          />
          <Typography color="textSecondary" component="h2">{ card.type }</Typography>
          <Typography gutterBottom variant="h5" component="h2">{ card.name }</Typography>
        </CardContent>
      </Card>
    );
}
