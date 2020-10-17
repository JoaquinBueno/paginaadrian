import {GET_DETAIL} from './types'

export const getDetail = (productName) => {
    return (dispatch) => {
        dispatch({
            type: GET_DETAIL,
            payload: productName
        })
    }
}