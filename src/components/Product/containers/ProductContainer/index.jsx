import { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { PaginationItems } from 'components/PaginationItems';
import { PaginationModel } from 'model/pagination.model';
import { ProductCard } from '../../ProductCard';
import config from 'config/config';
import { SkeletonProduct } from 'components/Product/SkeletonProduct';

const useStyles = makeStyles((theme) => 
    createStyles({
     cardGrid: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
     },
     center: {
         width: '100%',
         display: 'flex',
         justifyContent: 'center'
     },
  })
);

const DrawerProductContainer = ({productsFiltered,model,handleChange}) => {
    const classes = useStyles();
    const lazyCount = [1,2,3];
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {
                    productsFiltered ? (
                        productsFiltered.map((product) => (
                            <Grid key={product.id} item xs={12} sm={6} md={4}>
                                <ProductCard product={product} />
                            </Grid>
                        ))
                    ) : (
                        lazyCount.map((lazy) => (
                            <Grid key={lazy} item xs={12} sm={6} md={4}>
                                <SkeletonProduct />
                            </Grid>
                        ))
                    )
                }
                <Grid item className={classes.center}>
                    <PaginationItems pages={model.pages} handlerOnChange={handleChange} />
                </Grid>
            </Grid>
        </Container>
    );
}

const ProductContainer = (props) => {
    const [page, setPage] = useState(1); 
    const { products } = props;
    const range = config.MAX_PRODUCTS;
    const model = new PaginationModel(products, range).setCurrentPage(page);
    const productsFiltered = model.getDataFiltered();
    const handleChange = (event, value) => setPage(value);
      return (
          <DrawerProductContainer productsFiltered={productsFiltered} model={model} handleChange={handleChange} />
    );
}

export default ProductContainer;
