import React, {useState, useEffect} from 'react'
// import ListOfProductsOnCart from '../ListOfProductsOnCart/index'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import CartList from '../components/cartList/index'
import axios from 'axios'

const Cart =({cartProps}, props)=> {
    const [state, setState] = useState(null)
    const [id, setId] = useState(null)
    const [pago, setPago] = useState(false)
    const [datos, setDatos] = useState({
        nombre: '',
        direccion: '',
        ciudad: '',
        celular: 0,
        email: '',
    })
    let productsInCart = []
    async function agregarPedido(pedido_) {

        const pedido = await axios.post('http://localhost:8000/api/pedidos', pedido_)
        .then(response => {
                setState(response.data.data)
            
        })
        .catch(err => {
            console.log(err)
        })
        return pedido
    }
    Object.keys(cartProps.products).forEach((item) => {
        if (cartProps.products[item].inCart) {
            productsInCart.push(cartProps.products[item])
        }
        
    } )
    async function pagar(datos) {
        console.log('Hola')
        const comprar = await axios.post('http://127.0.0.1:8000/api/products/pagar', datos )
        .then(res => {
            setId({
                id: res.data.data.body.id,
                link: res.data.data.body.init_point
            })
        
        })
        console.log(comprar)
        return comprar
        
    }
    function enviar(e) {
        e.preventDefault()
        // let productos = []
        // Object.keys(cartProps.products).forEach((item) => {
        //     if (cartProps.products[item].inCart) {
        //         datos.items.push(cartProps.products[item])
        //     }
            
        // } )
        console.log(productsInCart)
        const pedido = {
            datos: datos,
            productos: productsInCart,
            collection_id:"",
            collection_status:"",
            external_reference:"",
            merchant_account_id:"",
            merchant_order_id:"",
            payment_id:"",
            payment_type:"",
            preference_id:"",
            processing_mode:"",
            site_id:"",
            status:""
        }
        
        agregarPedido(pedido)
        
    }
    useEffect(() => {
        if (state && state !== undefined) {
            const datos = {
                title: 'Nueva Compra',
                valor: cartProps.cartCost,
                cantidad: 1,
                _id: state
            }
            pagar(datos)
        }
    }, [state])
        
    
    
    return(
        <>
            {
                !pago ? <div className='cart-container-'>
                            <CartList/>
                            <div className='pago-display-flex'>
                            <button className='uk-button uk-button-primary pago-btn-final uk-text-center' onClick={() => { 
                            setPago(true)
                            }}>Continuar ${cartProps.cartCost}</button>
                            </div>
                            
                        </div> : 
                <form className='uk-container uk-margin-xlarge-top' onSubmit={e => {enviar(e)}}>
                    <input className='uk-input uk-input-large uk-margin-small-top' type='text' required placeholder='Nombre Completo' onChange={e => {
                        setDatos({
                            ...datos,
                            nombre: e.target.value
                        })
                    }}/>
                    <div className='pago-display-flex'>
                        <input className='uk-input uk-input-large uk-margin-small-top' type='text' required placeholder='Direccion' onChange={e => {
                        setDatos({
                            ...datos,
                            direccion: e.target.value
                        })
                    }}/>
                        <input className='uk-input uk-input-large uk-margin-small-top' type='text' required placeholder='Ciudad' onChange={e => {
                        setDatos({
                            ...datos,
                            ciudad: e.target.value
                        })
                    }}/>
                    </div>
                    <input className='uk-input uk-input-large uk-margin-small-top' type='number' required placeholder='Celular' onChange={e => {
                        setDatos({
                            ...datos,
                            celular: e.target.value
                        })
                    }}/>
                    <input className='uk-input uk-input-large uk-margin-small-top' type='email' required placeholder='Correo Electronico' onChange={e => {
                        setDatos({
                            ...datos,
                            email: e.target.value
                        })
                    }}/>
                    <h6 className='uk-margin-remove uk-text-center'>Luego de abonar el producto, seras redireccionado a una pagina de confirmacion. Por favor, quedate con nosotros hasta el final :)</h6>
                    {
                        !state ? 
                        <div className='pago-display-flex'>
                            <button type='submit' className='uk-button uk-button-primary pago-btn-final'>Confirmar</button>
                        </div> : <></>
                    }
                </form>
                
            }
                {   
                    id ?
                    <div className='pago-display-flex'>
                        <a className='uk-button uk-button-primary uk-margin-small-top pago-btn-final' href={id.link} data-preference-id={id.id} >Pagar</a>
                    </div>
                    : <div></div>
                }
            
        </>
    )
}

const mapStateToProps = state => ({
    cartProps: state.cartState
})

export default connect(mapStateToProps)(Cart)