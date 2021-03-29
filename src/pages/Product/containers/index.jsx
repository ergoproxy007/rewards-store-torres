import Grid from '@material-ui/core/Grid';
import { ProductCard } from '../components/ProductCard';

export const ProductContainer = (props) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <ProductCard />
        </Grid>
    );
}
