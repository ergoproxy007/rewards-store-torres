import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import RowItem from '../RowItem';
import config from 'config/config';
import { PaginationModel } from 'model/pagination.model';
import { PaginationItems } from 'components/PaginationItems';

const useStyles = makeStyles((theme) => ({
  root: { 
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  center: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
}));

const DrawerListRowItemsContainer = ({productsFiltered,model,handleChange}) => {
  const classes = useStyles();
  const currentPage = model.currentPage-1;
  const range = (currentPage*model.pageRange)+1;
  return (
    <>
      <List className={classes.root}>
          {
            productsFiltered?.map((product, index) => (
              <RowItem key={(index+range)} item={product} index={(index+range)} />
            ))
          }
      </List>
      <Grid item className={classes.center}>
          <PaginationItems pages={model.pages} handlerOnChange={handleChange} />
      </Grid>
    </>
  )
}

export const ListRowItemsContainer = (props) => {
  const [page, setPage] = useState(1);
  const range = config.MAX_HISTORY;
  const { products } = props;
  const productsOrdered = [].concat(products).reverse();
  const model = new PaginationModel(productsOrdered, range).setCurrentPage(page);
  const productsFiltered = model.getDataFiltered();
  const handleChange = (event, value) => setPage(value);
  return (
    <DrawerListRowItemsContainer productsFiltered={productsFiltered} model={model} handleChange={handleChange} />
  );
}
