import Grid from '@material-ui/core/Grid';
import { ProductCard } from '../components/ProductCard';

export const ProductContainer = (props) => {
    const { card } = props;
    return (
        <Grid item key={card} xs={12} sm={6} md={4}>
            <ProductCard />
        </Grid>
    );
}
