import React from 'react'
import {MdCancel} from 'react-icons/md'
import {connect} from 'react-redux';
import {productQuantity, clearProduct} from '../../actions/productQuantity'
import './styles.css'

const ProductOnCart =({title, price, colorElegido, talleElegido, imgSrc, ammount, tagName, clearProduct, productQuantity})=> {
    return(
            <>
            <div className='cart-cont'>
                <div>
                    <MdCancel size='20px' onClick={() => clearProduct(tagName)}/>
                </div>
                <img src={imgSrc} alt='producto seleccionado' className='cart-product-img uk-width-expand'/>
                <p className='cart-title'>{title} - {talleElegido} - {colorElegido}</p>
                <div className='cart-price-cont'>
                    <div className='cart-ammount-cont'>
                        <div className='cart-flex-amm'>
                            <p className='uk-margin-remove product-ammount'>{ammount}</p>
                        </div>
                        
                    </div>
                    
                </div>
                <p className='cart-price uk-margin-remove' id='price'>${price}</p>
            
            </div>
            </>
    )
    
}

const mapStateToProps = state => ({
    cartProps: state.cartState
})
  
export default connect(mapStateToProps, {productQuantity, clearProduct})(ProductOnCart)