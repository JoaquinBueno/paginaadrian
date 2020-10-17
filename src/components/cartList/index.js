import React from 'react'
import {connect} from 'react-redux';
import ProductOnCart from '../productOnCart/index'

const ListOfProductsOnCart = ({cartProps}) => {
  
    let productsInCart = []
  
    Object.keys(cartProps.products).forEach((item) => {
        if (cartProps.products[item].inCart) {
            productsInCart.push(cartProps.products[item])
            console.log(productsInCart)
        }
        
    } )
  
    
    
  
    return (
      <div className='uk-margin-xlarge-top'>
        {
          productsInCart.map((product, index) => 
            <ProductOnCart {...product} key={index} className='cart-list-item'/>
          )
        }
        <p class='uk-margin'>Total: ${cartProps.cartCost}</p>
      </div>
    );
  };
  
  const mapStateToProps = state => ({
    cartProps: state.cartState
  })
  
  export default connect(mapStateToProps)(ListOfProductsOnCart)