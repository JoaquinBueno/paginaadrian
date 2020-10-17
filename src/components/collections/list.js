import React from 'react'
import './styles.css'
import {SeeMore} from './seeMore'
import {Link} from 'react-router-dom'

export const ListCollections = ({collectionName, imgSrc}) => {
    return(
        <div className='collection'>
            <Link to={`/${collectionName}`}>
                <img src={imgSrc} alt={collectionName} className='collection-img'/>
            </Link>
            {/* <SeeMore name={collectionName}/> */}
        </div>
    )
}