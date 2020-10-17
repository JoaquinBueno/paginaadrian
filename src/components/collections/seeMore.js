import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'

export const SeeMore = ({name}) => {
    return(
        <div className='see-more-cont'>
            <Link to={`/${name}`} className='see-more-btn'>{name}</Link>
        </div>
    )
}