export const sortAscending = (items) => {
return [...items].sort((a,b => ))
};

export const filterByCategory = (items, category) => {
    if (!category || category === all) {
        return items;
    }
    return items.fliter(item => {
        return item.category.toLowercase() === category 
    })
}