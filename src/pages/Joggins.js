import React, {useState} from 'react'
import './styles.css'
import {Link} from 'react-router-dom'

export const Joggins = () => {
    const [jeans, setJeans] = useState([
        {
            title: 'Jogging Kiev Gris',
            tagName: 'joggingKievGris',
            id: "5f8a336972f3e31b18d861ee",
            price: 1100,
            ammount: 0,
            inCart: false,
            imgSrc: '/assets/joggings/gris.png',
            imgSrc2: '/assets/joggings/gris.png',
            colorElegido: null,
            talleElegido: null,
            sizes: "S a XXL"
          },
          {
            title: 'Jogging Kiev Negro',
            tagName: 'joggingKievGris',
            id: "5f8a33c072f3e31b18d861ef",
            price: 1100,
            ammount: 0,
            inCart: false,
            imgSrc: '/assets/joggings/negro.png',
            imgSrc2: '/assets/joggings/negro-2.png',
            imgSrc3: '/assets/joggings/negro-3.png',
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