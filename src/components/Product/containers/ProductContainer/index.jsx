import { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import BackspaceIcon from '@material-ui/icons/Backspace';
import Typography from '@material-ui/core/Typography';
import { PaginationItems } from 'components/PaginationItems';
import { ProductSkeleton } from 'components/Product/ProductSkeleton';
import { ProductCard } from '../../ProductCard';
import NativeSelects from 'views/NativeSelects';
import config from 'config/config';
import { orders } from 'context/helper/store.helper';
import { ProductFilterModel } from 'model/product.filter.model';

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

const ClearButton = ({handleClear}) => {
    return (
        <IconButton onClick={handleClear}>
            <BackspaceIcon style={{ marginRight: '10px' }}/>
            <Typography variant="h6" align="center" color="textSecondary">Clear</Typography>
        </IconButton>
    );
}

const GridSelects = ({categories,handleOrderByCost,handleFilterCategory,count}) => {
    const NONE = 'None';
    const ALL = 'All';
    const [currentPriceOption, setCurrentPriceOption] = useState('');
    const [currentCategoriesOption, setCurrentCategoriesOption] = useState('');
    const handleClear = () => {
        setCurrentPriceOption(NONE);
        setCurrentCategoriesOption(ALL);
        handleOrderByCost('');
        handleFilterCategory('All');
    }
    return (
        <Grid container spacing={4}>
            <Grid item xs={4} md={3}>
                <NativeSelects
                    label={"Order by"}
                    results={"Results by price"}
                    options={orders}
                    handleChangeOrderBy={handleOrderByCost}
                    handleCurrentOption={setCurrentPriceOption}
                    currentOption={currentPriceOption}
                    defaultValue={NONE}
                />
            </Grid>
            <Grid item xs={4} md={3}>
                <NativeSelects
                    label={"Categories"}
                    results={"Count: ".concat(count)}
                    options={categories}
                    handleChangeOrderBy={handleFilterCategory}
                    handleCurrentOption={setCurrentCategoriesOption}
                    currentOption={currentCategoriesOption}
                    defaultValue={ALL}
                />
            </Grid>
            <Grid item xs={4} md={3}>
                <ClearButton handleClear={handleClear} />
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
            <GridSelects  
                categories={categories}
                handleOrderByCost={handleOrderByCost}
                handleFilterCategory={handleFilterCategory}
                count={count}
            />
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
    const lengthClone = productsClone?.length > 0 ? productsClone.length : 0;
    const productFilterModel = new ProductFilterModel(
                                     categoryFiltered, orderBy, products,
                                     page, range, lengthClone).build();
    const handleChange = (event, value) => setPage(value);
    const handleChangeOrderBy = (value) => setOrderBy(value);
    const handleCategoryFiltered = (category) => setCategoryFiltered(category);
    return (
          <DrawerProductContainer
            productsFiltered={productFilterModel.productsFiltered}
            model={productFilterModel.model}
            categories={categories}
            count={productFilterModel.count}
            handleChange={handleChange}
            handleOrderByCost={handleChangeOrderBy}
            handleFilterCategory={handleCategoryFiltered}
          />
    );
}

export default ProductContainer;
