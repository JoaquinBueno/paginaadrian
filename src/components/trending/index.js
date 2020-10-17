import React, {useState} from 'react'
import './styles.css'
import {ListTrending} from './list'
export const Trending = () => {
    const [state, setState] = useState([
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
            sizes: "S a XXL",
            link: '/buzos/5f8a370f72f3e31b18d861f4'
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
            sizes: "S a XXL",
            link: '/buzos/5f8b47a772f3e31b18d861fd'
          },
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
            sizes: "S a XXL",
            link: '/buzos/5f8a336972f3e31b18d861ee'
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
            sizes: "S a XXL",
            link: '/buzos/5f8b48c572f3e31b18d86200'
          },
    ])
    return(
        <>
            <div className='trending-title-cont'>
                <h2 className='trending-h2'>Populares de la semana</h2>
            </div>
            <div className='trending-grid-cont'>
                {
                    state.map(trending => <ListTrending {...trending} key={trending.id}/>)
                }
            </div>
        </>
    )
}