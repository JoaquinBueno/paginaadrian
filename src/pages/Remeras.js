import React, {useState} from 'react'
import './styles.css'
import {Link} from 'react-router-dom'

export const Remeras = () => {
    const [remeras, setRemeras] = useState([
        {
            title: 'Remera Negro | Blanco',
            tagName: 'lisas1',
            id: "5f8b487472f3e31b18d861ff",
            price: 430,
            ammount: 0,
            inCart: false,
            imgSrc: '/assets/remeras/lisa-1-3.png',
            imgSrc2: '/assets/remeras/lisa-1-4.png',
            imgSrc3: '/assets/remeras/lisa-1-1.png',
            imgSrc4: '/assets/remeras/lisa-1-2.png',
            colorElegido: null,
            talleElegido: null,
            sizes: "S a XXL"
          },
          {
            title: 'Remera Crudo | Verde',
            tagName: 'lisas2',
            id: "5f8b48c572f3e31b18d86200",
            price: 430,
            ammount: 0,
            inCart: false,
            imgSrc: '/assets/remeras/lisa-1-5.png',
            imgSrc2: '/assets/remeras/lisa-1-6.png',
            imgSrc3: '/assets/remeras/lisa-2-1.png',
            imgSrc4: '/assets/remeras/lisa-2-2.png',
            colorElegido: null,
            talleElegido: null,
            sizes: "S a XXL"
          },
          {
            title: 'Remera Bordo | Azul',
            tagName: 'lisas3',
            id: "5f8b490c72f3e31b18d86201",
            price: 430,
            ammount: 0,
            inCart: false,
            imgSrc: '/assets/remeras/lisa-2-3.png',
            imgSrc2: '/assets/remeras/lisa-2-4.png',
            imgSrc3: '/assets/remeras/lisa-3-1.png',
            imgSrc4: '/assets/remeras/lisa-3-2.png',
            colorElegido: null,
            talleElegido: null,
            sizes: "S a XXL"
          },
          {
            title: 'Campera Rivne Azul',
            tagName: 'lisas4',
            id: "5f8b493372f3e31b18d86202",
            price: 430,
            ammount: 0,
            inCart: false,
            imgSrc: '/assets/remeras/lisa-2-5.png',
            imgSrc2: '/assets/remeras/lisa-2-6.png',
            colorElegido: null,
            talleElegido: null,
            sizes: "S a XXL"
          },
    ])
    return(
        <div className='all-prod-cont'>
                <h1 className='all-prod-title'>Nuestras Remeras</h1>
           
                <div uk-filter="target: .js-filter">

                    <ul className="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center prod-all-grid" uk-grid>
                        {
                            remeras.map(remera => 
                            <li data-gender={remera.gender} className='all-data-li' key={remera.id}>
                                <Link to={`/remeras/${remera.id}`}><img src={remera.imgSrc} alt={remera.title} className='all-prod-img'/></Link>
                                <h3 className='all-prod-title'>{remera.title}</h3>
                                <div className='all-prod-description-cont'>
                                    <p className='all-prod-price'>${remera.price}</p>
                                    <p className='all-prod-description'>{remera.sizes}</p>
                                </div>
                            
                            </li>)
                        }
                    </ul>

                </div>
        </div>
    )
}