import Pagination from '@material-ui/lab/Pagination';

export const PaginationItems = (props) => {
    const { pages, handlerOnChange } = props;
    return (
        <Pagination count={pages} shape="rounded" onChange={handlerOnChange} />
    );
}
