import React, { useContext } from 'react';
import { StoreContext } from 'context/StoreContext';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ProductContainer from 'components/Product/containers/ProductContainer';

import { useStyles } from './styles';
import config from 'config/config';

const Title = () => {
    const title = config.ELECTRONIC.toString().concat(config.WEB_NAME);
    return <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>{title}</Typography>
}

const Description = () => <Typography variant="h5" align="center" color="textSecondary" paragraph>Everything You Need For Your Entertaiment</Typography>

const MainHeader = () => {
    const classes = useStyles();
    return (
        <div className={classes.heroContent}>
            <Container maxWidth="md">
                <Title />
                <Description />
            </Container>
        </div>
    );
}

export const MainShop = () => {
    const {
        data: { products }
    } = useContext(StoreContext);
    return (
      <main>
            <MainHeader />
            <ProductContainer products={products.data} /> 
      </main>
    );
}
