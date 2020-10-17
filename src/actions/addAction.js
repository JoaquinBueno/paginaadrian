import {ADD_PRODUCT_CART} from './types'

export const addCart = (productName, productSize, productColor) => {
    return (dispatch) => {
        dispatch({
            type: ADD_PRODUCT_CART,
            payload: productName,
            size: productSize,
            color: productColor
        })
    }
}