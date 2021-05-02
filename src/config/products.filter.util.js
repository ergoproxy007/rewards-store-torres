export function filterOrderBy(products, orderBy, page) {
    const descOrder = (x, y) => x > y ? -1 : 1;
    const ascOrder = (x, y) => x > y ? 1 : -1;
    if (orderBy && products !== '') {
        const desc = orderBy === 'desc';
        return {
                original: [...products],
                filtered: [...products].sort((a,b) => desc ? descOrder(a.cost, b.cost) : ascOrder(a.cost, b.cost)),
                page: 1
               };
    } else {
        return !products ? { original: null, filtered: null } : {original: [...products], filtered: null, page: page}
    }
}

export function filterCategory(products, category, page) {
    console.log(category);
    return products
            ? {
                original: [...products],
                filtered: products.filter(product => product.category === category),
                page: 1
              }
            : { original: products, filtered: null, page: page };
}

export function getOrdered(products) {
    const categories = products?.map(product => product.category);
    const unique = [...new Set(categories)];
    return unique.sort((a,b) => a > b ? 1 : -1);
}

export function getCategories(products) {
    const ordered = getOrdered(products);
    if (ordered) {
        const categories = [];
        categories.push("All");
        return categories.concat(ordered).map(category => {
            return {text: category};
        });
    }
    return ordered;
}
