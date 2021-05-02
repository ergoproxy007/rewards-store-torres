import { filterOrderBy, filterCategory } from 'config/products.filter.util';
import { PaginationModel } from './pagination.model';

/**
 * Logic model behavior for filters of Product
 */
class ProductFilterModel {
    constructor(categoryFiltered, orderBy, products, page, range, lengthClone) {
        this.ALL = 'All';
        this.categoryFiltered = categoryFiltered;
        this.orderBy = orderBy;
        this.products = products;
        this.page = page;
        this.range = range;
        this.lengthClone = lengthClone;
    }

    build() {
        const dataCategoryWithFilter = this.categoryFiltered === this.ALL
                                        ? { original: this.products, filtered: null, page: this.page }
                                        : filterCategory(this.products, this.categoryFiltered);
        const dataCategory = dataCategoryWithFilter.filtered
                                ? dataCategoryWithFilter.filtered
                                : dataCategoryWithFilter.original;
        const dataOrderByWithFilter = filterOrderBy(dataCategory, this.orderBy, dataCategoryWithFilter.page);
        const dataOrderBy = dataOrderByWithFilter.filtered
                             ? dataOrderByWithFilter.filtered
                             : dataOrderByWithFilter.original;
        const model = new PaginationModel(dataOrderBy, this.range).setCurrentPage(dataOrderByWithFilter.page);
        const productsFiltered = model.getDataFiltered();
        const lengthFiltered = productsFiltered?.length > 0 ? productsFiltered.length : 0;
        const count = this.categoryFiltered === this.ALL ? this.lengthClone : lengthFiltered;

        return { productsFiltered: productsFiltered, model: model, count: count };
    }
}

export { ProductFilterModel };