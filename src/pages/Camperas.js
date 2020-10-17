import React, {useState} from 'react'
import './styles.css'
import {Link} from 'react-router-dom'

export const Camperas = () => {
    const [camperas, setCamperas] = useState([
        {
            title: 'Campera Rivne Negra',
            tagName: 'rivneNegra',
            id: "5f8b473272f3e31b18d861fb",
            price: 1390,
            ammount: 0,
            inCart: false,
            imgSrc: '/assets/camperas/campera-1-negra.png',
            imgSrc2: '/assets/camperas/campera-1-negra-2.png',
            colorElegido: null,
            talleElegido: null,
            sizes: "S a XXL"
          },
          {
            title: 'Campera Rivne Azul',
            tagName: 'rivneAzul',
            id: "5f8b476772f3e31b18d861fc",
            price: 1390,
            ammount: 0,
            inCart: false,
            imgSrc: '/assets/camperas/campera-2-azul.png',
            imgSrc2: '/assets/camperas/campera-2-azul2.png',
            colorElegido: null,
            talleElegido: null,
            sizes: "S a XXL"
          },
          {
            title: 'Campera Rivne Gris',
            tagName: 'rivneGris',
            id: "5f8b47a772f3e31b18d861fd",
            price: 1390,
            ammount: 0,
            inCart: false,
            imgSrc: '/assets/camperas/campera-1-gris.png',
            colorElegido: null,
            talleElegido: null,
            sizes: "S a XXL"
          },
          {
            title: 'Campera Rivne Tostado',
            tagName: 'rivneTostado',
            id: "5f8b47c772f3e31b18d861fe",
            price: 1390,
            ammount: 0,
            inCart: false,
            imgSrc: '/assets/camperas/campera-3-tostado.png',
            colorElegido: null,
            talleElegido: null,
            sizes: "S a XXL"
          },
    ])
    return(
        <div className='all-prod-cont'>
                <h1 className='all-prod-title'>Nuestras Camperas</h1>
           
                <div uk-filter="target: .js-filter">
                    <ul className="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center prod-all-grid" uk-grid>
                        {
                            camperas.map(campera => 
                            <li data-gender={campera.gender} className='all-data-li' key={campera.id}>
                                <Link to={`/camperas/${campera.id}`}><img src={campera.imgSrc} alt={campera.title} className='all-prod-img'/></Link>
                                <h3 className='all-prod-title'>{campera.title}</h3>
                                <div className='all-prod-description-cont'>
                                    <p className='all-prod-price'>${campera.price}</p>
                                    <p className='all-prod-description'>{campera.sizes}</p>
                                </div>
                            
                            </li>)
                        }
                    </ul>

                </div>
        </div>
    )
}