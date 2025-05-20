import { useEffect, useState } from "react"

const useProductFilters = (data, sizeFilter, typeFilter, sortFilter) => {
    const [filteredProduct, setFilteredProduct] = useState(data);

    const getSelectedFiltersLables = (filters) => {
        return filters
            .filter((singleSize) => singleSize.value)
            .map((element) => element.label)
    }

    const applySizeFilter = (productList, filter) => {
        return productList.filter(product =>
            filter.every((size) => product.size.includes(size)))
    }
    const applySortFilter = (productList, filter) => {
        return filter === 'none' ?
            [...productList].sort((a, b) => (a.id - b.id))
            : [...productList].sort((a, b) => filter === 'asc' ? a.price - b.price : b.price - a.price)

    }

    const applyTypeFilter = (productList, filter) => {
        return productList.filter(product =>
            filter.includes(product.occasion))

    }

    useEffect(() => {

        const filterTypeSize = () => {
            //get user select size array
            const finalSizeFilter = getSelectedFiltersLables(sizeFilter)
            //get user select type array
            const finalTypeFilter = getSelectedFiltersLables(typeFilter)

            let isSizeFilterActive = finalSizeFilter.length;
            let isTypeFIlterActive = finalTypeFilter.length > 0 && finalTypeFilter.length !== typeFilter.length;

            if (!isTypeFIlterActive && !isSizeFilterActive) {
                //both not apply
                return data

            } else if (isTypeFIlterActive && !isSizeFilterActive) {
                //only type filter apply

                return applyTypeFilter(data, finalTypeFilter)


            } else if (!isTypeFIlterActive && isSizeFilterActive) {
                //only size filter apply
                return applySizeFilter(data, finalSizeFilter)


            } else {
                //both apply
                return applySizeFilter(applyTypeFilter(data, finalTypeFilter), finalSizeFilter)

            }
        }
        const prob = applySortFilter(filterTypeSize(), sortFilter);
        setFilteredProduct(prob)
    }, [data, sizeFilter, typeFilter, sortFilter,])

    return filteredProduct;

}

export default useProductFilters;