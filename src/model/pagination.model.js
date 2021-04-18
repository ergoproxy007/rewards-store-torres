import { divisionCeilValue } from 'config/numbers.util';

/**
 * Logic model behavior for pagination component
 */
class PaginationModel {
    constructor(data, range) {
        this.data = data
        this.pageRange = range;
        this.currentPage = 1;
        if (this.data?.length > 0) {
            this.pages = divisionCeilValue(this.data.length, this.pageRange);
        }
    }

    setCurrentPage(page) {
        this.currentPage = page;
        return this;
    }

    getDataFiltered() {
        if (this.data) {
            const start = (this.currentPage-1)*this.pageRange;
            const end = this.pageRange * this.currentPage;
            return this.data.slice(start, end);
        }
        return null;
    }

    build() {
        return { data: this.data, pages: this.pages };
    }
}

export { PaginationModel };