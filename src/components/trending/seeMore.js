import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'

export const SeeMoreTrending = ({link}) => {
    return (
        <div className='see-more-trending-cont'>
            <Link to={`${link}`} className='see-more-trending'>
                Ver Mas
            </Link>
        </div>
    )
}