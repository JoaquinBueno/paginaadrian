import React, {useState} from 'react'
import './styles.css'
import {Link} from 'react-router-dom'

export const Buzos = () => {
    const [buzos, setBuzos] = useState([
        {
            title: 'Sumy Negro',
            tagName: 'sumy1',
            id: "5f8a35f872f3e31b18d861f2",
            price: 990,
            ammount: 0,
            inCart: false,
            imgSrc: '/assets/buzos/buzo-negro.png',
            imgSrc2: '/assets/buzos/buzo-negro-2.png',
            imgSrc3: '/assets/buzos/buzo-gris-claro.png',
            imgSrc4: '/assets/buzos/buzo-gris-claro-2.png',
            colorElegido: null,
            talleElegido: null,
            sizes: "S a XXL"
          },
          {
            title: 'Sumy Grises',
            tagName: 'sumy2',
            id: "5f8a367072f3e31b18d861f3",
            price: 990,
            ammount: 0,
            inCart: false,
            imgSrc: '/assets/buzos/gris-topo.png',
            imgSrc2: '/assets/buzos/gris-topo-2.png',
            imgSrc3: '/assets/buzos/gris-melange.png',
            imgSrc4: '/assets/buzos/gris-melange-2.png',
            colorElegido: null,
            talleElegido: null,
            sizes: "S a XXL"
          },
          {
            title: 'Sumy Rojo | Tostado',
            tagName: 'sumy3',
            id: "5f8a370f72f3e31b18d861f4",
            price: 990,
            ammount: 0,
            inCart: false,
            imgSrc: '/assets/buzos/rojo.png',
            imgSrc2: '/assets/buzos/rojo-2.png',
            imgSrc3: '/assets/buzos/tostado.png',
            imgSrc4: '/assets/buzos/tostado-2.png',
            colorElegido: null,
            talleElegido: null,
            sizes: "S a XXL"
          },
    ])

    return (
        <>
            <div className='all-prod-cont'>
                <h1 className='all-prod-title'>Nuestros Buzos</h1>
           
                <div uk-filter="target: .js-filter">
                    <ul className="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center prod-all-grid" uk-grid>
                        {
                            buzos.map(buzo => 
                            <li data-gender={buzo.gender} className='all-data-li' key={buzo.id}>
                                <Link to={`/buzos/${buzo.id}`}><img src={buzo.imgSrc} alt={buzo.title} className='all-prod-img'/></Link>
                                <h3 className='all-prod-title'>{buzo.title}</h3>
                                <div className='all-prod-description-cont'>
                                    <p className='all-prod-price'>${buzo.price}</p>
                                    <p className='all-prod-description'>{buzo.sizes}</p>
                                </div>
                            
                            </li>)
                        }
                    </ul>

                </div>
        </div>
            
        </>
    )
}
