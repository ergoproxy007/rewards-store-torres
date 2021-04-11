import { Container, Grid } from '@material-ui/core';
import { ProductCard } from '../../ProductCard';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => 
    createStyles({
     cardGrid: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
     }
  })
);

const ProductContainer = (props) => {
    const { products } = props;
    const classes = useStyles();
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {
                    products?.map((product) => (
                        <Grid key={product.id} item xs={12} sm={6} md={4}>
                            <ProductCard product={product} />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
}

export default ProductContainer;
