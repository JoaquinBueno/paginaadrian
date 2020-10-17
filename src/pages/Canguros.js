import React, {useState} from 'react'
import './styles.css'
import {Link} from 'react-router-dom'

export const Canguros = () => {
    const [jeans, setJeans] = useState([
        {
            title: 'Canguros Korosten Verdes',
            tagName: 'korosten1',
            id: "5f8a381072f3e31b18d861f5",
            price: 1180,
            ammount: 0,
            inCart: false,
            imgSrc: '/assets/canguros/canguro-militar-1.png',
            imgSrc2: '/assets/canguros/canguro-militar-2.png',
            imgSrc3: '/assets/canguros/canguro-vPastel-1.png',
            imgSrc4: '/assets/canguros/canguro-vPastel-2.png',
            colorElegido: null,
            talleElegido: null,
            sizes: "S a XXL"
          },
          {
            title: 'Canguro Korosten Negro',
            tagName: 'korosten2',
            id: "5f8a385072f3e31b18d861f6",
            price: 1180,
            ammount: 0,
            inCart: false,
            imgSrc: '/assets/canguros/canguro-negro-1.png',
            imgSrc2: '/assets/canguros/canguro-negro-2.png',
            imgSrc3: null,
            colorElegido: null,
            talleElegido: null,
            sizes: "S a XXL"
          },
          {
            title: 'Canguro Korosten Rosa',
            tagName: 'korosten3',
            id: "5f8a387372f3e31b18d861f7",
            price: 1180,
            ammount: 0,
            inCart: false,
            imgSrc: '/assets/canguros/canguro-rosa-1.png',
            imgSrc2: '/assets/canguros/canguro-rosa-2.png',
            imgSrc3: null,
            colorElegido: null,
            talleElegido: null,
            sizes: "S a XXL"
          },
          {
            title: 'Poltava Azul | Gris',
            tagName: 'poltava1',
            id: "5f8a38f372f3e31b18d861f8",
            price: 1300,
            ammount: 0,
            inCart: false,
            imgSrc: '/assets/canguros/poltava-azul.png',
            imgSrc2: '/assets/canguros/poltava-azul-2.png',
            imgSrc3: '/assets/canguros/poltava-gris.png',
            imgSrc4: '/assets/canguros/poltava-gris-2.png',
            colorElegido: null,
            talleElegido: null,
            sizes: "S a XXL"
          },
          {
            title: 'Poltava Bordo',
            tagName: 'poltava2',
            id: "5f8a399772f3e31b18d861f9",
            price: 1300,
            ammount: 0,
            inCart: false,
            imgSrc: '/assets/canguros/poltava-bordo.png',
            imgSrc2: '/assets/canguros/poltava-bordo-2.png',
            colorElegido: null,
            talleElegido: null,
            sizes: "S a XXL"
          },
          {
            title: 'Poltava Rojo',
            tagName: 'poltava3',
            id: "5f8a39cf72f3e31b18d861fa",
            price: 1300,
            ammount: 0,
            inCart: false,
            imgSrc: '/assets/canguros/poltava-rojo.png',
            imgSrc2: '/assets/canguros/poltava-rojo-2.png',
            colorElegido: null,
            talleElegido: null,
            sizes: "S a XXL"
          },
    ])
    return(
        <div className='all-prod-cont'>
                <h1 className='all-prod-title'>Nuestros Jeans</h1>
           
                <div uk-filter="target: .js-filter">
                    <ul className="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center prod-all-grid" uk-grid>
                        {
                            jeans.map(jean => 
                            <li data-gender={jean.gender} className='all-data-li' key={jean.id}>
                                <Link to={`/jeans/${jean.id}`}><img src={jean.imgSrc} alt={jean.title} className='all-prod-img'/></Link>
                                <h3 className='all-prod-title'>{jean.title}</h3>
                                <div className='all-prod-description-cont'>
                                    <p className='all-prod-price'>${jean.price}</p>
                                    <p className='all-prod-description'>{jean.sizes}</p>
                                </div>
                            
                            </li>)
                        }
                    </ul>

                </div>
        </div>
    )
}