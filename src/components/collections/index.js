import React, {useState} from 'react'
import './styles.css'
import {ListCollections} from './list'


export const Collections = () => {
    const [state, setState] = useState([
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
    ])
    return(
        <>
            <div className='collection-cont'>
                <h2 className='collection-title'>Nuestras Colecciones</h2>
                <ul className='collection-flex'>
                    {
                        state.map(colection => <li className='collection-li' key={colection.id}><ListCollections 
                        {...colection}
                        /></li>)
                    }
                </ul>
            </div>
        </>
    )
}