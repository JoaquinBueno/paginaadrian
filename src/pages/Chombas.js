import React, {useState} from 'react'
import './styles.css'
import {Link} from 'react-router-dom'

export const Chombas = () => {
    const [camisas, setCamisas] = useState([
        {
            gender: 'man',
            tagName: 'camisa1',
            img: '/assets/camisas/camisa1.jpg',
            title: 'Buzo 1',
            price: 1590,
            sizes: 'Todos los talles',
            id: 1
        },
        {
            gender: 'unisex',
            tagName: 'camisa2',
            img: '/assets/camisas/camisa2.jpg',
            title: 'Buzo 2',
            price: 1990,
            sizes: 'S - M - L',
            id: 2
        },
        {
            gender: 'woman',
            tagName: 'camisa3',
            img: '/assets/camisas/camisa3.jpg',
            title: 'Buzo 3',
            price: 2550,
            sizes: 'Todos los talles',
            id: 3
        },
        {
            gender: 'woman',
            tagName: 'camisa4',
            img: '/assets/camisas/camisa4.jpg',
            title: 'Buzo 4',
            price: 990,
            sizes: 'Todos los talles',
            id: 4
        },
    ])
    return(
        <>
        <div className='all-prod-cont'>
                <h1 className='all-prod-title'>Nuestras Camisas</h1>
           
                <div uk-filter="target: .js-filter">

                    <ul className="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center prod-all-grid" uk-grid>
                        {
                            camisas.map(camisa => 
                            <li data-gender={camisa.gender} className='all-data-li' key={camisa.id}>
                                <Link to={`/camisas/${camisa.id}`}><img src={camisa.img} alt={camisa.title} className='all-prod-img'/></Link>
                                <h3 className='all-prod-title'>{camisa.title}</h3>
                                <div className='all-prod-description-cont'>
                                    <p className='all-prod-price'>${camisa.price}</p>
                                    <p className='all-prod-description'>{camisa.sizes}</p>
                                </div>
                            
                            </li>)
                        }
                    </ul>

                </div>
        </div>
        </>
    )
}