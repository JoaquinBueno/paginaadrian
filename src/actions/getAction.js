import {GET_NUMBERS_CART} from './types'

export const getNumbers = () => {
    return (dispatch) => {
        console.log('getting cart numbers')
        dispatch({
            type: GET_NUMBERS_CART
        })
    }
}