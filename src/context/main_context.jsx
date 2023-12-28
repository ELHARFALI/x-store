import { createContext, useContext, useEffect, useReducer } from "react";

import reducer from '../reducer/main_reducer'
import axios from "axios";

const MainContext = createContext()

const initialState = {
    isLoading: false,
    all_products: []
}

export const MainContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // fetch all products
    const fetchAllProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            const data = response.data
            dispatch({type: 'FETCH_ALL_PRODUCTS', payload: data})
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAllProducts()
    }, [])
    
    return (
        <MainContext.Provider value={{...state}}>
            {children}
        </MainContext.Provider>
    )
}

export const useMainContext = () => {
    return useContext(MainContext)
}