import React, {useState, useEffect} from 'react'
import './styles.css'
import {connect} from 'react-redux';
import axios from 'axios'


const Pago =({cartProps})=> {
    useEffect(()=> {
        
           
        
        
        // pagar()
        
    }, [])
    
    const [state, setState] = useState(null)
    let productsInCart = []

    Object.keys(cartProps.products).forEach((item) => {
        if (cartProps.products[item].inCart) {
            productsInCart.push(cartProps.products[item])
        }
        
    } )
    return(
        <>
            
        </>
    )
}
const mapStateToProps = state => ({
    cartProps: state.cartState
})

export default connect(mapStateToProps)(Pago)