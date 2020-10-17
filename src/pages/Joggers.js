import React, {useState} from 'react'
import './styles.css'
import {Link} from 'react-router-dom'

export const Joggers = () => {
    const [jeans, setJeans] = useState([
        {
            title: 'Jogger Pripiat',
            tagName: 'joggerPripiat',
            id: "5f8a349572f3e31b18d861f0",
            price: 1190,
            ammount: 0,
            inCart: false,
            imgSrc: '/assets/joggers/camel.png',
            imgSrc2: '/assets/joggers/camel2.png',
            imgSrc3: '/assets/joggers/militar.png',
            imgSrc4: '/assets/joggers/militar2.png',
            colorElegido: null,
            talleElegido: null,
            sizes: "S a XXL"
          },
          {
            title: 'Jogger Cargo',
            tagName: 'joggerCargo',
            id: "5f8a34f072f3e31b18d861f1",
            price: 1280,
            ammount: 0,
            inCart: false,
            imgSrc: '/assets/joggers/cargo-camel.png',
            imgSrc2: '/assets/joggers/cargo-camel-2.png',
            imgSrc3: '/assets/joggers/cargo-camel-3.png',
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