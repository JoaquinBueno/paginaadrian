import React, {useEffect} from 'react'
import './styles.css'
import axios from 'axios'
import queryString from 'query-string'

export const Checkout = (props) => {
    let pedidoId = props.match.params.id
    useEffect(() => {
        
        async function pedido(pedidoNuevo) {
            const _pedido = await axios.put(`http://localhost:8000/api/pedidos/${pedidoId}`, pedidoNuevo)
            return _pedido
        }
        const querys = queryString.parse(props.location.search)
        if (querys) {
            pedido(querys)
        }
        
    }, [])
    return(
        <>
            <h1 className='uk-margin-xlarge-top'> Checkouteado bro</h1>
        </>
    )
}