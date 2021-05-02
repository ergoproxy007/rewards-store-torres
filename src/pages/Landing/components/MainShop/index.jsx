import React, { useContext } from 'react';
import { StoreContext } from 'context/StoreContext';
import { getCategories } from 'config/products.filter.util';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ProductContainer from 'components/Product/containers/ProductContainer';
import { useStyles } from './styles';
import config from 'config/config';

const Title = ({clazzName}) => {
    const title = config.ELECTRONIC.toString().concat(config.WEB_NAME);
    return <Typography className={clazzName} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>{title}</Typography>
}

const Description = () => <Typography variant="h5" align="center" color="textSecondary" paragraph>Everything You Need For Your Entertaiment</Typography>

const MainHeader = () => {
    const classes = useStyles();
    return (
        <div className={classes.heroContent}>
            <Container maxWidth="md">
                <Title clazzName={classes.title} />
                <Description />
            </Container>
        </div>
    );
}

export const MainShop = () => {
    const {
        data: { products }
    } = useContext(StoreContext);
    const categories = getCategories(products.data);
    const productsClone = products.data && products.data?.length > 0 ? [...products.data] : null;
    return (
      <main>
            <MainHeader />
            <ProductContainer products={products.data} categories={categories} productsClone={productsClone} /> 
      </main>
    );
}
