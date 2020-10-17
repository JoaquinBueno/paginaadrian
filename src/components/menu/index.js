import React, {useState} from 'react'
import './styles.css'
import { FaShoppingCart } from "react-icons/fa";
import {GiHamburgerMenu} from 'react-icons/gi'
import {Link} from 'react-router-dom'
import {Backdrop} from '../backdrop'
import {MenuOpen} from './menuOpen'
import {getNumbers} from '../../actions/getAction'
import {connect} from 'react-redux'

const Menu = (props) => {
    const [open, setOpen] = useState({
        backdropOpen: false
      })
    
      const backdropHandler = () => {
        setOpen({
            backdropOpen: !open.backdropOpen
        })
    }
      let backdrop;
    
      if (open.backdropOpen) {
          backdrop = <Backdrop handler={backdropHandler}/>
      }
    return(
        <>
            <div className='menu-container'>
                <div className='menu-icon-cont' onClick={backdropHandler}>
                    <GiHamburgerMenu size='25px'/>
                </div>
                <div className='menu-logo-cont'>
                    <Link to='/'>
                        <img src='/logo.jpeg' alt='logo' className='menu-logo'/>
                    </Link>   
                </div>
                <Link to='/cart' className='cart-icon-cont'>
                    <FaShoppingCart size='25px'/>
                    <span>{props.cartState.itemNumbers}</span>
                </Link>
            </div>
            {
                backdrop
            }
            {
                (open.backdropOpen) ? <MenuOpen handler={backdropHandler}/> : <></>
            }
            
        </>
    )
}
const mapStateToProps = state => ({
    cartState: state.cartState
  })
  
  export default connect(mapStateToProps, {getNumbers})(Menu)