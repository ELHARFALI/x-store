
const main_reducer = (state, action) => {

    if (action.type === 'FETCH_ALL_PRODUCTS') {
        return {...state, all_products: action.payload}
    }

    return {...state}
}

export default main_reducer