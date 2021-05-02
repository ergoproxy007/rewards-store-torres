import { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { PaginationItems } from 'components/PaginationItems';
import { ProductSkeleton } from 'components/Product/ProductSkeleton';
import { PaginationModel } from 'model/pagination.model';
import { ProductCard } from '../../ProductCard';
import NativeSelects from 'views/NativeSelects';
import config from 'config/config';
import { filterOrderBy, filterCategory } from 'config/products.filter.util';
import { orders } from 'context/helper/store.helper';

const useStyles = makeStyles((theme) => 
    createStyles({
     cardGrid: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(4),
     },
     center: {
         width: '100%',
         display: 'flex',
         justifyContent: 'center'
     },
  })
);

const GridProducts = ({productsFiltered,model,handleChange,reedem,center}) => {
    const lazyCount = [1,2,3];
    return (
        <Grid container spacing={4}>
            {
                productsFiltered
                ? (
                    productsFiltered.map((product, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4}>
                            <ProductCard product={product} reedem={reedem} />
                        </Grid>
                    ))
                )
                : ( <ProductSkeleton fakeItems={lazyCount} /> )
            }
            <Grid item className={center}>
                <PaginationItems pages={model.pages} handlerOnChange={handleChange} />
            </Grid>
        </Grid>
    );
}

const DrawerProductContainer = ({productsFiltered,model,categories,
                                 handleChange,handleOrderByCost,
                                 handleFilterCategory,reedem,count}) => {
    const classes = useStyles();
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                <Grid item >
                    <NativeSelects
                        label={"Order by"}
                        results={"Results by price"}
                        options={orders}
                        handleChangeOrderBy={handleOrderByCost}
                    />
                </Grid>
                <Grid item >
                    <NativeSelects
                        label={"Categories"}
                        results={"Count: ".concat(count)}
                        options={categories}
                        handleChangeOrderBy={handleFilterCategory}
                    />
                </Grid>
            </Grid>
            <GridProducts
                productsFiltered={productsFiltered}
                model={model}
                handleChange={handleChange}
                reedem={reedem}
                center={classes.center}
            />
        </Container>
    );
}

const ProductContainer = (props) => {
    const ALL = 'All';
    const range = config.MAX_PRODUCTS;
    const [orderBy, setOrderBy] = useState('');
    const [categoryFiltered, setCategoryFiltered] = useState(ALL);
    const [page, setPage] = useState(1);
    const { products, categories, productsClone } = props;
    const dataCategoryWithFilter = categoryFiltered === ALL ? { original: products, filtered: null, page: page } : filterCategory(products, categoryFiltered);
    const dataCategory = dataCategoryWithFilter.filtered ? dataCategoryWithFilter.filtered: dataCategoryWithFilter.original;
    const dataOrderByWithFilter = filterOrderBy(dataCategory, orderBy, dataCategoryWithFilter.page);
    const dataOrderBy = dataOrderByWithFilter.filtered ? dataOrderByWithFilter.filtered: dataOrderByWithFilter.original;
    const model = new PaginationModel(dataOrderBy, range).setCurrentPage(dataOrderByWithFilter.page);
    const productsFiltered = model.getDataFiltered();
    const lengthClone = productsClone?.length > 0 ? productsClone.length : 0;
    const lengthFiltered = productsFiltered?.length > 0 ? productsFiltered.length : 0;
    const count = categoryFiltered === ALL ? lengthClone : lengthFiltered;
    const handleChange = (event, value) => setPage(value);
    const handleChangeOrderBy = (value) => setOrderBy(value);
    const handleCategoryFiltered = (category) => setCategoryFiltered(category);
    return (
          <DrawerProductContainer
            productsFiltered={productsFiltered}
            model={model}
            categories={categories}
            handleChange={handleChange}
            handleOrderByCost={handleChangeOrderBy}
            handleFilterCategory={handleCategoryFiltered}
            count={count}
          />
    );
}

export default ProductContainer;
