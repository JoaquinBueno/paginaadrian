import React from 'react'
import './styles.css'
import {SeeMoreTrending} from './seeMore'

export const ListTrending = ({imgSrc, link}) => {
    return(
            <div className='trending'>
                <img src={imgSrc} alt='Buzo popular' className='trending-img'/>
                <SeeMoreTrending link={link}/>
            </div>
    )
}